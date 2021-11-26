import { createContext } from "react"

// const Context = {
//     bLoggedIn :false,
//     bAdmin: false
// }
// 生成一个default value,
const UserStateContext = createContext(null)

export { UserStateContext }