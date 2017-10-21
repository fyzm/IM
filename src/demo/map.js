let obj = {

}
obj[5] = 12;
console.log(obj[5]);
console.log(obj['5']);

let obj1 = new Map();
obj1.set(5, '123');
console.log(obj1.get(5));
console.log(obj1.get('5'))