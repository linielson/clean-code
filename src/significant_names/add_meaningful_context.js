var PrintGuessStatistics = function(candidate, count) {
  var number;
  var verb;
  var pluralModifier;

  if (count == 0) {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  } else if (count == 1) {
    number = "1";
    verb = "is";
    pluralModifier = "";
  } else {
    number = parseInt(count);
    verb = "are";
    pluralModifier = "s";
  }

  var guessMessage = format("There %s %s %s%s", verb, number, candidate, pluralModifier);
  print(guessMessage);
};
