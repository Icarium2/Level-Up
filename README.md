![](https://media0.giphy.com/media/9AooPIXbwxI40/giphy.gif?cid=ecf05e47v7wycaec03ddh4s2waezqop0kmu33gkv1qe4f1tb&rid=giphy.gif&ct=g)

# Dungeon Quest

Yrgo Web Developers class of 2020's final school project for the term.
We decided to make a top down rpg rogue-like game using Phaser.js and Javascript.

Try the demo here: https://dungeonrunner.netlify.app

# Installation

Clone the repository to a local folder and open the command-line and CD into the folder.
Then run the following commands:
`npm install`
`npm run dev`

# Changelog

- [#1 - Added a title screen](https://github.com/Icarium2/Level-Up/pull/1/commits/241cf2586a7f0d354492bea0ba19c1b99618a941)
- [#2 - Added the first tilemap and cleaned up some code](https://github.com/Icarium2/Level-Up/pull/3/commits/c9380b0cf1a49156f9eca94caaaf83b33e2ae6b9)
- [#3 - Added a bigger map to test characters on](https://github.com/Icarium2/Level-Up/pull/4/commits/01d961a0e1741dce4e153431a71f868cc377da79)
- [#4 - Added spritesheet and moving-physics to sprite](https://github.com/Icarium2/Level-Up/pull/5/commits/81e4164b270baab6a64baf04f090adb4b6915096)
- [#5 - Added working .dist and changed terser-versions to fix compatibility issues](https://github.com/Icarium2/Level-Up/pull/6/commits/a550ab51ebb8d0d6b29a69a37d8dcbe47a8ac1d8)
- [#6 - Added a healthbar](https://github.com/Icarium2/Level-Up/pull/7/commits/6ec5ab3da1bf80e4816541194a90c56a089d0eaf)
- [#7 - Bug fixes](https://github.com/Icarium2/Level-Up/pull/9/commits/82e28a4a68342372c9cd47e8c879a7e9545ca569)
- [#8 - Added audio to game-scene + added animation to weapon](https://github.com/Icarium2/Level-Up/pull/10/commits/6d592870dbb1eb2cbc699ee66792499e131d3447)
- [#9 - Added rotation on weapon](https://github.com/Icarium2/Level-Up/pull/11/commits/992625720ffdb8e8d101d1089648e16a65e0d05f)
- [#10 - Added healthbar, changed from webpack to vite + weapon throw starts from sprite and is thrown in direction sprite is facing](https://github.com/Icarium2/Level-Up/pull/12)
- [#11 - Added loss of life when colliding with enemies, and a game clock](https://github.com/Icarium2/Level-Up/pull/13/commits/1c3db19349593d3b229607c7fb24c7e7d89916a3)
- [#12 - Added enemy movement added, enemy sprite changed + new tilemap and collision added](https://github.com/Icarium2/Level-Up/pull/15/commits)
- [#13 - Added public folder and gameover screen, deleted unused images](https://github.com/Icarium2/Level-Up/pull/16/commits)
- [#14 - Added new sizing on titlescreen, gameover screen + controls](https://github.com/Icarium2/Level-Up/pull/17/commits/bbe8a638f712337940d87b5e9816eda3b2186823)
- [#15 - Code review was added](https://github.com/Icarium2/Level-Up/pull/18/commits/d296186c146a60ebd8c9106697c398752096e2c2)
- [#16 - Added new throwing star](https://github.com/Icarium2/Level-Up/pull/19/commits/e60d6cab01f7ecfb5488b4baee29ecf688fb3d8c)
- [#17 - Added more enemies](https://github.com/Icarium2/Level-Up/pull/20/commits/e8a6c22626844d40e15c88a86e48a49c247492de)
- [#18 - Fixed some naming conventions](https://github.com/Icarium2/Level-Up/pull/21/commits/4af46d0bfe66fd54724e41eabbfd1455e65dd996)
- [#19 - Added sound effects and finishing touches](https://github.com/Icarium2/Level-Up/pull/22/commits/e97986507a4472ed01f290faee390fa6aefbac8f)

# Code Review by Gilda Ahmadniaye Jourshary and Emil Pettersson

1. Can’t shoot without moving at the same time

2. Could add the 'dist' folder in .gitignore

3. game.js: 122-123 left over console.log 

4. game.js:96-98 const or let is recommended over var.

5. How do you kill the enemy?
 
6. Hearts(life) is very small, could be nice to have it bigger so you notice that you’re losing health 

7. Would also be nice to have some type of indication that you lose health by the monster

8. The audio music is cool and sets a spooky mood, eerie and nice. Sometimes the music restarts over eachother and it plays again over the current track? Not sure if it’s just for me or not. 

9. Favicon is missing

10. No support for mobile

# Testers

Tested by the following people:


1. Rikard Segerqvist
2. Martin Hansson
3. Jacob Gustavsson
4. Felix Östergren
5. Gilda Ahmadniaye Jourshary
6. Emil Pettersson


Tested by the following muggles (non-coders):

1. Caroline Olinder
2. Melvin Gustavsson
3. Nils Hjalmarsson
4. Peter Larsson

```

```
