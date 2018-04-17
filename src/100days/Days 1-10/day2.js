/* Golf Code Challenge 
Your function will be passed par and strokes arguments. 
Return the correct string according to this table which lists 
the strokes in order of priority; top (highest) to bottom (lowest): */

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else {
        return "Go Home!";
    }    // Only change code above this line
}
// Change these values to test
golfScore(5, 4);


