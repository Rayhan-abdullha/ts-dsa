// enum Status {
//   Success = "success",
//   Error = "error",
//   Pending = "pending"
// }

// let orderStatus: Status = Status.Success




// let direction: "up" | "down" | "left" | "right"

// direction = "up"   // ✅
// direction = "down" // ✅


// type User = { name: "string" }
// type Admin = { role: "string" }
// type AdminUser = User & Admin & {
//   isActive: boolean
// }


// function printValue<T>(value: T): T {
//   return value
// }
// const res = printValue("coder")
// const res1 = printValue({name: 'coder', age: 22})


function getFirstItem<T>(items: T[]): T {
  return items;
}

const first = getFirstItem([10, 20, 30]);
const firstName = getFirstItem(["Rayhan", "Coder"]);
