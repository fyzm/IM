/**
 * class 相关的Demo
 */

 let name = 'dsd';
 class Person{
     constructor() {
        this.age = 0;
        //this.name = '';
     }

    //  get name() {
    //     return name;
    //  }

    //  set name(newValue) {
    //      name = newValue;
    //  }

    //static name = 'static';

     getName() {
         return name;
     }
     getAge() {
         return this.age;
     }

 }

 let p = new Person();
 console.log(p.name);
 p.name = '123'
 console.log(p.name);

 let {age} = p;
 age();


 
 