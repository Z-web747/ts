function sayHello(person: string){
  return 'Hello' + person
}
// console.log(sayHello([123]))
// 原始数据类型
let isDnoe: boolean = false
console.log(isDnoe)
// let createdByNewBoolean: boolean = new Boolean(true)
// console.log(createdByNewBoolean)
let count: number = 100
console.log(count)
let str: string = 'string'
let templateStr: string = `hello,${str}`
console.log(str);
console.log(templateStr);

let _null: null = null
let _undefined: undefined = undefined
console.log(_null, _undefined);
// let sum = 0
// sum = '123'
let some
some = 120
some = '123'
let unionTypes: string | number
unionTypes = 'str'
// unionTypes = false
unionTypes.length
unionTypes = 123

interface Person{
  name: string;
  readonly id: number;
  [propName: string]:any;
}
const tom: Person = {
  name: 'tom',
  hobby: 'ok',
  id: 100
}
const numarr: Person[] = [{name: 'jogn', id: 1}]
// numarr.push('1')
console.log(numarr)

const personArr: Array<Person> = [{name: 'li', id: 1}]
const anyArr: any[] = [1,{},'2', false]

function sum(x:number, y: number): number{
  return x + y
}
const sums = function(x:number,y:number): number{
  return 1
}

const mySum: (x:number,y:number) => number = function(x:number, y: number): number{
  return 1
}
// 用接口定义函数的形状
interface SearchFunc {
  (source: string, substring: string): boolean
}

const mySearch: SearchFunc = function(source: string, substring: string){
  return source.indexOf(substring) === -1
}
function getName(firstName: string, lastName?: string, thirdName?: string): string{
  if(lastName){
     return firstName + lastName+ thirdName
  }else{
    return firstName
  }
}
getName('张','三','s')

function buildName( last: string = '史密斯', first: string, ){
  return first + last
}

function push(arr: any[], ...rest: any[]){
  console.log(arr, rest)
}
push([1,2,3], 'a','b', 'c')
enum Week {
  one,
  two,
  three,
  four
}
console.log(Week['0']==='one')

class Animal {
  public name;
  constructor(name) {
      this.name = name;
  }
  sayHi() {
      return `My name is ${this.name}`;
  }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack