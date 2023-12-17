{
    // oop class
    // class Animal {
    //     name: string;
    //     species: string;
    //     sound: string;

    //     constructor (name: string, specise: string, sound: string){
    //         this.name =name;
    //         this. species = specise;
    //         this.sound = sound
    //     }
    //     makeSOund(){
    //         console.log(`The ${this.name} says ${this.sound}`)
    //     }
    // }

    // const dog = new Animal("German Shepar", 'dog', 'Ghew Ghew');
    // const cat  = new Animal("Persian", "cat", "Meaw Meaw")
    // cat.makeSOund();
    // dog.makeSOund();
    //

    // Using Public Key word in parameters property
    //parameters property
    class Animal {
        constructor(public name: string, public specise: string, public sound: string) {
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal("German Shepar", 'dog', 'Ghew Ghew');
    const cat = new Animal("Persian", "cat", "Meaw Meaw")


    cat.makeSound();
    dog.makeSound();

    //3.2.ts      OOP- inheritance

    class Parent {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`)
        }
    }

    class Student extends Parent {


        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }
    const student1 = new Student("Mr. student", 20, 'ctg');
    student1.

    class Teacher extends Parent {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(numOfClass: number) {
            console.log(`${this.name} will take Class for ${numOfClass}`)
        }
    }
    const teacher = new Teacher("Mr. Teacher", 42, 'Dhk', 'Professor');
    teacher.


    // 3.3.ts using type guard 
    // 1. typeof ------> type guard 


//
}