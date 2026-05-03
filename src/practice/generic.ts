type Coordinates<X,Y> = [X, Y]

const coordinates: Coordinates<number, number> = [1,2]

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Rayhan" }, { age: 25 });
// Type: { name: string; age: number }

