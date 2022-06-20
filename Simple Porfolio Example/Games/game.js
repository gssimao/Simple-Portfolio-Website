/*
game.js for Perlenspiel 3.3.x
Last revision: 2018-10-14 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-18 Worcester Polytechnic Institute.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
By default, all event-handling function templates are COMMENTED OUT (using block-comment syntax), and are therefore INACTIVE.
Uncomment and add code to the event handlers required by your project.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these lines.
*/

/* jshint browser : true, devel : true, esversion : 5, freeze : true */
/* globals PS : true */

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.init() event handler:



// PS.init = function( system, options ) {
// 	"use strict"; // Do not remove this directive!

// 	// Uncomment the following code line
// 	// to verify operation:

// 	// PS.debug( "PS.init() called\n" );

// 	// This function should normally begin
// 	// with a call to PS.gridSize( x, y )
// 	// where x and y are the desired initial
// 	// dimensions of the grid.
// 	// Call PS.gridSize() FIRST to avoid problems!
// 	// The sample call below sets the grid to the
// 	// default dimensions (8 x 8).
// 	// Uncomment the following code line and change
// 	// the x and y parameters as needed.

// 	 PS.gridSize( 32, 32 );

// 	// This is also a good place to display
// 	// your game title or a welcome message
// 	// in the status line above the grid.
// 	// Uncomment the following code line and
// 	// change the string parameter as needed.

// 	 PS.statusText( "Game Start" );
// 	// Add any other initialization code you need here.
// };




//PS.touch ( x, y, data, options )
//Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
//This function doesn't have to do anything. Any value returned is ignored.
//[x : Number] = zero-based x-position (column) of the bead on the grid.
//[y : Number] = zero-based y-position (row) of the bead on the grid.
//[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
//[options : Object] = A JavaScript object with optional data properties; see API documentation for details.


// UNCOMMENT the following code BLOCK to expose the PS.touch() event handler:



PS.touch = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line
	// to inspect x/y parameters:

	 //PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.
	
	//PS.color(x, y, PS.COLOR_BLUE);
	//PS.audioPlay("fx_click");
	//PS.glyph(x,y,"p")
	
	
	if (x>=36 && y>=36)
	{
		
	}

};

// var Tamplate fuction = function (x,y, mytimer)
// {
	
// }



/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.release() event handler:

/*

PS.release = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

*/

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.enter() event handler:

/*

PS.enter = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

*/

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.exit() event handler:

/*

PS.exit = function( x, y, data, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

*/

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.exitGrid() event handler:

/*

PS.exitGrid = function( options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

*/

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.keyDown() event handler:

var Game = ( function () {
	var WIDTH = 32; // width of grid
	var HEIGHT = 32; // height of grid
   
	var COLOR_LED = PS.COLOR_GREEN; // LEDD color
	var COLOR_FLOOR = PS.COLOR_BLACK; // floor color
	var COLOR_SNAKE = PS.COLOR_RED; // SNAKE color
	var COLOR_GOLD = PS.COLOR_YELLOW;
	var COLOR_OFF = PS.COLOR_BLUE;

	var LED_x = 18; // current x-pos of LED
	var LED_y = 16; // current y-pos of LED

	var RED1_x = 16; // current x-pos of LED
	var RED1_y = 1; // current y-pos of LED

	var RED2_x = PS.random( WIDTH ) - 1; // current x-pos of LED
	var RED2_y = 1; // current y-pos of LED

	var complete=0;
	var lvlReset = false;
	var hardMode = false;
	var impossibleMode = false;
	var SwitchColor = false;
	var impMode = 0;
	var odd;
	var odd2;
	var StepCount = 0;
	var totalSteps = 0;
	var count = 0;
	var currentlvl = 5;
	
	var colors = [
		COLOR_SNAKE, COLOR_FLOOR, COLOR_GOLD, COLOR_LED
	   ];

	var map = [
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
		0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0,
		0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,
		0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
		0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0,
		0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0,
		0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0,
		0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	   ];

	   map2 = [
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 2, 1, 1, 0,
		0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0,
		0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0,
		0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 2, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
		0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0,
		0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,
		0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0,
		0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0,
		0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0,
		0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0,
		0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
		0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 2, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 2, 1, 0,
		0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
	   ];
	   
	   // Draw layout based on map array
	   
	   var draw_map = function () {
		var x, y, data, color;
			for ( y = 0; y < HEIGHT; y += 1 )
			{
				for ( x = 0; x < WIDTH; x += 1 ) 
				{
					if (impossibleMode == false)
					{
						data = map [ ( y * WIDTH ) + x ];
						data = map [ ( y * WIDTH ) + x ];
						PS.color( x, y, colors[ data ] );
					}
					else
					{
						data = map2 [ ( y * WIDTH ) + x ];
						data = map2 [ ( y * WIDTH ) + x ];
						PS.color( x, y, colors[ data ] );
					}
					
				}
			}
	   };

	var exports = {

		// Game.init()
		// Initializes the game
	   
		init : function () {
		PS.gridSize( WIDTH, HEIGHT ); // init grid
		PS.color( PS.ALL, PS.ALL, COLOR_FLOOR );
		PS.border( PS.ALL, PS.ALL, 0 ); // no borders
	   
		draw_map();

		// Enclose edges of grid with black walls.
		// PS.ALL lets us draw the top, bottom,
		// left and right edges with a single
		// PS.color() call for each edge.
	   
		PS.color( PS.ALL, 0 , COLOR_SNAKE );
		PS.color( PS.ALL, 31, COLOR_SNAKE );
		PS.color( 0 , PS.ALL, COLOR_SNAKE );
		PS.color( 31, PS.ALL, COLOR_SNAKE );
		PS.statusText( "Avoid Red squares and grab the coins" );

	   
		PS.color( LED_x, LED_y, COLOR_LED );
		PS.color( RED1_x, RED1_y, COLOR_SNAKE );
		},
			
		move : function ( h, v ) 
		{
			
			StepCount++;
			PS.statusText( StepCount + " Steps" );

			var nx, ny;
			
			if(h == 1 || h == -1)
			{
				if(hardMode == true)
				{
					Game.CreateReds();
				}
			}
			if(impossibleMode === true)
				{
					
					if(count >= 0)
					{
						count++
						if(count == 2)
						{
							count = -2;
						}
						
						SwitchColor = false;
					}
					else if(count <= 0)
					{
						SwitchColor = true;
						count++;
					}

					if (impossibleMode == true)
					{
						for ( y = 0; y < HEIGHT; y += 1 )
						{
							for ( x = 0; x < WIDTH; x += 1 ) 
							{
								if((PS.color( x, y ) === COLOR_OFF) && (SwitchColor == false))
								{
									PS.color( x, y, COLOR_GOLD);
									
								}else
								if((PS.color( x, y ) === COLOR_GOLD) && (SwitchColor == true))
								{
									PS.color( x, y, COLOR_OFF);
									
								}
								
							}
							
					
						}
					}
					
				}

			 nx = LED_x + h;
			 ny = LED_y + v;
					

			 
			if ( PS.color( nx, ny ) === COLOR_GOLD ) 
			{
				complete++
				PS.statusText( 5- complete + " Left" );
				if(complete == 4)
				{
					PS.color( 12,13, COLOR_FLOOR  );
					PS.color( 13,13, COLOR_FLOOR  );
					PS.color( 14,13, COLOR_FLOOR  );
					PS.color( 12,14, COLOR_FLOOR  );
					PS.color( 14,14, COLOR_FLOOR  );
					PS.color( 12,15, COLOR_FLOOR  );
					PS.color( 13,15, COLOR_FLOOR  );
					PS.color( 14,15, COLOR_FLOOR  );
					PS.color( 13,14, COLOR_GOLD  );
				}
				if(complete == currentlvl)
				{
						PS.statusText("You Won with "+ StepCount + "| Hard Mode On" );
						lvlReset = true;
					
					if(lvlReset === true)
			 		{
						hardMode = true
						impMode++; 
						
						if(impMode == 2)
						{
							
							impossibleMode = true;
							currentlvl = 9;
							PS.statusText( "Steps"+ StepCount + " IMPOSSIBLE MODE ON" );
						} else
						if(impMode >= 3)
						{
							impossibleMode = true;
							PS.statusText( "CONGRATULATIONS! TotalSteps = "+ totalSteps);
						}
						totalSteps += StepCount;
						StepCount=0;
						draw_map();
						PS.color( LED_x, LED_y, COLOR_FLOOR );
						LED_x = 18;
						LED_y = 16;
						PS.color( LED_x, LED_y, COLOR_LED );
						lvlReset = false;
						complete = 0;
					 }
					 
					 return;
				}
				
			}
			if ( PS.color( nx, ny ) === COLOR_SNAKE ) 
			{
				PS.statusText( "Try again" );
				lvlReset = true;
			
				if(lvlReset === true)
			 	{
					totalSteps += StepCount;
					StepCount=0;
					draw_map();
					PS.color( LED_x, LED_y, COLOR_FLOOR );
					LED_x = 18;
					LED_y = 16;
					PS.color( LED_x, LED_y, COLOR_LED );
					lvlReset = false;
					complete = 0;
				 }
				 return;
			}
			if(PS.color( nx, ny ) === COLOR_OFF)
			{
				return;	
			}
			if ( PS.color( nx, ny ) === COLOR_GOLD ) 
			{
				if(hardMode === true)
				{
					// clear spost around the gold 
					PS.color( 2, 30, COLOR_FLOOR );
					PS.color( 2, 29, COLOR_FLOOR );
					PS.color( 2, 28, COLOR_FLOOR );
					PS.color( 3, 28, COLOR_FLOOR );
					PS.color( 3, 30, COLOR_FLOOR );
					PS.color( 4, 30, COLOR_FLOOR );
					PS.color( 4, 29, COLOR_FLOOR );
					PS.color( 4, 28, COLOR_FLOOR );

					PS.color( 30, 30, COLOR_FLOOR );
					PS.color( 30, 29, COLOR_FLOOR );
					PS.color( 30, 28, COLOR_FLOOR );
					PS.color( 29, 30, COLOR_FLOOR );
					PS.color( 29, 28, COLOR_FLOOR );
					PS.color( 28, 30, COLOR_FLOOR );
					PS.color( 28, 29, COLOR_FLOOR );
					PS.color( 28, 28, COLOR_FLOOR );

					PS.color( 1, 1, COLOR_FLOOR );
					PS.color( 1, 2, COLOR_FLOOR );
					PS.color( 1, 3, COLOR_FLOOR );
					PS.color( 2, 1, COLOR_FLOOR );
					PS.color( 2, 3, COLOR_FLOOR );
					PS.color( 3, 1, COLOR_FLOOR );
					PS.color( 3, 2, COLOR_FLOOR );
					PS.color( 3, 3, COLOR_FLOOR );

					PS.color( 29, 1, COLOR_FLOOR );
					PS.color( 29, 2, COLOR_FLOOR );
					PS.color( 29, 3, COLOR_FLOOR );
					PS.color( 28, 1, COLOR_FLOOR );
					PS.color( 28, 3, COLOR_FLOOR );
					PS.color( 27, 1, COLOR_FLOOR );
					PS.color( 27, 2, COLOR_FLOOR );
					PS.color( 27, 3, COLOR_FLOOR );

				}
			}

			if ( ( nx < 0 ) || ( nx >= WIDTH ) ||
			( ny < 0 ) || ( ny >= HEIGHT ) ) 
			{
				 return;
			}
			
	
			PS.color( LED_x, LED_y, COLOR_FLOOR );
			PS.color ( nx, ny, COLOR_LED );
	
			LED_x += h;
			LED_y += v; 
		},

		CreateReds : function () 
		{
			
			var RED1_x = PS.random( WIDTH ) - 1; 
			var RED1_y = PS.random( HEIGHT ) - 1;

			var RED2_x = PS.random( WIDTH ) - 1; 
			var RED2_y = PS.random( HEIGHT ) - 1; 

			var RED3_x = PS.random( WIDTH ) - 1; 
			var RED3_y = PS.random( HEIGHT ) - 1; 
			
			if(PS.color( RED1_x, RED1_y ) === COLOR_FLOOR )
			{
				PS.color( RED1_x, RED1_y, COLOR_SNAKE );
			}

			if(PS.color( RED2_x, RED2_y ) === COLOR_FLOOR )
			{
				if(odd == 0)
				{
					odd++;
					PS.color( RED2_x, RED2_y, COLOR_SNAKE );
				} 
				else
					odd=0;
				
			}
			if(impossibleMode === true)
			{
				if(PS.color( RED3_x, RED3_y ) === COLOR_FLOOR )
				{
					if(odd2 == 0)
					{
						PS.color( RED3_x, RED3_y, COLOR_SNAKE );
					}
					else
					odd2 = 0;
				}
			}
			
			

		}

	
	};
	
	
	return exports;

} () );


PS.init = Game.init;

		PS.keyDown = function( key, shift, ctrl, options ) 
		{
			switch ( key ) 
			{
				case PS.KEY_ARROW_UP:
				case 119:
				case 87: 
				{
					Game.move( 0 , -1 ); // move UP (v = -1)
					Game.CreateReds();
					
					break;
				}
				case PS.KEY_ARROW_DOWN:
				case 115:
				case 83: 
				{
					Game.move( 0 , 1 ); // move DOWN (v = 1)
					Game.CreateReds();
					break;
				}
				case PS.KEY_ARROW_LEFT:
				case 97:
				case 65: 
				{
					Game.move( -1, 0 ); // move LEFT (h = -1)
					//Game.CreateReds();
					break;
				}
				case PS.KEY_ARROW_RIGHT:
				case 100:
				case 68: 
				{
					Game.move( 1, 0 ); // move RIGHT (h = 1)
					//Game.CreateReds();
					break;
				}
			}
			
		};
	







/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

// UNCOMMENT the following code BLOCK to expose the PS.keyUp() event handler:

/*

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

*/

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

// UNCOMMENT the following code BLOCK to expose the PS.input() event handler:

/*

PS.input = function( sensors, options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

*/

/*
PS.shutdown ( options )
Called when the browser window running Perlenspiel is about to close.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: This event is generally needed only by applications utilizing networked telemetry.
*/

// UNCOMMENT the following code BLOCK to expose the PS.shutdown() event handler:

/*

PS.shutdown = function( options ) {
	"use strict"; // Do not remove this directive!

	// Uncomment the following code line to verify operation:

	// PS.debug( "“Dave. My mind is going. I can feel it.”\n" );

	// Add code here to tidy up when Perlenspiel is about to close.
};

*/
