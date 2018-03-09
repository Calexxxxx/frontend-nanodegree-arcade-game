# frontend-nanodegree-arcade-game

Students should use this [rubric](https://review.udacity.com/#!/projects/2696458597/rubric) for self-checking their submission. Make sure the functions you write are **object-oriented** - either class functions (like Player and Enemy) or class prototype functions such as Enemy.prototype.checkCollisions, and that the keyword 'this' is used appropriately within your class and class prototype functions to refer to the object the function is called upon. Also be sure that the **readme.md** file is updated with your instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

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
