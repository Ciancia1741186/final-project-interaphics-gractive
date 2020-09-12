# Interactive Graphics' Final Project - Three Fighter
*Developed by Ciancia Marco*

![Alt text](https://github.com/SapienzaInteractiveGraphicsCourse/final-project-interaphics-gractive/blob/master/Img/title.jpg)

Game based on the famous fighting-game series Street Figther.
The goal of this project is to recreate a very basic experience of what a fighting game has to offer:
- two player , each with his personal life bar
- a 2D stage
- the first that takes down the other by consuming his life bar with punch and kicks win !

## Launching the game

In order to try the game, you just need to click on the following [**LINK**](https://sapienzainteractivegraphicscourse.github.io/final-project-interaphics-gractive/index.html).

If you want to launch the game locally on your pc, you need to run it on a local server (for example using IntelliJ, Visual Studio Code using Live Server extension, python command line).

If you cloned the repository, in order to play the game you need to open the "index.html" file on an internet browser (Chrome, Firefox...) with a background local server running as explained before.

## Controls

* **RED**
> **Q:** dash forward
> **W:** dash back
> **S:** punch
> **D:** kick

* **BLUE**
> **O:** dash forward
> **P:** dash back
> **K:** punch
> **J:** kick

## Built With

* [Three.js](https://threejs.org/) - Use for build models and scene
* [Tween.js](https://github.com/tweenjs/tween.js) - Used for smooth animations

## Documentation

For more details about how the project has been developed please refers to the [report file](https://github.com/SapienzaInteractiveGraphicsCourse/final-project-interaphics-gractive/blob/master/Progetto_IG.pdf).

## Known Issues

* Sometimes it may happen that the animations overlap eache other is not register right, for example a kick may hit you during a back dash and take off you hp but it looks like the game doesn't recognize it and does not play the hit animation making the player able to move freely and "punish on hit" the other one.
* Audio doesn't work if the level page is simply refreshed; if the console outputs audio error, you need to go back to the start screen and reload the level.

## Author

* **Ciancia Marco** - [GitHub profile](https://github.com/Ciancia1741186)

If you want to download this project or make any use, please ask first to:
* marco_ciancia@hotmail.it
