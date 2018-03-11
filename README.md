# Classic arcade game clone

This project is part of the Udacity Google front-end developer NanoDegree Scholarschip.
The goal was to build a clone of the game frogger.

When playing the game you have to reach the castle gates without getting hit by one of the enemies.
Enemies spawn with random speeds and the higher level you reach the more enemies there will be.

## Installation

first clone or fork the repo
`git clone https://github.com/Calexxxxx/frontend-nanodegree-arcade-game.git` and `cd frontend-nanodegree-arcade-game`

install all packages
`npm i` or `npm install`

to start the server
`npm start`
this will start up the server and open the game in the browser under **localhost:3000**
the game will be served from the docs folder **Do Not Change AnyThing In Here**

If you want to make changes to the game do this in the src folder.

## Playing the game

[Live Version](https://calexxxxx.github.io/frontend-nanodegree-arcade-game/)

first you will see a select your avatar screen where you will need to select an avatar to play with.
You can select an avatar by using your right and left arrow key on the keyboard.
Once you selected the desired avatar you can use enter to start the game.

In the game you can navigate your avatar useing up, down, left and right arrow keys on your keyboard.
Your avatar can not move into water, bushes, hill's or wall's.
The goal is to navigate your avatar to the castle gates without being hit by an enemy.

If you are being hit by an enemy you will lose one life once all your lifes are gone you will be game over.
Once during the game you will get a life refill try to grab it and refill your lifes.

## dependencies

* babel-cli
* babel-core
* babel-preset-env
* browser-sync
* gulp
* gulp-babel
* gulp-gh-pages

## art work

the art-work used in the game is bought at [shutterstock](https://www.shutterstock.com) and adjusted with [affinity desinger](https://affinity.serif.com/en-gb/).

## engine.js

The original engine file from [udacity](https://github.com/udacity/frontend-nanodegree-arcade-game) has been edited.
