var GuessStatisticsMessage = function() {
  var number;
  var verb;
  var pluralModifier;

  var _make = function(candidate, count) {
    createPluralDependentMessageParts(count);
    return format(candidate);
  };

  function createPluralDependentMessageParts(count) {
    if (count == 0) {
      thereAreNoLetters();
    } else if (count == 1) {
      thereIsOneLetter();
    } else {
      thereAreManyLetters(count);
    }
  }

  function thereAreNoLetters() {
    number = "no";
    verb = "are";
    pluralModifier = "s";
  }

  function thereIsOneLetter() {
    number = "1";
    verb = "is";
    pluralModifier = "";
  }

  function thereAreManyLetters(count) {
    number = count.toString();
    verb = "are";
    pluralModifier = "s";
  }

  function format(candidate) {
    return `There ${verb} ${number} ${candidate}${pluralModifier}`;
  }

  return {
    make: _make
  }
};
