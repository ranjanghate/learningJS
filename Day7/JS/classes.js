// Class in Javascrip

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  portfolio(){
    return `My name is ${this.name} and I have experience of ${this.experience} YOE in ${this.division} field `
  }

  static aboutClass() {
    return 'this is Employee Class';
  }
}

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, givenLanguage, givenProfile) {
    super(givenName, givenExperience, givenDivision);
    this.language = givenLanguage;
    this.profile = givenProfile;
  }

  tech_portfolio() {
    return `My Favourate Lanugage is ${this.language} and my account name is ${this.profile}`;
  }

  static aboutClass() { // rewriting the static method of employee class
    return 'this is Programmer Class';
  }
}

e = new Employee('alex', '3', 'technical');
console.log(e.portfolio());

console.log(Employee.aboutClass());

p = new Programmer('vix', '5', 'technical', 'C++', 'vix450');
console.log(p.portfolio());
console.log(p.tech_portfolio());
console.log(Programmer.aboutClass());
