import './style.css';


interface PersonInterface {
  name: string
  age: number
  isActive: boolean
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
  return {
    name,
    age,
    isActive
  }
}

function LogMethodCalls(
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling "${String(propertyKey)}" with arguments: ${args.join(', ')}`);
    return originalMethod.apply(this, args);
  };
}


class Calculator {
  @LogMethodCalls
  add(a: number, b: number): number {
    return a + b;
  }

  @LogMethodCalls
  multiply(a: number, b: number): number {
    return a * b;
  }
}

namespace UserProfile {
  export interface ProfileInterface {
    id: string
    name: string
    email: string
  }

  function generateId(): string {
    return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
  }

  export function createProfile(name: string, email: string): ProfileInterface {
    return {
      id: generateId(),
      name,
      email
    }
  }
}

const newPerson = createPerson('Олександр', 31, false)
console.log(newPerson)
const calculator = new Calculator();
console.log('add:', calculator.add(2, 3));      
console.log('multiply:', calculator.multiply(3, 4));
const newUser = UserProfile.createProfile("Іван", "ivan@example.com");
console.log(newUser);


export { createPerson, Calculator, UserProfile }

