(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  names.forEach(function (name) {
    if (name[0] === 'J' || name[0] === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  });
})();
