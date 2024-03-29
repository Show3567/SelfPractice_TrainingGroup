// benefit of TypeScript
/*
 * writing bad code but not allow you catch type error at compile time rather then run time.
 * 1. strong type will return you type error in compile time
 * 2. complete oop pettern: classes, interfaces, abstruction... implements SOLID principles!
 * 3. strong type support by IDE, make your develop more easy.
 * 4. compile to ES5
 * 5. quick start base on js
 */

// *veriable types: number, string, boolean, object, function;
// const num: number = 5;
// let num = 5;
// num = true;

// *array type: Array<string>, string[], [number, string];
// const arr: string[] = [];
// const arr1: [boolean, string, number] = [true, '', 0];

//* unit
// let hero: 'SuperMan' | 'SpiderMan' = 'SpiderMan';
// hero = 'SuperMan';

//* any, unknow, void, never
// let something: any = 42;
// something.name;

// let unk: unknown = 56;
// unk.name

// function foo(): void {}

// function foo(): never {
//   // throw new Error();
//   while(true) {}
// }

//* interface vs. type
// type argType = { name: string; age: number };
// type exampleFn = (num: number) => string;

// function foo({ name, age }: { name: string; age?: number }): {
// 	name: string;
// 	age: number;
// } {
// 	return {
// 		name,
// 		age: age ? age : 44,
// 	};
// }

// foo({ name: "DD" });

// type fnType = (obj: argType) => argType;
// interface fnInType {
//   (obj: argType): argType;
// }

//* interface vs. class

// // const foo: fnType = (obj) => {
// //   return {...obj};
// // }
// const foo: fnType = function(obj) {
//   return {...obj};
// }

//* implement interface
// interface Redio {
//   openRadio: () => void;
//   openRadio(): void;
// }
// interface Battery {
//     batteryStatus: () => void;
// }

// class Mobile implements Redio, Battery {
//     batteryStatus: () => void;

//     openRadio(): void {
//         throw new Error("Method not implemented.");
//     }
// }

//* as
// interface argType {
// 	name: string;
// 	age: number;
// }

//* enum

//* class
class Person {
	constructor() {}

	// overload? or make it more fixable;
	foo(): Promise<string>;
	foo(res: string): void;
	foo(res?: string): void | Promise<string> {}
}
//* abstract class;
abstract class Radio {
	abstract openRadio(): void;

	hello() {
		console.log("hello world!");
	}
}

//* generic type

// let obj: argType = {
// 	name: "YY",
// 	age: 45,
// 	salary: 44,
// } as argType;

// obj = { name: "YY", age: 45 };

//* ganiric type

// function getString(x: string, y: string): string[] {
// 	return [x, y];
// }
// function getNumber(x: number, y: number): number[] {
// 	return [x, y];
// }
// getString("hello", "world");
// getNumber(3, 4);R
// function getData<T, R>(x: T, y: R): [T, R] {
// 	return [x, y];
// }
// getData<argType, number >({name: 'rr', age: 23}, 6);

// interface Queue<T> {
//     enqueue(item: T): void;
//     dequeue() : T;
//     getqueue(): T[];
// }
// class MyQueue<T> implements Queue<T> {
//     queue: T[];

//     enqueue(item: T): void {}
//     dequeue(): T {
//         throw new Error("Method not implemented.");
//     }
//     getqueue(): T[] {
//         throw new Error("Method not implemented.");
//     }
// }

/* SOLID
 * S — Single Responsibility
 * O — Open-Closed
 * L — Liskov Substitution: class A, class B extends A: ------> const c: A = new B();
 * I — Interface Segregation
 * D — Dependency Inversion
 */
// interface Radio {
//     openRadio(): void;
// }

// interface Battery extends Radio {
//     batteryStatus: () => void;
// }
// interface Keys {
//     shift: string;
//     enter: string;
// }
// class Mobile implements Keys, Battery {
//   shift: string;
//   enter: string;

//   batteryStatus: () => void;

//   openRadio(): void {
//     throw new Error("Method not implemented.");
//   }
// }
// show git
class Mobile extends Radio {
	openRadio(): void {
		throw new Error("Method not implemented.");
	}
}

interface Example {
	name: string;
}
interface Example {
	age: number;
}
const user: Example = {
	age: 12,
	name: "David",
};

// class Person {
//   public aa: number = 56;
//   private bb: string = 'str';
//   protected cc: boolean = true;

//   inPerson() {
//     this.bb;
//   }
// }
// class Employee extends Person {
//   constructor() {
//     super();
//   }

//   inEmployee() {
//     this.aa;
//     this.bb;
//     this.cc;
//   }
// }

// const e = new Employee();
// e.aa
// e.bb
// e.cc

//* enum
enum Auth {
	SuperUser = "superUser",
	Admin = 5,
	User,
}
console.log(Auth.User);

const role: Auth = Auth.SuperUser;

//* Decorator
