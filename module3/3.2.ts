{
  //
  //Question #01.//
  // function alphaNumaric(name: string | number) {
  //     if (typeof name === 'string') {
  //         console.log(name.length)
  //     } else {
  //         console.log(name * name)
  //     }
  // }
  // alphaNumaric('Hello World')
  // alphaNumaric(50)



  // Question 02

  interface Person {
    address?: {
      city: string;
      street: number;
    },
    Phone?: string;
  }

  let person1: Person = {
    address: {
      city: 'Dhaka',
      street: 12
    },
    Phone: '01801010101'
  }
  let person2: Person = {
    address: {
      city: 'Chattogram',
      street: 55

    },
    Phone: '01401021010'
  }

  function getAddressCity(person: Person): string | undefined {
    return person?.address?.city;
  }
  console.log(getAddressCity(person2));




  // Question 3



    class Animal {
         constructor(public name: string, public species: string){
           }
    }

    class notACat extends Animal {
      constructor(name: string, species: string){
        super(name, species)
      }
  notCat(){
    console.log("no, it's not a cat.")
  }
    }
    class Cat extends Animal {
      constructor(name: string, species: string){
        super(name, species)
      }
  cat(){
    console.log("yes, it's a cat.")
  }
    }


    const isCat = (animal: Animal)=>{
      if(animal instanceof notACat){
        animal.notCat()
      } else if(animal instanceof Cat) {
        animal.cat()
      }
    }

    const dog = new notACat('Drum', 'dog')
    const cat = new Cat('Tom', 'cat')

    isCat(cat)




  // Question 04

  function addNumbers(mixedData: (number | string)[]): number {
    let sum = 0;
    for (const digit of mixedData) {
      if (typeof digit === 'number') {
        sum = sum + digit as number;
      }
    }
    return sum;
  }


  const mixedData: (number | string)[] = [1, 'two', 3, 'four', 7, 'five', 99];
  const result = addNumbers(mixedData);
  console.log(result);

  // Question 05


  interface Car {
      make: string;
      model: string;
      year: number;
    }

    interface Driver {
      name: string;
      licenseNumber: string;
    }

   function carAndDriver(car: Car, driver: Driver): { car: Car; driver: Driver } {
      return { car, driver };
    }


  const cardata: Car = { make: 'Nissan', model: 'Axio', year: 2020 };
  const driverdata: Driver = { name: 'Tom Moddy', licenseNumber: 'ABC123' };

  const combined = carAndDriver(cardata, driverdata);

  console.log(combined);








  // TypeScript function using generics
  function findFirstOccurrence<T>(arr: T[], value: T): number {
    const index = arr.indexOf(value);
    return index;
  }

  // Example usage:
  const numbers: number[] = [1, 2, 3, 4, 5, 2];
  const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];
  const targetNumber = 20;
  const targetString = "date";

  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
  const indexInStrings = findFirstOccurrence(strings, targetString);

  console.log(indexInNumbers);
  console.log(indexInStrings);


    // Q-8
    interface Product {
    name: string;
    price: number;
    quantity: number;
  }


  function TotalCost(cart: Product[]): number {

    const Cost = cart.reduce((sum, product) => {
      let total =sum + (product.price * product.quantity);
      return total
    }, 0);

    return Cost;
  }

    const shoppingCart: Product[] = [
    { name: 'Laptop', price: 100, quantity: 2 },
    { name: 'Watch', price: 20, quantity: 1 },
    { name: 'Mobile', price: 150, quantity: 3 },
  ];

  const Cost = TotalCost(shoppingCart);
  console.log('Total Cost :', Cost.toFixed(2));

  //
}