var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Events = (function () {
    function Events() {
        this.playerConnected = new Event(Events.PLAYER_CONNECTED);
        this.equipReceived = new Event(Events.EQUIP_RECEIVED);
        this.playerHitStart = new Event(Events.PLAYER_HIT_START);
    }
    Events.PLAYER_CONNECTED = 'playerConnected';
    Events.EQUIP_RECEIVED = 'equipReceived';
    Events.PLAYER_HIT_START = 'playerHitStart';
    return Events;
}());
/// <reference path="../game.ts"/>
var Controller = (function () {
    function Controller(game) {
        this.game = game;
    }
    return Controller;
}());
/// <reference path="Controller.ts"/>
var Keyboard = (function (_super) {
    __extends(Keyboard, _super);
    function Keyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keyboard.prototype.handleKeyUp = function (evt) {
        if (evt.keyCode == 65) {
            this.left = true;
        }
        if (evt.keyCode == 68) {
            this.right = true;
        }
        if (evt.keyCode == 87) {
            this.forward = true;
        }
        if (evt.keyCode == 83) {
            this.back = true;
        }
        if (evt.keyCode == 32) {
            this.game.player.runAnimationHit();
        }
    };
    Keyboard.prototype.handleKeyDown = function (evt) {
        if (evt.keyCode == 65) {
            this.left = false;
        }
        if (evt.keyCode == 68) {
            this.right = false;
        }
        if (evt.keyCode == 87) {
            this.forward = false;
        }
        if (evt.keyCode == 83) {
            this.back = false;
        }
    };
    Keyboard.prototype.registerControls = function (scene) {
        var self = this;
        window.addEventListener("keydown", function (event) {
            self.game.controller.handleKeyUp(event);
        });
        window.addEventListener("keyup", function (event) {
            self.game.controller.handleKeyDown(event);
        });
    };
    return Keyboard;
}(Controller));
/// <reference path="../game.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="../../bower_components/babylonjs/dist/gui/babylon.gui.d.ts"/>
var Camera = BABYLON.Camera;
var Scene = (function () {
    function Scene() {
    }
    Scene.prototype.setDefaults = function (game) {
        this.game = game;
        return this;
    };
    Scene.prototype.setCamera = function (scene) {
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
        camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
        camera.orthoTop = 18;
        camera.orthoBottom = 0;
        camera.orthoLeft = -15;
        camera.orthoRight = 15;
        camera.maxZ = 20;
        camera.minZ = -70;
        this.setOrthoCameraHeights(camera);
        scene.activeCamera = camera;
        return this;
    };
    Scene.prototype.setOrthoCameraHeights = function (camera) {
        var ratio = window.innerWidth / window.innerHeight;
        var zoom = camera.orthoTop;
        var newWidth = zoom * ratio;
        camera.orthoLeft = -Math.abs(newWidth);
        camera.orthoRight = newWidth;
        camera.orthoBottom = -Math.abs(zoom);
        camera.rotation = new BABYLON.Vector3(0.751115, 0, 0);
        return camera;
    };
    Scene.prototype.optimizeScene = function (scene) {
        scene.collisionsEnabled = false;
        scene.fogEnabled = false;
        scene.lensFlaresEnabled = false;
        scene.probesEnabled = false;
        scene.postProcessesEnabled = false;
        scene.spritesEnabled = false;
        return this;
    };
    Scene.prototype.initFactories = function (scene, assetsManager) {
        this.game.factories['character'] = new Factories.Characters(this.game, scene, assetsManager).initFactory();
        this.game.factories['worm'] = new Factories.Worms(this.game, scene, assetsManager).initFactory();
        return this;
    };
    Scene.prototype.changeScene = function (newScene) {
        var sceneToDispose = this.game.getScene();
        setTimeout(function () {
            sceneToDispose.dispose();
        });
        this.game.activeScene = null;
        this.game.controller.forward = false;
        newScene.initScene(this.game);
    };
    Scene.TYPE = 0;
    return Scene;
}());
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Simple.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);
            //scene.debugLayer.show({
            //    initialTab: 2
            //});
            scene.actionManager = new BABYLON.ActionManager(scene);
            var assetsManager = new BABYLON.AssetsManager(scene);
            var sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: Simple.TYPE
                    });
                };
                assetsManager.load();
                var listener = function listener() {
                    game.controller.registerControls(scene);
                    var npc = new NPC.Warrior(game);
                    game.client.socket.emit('changeScenePost', {
                        sceneType: Simple.TYPE
                    });
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });
        });
    };
    Simple.prototype.getType = function () {
        return Simple.TYPE;
    };
    Simple.TYPE = 2;
    return Simple;
}(Scene));
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var AbstractCharacter = (function () {
    function AbstractCharacter(name, game) {
        this.name = name;
        this.game = game;
        this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
    }
    AbstractCharacter.prototype.mount = function (mesh, boneName) {
        var boneIndice = -1;
        var meshCharacter = this.mesh;
        var skeleton = meshCharacter.skeleton;
        for (var i = 0; i < skeleton.bones.length; i++) {
            if (skeleton.bones[i].name == boneName) {
                boneIndice = i;
                break;
            }
        }
        var bone = skeleton.bones[boneIndice];
        mesh.attachToBone(bone, meshCharacter);
        mesh.position = new BABYLON.Vector3(0, 0, 0);
        bone.getRotationToRef(BABYLON.Space.WORLD, meshCharacter, mesh.rotation);
        mesh.rotation = mesh.rotation.negate();
        mesh.rotation.z = -mesh.rotation.z;
    };
    ;
    /**
     * ANIMATIONS
     */
    AbstractCharacter.prototype.runAnimationHit = function (animation) {
        if (!this.animation) {
            var self_1 = this;
            var childMesh = this.mesh;
            if (childMesh) {
                var skeleton_1 = childMesh.skeleton;
                if (skeleton_1) {
                    this.game.client.socket.emit('attack', {
                        attack: true
                    });
                    self_1.attackAnimation = true;
                    self_1.onHitStart();
                    self_1.animation = skeleton_1.beginAnimation(animation, false, this.statistics.getAttackSpeed() / 100, function () {
                        skeleton_1.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                        self_1.animation = null;
                        self_1.attackAnimation = false;
                        self_1.onHitEnd();
                        self_1.game.client.socket.emit('attack', {
                            attack: false
                        });
                    });
                }
            }
        }
    };
    AbstractCharacter.prototype.emitPosition = function () {
        var rotation;
        if (this.game.client.socket) {
            if (this.mesh.rotationQuaternion) {
                rotation = this.mesh.rotationQuaternion;
            }
            else {
                rotation = new BABYLON.Quaternion(0, 0, 0, 0);
            }
            this.game.client.socket.emit('moveTo', {
                p: this.mesh.position,
                r: rotation
            });
        }
    };
    AbstractCharacter.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var childMesh = this.mesh;
        var loopAnimation = this.isControllable;
        if (childMesh) {
            var skeleton_2 = childMesh.skeleton;
            if (emit) {
                this.emitPosition();
            }
            if (!this.animation) {
                self.sfxWalk.play();
                self.onWalkStart();
                self.animation = skeleton_2.beginAnimation(AbstractCharacter.ANIMATION_WALK, loopAnimation, this.statistics.getWalkSpeed() / 100, function () {
                    skeleton_2.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                    self.sfxWalk.stop();
                    self.onWalkEnd();
                });
            }
        }
    };
    AbstractCharacter.prototype.isAnimationEnabled = function () {
        return this.animation;
    };
    /** Events */
    AbstractCharacter.prototype.onHitStart = function () { };
    ;
    AbstractCharacter.prototype.onHitEnd = function () { };
    ;
    AbstractCharacter.prototype.onWalkStart = function () { };
    ;
    AbstractCharacter.prototype.onWalkEnd = function () { };
    ;
    AbstractCharacter.WALK_SPEED = 0.25;
    AbstractCharacter.ROTATION_SPEED = 0.05;
    AbstractCharacter.ANIMATION_WALK = 'Run';
    AbstractCharacter.ANIMATION_STAND = 'stand';
    AbstractCharacter.ANIMATION_STAND_WEAPON = 'Stand_with_weapon';
    AbstractCharacter.ANIMATION_ATTACK = 'Attack';
    AbstractCharacter.ANIMATION_SKILL_01 = 'Skill01';
    return AbstractCharacter;
}());
/// <reference path="../AbstractCharacter.ts"/>
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(name, game) {
        var _this = this;
        var attackArea = BABYLON.MeshBuilder.CreateBox('enemy_attackArea', {
            width: _this.attackAreaSize,
            height: 0.1,
            size: _this.attackAreaSize
        }, game.getScene());
        attackArea.parent = _this.mesh;
        attackArea.visibility = 0;
        _this.attackArea = attackArea;
        var visivilityArea = BABYLON.MeshBuilder.CreateBox('enemy_visivilityArea', {
            width: _this.visibilityAreaSize,
            height: 0.1,
            size: _this.visibilityAreaSize
        }, game.getScene());
        visivilityArea.parent = _this.mesh;
        visivilityArea.visibility = 0;
        visivilityArea.isPickable = false;
        _this.visibilityArea = visivilityArea;
        game.enemies[_this.id] = _this;
        _this.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND, true);
        _this.mesh.isPickable = false;
        _this.bloodParticles = new Particles.Blood(game, _this.mesh).particleSystem;
        _this = _super.call(this, name, game) || this;
        _this.registerActions();
        return _this;
    }
    Monster.prototype.emitPosition = function () {
        if (this.game.client.socket) {
            this.game.client.socket.emit('updateEnemy', {
                sceneType: this.game.sceneManager.getType(),
                enemyKey: this.id,
                position: this.mesh.position,
                rotation: this.mesh.rotationQuaternion,
                target: this.target
            });
        }
    };
    Monster.prototype.removeFromWorld = function () {
        var self = this;
        self.mesh.dispose();
    };
    Monster.prototype.registerActions = function () {
        var self = this;
        var monsterAttackIsActive = false;
        var walkSpeed = AbstractCharacter.WALK_SPEED * (self.statistics.getWalkSpeed() / 100);
        var playerMesh = this.game.player.mesh;
        this.visibilityArea.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.attackArea.actionManager = new BABYLON.ActionManager(this.game.getScene());
        this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
        ///on visibility collision enter
        this.visibilityArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: playerMesh
        }, function () {
            self.target = self.game.player.id;
        }));
        ///on visibility collision exit
        this.visibilityArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: playerMesh
        }, function () {
            self.target = null;
        }));
        ///on attack collision enter
        this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: playerMesh
        }, function () {
            monsterAttackIsActive = true;
        }));
        ///on attack collision exit
        this.attackArea.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: playerMesh
        }, function () {
            monsterAttackIsActive = false;
        }));
        this.game.getScene().registerBeforeRender(function () {
            if (self.game.controller.attackPoint && self.game.controller.attackPoint == self.attackArea) {
                self.game.player.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                self.game.controller.forward = false;
            }
            if (self.target) {
                self.mesh.lookAt(playerMesh.position);
                if (monsterAttackIsActive) {
                    self.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                    return;
                }
                self.mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                self.runAnimationWalk(true);
            }
        });
    };
    Monster.prototype.onHitEnd = function () {
        if (Game.randomNumber(1, 100) <= this.statistics.getHitChance()) {
            var guiHp = this.game.gui.playerBottomPanel.hpBar;
            var value = guiHp.value;
            guiHp.value = (value - this.statistics.getDamage());
            if (guiHp.value - this.statistics.getDamage() < 0) {
                this.game.getScene().stopAnimation(this.game.player.mesh.skeleton);
                this.game.player.mesh.skeleton.beginAnimation('death');
            }
        }
    };
    return Monster;
}(AbstractCharacter));
/// <reference path="game.ts"/>
/// <reference path="characters/monsters/monster.ts"/>
var SocketIOClient = (function () {
    function SocketIOClient(game) {
        this.characters = [];
        this.lastRecivedEquip = [];
        this.game = game;
    }
    SocketIOClient.prototype.connect = function (socketUrl) {
        this.socket = io.connect(socketUrl);
        this.playerConnected();
        this.showEnemies();
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.playerConnected = function () {
        var self = this;
        var game = this.game;
        var playerName = Game.randomNumber(1, 100);
        this.socket.on('clientConnected', function (data) {
            game.remotePlayers = [];
            self.characters = data.characters;
            self.socket.emit('createPlayer', playerName);
            self.updatePlayers().removePlayer().connectPlayer().refreshPlayer().getCharacterEquip();
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.getCharacterEquip = function () {
        var self = this;
        this.socket.on('getEquip', function (items) {
            self.lastRecivedEquip = items;
            document.dispatchEvent(self.game.events.equipReceived);
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.refreshPlayer = function () {
        var game = this.game;
        var playerName = Game.randomNumber(1, 100);
        this.socket.on('showPlayer', function (data) {
            game.player = new Player(game, data.id, playerName, true);
            var activeCharacter = data.characters[data.activePlayer];
            game.player.mesh.position = new BABYLON.Vector3(activeCharacter.positionX, activeCharacter.positionY, activeCharacter.positionZ);
            game.player.refreshCameraPosition();
            document.dispatchEvent(game.events.playerConnected);
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.showEnemies = function () {
        var game = this.game;
        this.socket.on('showEnemies', function (data) {
            data.forEach(function (enemyData, key) {
                var position = new BABYLON.Vector3(enemyData.position.x, enemyData.position.y, enemyData.position.z);
                var rotationQuaternion = new BABYLON.Quaternion(enemyData.rotation.x, enemyData.rotation.y, enemyData.rotation.z, enemyData.rotation.w);
                var enemy = game.enemies[data.id];
                if (enemy) {
                    enemy.target = enemyData.target;
                    enemy.mesh.position = position;
                    enemy.mesh.rotationQuaternion = rotationQuaternion;
                    enemy.runAnimationWalk(false);
                }
                else {
                    if (enemyData.type == 'worm') {
                        new Worm(key, data.id, game, position, rotationQuaternion);
                    }
                    else if (enemyData.type == 'bigWorm') {
                        new BigWorm(key, data.id, game, position, rotationQuaternion);
                    }
                    else if (enemyData.type == 'bandit') {
                        new Bandit.Bandit(key, game, position, rotationQuaternion);
                    }
                }
            });
        });
        return this;
    };
    SocketIOClient.prototype.connectPlayer = function () {
        var game = this.game;
        this.socket.on('newPlayerConnected', function (data) {
            if (game.player) {
                data.forEach(function (socketRemotePlayer) {
                    var remotePlayerKey = null;
                    if (socketRemotePlayer.id !== game.player.id) {
                        game.remotePlayers.forEach(function (remotePlayer, key) {
                            if (remotePlayer.id == socketRemotePlayer.id) {
                                remotePlayerKey = key;
                                return;
                            }
                        });
                        if (remotePlayerKey === null) {
                            var player = new Player(game, socketRemotePlayer.id, socketRemotePlayer.name, false);
                            game.remotePlayers.push(player);
                        }
                    }
                });
            }
        });
        return this;
    };
    /**
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.updatePlayers = function () {
        var game = this.game;
        this.socket.on('updatePlayer', function (updatedPlayer) {
            var remotePlayerKey = null;
            game.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == updatedPlayer.id) {
                    remotePlayerKey = key;
                    return;
                }
            });
            if (remotePlayerKey != null) {
                var player = game.remotePlayers[remotePlayerKey];
                if (!player.isAnimationEnabled() && !updatedPlayer.attack) {
                    player.runAnimationWalk(false);
                }
                else if (updatedPlayer.attack == true) {
                    player.runAnimationHit(AbstractCharacter.ANIMATION_ATTACK);
                }
                player.mesh.position = new BABYLON.Vector3(updatedPlayer.p.x, updatedPlayer.p.y, updatedPlayer.p.z);
                player.mesh.rotationQuaternion = new BABYLON.Quaternion(updatedPlayer.r.x, updatedPlayer.r.y, updatedPlayer.r.z, updatedPlayer.r.w);
            }
        });
        return this;
    };
    /**
     *
     * @returns {SocketIOClient}
     */
    SocketIOClient.prototype.removePlayer = function () {
        var app = this.game;
        this.socket.on('removePlayer', function (id) {
            app.remotePlayers.forEach(function (remotePlayer, key) {
                if (remotePlayer.id == id) {
                    var player = app.remotePlayers[key];
                    player.removeFromWorld();
                    app.remotePlayers.splice(key, 1);
                }
            });
        });
        return this;
    };
    return SocketIOClient;
}());
/// <reference path="../bower_components/babylonjs/dist/babylon.d.ts"/>
/// <reference path="controllers/Keyboard.ts"/>
/// <reference path="scenes/Simple.ts"/>
/// <reference path="socketIOClient.ts"/>
var Game = (function () {
    function Game(canvasElement) {
        var serverUrl = window.location.hostname + ':' + gameServerPort;
        this.canvas = canvasElement;
        this.engine = new BABYLON.Engine(this.canvas, false);
        this.controller = new Mouse(this);
        this.client = new SocketIOClient(this);
        this.client.connect(serverUrl);
        this.factories = [];
        this.enemies = [];
        this.scenes = [];
        this.activeScene = null;
        this.events = new Events();
        this.createScene().animate();
    }
    Game.prototype.getScene = function () {
        return this.scenes[this.activeScene];
    };
    Game.prototype.createScene = function () {
        new SelectCharacter().initScene(this);
        return this;
    };
    Game.prototype.animate = function () {
        var _this = this;
        var self = this;
        this.engine.runRenderLoop(function () {
            if (_this.activeScene != null) {
                self.getScene().render();
            }
        });
        window.addEventListener('resize', function () {
            self.engine.resize();
            if (self.getScene()) {
                self.sceneManager.setOrthoCameraHeights(self.getScene().activeCamera);
            }
        });
        return this;
    };
    Game.randomNumber = function (minimum, maximum) {
        return Math.round(Math.random() * (maximum - minimum) + minimum);
    };
    return Game;
}());
var Character;
(function (Character) {
    var Inventory = (function () {
        function Inventory(game, player) {
            this.game = game;
            this.player = player;
            this.items = [];
        }
        Inventory.prototype.initPlayerItems = function () {
            var sword = new Items.Weapons.Sword(this.game);
            var shield = new Items.Shields.WoodShield(this.game);
            var armor = new Items.Armors.PrimaryArmor(this.game);
            var helm = new Items.Helms.PrimaryHelm(this.game);
            var gloves = new Items.Gloves.PrimaryGloves(this.game);
            var boots = new Items.Boots.PrimaryBoots(this.game);
            this.items.push(sword);
            this.items.push(shield);
            this.items.push(armor);
            this.items.push(helm);
            this.items.push(gloves);
            this.items.push(boots);
            this.mount(sword);
            this.mount(shield);
            this.mount(armor);
            this.mount(helm);
            this.mount(gloves);
            this.mount(boots);
            this.weapon = sword;
            this.shield = shield;
            this.armor = armor;
            this.helm = helm;
            this.gloves = gloves;
            this.boots = boots;
            var sword1 = new Items.Weapons.Sword(this.game);
            this.items.push(sword1);
            var axe2 = new Items.Weapons.Axe(this.game);
            this.items.push(axe2);
            var axe3 = new Items.Weapons.Axe(this.game);
            this.items.push(axe3);
            var sword4 = new Items.Weapons.Sword(this.game);
            this.items.push(sword4);
            var robe = new Items.Armors.Robe(this.game);
            this.items.push(robe);
        };
        /**
         * @param item
         */
        Inventory.prototype.removeItem = function (item) {
            if (item) {
                item.mesh.visibility = 0;
            }
        };
        /**
         * @param item
         * @param setItem
         */
        Inventory.prototype.equip = function (item, setItem) {
            switch (item.getType()) {
                case Items.Weapon.TYPE:
                    this.removeItem(this.weapon);
                    this.weapon = null;
                    if (setItem) {
                        this.weapon = item;
                    }
                    break;
                case Items.Shield.TYPE:
                    this.removeItem(this.shield);
                    this.shield = null;
                    if (setItem) {
                        this.shield = item;
                    }
                    break;
                case Items.Helm.TYPE:
                    this.removeItem(this.helm);
                    this.helm = null;
                    if (setItem) {
                        this.helm = item;
                    }
                    break;
                case Items.Gloves.TYPE:
                    this.removeItem(this.gloves);
                    this.gloves = null;
                    if (setItem) {
                        this.gloves = item;
                    }
                    break;
                case Items.Boots.TYPE:
                    this.removeItem(this.boots);
                    this.boots = null;
                    if (setItem) {
                        this.boots = item;
                    }
                    break;
                case Items.Armor.TYPE:
                    this.removeItem(this.armor);
                    this.armor = null;
                    if (setItem) {
                        this.armor = item;
                    }
                    break;
            }
            if (setItem) {
                item.mesh.visibility = 1;
            }
        };
        /**
         * Value 1 define mounting item usign bone, value 2 define mounting using skeleton.
         * @param item
         * @returns {AbstractCharacter.Inventory}
         */
        Inventory.prototype.mount = function (item) {
            item.mesh.parent = this.player.mesh;
            item.mesh.skeleton = this.player.mesh.skeleton;
            this.equip(item, true);
            return this;
        };
        Inventory.prototype.umount = function (item) {
            this.equip(item, false);
            return this;
        };
        /**
         * @returns {Array}
         */
        Inventory.prototype.getEquipedItems = function () {
            var equipedItems = [];
            equipedItems.push(this.helm);
            equipedItems.push(this.armor);
            equipedItems.push(this.weapon);
            equipedItems.push(this.shield);
            equipedItems.push(this.gloves);
            equipedItems.push(this.boots);
            return equipedItems;
        };
        return Inventory;
    }());
    Character.Inventory = Inventory;
})(Character || (Character = {}));
/// <reference path="AbstractCharacter.ts"/>
/// <reference path="../game.ts"/>
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(game, id, name, registerMoving) {
        var _this = this;
        _this.id = id;
        _this.name = name;
        _this.statistics = new Attributes.CharacterStatistics(100, 100, 100, 15, 10, 125, 50, 100).setPlayer(_this);
        _this.isControllable = registerMoving;
        _this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/assets/Characters/Warrior/walk.wav", game.getScene(), null, {
            loop: true,
            autoplay: false
        });
        _this.sfxHit = new BABYLON.Sound("CharacterHit", "/assets/Characters/Warrior/walk.wav", game.getScene(), null, {
            loop: false,
            autoplay: false
        });
        var mesh = game.factories['character'].createInstance('Warrior', true);
        mesh.position = new BABYLON.Vector3(1, 0.1, 11);
        mesh.rotation = new BABYLON.Vector3(0, 0.1, 0);
        game.getScene().activeCamera.position = mesh.position;
        mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
        _this.mesh = mesh;
        _this.game = game;
        _this.bloodParticles = new Particles.Blood(game, _this.mesh).particleSystem;
        mesh.actionManager = new BABYLON.ActionManager(game.getScene());
        _this.createItems();
        if (_this.isControllable) {
            _this.mesh.isPickable = false;
            //let playerLight = new BABYLON.PointLight("playerLightSpot", new BABYLON.Vector3(0, 5, 0), game.getScene());
            var playerLight = new BABYLON.SpotLight("playerLightSpot", new BABYLON.Vector3(0, 50, 0), new BABYLON.Vector3(0, -1, 0), null, null, game.getScene());
            playerLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            playerLight.angle = 0.7;
            playerLight.exponent = 50;
            playerLight.intensity = 0.8;
            playerLight.parent = _this.mesh;
            _this.playerLight = playerLight;
            //
            //var playerLightPoint = new BABYLON.PointLight("pointLighPLayer",
            //    new BABYLON.Vector3(0, 1, 0),
            //    game.getScene());
            //playerLightPoint.diffuse = new BABYLON.Color4(1, 0.7, 0.3, 1);
            //playerLightPoint.intensity = 0.3;
            //playerLightPoint.parent = this.mesh;
            //
            //this.playerLight = playerLightPoint;
            //game.getScene().lights.push(playerLight);
            game.gui = new GUI.Main(game, _this);
            var attackArea = BABYLON.MeshBuilder.CreateBox('player_attackArea', {
                width: 4,
                height: 0.1,
                size: 4
            }, game.getScene());
            attackArea.parent = _this.mesh;
            attackArea.visibility = 0;
            attackArea.isPickable = false;
            _this.attackArea = attackArea;
        }
        _this.walkSmoke = new Particles.WalkSmoke(game, _this.mesh).particleSystem;
        _this = _super.call(this, name, game) || this;
        _this.registerFunctionAfterRender();
        return _this;
    }
    /**
     * Moving events
     */
    Player.prototype.registerMoving = function () {
        var walkSpeed = AbstractCharacter.WALK_SPEED * (this.statistics.getWalkSpeed() / 100);
        var game = this.game;
        var mesh = this.mesh;
        if (!this.attackAnimation) {
            if (game.controller.left) {
                mesh.rotate(BABYLON.Axis.Y, -AbstractCharacter.ROTATION_SPEED, BABYLON.Space.LOCAL);
                this.emitPosition();
            }
            if (game.controller.right) {
                mesh.rotate(BABYLON.Axis.Y, AbstractCharacter.ROTATION_SPEED, BABYLON.Space.LOCAL);
                this.emitPosition();
            }
            if (game.controller.forward) {
                mesh.translate(BABYLON.Axis.Z, -walkSpeed, BABYLON.Space.LOCAL);
                this.runAnimationWalk(true);
                return;
            }
            if (game.controller.back) {
                mesh.translate(BABYLON.Axis.Z, walkSpeed, BABYLON.Space.LOCAL);
                this.runAnimationWalk(true);
                return;
            }
            ///stop move and start attack animation
            if (this.animation && !this.attackAnimation) {
                this.animation.stop();
            }
        }
    };
    /**
     * Attack Collisions
     *
     * @returns {Player}
     */
    Player.prototype.weaponCollisions = function () {
        var game = this.game;
        var self = this;
        if (this.attackArea && this.attackAnimation && !this.attackHit) {
            this.attackHit = true;
            var _loop_1 = function () {
                enemy = game.enemies[i];
                var enemyMesh = enemy.mesh;
                if (this_1.attackArea.intersectsMesh(enemy.attackArea, false)) {
                    var animationEnemty_1 = enemy;
                    setTimeout(function () {
                        if (animationEnemty_1.statistics.getHp() > 0) {
                            if (!animationEnemty_1.sfxHit.isPlaying) {
                                animationEnemty_1.sfxHit.play();
                            }
                            this.game.gui.characterTopHp.showHpCharacter(animationEnemty_1);
                            animationEnemty_1.bloodParticles.start();
                            var newValue = animationEnemty_1.statistics.getHp() - self.statistics.getDamage();
                            animationEnemty_1.statistics.hp = (newValue);
                            this.game.gui.characterTopHp.hpBar.value = newValue;
                            if (newValue <= 0) {
                                animationEnemty_1.removeFromWorld();
                                game.controller.attackPoint = null;
                            }
                        }
                    }, 300);
                }
            };
            var this_1 = this, enemy;
            for (var i = 0; i < game.enemies.length; i++) {
                _loop_1();
            }
        }
        return this;
    };
    Player.prototype.removeFromWorld = function () {
        this.mesh.dispose();
        //this.items.weapon.mesh.dispose();
        //this.items.shield.mesh.dispose();
    };
    Player.prototype.registerFunctionAfterRender = function () {
        var self = this;
        this.game.getScene().actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (event) {
            if (event.sourceEvent.key == 1) {
                self.game.controller.attackPoint = null;
                self.runAnimationHit(AbstractCharacter.ANIMATION_SKILL_01);
            }
        }));
        if (self.isControllable) {
            this.game.getScene().registerAfterRender(function () {
                self.weaponCollisions();
                self.registerMoving();
                if (self.game.controller.forward && self.game.getScene()) {
                    self.refreshCameraPosition();
                }
            });
        }
    };
    Player.prototype.refreshCameraPosition = function () {
        this.game.getScene().activeCamera.position = this.mesh.position;
    };
    Player.prototype.createItems = function () {
        this.inventory = new Character.Inventory(this.game, this);
        this.inventory.initPlayerItems();
    };
    Player.prototype.onHitStart = function () {
        //this.items.weapon.sfxHit.play(0.3);
    };
    ;
    Player.prototype.onHitEnd = function () {
        this.attackHit = false;
    };
    ;
    Player.prototype.onWalkStart = function () {
        this.walkSmoke.start();
    };
    Player.prototype.onWalkEnd = function () {
        this.walkSmoke.stop();
    };
    return Player;
}(AbstractCharacter));
/// <reference path="Controller.ts"/>
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.registerControls = function (scene) {
        var self = this;
        var clickTrigger = false;
        var ball = BABYLON.Mesh.CreateBox("sphere", 0.4, scene);
        ball.actionManager = new BABYLON.ActionManager(scene);
        ball.isPickable = false;
        ball.visibility = 0;
        this.ball = ball;
        ball.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: self.game.player.mesh
        }, function () {
            if (!clickTrigger) {
                self.game.controller.forward = false;
                self.targetPoint = null;
                self.ball.visibility = 0;
            }
        }));
        ball.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: self.game.player.mesh
        }, function () {
            if (!clickTrigger) {
                self.game.controller.forward = false;
                self.targetPoint = null;
                self.ball.visibility = 0;
            }
        }));
        scene.onPointerUp = function (evt, pickResult) {
            clickTrigger = false;
        };
        scene.onPointerDown = function (evt, pickResult) {
            var pickedMesh = pickResult.pickedMesh;
            clickTrigger = true;
            if (pickedMesh) {
                if (self.game.player && pickedMesh.name == 'Forest_ground') {
                    self.attackPoint = null;
                    self.targetPoint = pickResult.pickedPoint;
                    self.targetPoint.y = 0;
                    self.ball.position = self.targetPoint;
                    self.ball.visibility = 1;
                    self.game.player.mesh.lookAt(self.ball.position);
                    self.game.player.emitPosition();
                    self.game.controller.forward = true;
                }
                if (self.game.player && pickedMesh.name.search('enemy_attackArea') >= 0) {
                    self.attackPoint = pickedMesh;
                    self.game.player.mesh.lookAt(pickResult.pickedPoint);
                    self.targetPoint = null;
                    self.ball.visibility = 0;
                    self.game.controller.forward = true;
                }
            }
        };
        scene.onPointerMove = function (evt, pickResult) {
            if (clickTrigger) {
                var pickedMesh = pickResult.pickedMesh;
                if (pickedMesh && self.targetPoint) {
                    if (self.game.player) {
                        self.targetPoint = pickResult.pickedPoint;
                        self.targetPoint.y = 0;
                        self.ball.position = self.targetPoint;
                        self.game.player.mesh.lookAt(self.ball.position);
                    }
                }
            }
        };
    };
    return Mouse;
}(Controller));
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var AbstractFactory = (function () {
        function AbstractFactory(game, scene, assetsManager) {
            //let characterFactory = new Warrior.MeshFactory(scene, '/babel/Characters/Warrior');
            //game.characters['player'] = characterFactory;
            this.game = game;
            this.scene = scene;
            this.assetsManager = assetsManager;
            var self = this;
        }
        AbstractFactory.prototype.initFactory = function () {
            var self = this;
            var meshTask = this.assetsManager.addMeshTask(this.taskName, null, this.dir, this.fileName);
            meshTask.onSuccess = function (task) {
                self.loadedMeshes = task.loadedMeshes;
                for (var i = 0; i < self.loadedMeshes.length; i++) {
                    var loadedMesh = self.loadedMeshes[i];
                    loadedMesh.visibility = 0;
                }
            };
            return this;
        };
        AbstractFactory.prototype.createInstance = function (name, cloneSkeleton) {
            if (cloneSkeleton === void 0) { cloneSkeleton = false; }
            for (var i = 0; i < this.loadedMeshes.length; i++) {
                var mesh = this.loadedMeshes[i];
                if (mesh.name == name) {
                    var clonedMesh = mesh.clone('clone_' + name);
                    if (cloneSkeleton) {
                        clonedMesh.skeleton = mesh.skeleton.clone('clone_skeleton_' + name);
                    }
                    clonedMesh.visibility = 1;
                    return clonedMesh;
                }
            }
        };
        return AbstractFactory;
    }());
    Factories.AbstractFactory = AbstractFactory;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Worms = (function (_super) {
        __extends(Worms, _super);
        function Worms(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'factory.worm';
            _this.dir = 'assets/Characters/Worm/';
            _this.fileName = 'worm.babylon';
            return _this;
        }
        return Worms;
    }(Factories.AbstractFactory));
    Factories.Worms = Worms;
})(Factories || (Factories = {}));
/// <reference path="AbstractFactory.ts"/>
/// <reference path="../game.ts"/>
var Factories;
(function (Factories) {
    var Characters = (function (_super) {
        __extends(Characters, _super);
        function Characters(game, scene, assetsManager) {
            var _this = _super.call(this, game, scene, assetsManager) || this;
            _this.taskName = 'factory.warrior';
            _this.dir = 'assets/Characters/Warrior/';
            _this.fileName = 'Warrior.babylon';
            return _this;
        }
        return Characters;
    }(Factories.AbstractFactory));
    Factories.Characters = Characters;
})(Factories || (Factories = {}));
/// <reference path="../game.ts"/>
var Environment = (function () {
    function Environment(game, scene) {
        var self = this;
        this.trees = [];
        this.bushes = [];
        this.colliders = [];
        //let light = this.enableDayAndNight(game, game.getScene().lights[0]);
        var light = game.getScene().lights[0];
        light.intensity = 0;
        //let shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        //this.shadowGenerator = shadowGenerator;
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                this.ground = sceneMesh;
                //sceneMesh.receiveShadows = true;
            }
            else if (meshName.search("Spruce") >= 0) {
                sceneMesh.isPickable = false;
                this.trees.push(sceneMesh);
                this.colliders.push(sceneMesh);
            }
            else if (meshName.search("Fance") >= 0) {
                this.colliders.push(sceneMesh);
            }
            //shadowGenerator.getShadowMap().renderList.push(sceneMesh);
        }
        for (var i = 0; i < this.trees.length; i++) {
            var meshTree = this.trees[i];
            var minimum = meshTree.getBoundingInfo().boundingBox.minimum.clone();
            var maximum = meshTree.getBoundingInfo().boundingBox.maximum.clone();
            var scaling = BABYLON.Matrix.Scaling(0.5, 0.5, 0.5);
            minimum = BABYLON.Vector3.TransformCoordinates(minimum, scaling);
            maximum = BABYLON.Vector3.TransformCoordinates(maximum, scaling);
            meshTree._boundingInfo = new BABYLON.BoundingInfo(minimum, maximum);
            meshTree.computeWorldMatrix(true);
        }
        var cone = scene.getMeshByName("Fireplace");
        if (cone) {
            var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 3, 0), scene);
            fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
            fireplaceLight.parent = cone;
            fireplaceLight.range = 140;
            var smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();
            var fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();
            var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }
        var plane = scene.getMeshByName("Entrace_city");
        if (plane) {
            this.entrace = plane;
            plane.visibility = 0;
            plane.isPickable = false;
            var smokeSystem = new Particles.Entrace(game, plane).particleSystem;
            smokeSystem.start();
            var listener = function listener() {
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
                    trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
                    parameter: plane
                }, function () {
                    game.scenesDisposed.push(game.getScene());
                    game.activeScene = null;
                    game.controller.forward = false;
                    new SimpleBandit().initScene(game);
                    return this;
                }));
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
        }
        var listener2 = function listener2() {
            for (var i_1 = 0; i_1 < self.colliders.length; i_1++) {
                var sceneMesh_1 = self.colliders[i_1];
                game.player.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger, parameter: sceneMesh_1 }, function () {
                    game.controller.targetPoint = null;
                    game.controller.ball.visibility = 0;
                    game.controller.forward = false;
                    game.player.mesh.translate(BABYLON.Axis.Z, 0.5, BABYLON.Space.LOCAL);
                    game.getScene().activeCamera.position = game.player.mesh.position;
                }));
            }
            document.removeEventListener(Events.PLAYER_CONNECTED, listener2);
        };
        document.addEventListener(Events.PLAYER_CONNECTED, listener2);
        new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true });
    }
    Environment.prototype.enableDayAndNight = function (game, light) {
        light.intensity = 1;
        var keys = [];
        keys.push({
            frame: 0,
            value: 0.75
        });
        keys.push({
            frame: 30,
            value: 1
        });
        keys.push({
            frame: 60,
            value: 0.75
        });
        var animationBox = new BABYLON.Animation("mainLightIntensity", "intensity", 1, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
        animationBox.setKeys(keys);
        light.animations = [];
        light.animations.push(animationBox);
        game.getScene().beginAnimation(light, 0, 60, true);
        return light;
    };
    ;
    return Environment;
}());
/// <reference path="../game.ts"/>
var EnvironmentSelectCharacter = (function () {
    function EnvironmentSelectCharacter(game, scene) {
        ////LIGHT
        var light = game.getScene().lights[0];
        light.dispose();
        var fireplaceLight = new BABYLON.PointLight("fireplaceLight", new BABYLON.Vector3(0, 2.5, 0), scene);
        fireplaceLight.diffuse = new BABYLON.Color3(1, 0.7, 0.3);
        fireplaceLight.range = 35;
        var intensityAnimation = new BABYLON.Animation("mainLightIntensity", "intensity", 50, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        intensityAnimation.setKeys([
            {
                frame: 0,
                value: 0.85
            },
            {
                frame: 5,
                value: 0.9
            },
            {
                frame: 10,
                value: 0.82
            }
        ]);
        var colorAnimation = new BABYLON.Animation("mainLightColor", "specular", 50, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
        colorAnimation.setKeys([
            {
                frame: 20,
                value: new BABYLON.Color3(1, 1, 1)
            },
            {
                frame: 25,
                value: new BABYLON.Color3(1, 0, 1)
            },
            {
                frame: 30,
                value: new BABYLON.Color3(1, 1, 1)
            }
        ]);
        fireplaceLight.animations = [];
        fireplaceLight.animations.push(intensityAnimation);
        game.getScene().beginAnimation(fireplaceLight, 0, 10, true);
        var shadowGenerator = new BABYLON.ShadowGenerator(1024, fireplaceLight);
        shadowGenerator.getShadowMap().refreshRate = 0;
        this.shadowGenerator = shadowGenerator;
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            var meshName = scene.meshes[i]['name'];
            if (meshName.search("Forest_ground") >= 0) {
                sceneMesh.actionManager = new BABYLON.ActionManager(scene);
                sceneMesh.receiveShadows = true;
                sceneMesh.material.emissiveColor = new BABYLON.Vector3(0.05, 0.05, 0.05);
                continue;
            }
            shadowGenerator.getShadowMap().renderList.push(sceneMesh);
        }
        var cone = scene.getMeshByName("Fireplace");
        if (cone) {
            fireplaceLight.parent = cone;
            var smokeSystem = new Particles.FireplaceSmoke(game, cone).particleSystem;
            smokeSystem.start();
            var fireSystem = new Particles.FireplaceFire(game, cone).particleSystem;
            fireSystem.start();
            var sfxFireplace = new BABYLON.Sound("Fire", "assets/sounds/fireplace.mp3", scene, null, { loop: true, autoplay: true });
            sfxFireplace.attachToMesh(cone);
        }
        for (var i = 0; i < scene.meshes.length; i++) {
            var sceneMesh = scene.meshes[i];
            sceneMesh.freezeWorldMatrix();
        }
        new BABYLON.Sound("Fire", "assets/sounds/forest_night.mp3", scene, null, { loop: true, autoplay: true, volume: 0.5 });
        new BABYLON.Sound("Fire", "assets/sounds/fx/wind.mp3", scene, null, { loop: true, autoplay: true, volume: 0.4 });
        new BABYLON.Sound("Fire", "assets/sounds/music/music001.mp3", scene, null, { loop: true, autoplay: true, volume: 0.9 });
    }
    return EnvironmentSelectCharacter;
}());
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var Main = (function () {
        function Main(game, player) {
            this.game = game;
            this.player = player;
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.main');
            this.playerBottomPanel = new GUI.PlayerBottomPanel(game);
            this.characterTopHp = new GUI.ShowHp();
            this.initInventory().initAttributes().initFullscreen();
        }
        Main.prototype.initInventory = function () {
            var self = this;
            this.inventory = new GUI.Inventory(this);
            var buttonPanel = new BABYLON.GUI.StackPanel();
            buttonPanel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            buttonPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            buttonPanel.width = 0.2;
            buttonPanel.isPointerBlocker = true;
            this.buttonpanel = buttonPanel;
            this.texture.addControl(buttonPanel);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.inventory", "Inventory");
            button.width = 1;
            button.height = "40px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;
            buttonPanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.inventory.opened) {
                    self.inventory.open();
                }
            });
            this.registerBlockMoveCharacter(button);
            return this;
        };
        Main.prototype.initFullscreen = function () {
            var self = this;
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.fullscreen", "Fullscreen");
            button.width = 1;
            button.height = "40px";
            button.color = "white";
            button.background = "black";
            button.isPointerBlocker = true;
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                self.game.engine.switchFullscreen(false);
                // self.game.engine.resize();
            });
            this.registerBlockMoveCharacter(button);
            return this;
        };
        Main.prototype.initAttributes = function () {
            var self = this;
            this.attributes = new GUI.Attributes(this);
            var button = BABYLON.GUI.Button.CreateSimpleButton("button.attributes", "Attributes");
            button.width = 1;
            button.height = "40px";
            button.color = "white";
            button.background = "black";
            this.buttonpanel.addControl(button);
            button.onPointerUpObservable.add(function () {
                if (!self.attributes.opened) {
                    self.attributes.open();
                }
            });
            this.registerBlockMoveCharacter(button);
            return this;
        };
        /**
         *
         * @param control
         * @returns {GUI.Main}
         */
        Main.prototype.registerBlockMoveCharacter = function (control) {
            var self = this;
            control.onPointerEnterObservable.add(function () {
                self.game.sceneManager.environment.ground.isPickable = false;
            });
            control.onPointerOutObservable.add(function () {
                self.game.sceneManager.environment.ground.isPickable = true;
            });
            return this;
        };
        return Main;
    }());
    GUI.Main = Main;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
var GUI;
(function (GUI) {
    var PlayerBottomPanel = (function () {
        function PlayerBottomPanel(game) {
            var self = this;
            var listener = function listener() {
                self.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("gameUI");
                var characterBottomPanel = new BABYLON.GUI.StackPanel();
                characterBottomPanel.width = "50%";
                characterBottomPanel.top = -10;
                characterBottomPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
                self.texture.addControl(characterBottomPanel);
                self.guiPanel = characterBottomPanel;
                var hpSlider = new BABYLON.GUI.Slider();
                hpSlider.minimum = 0;
                hpSlider.maximum = 100;
                hpSlider.value = 90;
                hpSlider.width = "100%";
                hpSlider.height = "10px";
                hpSlider.thumbWidth = 0;
                hpSlider.barOffset = 0;
                hpSlider.background = 'black';
                hpSlider.color = "red";
                hpSlider.borderColor = 'black';
                self.hpBar = hpSlider;
                var expSlider = new BABYLON.GUI.Slider();
                expSlider.minimum = 0;
                expSlider.maximum = 100;
                expSlider.value = 5;
                expSlider.width = "100%";
                expSlider.height = "10px";
                expSlider.thumbWidth = 0;
                expSlider.barOffset = 0;
                expSlider.background = 'black';
                expSlider.color = "blue";
                expSlider.borderColor = 'black';
                self.expBar = expSlider;
                characterBottomPanel.addControl(hpSlider);
                characterBottomPanel.addControl(expSlider);
                document.removeEventListener(Events.PLAYER_CONNECTED, listener);
            };
            document.addEventListener(Events.PLAYER_CONNECTED, listener);
        }
        return PlayerBottomPanel;
    }());
    GUI.PlayerBottomPanel = PlayerBottomPanel;
})(GUI || (GUI = {}));
/// <reference path="../game.ts"/>
/// <reference path="../characters/AbstractCharacter.ts"/>
var GUI;
(function (GUI) {
    var ShowHp = (function () {
        function ShowHp() {
            this.texture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("characterShowHp");
        }
        ShowHp.prototype.showHpCharacter = function (character) {
            if (this.guiPanel) {
                this.texture.removeControl(this.guiPanel);
            }
            var characterPanel = new BABYLON.GUI.StackPanel();
            characterPanel.width = "25%";
            characterPanel.top = 10;
            characterPanel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            this.guiPanel = characterPanel;
            this.texture.addControl(characterPanel);
            var hpSlider = new BABYLON.GUI.Slider();
            hpSlider.minimum = 0;
            hpSlider.maximum = character.statistics.getHpMax();
            hpSlider.value = character.statistics.getHp();
            hpSlider.width = "100%";
            hpSlider.height = "10px";
            hpSlider.thumbWidth = 0;
            hpSlider.barOffset = 0;
            hpSlider.background = 'black';
            hpSlider.color = "red";
            hpSlider.borderColor = 'black';
            this.hpBar = hpSlider;
            characterPanel.addControl(hpSlider);
        };
        return ShowHp;
    }());
    GUI.ShowHp = ShowHp;
})(GUI || (GUI = {}));
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../game.ts"/>
var Particles;
(function (Particles) {
    var AbstractParticle = (function () {
        function AbstractParticle(game, emitter) {
            this.game = game;
            this.emitter = emitter;
            this.initParticleSystem();
        }
        return AbstractParticle;
    }());
    Particles.AbstractParticle = AbstractParticle;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var Blood = (function (_super) {
        __extends(Blood, _super);
        function Blood() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Blood.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.ParticleSystem("particle1s", 500, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("/assets/Smoke3.png", this.game.getScene());
            particleSystem.emitter = this.emitter;
            particleSystem.minEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y * 0.7, 0); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(0, this.emitter.geometry.extend.maximum.y * 0.7, 0); // To...
            particleSystem.color1 = new BABYLON.Color4(1, 0, 0, 1);
            particleSystem.color2 = new BABYLON.Color4(1, 0, 0, 0.1);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0, 1);
            particleSystem.minSize = 0.3;
            particleSystem.maxSize = 0.5;
            particleSystem.minLifeTime = 0.05;
            particleSystem.maxLifeTime = 0.7;
            particleSystem.emitRate = 500;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(-2, 2, -2);
            particleSystem.direction2 = new BABYLON.Vector3(2, 2, 2);
            particleSystem.targetStopDuration = 0.6;
            particleSystem.minAngularSpeed = -10.0;
            particleSystem.maxAngularSpeed = 10.0;
            particleSystem.minEmitPower = 1;
            particleSystem.maxEmitPower = 2;
            particleSystem.updateSpeed = 0.02;
            this.particleSystem = particleSystem;
        };
        return Blood;
    }(Particles.AbstractParticle));
    Particles.Blood = Blood;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var Entrace = (function (_super) {
        __extends(Entrace, _super);
        function Entrace() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Entrace.prototype.initParticleSystem = function () {
            var particleSystem = new BABYLON.ParticleSystem("particles", 2000, this.game.getScene());
            particleSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", this.game.getScene());
            particleSystem.emitter = this.emitter; // the starting object, the emitter
            particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, -1); // Starting all from
            particleSystem.maxEmitBox = new BABYLON.Vector3(-1, 2, 1); // To...
            particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
            particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
            particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
            particleSystem.minSize = 0.1;
            particleSystem.maxSize = 0.5;
            particleSystem.minLifeTime = 0.3;
            particleSystem.maxLifeTime = 1.5;
            particleSystem.emitRate = 2000;
            particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
            particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
            particleSystem.direction2 = new BABYLON.Vector3(0, 0.25, 0);
            particleSystem.minAngularSpeed = 0;
            particleSystem.maxAngularSpeed = Math.PI;
            particleSystem.minEmitPower = 0.5;
            particleSystem.maxEmitPower = 1.5;
            particleSystem.updateSpeed = 0.004;
            this.particleSystem = particleSystem;
        };
        return Entrace;
    }(Particles.AbstractParticle));
    Particles.Entrace = Entrace;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var FireplaceFire = (function (_super) {
        __extends(FireplaceFire, _super);
        function FireplaceFire() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FireplaceFire.prototype.initParticleSystem = function () {
            var fireSystem = new BABYLON.ParticleSystem("particles", 200, this.game.getScene());
            fireSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", this.game.getScene());
            fireSystem.emitter = this.emitter;
            fireSystem.minEmitBox = new BABYLON.Vector3(0.5, 0, 0.5);
            fireSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 0, -0.5);
            fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 1.0);
            fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            fireSystem.minSize = 0.2;
            fireSystem.maxSize = 0.7;
            fireSystem.minLifeTime = 0.2;
            fireSystem.maxLifeTime = 0.4;
            fireSystem.emitRate = 200;
            fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            fireSystem.direction1 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.direction2 = new BABYLON.Vector3(0, 2, 0);
            fireSystem.minAngularSpeed = -10;
            fireSystem.maxAngularSpeed = Math.PI;
            fireSystem.minEmitPower = 1;
            fireSystem.maxEmitPower = 3;
            fireSystem.updateSpeed = 0.007;
            this.particleSystem = fireSystem;
        };
        return FireplaceFire;
    }(Particles.AbstractParticle));
    Particles.FireplaceFire = FireplaceFire;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var FireplaceSmoke = (function (_super) {
        __extends(FireplaceSmoke, _super);
        function FireplaceSmoke() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FireplaceSmoke.prototype.initParticleSystem = function () {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 250, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0.5, 1.5, 0.5);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 1.5, -0.5);
            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 1;
            smokeSystem.minLifeTime = 0.3;
            smokeSystem.maxLifeTime = 0.6;
            smokeSystem.emitRate = 250;
            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
            smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);
            smokeSystem.minAngularSpeed = 50;
            smokeSystem.maxAngularSpeed = Math.PI;
            smokeSystem.minEmitPower = 0.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.005;
            this.particleSystem = smokeSystem;
        };
        return FireplaceSmoke;
    }(Particles.AbstractParticle));
    Particles.FireplaceSmoke = FireplaceSmoke;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var Fog = (function (_super) {
        __extends(Fog, _super);
        function Fog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fog.prototype.initParticleSystem = function () {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 250, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0.5, 1.5, 2.5);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(-0.5, 1.5, -0.5);
            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            smokeSystem.minSize = 2;
            smokeSystem.maxSize = 4;
            smokeSystem.minLifeTime = 4.5;
            smokeSystem.maxLifeTime = 4.5;
            smokeSystem.emitRate = 250;
            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.direction1 = new BABYLON.Vector3(-4, 0, -4);
            smokeSystem.direction2 = new BABYLON.Vector3(-4, 0, -4);
            smokeSystem.minAngularSpeed = 50;
            smokeSystem.maxAngularSpeed = Math.PI;
            smokeSystem.minEmitPower = 1.5;
            smokeSystem.maxEmitPower = 1.5;
            smokeSystem.updateSpeed = 0.005;
            this.particleSystem = smokeSystem;
        };
        return Fog;
    }(Particles.AbstractParticle));
    Particles.Fog = Fog;
})(Particles || (Particles = {}));
/// <reference path="AbstractParticle.ts"/>
var Particles;
(function (Particles) {
    var WalkSmoke = (function (_super) {
        __extends(WalkSmoke, _super);
        function WalkSmoke() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WalkSmoke.prototype.initParticleSystem = function () {
            var smokeSystem = new BABYLON.ParticleSystem("particles", 50, this.game.getScene());
            smokeSystem.particleTexture = new BABYLON.Texture("/assets/flare.png", this.game.getScene());
            smokeSystem.emitter = this.emitter;
            smokeSystem.minEmitBox = new BABYLON.Vector3(0, 0, 0.8);
            smokeSystem.maxEmitBox = new BABYLON.Vector3(0, 0, 0.8);
            smokeSystem.color1 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.color2 = new BABYLON.Color4(0.1, 0.1, 0.1, 1.0);
            smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
            smokeSystem.minSize = 0.3;
            smokeSystem.maxSize = 2;
            smokeSystem.minLifeTime = 0.1;
            smokeSystem.maxLifeTime = 0.2;
            smokeSystem.emitRate = 30;
            smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
            smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);
            smokeSystem.direction1 = new BABYLON.Vector3(0, 8, 0);
            smokeSystem.direction2 = new BABYLON.Vector3(0, 8, 0);
            smokeSystem.minAngularSpeed = 0;
            smokeSystem.maxAngularSpeed = Math.PI;
            smokeSystem.minEmitPower = 1;
            smokeSystem.maxEmitPower = 1;
            smokeSystem.updateSpeed = 0.004;
            this.particleSystem = smokeSystem;
        };
        return WalkSmoke;
    }(Particles.AbstractParticle));
    Particles.WalkSmoke = WalkSmoke;
})(Particles || (Particles = {}));
var Quests;
(function (Quests) {
    var Awards;
    (function (Awards) {
        var AbstractAward = (function () {
            function AbstractAward() {
            }
            return AbstractAward;
        }());
        Awards.AbstractAward = AbstractAward;
    })(Awards = Quests.Awards || (Quests.Awards = {}));
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var Requirements;
    (function (Requirements) {
        var AbstractRequirement = (function () {
            function AbstractRequirement() {
            }
            return AbstractRequirement;
        }());
        Requirements.AbstractRequirement = AbstractRequirement;
    })(Requirements = Quests.Requirements || (Quests.Requirements = {}));
})(Quests || (Quests = {}));
/// <reference path="awards/AbstractAward.ts"/>
/// <reference path="requirements/AbstractRequirement.ts"/>
var Quests;
(function (Quests) {
    var AbstractQuest = (function () {
        function AbstractQuest(game) {
            this.game = game;
            this.awards = [];
            this.requirements = [];
        }
        return AbstractQuest;
    }());
    Quests.AbstractQuest = AbstractQuest;
})(Quests || (Quests = {}));
/// <reference path="../../babylon/babylon.d.ts"/>
/// <reference path="../../babylon/ts/babylon.gui.d.ts"/>
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../objects/characters.ts"/>
/// <reference path="../objects/items.ts"/>
/// <reference path="../objects/environment.ts"/>
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(game) {
        var _this = _super.call(this, game) || this;
        var scene = new BABYLON.Scene(game.engine);
        scene.clearColor = new BABYLON.Color3(0, 0, 0);
        var camera = new BABYLON.ArcRotateCamera("Camera", -1, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        var background = new BABYLON.Layer("back", "assets/logo.png", scene);
        background.isBackground = true;
        background.texture.level = 0;
        background.texture.wAng = 0;
        var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        var buttonStart = BABYLON.GUI.Button.CreateSimpleButton("buttonStart", "Start game");
        buttonStart.width = "250px";
        buttonStart.height = "40px";
        buttonStart.color = "white";
        buttonStart.cornerRadius = 20;
        buttonStart.top = 150;
        buttonStart.background = "orange";
        buttonStart.zIndex = 1;
        buttonStart.onPointerUpObservable.add(function () {
            new Simple(game);
            game.activeScene = 1;
        });
        advancedTexture.addControl(buttonStart);
        var buttonOptions = BABYLON.GUI.Button.CreateSimpleButton("buttonOptions", "Options");
        buttonOptions.width = "250px";
        buttonOptions.height = "40px";
        buttonOptions.color = "white";
        buttonOptions.cornerRadius = 20;
        buttonOptions.top = 200;
        buttonOptions.background = "orange";
        buttonOptions.zIndex = 1;
        buttonOptions.onPointerUpObservable.add(function () {
            var optionsPanel = new BABYLON.GUI.StackPanel();
            optionsPanel.alpha = 0.8;
            optionsPanel.width = "220px";
            optionsPanel.background = "#edecd7";
            optionsPanel.zIndex = 2;
            advancedTexture.addControl(optionsPanel);
            var header = new BABYLON.GUI.TextBlock();
            header.text = "Shadows quality: 1024";
            header.height = "30px";
            header.color = "white";
            var slider = new BABYLON.GUI.Slider();
            slider.minimum = 1024;
            slider.maximum = 4096;
            slider.value = 0;
            slider.height = "20px";
            slider.width = "200px";
            slider.onValueChangedObservable.add(function (value) {
                header.text = "Shadows quality: " + value + "";
            });
            var optionsButtonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            optionsButtonClose.width = "150px";
            optionsButtonClose.height = "40px";
            optionsButtonClose.color = "white";
            optionsButtonClose.cornerRadius = 20;
            optionsButtonClose.top = 50;
            optionsButtonClose.background = "orange";
            optionsButtonClose.zIndex = 3;
            optionsButtonClose.onPointerUpObservable.add(function () {
                advancedTexture.removeControl(optionsPanel);
            });
            optionsPanel
                .addControl(header)
                .addControl(slider)
                .addControl(optionsButtonClose);
        });
        advancedTexture.addControl(buttonOptions);
        var buttonAboutUs = BABYLON.GUI.Button.CreateSimpleButton("buttonAboutUs", "About us");
        buttonAboutUs.width = "250px";
        buttonAboutUs.height = "40px";
        buttonAboutUs.color = "white";
        buttonAboutUs.cornerRadius = 20;
        buttonAboutUs.top = 250;
        buttonAboutUs.background = "orange";
        buttonAboutUs.zIndex = 1;
        buttonAboutUs.onPointerUpObservable.add(function () {
            var aboutUsBackground = new BABYLON.GUI.Rectangle();
            aboutUsBackground.alpha = 0.8;
            aboutUsBackground.width = 0.5;
            aboutUsBackground.height = "180px";
            aboutUsBackground.cornerRadius = 20;
            aboutUsBackground.color = "Orange";
            aboutUsBackground.thickness = 1;
            aboutUsBackground.background = "#edecd7";
            aboutUsBackground.zIndex = 2;
            advancedTexture.addControl(aboutUsBackground);
            var aboutUsText = new BABYLON.GUI.TextBlock();
            aboutUsText.text = "Tomasz Furca & Artur Owsianowski";
            aboutUsText.color = "black";
            aboutUsText.fontSize = 20;
            aboutUsText.zIndex = 2;
            var aboutUsButtonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            aboutUsButtonClose.width = "150px";
            aboutUsButtonClose.height = "40px";
            aboutUsButtonClose.color = "white";
            aboutUsButtonClose.cornerRadius = 20;
            aboutUsButtonClose.top = 50;
            aboutUsButtonClose.background = "orange";
            aboutUsButtonClose.zIndex = 3;
            aboutUsButtonClose.onPointerUpObservable.add(function () {
                advancedTexture.removeControl(aboutUsBackground);
            });
            aboutUsBackground.addControl(aboutUsButtonClose).addControl(aboutUsText);
        });
        advancedTexture.addControl(buttonAboutUs);
        game.scenes.push(scene);
        return _this;
    }
    return MainMenu;
}(Scene));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var SelectCharacter = (function (_super) {
    __extends(SelectCharacter, _super);
    function SelectCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectCharacter.prototype.initScene = function (game) {
        var self = this;
        BABYLON.SceneLoader.Load("assets/scenes/Select_Map/", "Select_Map.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);
            var sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            var assetsManager = new BABYLON.AssetsManager(scene);
            scene.activeCamera.maxZ = 200;
            scene.activeCamera.minZ = -200;
            scene.activeCamera.mode = BABYLON.Camera.PERSPECTIVE_CAMERA;
            scene.activeCamera.position = new BABYLON.Vector3(0, 11, -12);
            scene.activeCamera.rotation = new BABYLON.Vector3(0.5, 0, 0);
            scene.executeWhenReady(function () {
                new EnvironmentSelectCharacter(game, scene);
                game.factories['character'] = new Factories.Characters(game, scene, assetsManager).initFactory();
                assetsManager.onFinish = function (tasks) {
                    var playerCharacters = self.game.client.characters;
                    for (var i = 0; i < playerCharacters.length; i++) {
                        new SelectCharacter.Warrior(game, i);
                    }
                };
                assetsManager.load();
            });
        });
    };
    SelectCharacter.prototype.getType = function () {
    };
    SelectCharacter.TYPE = 2;
    return SelectCharacter;
}(Scene));
/// <reference path="Scene.ts"/>
/// <reference path="../game.ts"/>
/// <reference path="../Events.ts"/>
var SimpleBandit = (function (_super) {
    __extends(SimpleBandit, _super);
    function SimpleBandit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleBandit.prototype.initScene = function (game) {
        var self = this;
        game.sceneManager = this;
        BABYLON.SceneLoader.Load("assets/scenes/map01/", "map01.babylon", game.engine, function (scene) {
            game.sceneManager = self;
            self
                .setDefaults(game)
                .optimizeScene(scene)
                .setCamera(scene);
            var assetsManager = new BABYLON.AssetsManager(scene);
            var sceneIndex = game.scenes.push(scene);
            game.activeScene = sceneIndex - 1;
            scene.actionManager = new BABYLON.ActionManager(scene);
            scene.executeWhenReady(function () {
                self.environment = new Environment(game, scene);
                self.initFactories(scene, assetsManager);
                assetsManager.onFinish = function (tasks) {
                    game.client.socket.emit('changeScenePre', {
                        sceneType: SimpleBandit.TYPE
                    });
                };
                assetsManager.load();
                var listener = function listener() {
                    game.controller.registerControls(scene);
                    game.player.mesh.position = new BABYLON.Vector3(3, 0.1, 11);
                    game.player.emitPosition();
                    game.client.socket.emit('changeScenePost', {
                        sceneType: SimpleBandit.TYPE
                    });
                    document.removeEventListener(Events.PLAYER_CONNECTED, listener);
                };
                document.addEventListener(Events.PLAYER_CONNECTED, listener);
            });
        });
    };
    SimpleBandit.prototype.getType = function () {
        return SimpleBandit.TYPE;
    };
    SimpleBandit.TYPE = 3;
    return SimpleBandit;
}(Scene));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = (function () {
        function AbstractStatistics(hp, hpMax, attackSpeed, damage, armor, walkSpeed, blockChance, hitChance) {
            if (hp === void 0) { hp = 0; }
            if (hpMax === void 0) { hpMax = 0; }
            if (attackSpeed === void 0) { attackSpeed = 0; }
            if (damage === void 0) { damage = 0; }
            if (armor === void 0) { armor = 0; }
            if (walkSpeed === void 0) { walkSpeed = 0; }
            if (blockChance === void 0) { blockChance = 0; }
            if (hitChance === void 0) { hitChance = 0; }
            this.hp = hp;
            this.hpMax = hpMax;
            this.attackSpeed = attackSpeed;
            this.damage = damage;
            this.armor = armor;
            this.walkSpeed = walkSpeed;
            this.blockChance = blockChance;
            this.hitChance = hitChance;
        }
        AbstractStatistics.prototype.getHp = function () {
            return this.hp;
        };
        AbstractStatistics.prototype.getHpMax = function () {
            return this.hpMax;
        };
        AbstractStatistics.prototype.getAttackSpeed = function () {
            return this.attackSpeed;
        };
        AbstractStatistics.prototype.getWalkSpeed = function () {
            return this.walkSpeed;
        };
        AbstractStatistics.prototype.getBlockChance = function () {
            return this.blockChance;
        };
        AbstractStatistics.prototype.getHitChance = function () {
            return this.hitChance;
        };
        AbstractStatistics.prototype.getDamage = function () {
            return this.damage;
        };
        AbstractStatistics.prototype.getArmor = function () {
            return this.armor;
        };
        return AbstractStatistics;
    }());
    Attributes.AbstractStatistics = AbstractStatistics;
})(Attributes || (Attributes = {}));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = Attributes.AbstractStatistics;
    var CharacterStatistics = (function (_super) {
        __extends(CharacterStatistics, _super);
        function CharacterStatistics() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CharacterStatistics.prototype.setPlayer = function (player) {
            this.player = player;
            return this;
        };
        CharacterStatistics.prototype.getItemsStats = function () {
            var statistics = new Attributes.EquipStatistics();
            if (this.player) {
                var inventory = this.player.inventory;
                var equipedItems = [];
                equipedItems.push(inventory.helm);
                equipedItems.push(inventory.gloves);
                equipedItems.push(inventory.armor);
                equipedItems.push(inventory.weapon);
                equipedItems.push(inventory.shield);
                equipedItems.push(inventory.boots);
                for (var i = 0; i < equipedItems.length; i++) {
                    var item = equipedItems[i];
                    if (item) {
                        statistics.addStatisticsFromItem(item.statistics);
                    }
                }
            }
            return statistics;
        };
        CharacterStatistics.prototype.getDamage = function () {
            var equipStatistics = this.getItemsStats();
            return this.damage + equipStatistics.getDamage();
        };
        CharacterStatistics.prototype.getArmor = function () {
            var equipStatistics = this.getItemsStats();
            return this.armor + equipStatistics.getArmor();
        };
        return CharacterStatistics;
    }(AbstractStatistics));
    Attributes.CharacterStatistics = CharacterStatistics;
})(Attributes || (Attributes = {}));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = Attributes.AbstractStatistics;
    var EquipStatistics = (function (_super) {
        __extends(EquipStatistics, _super);
        function EquipStatistics() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EquipStatistics.prototype.addStatisticsFromItem = function (statistics) {
            if (statistics.getDamage()) {
                this.damage += statistics.getDamage();
            }
            if (statistics.getArmor()) {
                this.armor += statistics.getArmor();
            }
        };
        return EquipStatistics;
    }(AbstractStatistics));
    Attributes.EquipStatistics = EquipStatistics;
})(Attributes || (Attributes = {}));
var Attributes;
(function (Attributes) {
    var AbstractStatistics = Attributes.AbstractStatistics;
    var ItemStatistics = (function (_super) {
        __extends(ItemStatistics, _super);
        function ItemStatistics() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ItemStatistics;
    }(AbstractStatistics));
    Attributes.ItemStatistics = ItemStatistics;
})(Attributes || (Attributes = {}));
var Items;
(function (Items) {
    var Item = (function () {
        /**
         * @param game
         */
        function Item(game) {
            this.game = game;
        }
        return Item;
    }());
    Items.Item = Item;
})(Items || (Items = {}));
var Items;
(function (Items) {
    var ItemManager = (function () {
        function ItemManager(game) {
            this.game = game;
            this.items = [
                new Items.Armors.Robe(game),
                new Items.Armors.PrimaryArmor(game),
                new Items.Boots.PrimaryBoots(game),
                new Items.Gloves.PrimaryGloves(game),
                new Items.Helms.PrimaryHelm(game),
                // new Items.Shields.BigWoodShield(game),
                new Items.Shields.WoodShield(game),
                new Items.Weapons.Axe(game),
                new Items.Weapons.Sword(game)
            ];
        }
        /**
         *
         * @param itemId
         * @returns Item|null
         */
        ItemManager.prototype.getItemUsingId = function (itemId) {
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item.itemId == itemId) {
                    return item;
                }
            }
            return null;
        };
        return ItemManager;
    }());
    Items.ItemManager = ItemManager;
})(Items || (Items = {}));
/// <reference path="../AbstractCharacter.ts"/>
var Bandit;
(function (Bandit_1) {
    var Bandit = (function (_super) {
        __extends(Bandit, _super);
        function Bandit(serverKey, game, position, rotationQuaternion) {
            var _this = this;
            _this.name = 'Bandit';
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.position = position;
            mesh.rotation = rotationQuaternion;
            _this.mesh = mesh;
            _this.statistics = new Attributes.CharacterStatistics(50, 50, 100, 3, 10, 100, 0, 100);
            _this.id = serverKey;
            _this.mesh = mesh;
            _this.visibilityAreaSize = 30;
            _this.attackAreaSize = 6;
            _this.sfxHit = new BABYLON.Sound("WormWalk", "/assets/Characters/Worm/hit.wav", game.getScene(), null, { loop: false, autoplay: false });
            _this.sfxWalk = new BABYLON.Sound("CharacterWalk", "/assets/Characters/Warrior/walk.wav", game.getScene(), null, { loop: true, autoplay: false });
            _this.inventory = new Character.Inventory(game, _this);
            var armor = new Items.Armors.Robe(game);
            var axe = new Items.Weapons.Axe(game);
            var gloves = new Items.Gloves.PrimaryGloves(game);
            var boots = new Items.Boots.PrimaryBoots(game);
            _this.inventory.mount(armor);
            _this.inventory.mount(gloves);
            _this.inventory.mount(boots);
            _this.inventory.mount(axe);
            _this = _super.call(this, name, game) || this;
            return _this;
        }
        Bandit.TYPE = 'bandit';
        return Bandit;
    }(Monster));
    Bandit_1.Bandit = Bandit;
})(Bandit || (Bandit = {}));
/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>
var BigWorm = (function (_super) {
    __extends(BigWorm, _super);
    function BigWorm(serverKey, name, game, position, rotationQuaternion) {
        var _this = this;
        var mesh = game.factories['worm'].createInstance('Worm', true);
        mesh.visibility = true;
        mesh.position = position;
        mesh.rotation = rotationQuaternion;
        mesh.scaling = new BABYLON.Vector3(2, 2, 2);
        _this.statistics = new Attributes.CharacterStatistics(125, 125, 100, 5, 10, 50, 0, 100);
        _this.id = serverKey;
        _this.mesh = mesh;
        _this.visibilityAreaSize = 10;
        _this.attackAreaSize = 4;
        //this.sfxWalk = new BABYLON.Sound("WormWalk", "/babel/Characters/Worm/walk.wav", game.getScene(), null, { loop: true, autoplay: false });
        _this.sfxHit = new BABYLON.Sound("WormWalk", "/assets/Characters/Worm/hit.wav", game.getScene(), null, { loop: false, autoplay: false });
        _this = _super.call(this, name, game) || this;
        return _this;
    }
    BigWorm.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var childMesh = this.mesh;
        var loopAnimation = this.isControllable;
        if (childMesh) {
            var skeleton_3 = childMesh.skeleton;
            if (emit) {
                this.emitPosition();
            }
            if (!this.animation) {
                self.animation = skeleton_3.beginAnimation('Walk', loopAnimation, 1, function () {
                    skeleton_3.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    self.animation = null;
                });
            }
        }
    };
    return BigWorm;
}(Monster));
/// <reference path="../../game.ts"/>
/// <reference path="monster.ts"/>
var Worm = (function (_super) {
    __extends(Worm, _super);
    function Worm(serverKey, name, game, position, rotationQuaternion) {
        var _this = this;
        var mesh = game.factories['worm'].createInstance('Worm', true);
        mesh.visibility = true;
        mesh.position = position;
        mesh.rotation = rotationQuaternion;
        _this.statistics = new Attributes.CharacterStatistics(50, 50, 100, 3, 10, 50, 0, 100);
        _this.id = serverKey;
        _this.mesh = mesh;
        _this.visibilityAreaSize = 30;
        _this.attackAreaSize = 6;
        //this.sfxWalk = new BABYLON.Sound("WormWalk", "/babel/Characters/Worm/walk.wav", game.getScene(), null, { loop: true, autoplay: false });
        _this.sfxHit = new BABYLON.Sound("WormWalk", "/assets/Characters/Worm/hit.wav", game.getScene(), null, { loop: false, autoplay: false });
        _this = _super.call(this, name, game) || this;
        return _this;
    }
    Worm.prototype.runAnimationWalk = function (emit) {
        var self = this;
        var loopAnimation = this.isControllable;
        var skeleton = this.mesh.skeleton;
        if (emit) {
            this.emitPosition();
        }
        if (!this.animation) {
            self.animation = skeleton.beginAnimation('Walk', loopAnimation, 1, function () {
                skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                self.animation = null;
            });
        }
    };
    return Worm;
}(Monster));
/// <reference path="../AbstractCharacter.ts"/>
var NPC;
(function (NPC) {
    var AbstractNpc = (function (_super) {
        __extends(AbstractNpc, _super);
        function AbstractNpc(game, name) {
            var _this = _super.call(this, name, game) || this;
            var self = _this;
            _this.mesh.actionManager = new BABYLON.ActionManager(_this.game.getScene());
            _this.mesh.isPickable = true;
            _this.createTooltip();
            _this.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, self.box, 'scaling', new BABYLON.Vector3(2, 2, 2), 300));
            _this.mesh.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, self.box, 'scaling', new BABYLON.Vector3(1, 1, 1), 300));
            _this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                var quest = new GUI.Quest(game.gui, new Quests.KillWorms(game));
                quest.open();
            }));
            return _this;
        }
        AbstractNpc.prototype.removeFromWorld = function () {
            this.mesh.dispose();
        };
        AbstractNpc.prototype.createTooltip = function () {
            var box1 = BABYLON.Mesh.CreateBox("Box1", 0.4, this.game.getScene());
            box1.parent = this.mesh;
            box1.position.y += 7;
            var materialBox = new BABYLON.StandardMaterial("texture1", this.game.getScene());
            materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);
            box1.material = materialBox;
            var keys = [];
            keys.push({
                frame: 0,
                value: 0
            });
            keys.push({
                frame: 30,
                value: -2
            });
            var animationBox = new BABYLON.Animation("rotation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE);
            animationBox.setKeys(keys);
            box1.animations = [];
            box1.animations.push(animationBox);
            this.box = box1;
            this.game.getScene().beginAnimation(box1, 0, 30, true);
        };
        return AbstractNpc;
    }(AbstractCharacter));
    NPC.AbstractNpc = AbstractNpc;
})(NPC || (NPC = {}));
/// <reference path="AbstractNpc.ts"/>
var NPC;
(function (NPC) {
    var Warrior = (function (_super) {
        __extends(Warrior, _super);
        function Warrior(game) {
            var _this = this;
            _this.name = 'NPC #Warrior';
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.position = new BABYLON.Vector3(-6, 0, -0.5);
            mesh.rotation = new BABYLON.Vector3(0, -1, 0);
            mesh.scaling = new BABYLON.Vector3(1.3, 1.3, 1.3);
            _this.mesh = mesh;
            _this.quest = new Quests.KillWorms(game);
            _this = _super.call(this, game, name) || this;
            return _this;
        }
        return Warrior;
    }(NPC.AbstractNpc));
    NPC.Warrior = Warrior;
})(NPC || (NPC = {}));
/// <reference path="../AbstractCharacter.ts"/>
var SelectCharacter;
(function (SelectCharacter) {
    var Bandit = (function (_super) {
        __extends(Bandit, _super);
        function Bandit(game) {
            var _this = this;
            _this.name = 'Warrior';
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            mesh.position = new BABYLON.Vector3(2, 0.1, 10);
            mesh.rotation = new BABYLON.Vector3(0, 0.2, 0);
            _this.mesh = mesh;
            _this.inventory = new Character.Inventory(game, _this);
            var armor = new Items.Armors.Robe(game);
            var gloves = new Items.Gloves.PrimaryGloves(game);
            var boots = new Items.Boots.PrimaryBoots(game);
            _this.inventory.mount(armor);
            _this.inventory.mount(gloves);
            _this.inventory.mount(boots);
            _this = _super.call(this, name, game) || this;
            _this.mesh.skeleton.beginAnimation('Sit');
            _this.registerActions();
            return _this;
        }
        Bandit.prototype.removeFromWorld = function () {
        };
        Bandit.prototype.registerActions = function () {
            var self = this;
            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                if (!self.skeletonAnimation) {
                    self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                        self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                    });
                }
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                //self.game.getScene().stopAnimation(self.mesh.skeleton);
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                console.log(1);
                new Simple().initScene(self.game);
            }));
        };
        return Bandit;
    }(AbstractCharacter));
    SelectCharacter.Bandit = Bandit;
})(SelectCharacter || (SelectCharacter = {}));
/// <reference path="../AbstractCharacter.ts"/>
var SelectCharacter;
(function (SelectCharacter) {
    var Warrior = (function (_super) {
        __extends(Warrior, _super);
        function Warrior(game, place) {
            var _this = this;
            _this.name = 'Warrior';
            _this.place = place;
            var mesh = game.factories['character'].createInstance('Warrior', true);
            mesh.scaling = new BABYLON.Vector3(1.4, 1.4, 1.4);
            switch (place) {
                case 0:
                    mesh.position = new BABYLON.Vector3(-0.3, 0, 10.5);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0);
                    break;
                case 1:
                    mesh.position = new BABYLON.Vector3(2.7, 0, 10);
                    mesh.rotation = new BABYLON.Vector3(0, 0.1, 0);
                    break;
            }
            _this.mesh = mesh;
            var inventoryItems = game.client.characters[place].items;
            var itemManager = new Items.ItemManager(game);
            for (var i = 0; i < inventoryItems.length; i++) {
                var item = inventoryItems[i];
                console.log(itemManager.getItemUsingId(item.itemId));
            }
            _this.inventory = new Character.Inventory(game, _this);
            var armor = new Items.Armors.PrimaryArmor(game);
            var helm = new Items.Helms.PrimaryHelm(game);
            var gloves = new Items.Gloves.PrimaryGloves(game);
            var boots = new Items.Boots.PrimaryBoots(game);
            _this.inventory.mount(armor);
            _this.inventory.mount(helm);
            _this.inventory.mount(gloves);
            _this.inventory.mount(boots);
            _this = _super.call(this, name, game) || this;
            _this.mesh.skeleton.beginAnimation('Sit');
            _this.registerActions();
            return _this;
        }
        Warrior.prototype.removeFromWorld = function () {
        };
        Warrior.prototype.registerActions = function () {
            var self = this;
            this.mesh.actionManager = new BABYLON.ActionManager(this.game.getScene());
            this.mesh.isPickable = true;
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function () {
                if (!self.skeletonAnimation) {
                    self.skeletonAnimation = self.mesh.skeleton.beginAnimation('Select', false, 1, function () {
                        self.mesh.skeleton.beginAnimation(AbstractCharacter.ANIMATION_STAND_WEAPON, true);
                        self.skeletonAnimation = null;
                    });
                }
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function () {
                if (!self.skeletonAnimation) {
                    var animationSelectRange = self.mesh.skeleton.getAnimationRange('Select');
                    self.skeletonAnimation = self.game.getScene().beginAnimation(self.mesh, animationSelectRange.to, animationSelectRange.from, false, -1, function () {
                        self.mesh.skeleton.beginAnimation('Sit');
                        self.skeletonAnimation = null;
                    });
                }
            }));
            this.mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function () {
                self.game.client.socket.emit('selectCharacter', self.place);
                self.game.client.socket.on('characterSelected', function () {
                    self.game.sceneManager.changeScene(new Simple());
                });
            }));
        };
        return Warrior;
    }(AbstractCharacter));
    SelectCharacter.Warrior = Warrior;
})(SelectCharacter || (SelectCharacter = {}));
/// <reference path="../Main.ts"/>
/// <reference path="../../../bower_components/babylonjs/dist/gui/babylon.gui.d.ts"/>
var GUI;
(function (GUI) {
    var Popup = (function () {
        function Popup(guiMain) {
            this.guiMain = guiMain;
        }
        /**
         * @returns {GUI.Popup}
         */
        Popup.prototype.initTexture = function () {
            this.guiTexture = this.guiTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('gui.' + this.name);
            var container = new BABYLON.GUI.StackPanel();
            container.horizontalAlignment = this.position;
            container.width = 0.33;
            container.height = 1;
            this.container = container;
            var image = new BABYLON.GUI.Image('gui.popup.image.' + this.name, this.imageUrl);
            image.horizontalAlignment = this.position;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            image.width = 1;
            image.height = 1;
            this.guiMain.registerBlockMoveCharacter(image);
            this.container.addControl(image);
            this.containerBackground = image;
            return this;
        };
        Popup.prototype.refreshPopup = function () {
            this.close();
            this.open();
        };
        return Popup;
    }());
    GUI.Popup = Popup;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Attributes = (function (_super) {
        __extends(Attributes, _super);
        function Attributes(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Inventory';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            return _this;
        }
        Attributes.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiMain.registerBlockMoveCharacter(buttonClose);
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
        };
        Attributes.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        };
        Attributes.prototype.showText = function () {
            var textDamage = new BABYLON.GUI.TextBlock();
            textDamage.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textDamage.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textDamage.text = 'Damage:' + this.guiMain.player.statistics.getDamage();
            textDamage.color = "white";
            textDamage.top = "0%";
            textDamage.width = "25%";
            textDamage.height = "10%";
            textDamage.top = "0%";
            var textArmor = new BABYLON.GUI.TextBlock();
            textArmor.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textArmor.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textArmor.text = 'Armor:' + this.guiMain.player.statistics.getArmor();
            textArmor.color = "white";
            textArmor.top = "0%";
            textArmor.width = "25%";
            textArmor.height = "10%";
            textArmor.top = "4%";
            var textHP = new BABYLON.GUI.TextBlock();
            textHP.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textHP.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textHP.text = 'HP:' + this.guiMain.player.statistics.getHp();
            textHP.color = "white";
            textHP.top = "0%";
            textHP.width = "25%";
            textHP.height = "10%";
            textHP.top = "8%";
            var textHitChance = new BABYLON.GUI.TextBlock();
            textHitChance.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textHitChance.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textHitChance.text = 'Hit chance:' + this.guiMain.player.statistics.getHitChance();
            textHitChance.color = "white";
            textHitChance.top = "0%";
            textHitChance.width = "25%";
            textHitChance.height = "10%";
            textHitChance.top = "12%";
            var textAttackSpeed = new BABYLON.GUI.TextBlock();
            textAttackSpeed.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textAttackSpeed.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textAttackSpeed.text = 'Attack speed:' + this.guiMain.player.statistics.getAttackSpeed();
            textAttackSpeed.color = "white";
            textAttackSpeed.top = "0%";
            textAttackSpeed.width = "25%";
            textAttackSpeed.height = "10%";
            textAttackSpeed.top = "16%";
            var textWalkSpeed = new BABYLON.GUI.TextBlock();
            textWalkSpeed.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textWalkSpeed.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textWalkSpeed.text = 'Walk speed:' + this.guiMain.player.statistics.getWalkSpeed();
            textWalkSpeed.color = "white";
            textWalkSpeed.top = "0%";
            textWalkSpeed.width = "25%";
            textWalkSpeed.height = "10%";
            textWalkSpeed.top = "20%";
            var textBlockChance = new BABYLON.GUI.TextBlock();
            textBlockChance.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            textBlockChance.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
            textBlockChance.text = 'Block chance:' + this.guiMain.player.statistics.getBlockChance();
            textBlockChance.color = "white";
            textBlockChance.top = "0%";
            textBlockChance.width = "25%";
            textBlockChance.height = "10%";
            textBlockChance.top = "24%";
            this.guiTexture.addControl(textDamage);
            this.guiTexture.addControl(textHP);
            this.guiTexture.addControl(textHitChance);
            this.guiTexture.addControl(textAttackSpeed);
            this.guiTexture.addControl(textWalkSpeed);
            this.guiTexture.addControl(textBlockChance);
            this.guiTexture.addControl(textArmor);
        };
        return Attributes;
    }(GUI.Popup));
    GUI.Attributes = Attributes;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Inventory = (function (_super) {
        __extends(Inventory, _super);
        function Inventory(guiMain) {
            var _this = _super.call(this, guiMain) || this;
            _this.name = 'Inventory';
            _this.imageUrl = "assets/gui/inventory.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            return _this;
        }
        Inventory.prototype.open = function () {
            this.initTexture();
            this.opened = true;
            var self = this;
            this.guiTexture.addControl(this.container);
            this.showItems();
            this.showEquipedItems();
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("aboutUsBackground", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiMain.registerBlockMoveCharacter(buttonClose);
            this.guiTexture.addControl(buttonClose);
            this.buttonClose = buttonClose;
            return this;
        };
        Inventory.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        };
        Inventory.prototype.showEquipedItems = function () {
            this.weaponImage = new GUI.Inventory.Weapon(this);
            this.shieldImage = new GUI.Inventory.Shield(this);
            this.glovesImage = new GUI.Inventory.Gloves(this);
            this.bootsImage = new GUI.Inventory.Boots(this);
            this.armorImage = new GUI.Inventory.Armor(this);
            this.helmImage = new GUI.Inventory.Helm(this);
        };
        Inventory.prototype.showItems = function () {
            var self = this;
            var inventory = this.guiMain.player.inventory;
            if (this.panelItems) {
                this.guiTexture.removeControl(this.panelItems);
            }
            var eqiupedItems = inventory.getEquipedItems();
            ////items
            var itemCount = 0;
            var left = -42;
            var level = 1;
            var top = 0;
            var panelItems = new BABYLON.GUI.Rectangle();
            panelItems.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
            panelItems.width = "32%";
            panelItems.height = "45%";
            panelItems.top = "26%";
            panelItems.thickness = 0;
            this.panelItems = panelItems;
            var _loop_2 = function (i) {
                var breakDisplayItem = void 0;
                var item = inventory.items[i];
                for (var _i = 0, eqiupedItems_1 = eqiupedItems; _i < eqiupedItems_1.length; _i++) {
                    var equipedItem = eqiupedItems_1[_i];
                    if (equipedItem == item) {
                        breakDisplayItem = true;
                        break;
                    }
                }
                if (breakDisplayItem) {
                    return "continue";
                }
                if (itemCount == 0) {
                    top = -35;
                }
                else if (itemCount % 5 == 0) {
                    left = -42;
                    top = (30 * level) - 35;
                    level++;
                }
                else {
                    left += 20;
                }
                itemCount++;
                var result = new BABYLON.GUI.Button(name);
                result.width = 0.20;
                result.height = 0.3;
                result.left = left + "%";
                result.top = top + "%";
                result.thickness = 0;
                result.fontSize = '14';
                var textBlock = new BABYLON.GUI.TextBlock(i + "_guiImage", item.name);
                textBlock.top = '-25%';
                textBlock.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
                textBlock.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
                result.addControl(textBlock);
                var image = this_2.createItemImage(item);
                result.addControl(image);
                panelItems.addControl(result);
                result.onPointerUpObservable.add(function () {
                    self.guiMain.game.player.inventory.mount(item);
                    self.onPointerUpItemImage(item);
                    self.showItems();
                    if (self.guiMain.attributesOpened) {
                        self.guiMain.attributes.refreshPopup();
                    }
                });
            };
            var this_2 = this;
            for (var i = 0; i < inventory.items.length; i++) {
                _loop_2(i);
            }
            this.guiTexture.addControl(panelItems);
            window.addEventListener('resize', function () {
                if (window.innerWidth > 1600) {
                    panelItems.height = "45%";
                    panelItems.top = "26%";
                }
                else if (window.innerWidth > 1200) {
                    panelItems.height = "30%";
                    panelItems.top = "20%";
                }
                else {
                    panelItems.height = "20%";
                    panelItems.top = "15%";
                }
            });
            return this;
        };
        /**
         * @param item
         * @returns {GUI.Inventory}
         */
        Inventory.prototype.onPointerUpItemImage = function (item) {
            switch (item.getType()) {
                case Items.Weapon.TYPE:
                    if (this.weaponImage.block) {
                        this.guiTexture.removeControl(this.weaponImage.block);
                    }
                    this.weaponImage = new GUI.Inventory.Weapon(this);
                    break;
                case Items.Shield.TYPE:
                    if (this.shieldImage.block) {
                        this.guiTexture.removeControl(this.shieldImage.block);
                    }
                    this.shieldImage = new GUI.Inventory.Shield(this);
                    break;
                case Items.Helm.TYPE:
                    if (this.helmImage.block) {
                        this.guiTexture.removeControl(this.helmImage.block);
                    }
                    this.helmImage = new GUI.Inventory.Helm(this);
                    break;
                case Items.Gloves.TYPE:
                    if (this.glovesImage.block) {
                        this.guiTexture.removeControl(this.glovesImage.block);
                    }
                    this.glovesImage = new GUI.Inventory.Gloves(this);
                    break;
                case Items.Boots.TYPE:
                    if (this.bootsImage.block) {
                        this.guiTexture.removeControl(this.bootsImage.block);
                    }
                    this.bootsImage = new GUI.Inventory.Boots(this);
                    break;
                case Items.Armor.TYPE:
                    if (this.armorImage.block) {
                        this.guiTexture.removeControl(this.armorImage.block);
                    }
                    this.armorImage = new GUI.Inventory.Armor(this);
                    break;
            }
            return this;
        };
        /**
         * @param item
         * @returns {BABYLON.GUI.Image}
         */
        Inventory.prototype.createItemImage = function (item) {
            var image = new BABYLON.GUI.Image('gui.popup.image.' + item.name, 'assets/Miniatures/' + item.image + '.png');
            image.height = 0.6;
            image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;
            image.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            return image;
        };
        return Inventory;
    }(GUI.Popup));
    GUI.Inventory = Inventory;
})(GUI || (GUI = {}));
/// <reference path="Popup.ts"/>
var GUI;
(function (GUI) {
    var Quest = (function (_super) {
        __extends(Quest, _super);
        function Quest(guiMain, quest) {
            var _this = _super.call(this, guiMain) || this;
            _this.quest = quest;
            _this.name = 'Quest';
            _this.imageUrl = "assets/gui/attrs.png";
            _this.position = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            return _this;
        }
        Quest.prototype.open = function () {
            var self = this;
            this.opened = true;
            this.initTexture();
            this.guiTexture.addControl(this.container);
            this.showText();
            var buttonClose = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Close");
            buttonClose.color = "white";
            buttonClose.background = "black";
            buttonClose.width = "70px;";
            buttonClose.height = "40px";
            buttonClose.left = -60;
            buttonClose.horizontalAlignment = this.position;
            buttonClose.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonClose.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiTexture.addControl(buttonClose);
            this.guiMain.registerBlockMoveCharacter(buttonClose);
            this.buttonClose = buttonClose;
            var buttonAccept = BABYLON.GUI.Button.CreateSimpleButton("attributesButtonClose", "Accept");
            buttonAccept.color = "white";
            buttonAccept.background = "black";
            buttonAccept.width = "70px;";
            buttonAccept.height = "40px";
            buttonAccept.left = 60;
            buttonAccept.horizontalAlignment = this.position;
            buttonAccept.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
            buttonAccept.onPointerUpObservable.add(function () {
                self.close();
            });
            this.guiMain.registerBlockMoveCharacter(buttonAccept);
            this.guiTexture.addControl(buttonAccept);
        };
        Quest.prototype.close = function () {
            this.opened = false;
            this.guiTexture.dispose();
            this.buttonClose = null;
            this.guiMain.game.sceneManager.environment.ground.isPickable = true;
        };
        Quest.prototype.showText = function () {
            var title = new BABYLON.GUI.TextBlock();
            title.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            title.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            title.text = this.quest.title;
            title.color = "white";
            title.top = "0%";
            title.width = "25%";
            title.height = "10%";
            title.fontSize = 36;
            this.guiTexture.addControl(title);
            var description = new BABYLON.GUI.TextBlock();
            description.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            description.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            description.text = this.quest.description;
            description.color = "white";
            description.top = "5%";
            description.width = "25%";
            description.height = "20%";
            description.fontSize = 24;
            var awardTitle = new BABYLON.GUI.TextBlock();
            awardTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            awardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            awardTitle.text = 'Award';
            awardTitle.top = "45%";
            awardTitle.width = "25%";
            awardTitle.height = "20%";
            awardTitle.color = "green";
            awardTitle.fontSize = 36;
            this.guiTexture.addControl(awardTitle);
            var awardTitle = new BABYLON.GUI.TextBlock();
            awardTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            awardTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            awardTitle.text = this.quest.awards[0].award.name;
            awardTitle.top = "50%";
            awardTitle.width = "25%";
            awardTitle.height = "20%";
            awardTitle.color = "green";
            awardTitle.fontSize = 24;
            this.guiTexture.addControl(awardTitle);
            var image = this.guiMain.inventory.createItemImage(this.quest.awards[0].award);
            image.height = 0.4;
            this.guiTexture.addControl(image);
            this.guiTexture.addControl(description);
            var requirementsTitle = new BABYLON.GUI.TextBlock();
            requirementsTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            requirementsTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            requirementsTitle.text = 'Requirements';
            requirementsTitle.top = "15%";
            requirementsTitle.width = "25%";
            requirementsTitle.height = "20%";
            requirementsTitle.color = "red";
            requirementsTitle.fontSize = 36;
            this.guiTexture.addControl(requirementsTitle);
            var requirementsTitle = new BABYLON.GUI.TextBlock();
            requirementsTitle.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
            requirementsTitle.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_CENTER;
            requirementsTitle.text = 'Kill all bandits';
            requirementsTitle.top = "20%";
            requirementsTitle.width = "25%";
            requirementsTitle.height = "20%";
            requirementsTitle.color = "white";
            requirementsTitle.fontSize = 18;
            this.guiTexture.addControl(requirementsTitle);
        };
        return Quest;
    }(GUI.Popup));
    GUI.Quest = Quest;
})(GUI || (GUI = {}));
var Quests;
(function (Quests) {
    var Awards;
    (function (Awards) {
        var Item = (function (_super) {
            __extends(Item, _super);
            function Item(item) {
                var _this = _super.call(this) || this;
                _this.name = item.name;
                _this.award = item;
                return _this;
            }
            Item.prototype.getAward = function () {
                console.log('get award' + this.award.name);
            };
            return Item;
        }(Awards.AbstractAward));
        Awards.Item = Item;
    })(Awards = Quests.Awards || (Quests.Awards = {}));
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var KillWorms = (function (_super) {
        __extends(KillWorms, _super);
        function KillWorms(game) {
            var _this = _super.call(this, game) || this;
            _this.title = 'Bandits';
            _this.description = 'Go to portal and kill all bandits.';
            _this.awards.push(new Quests.Awards.Item(new Items.Weapons.Sword(game)));
            return _this;
        }
        return KillWorms;
    }(Quests.AbstractQuest));
    Quests.KillWorms = KillWorms;
})(Quests || (Quests = {}));
var Quests;
(function (Quests) {
    var Requirements;
    (function (Requirements) {
        var Monster = (function (_super) {
            __extends(Monster, _super);
            function Monster(monster, count) {
                var _this = _super.call(this) || this;
                _this.name = 'Kill ' + count + ' ' + monster.name + '';
                _this.requirement = monster;
                return _this;
            }
            return Monster;
        }(Requirements.AbstractRequirement));
        Requirements.Monster = Monster;
    })(Requirements = Quests.Requirements || (Quests.Requirements = {}));
})(Quests || (Quests = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Armor = (function (_super) {
        __extends(Armor, _super);
        function Armor(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @returns {number}
         */
        Armor.prototype.getType = function () {
            return Items.Armor.TYPE;
        };
        Armor.TYPE = 6;
        return Armor;
    }(Items.Item));
    Items.Armor = Armor;
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Armors;
    (function (Armors) {
        var PrimaryArmor = (function (_super) {
            __extends(PrimaryArmor, _super);
            function PrimaryArmor(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Armor';
                _this.image = 'Armor';
                _this.itemId = 1;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.mesh = game.factories['character'].createInstance('Armor');
                _this.mesh.visibility = 0;
                return _this;
            }
            return PrimaryArmor;
        }(Items.Armor));
        Armors.PrimaryArmor = PrimaryArmor;
    })(Armors = Items.Armors || (Items.Armors = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Armors;
    (function (Armors) {
        var Robe = (function (_super) {
            __extends(Robe, _super);
            function Robe(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Robe';
                _this.image = 'Armor';
                _this.itemId = 2;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.mesh = game.factories['character'].createInstance('Warrior.001');
                _this.mesh.visibility = 0;
                return _this;
            }
            return Robe;
        }(Items.Armor));
        Armors.Robe = Robe;
    })(Armors = Items.Armors || (Items.Armors = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Boots = (function (_super) {
        __extends(Boots, _super);
        function Boots(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @returns {number}
         */
        Boots.prototype.getType = function () {
            return Items.Boots.TYPE;
        };
        Boots.TYPE = 5;
        return Boots;
    }(Items.Item));
    Items.Boots = Boots;
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Boots;
    (function (Boots) {
        var PrimaryBoots = (function (_super) {
            __extends(PrimaryBoots, _super);
            function PrimaryBoots(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Boots';
                _this.image = 'Boots';
                _this.itemId = 3;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.mesh = game.factories['character'].createInstance('Boots');
                _this.mesh.visibility = 0;
                return _this;
            }
            return PrimaryBoots;
        }(Boots));
        Boots.PrimaryBoots = PrimaryBoots;
    })(Boots = Items.Boots || (Items.Boots = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Gloves = (function (_super) {
        __extends(Gloves, _super);
        function Gloves(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @returns {number}
         */
        Gloves.prototype.getType = function () {
            return Items.Gloves.TYPE;
        };
        Gloves.TYPE = 4;
        return Gloves;
    }(Items.Item));
    Items.Gloves = Gloves;
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Gloves;
    (function (Gloves) {
        var PrimaryGloves = (function (_super) {
            __extends(PrimaryGloves, _super);
            function PrimaryGloves(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Gloves';
                _this.image = 'Gloves';
                _this.itemId = 4;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.mesh = game.factories['character'].createInstance('Gloves');
                _this.mesh.visibility = 0;
                return _this;
            }
            return PrimaryGloves;
        }(Gloves));
        Gloves.PrimaryGloves = PrimaryGloves;
    })(Gloves = Items.Gloves || (Items.Gloves = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Helm = (function (_super) {
        __extends(Helm, _super);
        function Helm(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @returns {number}
         */
        Helm.prototype.getType = function () {
            return Items.Helm.TYPE;
        };
        Helm.TYPE = 3;
        return Helm;
    }(Items.Item));
    Items.Helm = Helm;
})(Items || (Items = {}));
/// <reference path="Helm.ts"/>
var Items;
(function (Items) {
    var Helms;
    (function (Helms) {
        var PrimaryHelm = (function (_super) {
            __extends(PrimaryHelm, _super);
            function PrimaryHelm(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Helm';
                _this.image = 'Helm';
                _this.itemId = 5;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.mesh = game.factories['character'].createInstance('Helm');
                _this.mesh.visibility = 0;
                return _this;
            }
            return PrimaryHelm;
        }(Items.Helm));
        Helms.PrimaryHelm = PrimaryHelm;
    })(Helms = Items.Helms || (Items.Helms = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Shield = (function (_super) {
        __extends(Shield, _super);
        function Shield(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @returns {number}
         */
        Shield.prototype.getType = function () {
            return Items.Shield.TYPE;
        };
        Shield.TYPE = 2;
        return Shield;
    }(Items.Item));
    Items.Shield = Shield;
})(Items || (Items = {}));
/// <reference path="Shield.ts"/>
var Items;
(function (Items) {
    var Shields;
    (function (Shields) {
        var BigWoodShield = (function (_super) {
            __extends(BigWoodShield, _super);
            function BigWoodShield(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Big Wood Shield';
                _this.image = 'Shield';
                _this.itemId = 6;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 10, 0, 0, 0);
                _this.mesh = _this.game.characters.player.instance('Shield', false);
                _this.mesh.visibility = 0;
                _this.mesh.scaling = new BABYLON.Vector3(1, 2, 1);
                return _this;
            }
            return BigWoodShield;
        }(Items.Shield));
        Shields.BigWoodShield = BigWoodShield;
    })(Shields = Items.Shields || (Items.Shields = {}));
})(Items || (Items = {}));
/// <reference path="Shield.ts"/>
var Items;
(function (Items) {
    var Shields;
    (function (Shields) {
        var WoodShield = (function (_super) {
            __extends(WoodShield, _super);
            function WoodShield(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Wood Shield';
                _this.image = 'Shield';
                _this.itemId = 7;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 0, 5, 0, 0, 0);
                _this.mesh = game.factories['character'].createInstance('Shield');
                _this.mesh.visibility = 0;
                return _this;
            }
            return WoodShield;
        }(Items.Shield));
        Shields.WoodShield = WoodShield;
    })(Shields = Items.Shields || (Items.Shields = {}));
})(Items || (Items = {}));
/// <reference path="../Item.ts"/>
var Items;
(function (Items) {
    var Weapon = (function (_super) {
        __extends(Weapon, _super);
        function Weapon(game) {
            return _super.call(this, game) || this;
        }
        /**
         * @returns {number}
         */
        Weapon.prototype.getType = function () {
            return Items.Weapon.TYPE;
        };
        Weapon.TYPE = 1;
        return Weapon;
    }(Items.Item));
    Items.Weapon = Weapon;
})(Items || (Items = {}));
/// <reference path="Weapon.ts"/>
var Items;
(function (Items) {
    var Weapons;
    (function (Weapons) {
        var Axe = (function (_super) {
            __extends(Axe, _super);
            function Axe(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Axe';
                _this.image = 'BigSword';
                _this.itemId = 8;
                _this.mesh = game.factories['character'].createInstance('Axe');
                _this.mesh.visibility = 0;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 10, 0, 0, 0, 0);
                _this.sfxHit = new BABYLON.Sound("Fire", "/assets/Characters/Warrior/hit.wav", _this.game.getScene(), null, {
                    loop: false,
                    autoplay: false
                });
                return _this;
            }
            return Axe;
        }(Items.Weapon));
        Weapons.Axe = Axe;
    })(Weapons = Items.Weapons || (Items.Weapons = {}));
})(Items || (Items = {}));
/// <reference path="Weapon.ts"/>
var Items;
(function (Items) {
    var Weapons;
    (function (Weapons) {
        var Sword = (function (_super) {
            __extends(Sword, _super);
            function Sword(game) {
                var _this = _super.call(this, game) || this;
                _this.name = 'Sword';
                _this.image = 'Sword';
                _this.itemId = 9;
                _this.mesh = game.factories['character'].createInstance('Sword');
                _this.mesh.visibility = 0;
                _this.statistics = new Attributes.ItemStatistics(0, 0, 0, 5, 0, 0, 0, 0);
                _this.sfxHit = new BABYLON.Sound("Fire", "/assets/Characters/Warrior/hit.wav", _this.game.getScene(), null, {
                    loop: false,
                    autoplay: false
                });
                return _this;
            }
            return Sword;
        }(Items.Weapon));
        Weapons.Sword = Sword;
    })(Weapons = Items.Weapons || (Items.Weapons = {}));
})(Items || (Items = {}));
/// <reference path="../Inventory.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var EquipBlock = (function () {
            function EquipBlock(inventory) {
                this.inventory = inventory;
            }
            /**
             * @returns {GUI.Inventory.EquipBlock}
             */
            EquipBlock.prototype.createBlockWithImage = function () {
                if (this.item) {
                    var panelItem = new BABYLON.GUI.Rectangle();
                    panelItem.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
                    panelItem.thickness = 0;
                    panelItem.width = this.blockWidth;
                    panelItem.height = this.blockHeight;
                    panelItem.top = this.blockTop;
                    panelItem.left = this.blockLeft;
                    this.inventory.guiTexture.addControl(panelItem);
                    this.block = panelItem;
                    this.createImage();
                }
                return this;
            };
            /**
             * @returns {GUI.Inventory.EquipBlock}
             */
            EquipBlock.prototype.createImage = function () {
                var self = this;
                var image = this.inventory.createItemImage(this.item);
                this.inventory.guiMain.registerBlockMoveCharacter(image);
                image.onPointerUpObservable.add(function () {
                    self.inventory.guiMain.game.player.inventory.umount(self.item);
                    self.inventory.guiTexture.removeControl(self.block);
                    self.inventory.showItems();
                    if (self.inventory.guiMain.attributesOpened) {
                        self.inventory.guiMain.attributes.refreshPopup();
                    }
                });
                this.block.addControl(image);
                return this;
            };
            return EquipBlock;
        }());
        Inventory.EquipBlock = EquipBlock;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Armor = (function (_super) {
            __extends(Armor, _super);
            function Armor(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "15%";
                _this.blockHeight = "30%";
                _this.blockTop = "-25%";
                _this.blockLeft = "-8%";
                _this.item = inventory.guiMain.player.inventory.armor;
                _this.createBlockWithImage();
                return _this;
            }
            return Armor;
        }(Inventory.EquipBlock));
        Inventory.Armor = Armor;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Boots = (function (_super) {
            __extends(Boots, _super);
            function Boots(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "4%";
                _this.blockHeight = "20%";
                _this.blockTop = "-10%";
                _this.blockLeft = "-23.5%";
                _this.item = inventory.guiMain.player.inventory.boots;
                _this.createBlockWithImage();
                return _this;
            }
            return Boots;
        }(Inventory.EquipBlock));
        Inventory.Boots = Boots;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Gloves = (function (_super) {
            __extends(Gloves, _super);
            function Gloves(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "5%";
                _this.blockHeight = "20%";
                _this.blockTop = "-11%";
                _this.blockLeft = "-4%";
                _this.item = inventory.guiMain.player.inventory.gloves;
                _this.createBlockWithImage();
                return _this;
            }
            return Gloves;
        }(Inventory.EquipBlock));
        Inventory.Gloves = Gloves;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Helm = (function (_super) {
            __extends(Helm, _super);
            function Helm(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "6%";
                _this.blockHeight = "20%";
                _this.blockTop = "-44%";
                _this.blockLeft = "-13%";
                _this.item = inventory.guiMain.player.inventory.helm;
                _this.createBlockWithImage();
                return _this;
            }
            return Helm;
        }(Inventory.EquipBlock));
        Inventory.Helm = Helm;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Shield = (function (_super) {
            __extends(Shield, _super);
            function Shield(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "6%";
                _this.blockHeight = "20%";
                _this.blockTop = "-27%";
                _this.blockLeft = "-3%";
                _this.item = inventory.guiMain.player.inventory.shield;
                _this.createBlockWithImage();
                return _this;
            }
            return Shield;
        }(Inventory.EquipBlock));
        Inventory.Shield = Shield;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
/// <reference path="EquipBlock.ts"/>
var GUI;
(function (GUI) {
    var Inventory;
    (function (Inventory) {
        var Weapon = (function (_super) {
            __extends(Weapon, _super);
            function Weapon(inventory) {
                var _this = _super.call(this, inventory) || this;
                _this.blockWidth = "6%";
                _this.blockHeight = "20%";
                _this.blockTop = "-27%";
                _this.blockLeft = "-22.5%";
                _this.item = inventory.guiMain.player.inventory.weapon;
                _this.createBlockWithImage();
                return _this;
            }
            return Weapon;
        }(Inventory.EquipBlock));
        Inventory.Weapon = Weapon;
    })(Inventory = GUI.Inventory || (GUI.Inventory = {}));
})(GUI || (GUI = {}));
