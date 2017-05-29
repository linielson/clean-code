var person_name = "Linielson";

function name() {
  return person_name;
}

function setName(name){
  person_name = name;
}

var person = new Person("Linielson", "Rosa");
var last_name = person.lastName();
