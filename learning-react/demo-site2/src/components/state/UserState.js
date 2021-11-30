import { createContext } from "react"

// const Context = {
//     bLoggedIn :false,
//     bAdmin: false
// }


// 生成一个default value,
// theme : light | dark
const UserStateContext = createContext({
    "setTokenValid":null,
    "setAdminLoggedIn":null,
    "setUserLoggedIn": null,
    "theme":"light"
})

export { UserStateContext }