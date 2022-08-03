class Person {
  constructor(name){
    this.name = name
  }
  name = '类内部变量'
}
const person = new Person('constructor内部name')
console.dir(person.name);