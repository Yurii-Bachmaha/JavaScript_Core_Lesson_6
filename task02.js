function Robot() {
    this.name;
    this.action;
}

Robot.prototype.construct = function Robot(name, action) {
    this.name = name;
    this.action = action;
}

Robot.prototype.construct('Robot', 'just working.');

Robot.prototype.work = function () {
    console.log('I`m ' + this.name + ' - I`m ' + this.action);
}

function CoffeRobot() { }
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.construct = CoffeRobot;
CoffeRobot.prototype.construct('CoffeRobot', 'making coffee.');

function RobotDancer() { }
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.construct = RobotDancer;
RobotDancer.prototype.construct('RobotDancer', 'just dancing.');

function RobotCoocker() { }
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.construct = RobotCoocker;
RobotCoocker.prototype.construct('RobotCoocker', 'just cooking.');

let robot = new Robot;
let coffeRobot = new CoffeRobot;
let robotDancer = new RobotDancer;
let robotCoocker = new RobotCoocker;

robot.work();
coffeRobot.work();
robotDancer.work();
robotCoocker.work();

console.log();

let robotArray = [];
robotArray.push(robot, coffeRobot, robotDancer, robotCoocker);

for (let i = 0; i < robotArray.length; i++) {
    robotArray[i].work();
}