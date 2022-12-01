function Robot() {
    this.name;
    this.action;

    this.construct = function Robot(name, action) {
        this.name = name;
        this.action = action;
    }

    this.construct('Robot', 'just working.');

    this.work = function () {
        console.log('I`m ' + this.name + ' - I`m ' + this.action);
    }
}

function CoffeRobot() {
    Robot.call(this);

    this.construct('CoffeRobot', 'making coffee.');
}

function RobotDancer() {
    Robot.call(this);

    this.construct('RobotDancer', 'just dancing.');
}

function RobotCoocker() {
    Robot.call(this);

    this.construct('RobotCoocker', 'just cooking.');
}

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