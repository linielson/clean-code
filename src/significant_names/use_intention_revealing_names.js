var elapsedTimeInDays;
var daysSinceCreation;
var daysSinceModification;
var fileAgeInDays;

function getFlaggedCells(gameBoard) {
  var flaggedCells = [];
  for (var cell in gameBoard) {
    if (flagged(cell)) {
      flaggedCells.push(cell);
    }
  }
  return flaggedCells;
}
