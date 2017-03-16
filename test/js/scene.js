window.addEventListener('DOMContentLoaded', function(){
  // get the canvas DOM element
  var canvas = document.getElementById('renderCanvas');

  // load the 3D engine
  var engine = new BABYLON.Engine(canvas, true);

  // createScene function that creates and return the scene
  var createScene = function(callback){
    // create a basic BJS Scene object
    var scene = new BABYLON.Scene(engine);

    var scene_builder = new SceneBuilder(scene, canvas);


    scene_builder.onSuccess = function(scene){
      callback(scene);
    }

    scene_builder.build();
  }

  var start_render_loop = function(scene){
    console.log("START RENDER LOOP");

    // run the render loop
    engine.runRenderLoop(function(){
        scene.render();
    });

    // the canvas/window resize event handler
    window.addEventListener('resize', function(){
        engine.resize();
    });
  }

  // call the createScene function
  createScene(start_render_loop);
});
