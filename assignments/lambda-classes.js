// CODE here for your Lambda Classes

//Person-Base Class
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  
  speak() {
    return`Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}
  
//Instructor
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
      
  demo(subject) {
    return`Today we are learning about ${subject}`;
  }

  grade(student) {
    return`${this.name} receives a perfect score on ${subject}`;
  }
}
  
//Student
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listSubjects() {
    let result = "";
    this.favSubjects.forEach(function(subject) { 
        result = `${result}${subject}\n`;
    });

    return result;
  }
  
  PRAssignment(subject) {
    return`${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return`${this.name} has begun sprint challenge on ${subject}`;
  }
}
  
//Project Manager
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(slackChannel) {
    return `${this.name} announces to ${slackChannel}, @channel standy times!`; 
  }

  debugsCode(student, subject) {
    return`${this.name} debugs ${student}'s code on ${subject}`; 
  }
}
  
  
//New Instructor
const fred = new Instructor ({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
})

const marc = new Instructor ({
  name: 'Marc',
  location: 'Los Angeles',
  age: 44,
  favLanguage: 'Erlang',
  specialty: 'SaaS',
  catchPhrase: 'Deploy often'
})
  
//New Student
const lisa = new Student ({
  name: 'Lisa',
  location: 'Los Angeles',
  age: 40,
  favLanguage: 'Still deciding',
  specialty: 'Front-end eventually',
  catchPhrase: `Don't have one`,
  previousBackground: 'Stay at home mom',
  className: 'WebPT7',
  favSubjects: ['CSS', 'HTML', 'JS']
 })
  
//New PM
const jasmine = new ProjectManager ({
  name: 'Jasmine',
  location: 'Texas',
  age: 23,
  favLanguage: 'Javascript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`,
  gradClassName: 'Web5',
  favInstructor: 'Dan Frehner'
})
  
// console.log(fred.speak());
// console.log(fred.demo('HTML'));

//console.log(marc.speak());
//console.log(marc.demo('HTML'));

// console.log(lisa.PRAssignment('JS'));
//console.log(lisa.listSubjects());
//console.log(lisa.sprintChallenge('JS'));

//console.log(jasmine.standUp('web help'));
console.log(jasmine.debugsCode('Lisa', 'JS'));