// const num: number = 5;

// const arr: string[] = [];
// const arr1: [boolean, string, number] = [true, '', 0];

// let hero: 'SuperMan' | 'SpiderMan' = 'SpiderMan';
// hero = 'SuperMan';

// let num = 5;
// num = true;

// let something: any = 42;
// something.name;

// let unk: unknown = 56;
// unk.name

// console.log(typeof null);

// function foo(): never {
//   // throw new Error();
//   while(true) {}
// }
// console.log(foo());

// type argType = { name: string; age: number };
interface argType {
	name: string;
	age: number;
}

function foo(obj: argType): argType {
	return { ...obj };
}
