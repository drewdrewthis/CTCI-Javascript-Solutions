/* 9.2 Imagine a robot sitting on the upper left corner of an X by Y grid. 
The robot can only move in two directions: right and down. How many possible paths 
are there for the robot to go from (0,0) to (X,Y)?
FOLLOW UP
Imagine certain spots are "off limits," such that the robot cannot step on them. 
Design an algorithm to find a path for the robot from the top left to the bottom right.
*/

'use strict';

function path(xS, yS, xF, yF) {
	if(xS > xF || yS < yF) return -1;
	if(xS === xF || yS === yF) return 1;
	return  path(xS + 1, yS, xF, yF) +
			path(xS, yS - 1, xF, yF);
}

console.log(path(0,0,2,-2));

var paths = {};
function path1(xS, yS, xF, yF) {
	if(xS > xF || yS < yF) return -1;
	if(xS === xF || yS === yF) return 1;
	if(paths[xS + "," + yS]) return paths[xS + "," + yS];
	paths[xS + "," + yS] = 	path1(xS + 1, yS, xF, yF) +
							path1(xS, yS - 1, xF, yF);
	//console.log(paths);					
	return paths[xS + "," + yS];
}
//console.log(paths);

console.log(path1(0,0,2,-2));

paths = {};
function path2(xS, yS, xF, yF, noGo) {
	if(xS > xF || yS < yF) return -1;
	//console.log("[" + (xS).toString() + "," + (yS).toString() + "]")
	if(noGo.indexOf("[" + (xS).toString() + "," + (yS).toString() + "]") >= 0) return 0;
	if(xS === xF || yS === yF) return 1;
	if(paths[xS + "," + yS]) return paths[xS + "," + yS];
	paths[xS + "," + yS] = 	path2(xS + 1, yS, xF, yF, noGo) +
							path2(xS, yS - 1, xF, yF, noGo);
	return paths[xS + "," + yS];
}
//console.log(("[" + "1" + "," + "-1" + "]").indexOf("[1,-1]"));
console.log(path2(0,0,2,-2,["[1,-1]"]));

