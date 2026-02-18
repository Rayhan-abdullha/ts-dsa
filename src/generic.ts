function getFirstItem<T>(items: T[]): T {
  return items[0] as T;
}

const first = getFirstItem([10, 20, 30]);
const firstName = getFirstItem(["Rayhan", "Coder"]);


interface ApiResponse<T> {
  data: T;
  error: boolean;
  message: string;
}

function handleResponse<T>(response: ApiResponse<T>) {
  if (response.error) {
    console.error(response.message);
  } else {
    console.log(response.data);
  }
}

handleResponse({ data: "Hello", error: false, message: "Success" });
handleResponse({ data: "Hello", error: true, message: "Some error" });


function meargeObject<T, U>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB 
  }
}
const obj = meargeObject({ name: "Rayhan" }, { age: 22 })
console.log(obj);