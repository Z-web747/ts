##### 什么是Typescript？

ts是一种静态类型，静态类型是值在编译阶段就能确定每个变量的类型。TS在编译阶段就会进行类型检查

- ts是加入了类型系统的js
- ts完全兼容js，

js是动态类型，只有在运行时才能确定每个变量的类型。

##### 原始数据类型

TS中的变量类型定义

```
let 变量: type = xxx // 其中type 为js中的原始数据类型布尔值、数值、字符串、null、undefined
// 空值
在ts中，使用void表示没有任何返回值的函数
function alertName(): void {
    alert('My name is Tom');
}
// null与undefined

let 变量:null = null
let 变量:undefined = undefind

null、undefined 与void的区别：null、undefined 是所有类型的子类型，也就是说null和undefined可一复制给任何原始类型的变量
// 这样不会报错
let num: number = undefined;
```

##### 任意值

- 在任意值上访问任何属性都是允许的，

  ```
  let some: any = '123'
  some = [1,2,3]
  ```

##### 类型推论

如果没有明确指明类型，TS会按照类型推论规则推断出一个类型

如果定义的时候没有赋值，则会被推断为any类型

##### 联合类型

- 表示取值可以取多个类型中的一种
- 联合类型使用 | 分隔每个类型
- 当不确定联合类型的变量类型的时候，只能让问联合类型中共有的属性和方法
- 联合类型变量在被赋值的时候，会根据类型推论 推断出一个类型

##### 对象的类型-接口（interface）

- 接口一般首字母大写

- 接口常用于对[对象的形状进行描述]

- 一旦定义了任意属性，可选属性和确定属性的类型都必须是它（任意属性）类型的子集

###### 

```

interface Person {
	name: string;
	age?: number; // 可选属性
	[propName: string]: any // 任意属性
	readonly id: number; // 只读属性
}
```

##### 数组的类型

​	1、类型+方括号表示法, 其中类型可以是 原始数据类型，也可以是interface

- 数组的项中不允许出现其他类型

- 数组方法 的参数也会跟据数组类型进行限制

  ```
  let numarr: number[] = [1,2,3,4]
  ```

​	2、使用数组泛型Array<elemType> 表示数组

- ​		elemType也可以是interface

```
let arr: Array<string> = ['a','b']
```

​	3、any在数组中的应用

```
const anyArr: any[] = [1,{}, false]
```

##### 函数的类型

- 函数声明

  输入多余（少于）的函数参数，都是不允许的

  ```
  function sum(x:number, y:number):number{
  	return x + y
  }
  ```

- 函数表达式

  ```
  const mySum = function(x:number, y:number):number{}
  上面的代码只是对右侧的匿名函数进行了类型定义，而左侧的mySum 是通过类型推论推断出来的
  完整版：
  const mysum: (x:number,y:number) => number = function(x:number,y:number):number{
  	return x+ y
  }
  左侧 => 在TS类型定义中表示 函数的定义  => 左侧是输入类型，右侧是输出类型
  ```
- 用接口定义函数的形状

  ```
   使用 函数表达式 | 接口 定义函数 时， 对等号左侧进行类型限制，可以保证对函数名赋值时 
   参数个数，类型 返回值类型不变
  interface SearchFunc {
    (source: string, substr: string): boolean
  }
  const mySearch: SearchFunc = function(source: string, substr: string){
    return source.indexOf(substr) === -1
  }
  ```

- 函数 可选参数
  - 可选参数 写法和interface 可选属性写法一致 ?:
  - 可选参数必须写在确定参数后面

  ```
    function getName(firstName: string, lastName?:string){
      if(lastName) return firstName + lastName
      return firstName
    }
  
  ```
- 默认参数
  - 使用参数默认值 的参数 不必写在确定参数后面
  ```
    function getName(firstName: string, lastName:string = '史密斯'){
      if(lastName) return firstName + lastName
      return firstName
    }
  
  ```

- 剩余参数
  - 剩余参数也是一个数组
  ```
    function getName(firstName: string, ...items:any[]){
    }
  
  ```
  
##### 枚举
枚举成员会被赋值为 从 0 递增的数字，同时会对枚举值 到枚举名反映射



```
  enum week{
    one,
    two,
    three
  }
  {
    '0': 'one',
    '1': 'two',
    '2': 'three',
    '3': 'four',
    one: 0,
    two: 1,
    three: 2,
    four: 3
  }
  week['0'] === one // true

  // 手动赋值
  未手动赋值的枚举项会接着上一个枚举项递增。
  enum Days {Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat};
  
```

##### ES6中的类
重点！！！
- 类和模块的内部，默认就是严格模式
- 类的方法内部如果有this，它默认指向类的实例对象

###### 1、类与构造函数

Es5中使用构造函数来初始化实例对象

Es6中引入类来创建实例

区别：

- 类上的所有方法都定义在类的prototype上,因此，通过类的实例调用方法其实就是调用类原型上的方法

- 类内部的方法是不可枚举的，但是ES5构造函数可以

###### 2、constructor 函数

constructor() 方法是类的默认方法,如果没有显式定义，会默认添加一个空的constructor方法，执行new 操作符时会自动调用该方法
constructor 会默认返回实例对象

###### 3、类的实例

- 类的属性和方法，除非显式的定义在其本身（即this 对象上） 即在类内部方法中通过 this.xx=xx 定义的属性 都作为类实例对象自身的属性
- 否则都是定义的类的原型上（即 class.prototype）
- 与ES5一样，类的所有实例共享一个原型对象
- 所有在类中定义的方法，都会被实例继承
```
class Person {
  constructor(){
    this.foo ='foo' // 作为类实例对象自身的属性
  }
  toString(){  // 作为类原型上的属性
    console.log('toString')
  }

  foo = 'foo' // 注意，这是实例属性的新写法，实例属性新写法定义的属性是类实例对象自身的属性，不是定义在类的原型对象上的
}
```

###### 4、实例属性新写法

- 实例属性除了可以定义在constructor 函数内部的this上，也可以定义在类内部的最顶层
- !!!注意： 使用实例属性新写法定义的属性，都是定义在类实例对象自身的属性，在类的原型上访问不到，注意：这个特性只针对于属性，对方法无效！！
- !!!注意： 类内部定义的箭头函数， 是定义在类实例对象自身的方法，在类原型上访问不到
```
  // 原来的写法
  class IncreasingCounter {
    constructor() {
      this._count = 0;
    }
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
    }
  }

  // 新写法 
  class IncreasingCounter {
    _count = 0;
    get value() {
      console.log('Getting the current value!');
      return this._count;
    }
    increment() {
      this._count++;
    }
  }
```
###### 5、属性表达式

- 类的属性名，可以使用表达式

```
  let fnName = 'Fn'
  // 新写法 
  class IncreasingCounter {
    _count = 0;
    [fnName]() {
      this._count++;
    }
  }
```

###### 5、calss 表达式

- 类也可以使用表达式的形式定义

```
  const MyClass = class Me {
    name = 'me'
  }
```

###### 6、静态方法&静态属性

- 类内部定义的所有方法， 都会被类的实例继承
- 类中使用 static 关键字 定义类的静态方法
- 静态方法只能通过类调用，不能通过类的实例调用
- !!!注意： 静态方法中的this，指向这个类，而不是类的实例对象,父类的静态方法，可以被子类继承。

```
  calss Person{
    static bar = 'bar' // 静态属性
    static toString(){
      this.foo()
    }
    static foo(){
      console.log('hello')
    }
    foo(){
      console.log('world')
    }
  }
  Person.toString() // 'hello'
```
###### 7、私有方法&私有属性
- 就是只能在类内部使用的方法和属性，暂时忽略

###### 8、静态块
- 静态块就是在类的内部加入一个代码块，用于初始化静态属性和方法，只在类生成时运行一次


```
  class C {
  static x = ...;
  static y;
  static z;

  static {
    try {
      const obj = doSomethingWith(this.x);
      this.y = obj.y;
      this.z = obj.z;
    }
    catch {
      this.y = ...;
      this.z = ...;
    }
  }
}
```
###### 9、类的注意点
- 严格模式
  类和模块的内部，默认是严格模式， 所以在类内部this为undefined， 类内部方法中的this 默认指向类的实例对象

- this的指向
  类内部方法中的this默认指向类的实例，如果将类中的方法单独拎出来使用，this会指向该方法运行时所在的环境由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。
  
```
  class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined

```
解决办法1：
```
  class Logger {
  constructor() {
    this.printName = this.printName.bind(this); // 这相当与是在类的实例对象上创建一个新属性， 属性值为this.printName， 并且将this.printName 这个函数中的this指向 constructor中的this, 也就是类的实例对象
  }

  // ...
}

解决办法2：

```

class Obj {
  constructor() {
    this.getThis = () => this;
  }
}

const myObj = new Obj();
myObj.getThis() === myObj // true
}

箭头函数内部的this总是指向定义时所在的对象。上面代码中，箭头函数位于构造函数内部，它的定义生效的时候，是在构造函数执行的时候。这时，箭头函数所在的运行环境，肯定是实例对象，所以this会总是指向实例对象。

```
