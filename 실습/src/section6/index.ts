/** @format */

class User {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`${this.name}아 안녕!`);
  }
}

const user1 = new User("재환", 27);

user1.sayHi();

class Developer extends User {
  skills: string[];

  constructor(name: string, age: number, skills: string[]) {
    super(name, age);
    this.skills = skills;
  }

  saySkills() {
    console.log(`난 ${this.skills} 사용 할 줄 안1ㅏ`);
  }
}

const developer1 = new Developer("재환", 27, ["javascript", "typescript"]);

developer1.saySkills();
