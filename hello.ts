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
tom.id = 1000
console.log('第二次提交')

