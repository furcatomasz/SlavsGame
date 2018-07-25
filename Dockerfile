FROM node:6

USER root

RUN mkdir /data

WORKDIR /data

RUN npm install -g bower
RUN npm install -g browser-sync
RUN npm install -g gulp
RUN npm install -g gulp-typescript
RUN npm install -g typescript

WORKDIR /usr/app/

RUN npm install gulp
RUN npm install browser-sync
RUN npm install gulp-typescript
RUN npm install typescript
