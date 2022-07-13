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

