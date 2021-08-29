var mouse = { sound: "mow" };
// Object.freeze(mouse);
// Object.seal(mouse);

mouse.talk = function () {
  console.log(this.sound);
};

var reuslt = mouse.talk;

console.log("mouse.talk", mouse.talk);
