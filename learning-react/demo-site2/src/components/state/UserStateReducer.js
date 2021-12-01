import { createContext } from "react";

let initialState = {
    theme: 'light',
    name: 'Mehul',
    logo: 'red-logo'
}
// 使用这个函数来接受命令，改变状态，
// 所有的状态都在这个地方处理

// 放一个状态, state , 在这里
// const [theme, setTheme] = useState('light');
// 不需要！这里默认会有一个state,


function stateFunc( state, action){
    const { type , payload} = action;

    switch(type){
        case 'SET_THEME': 
            document.body.classList.remove('dark','light');
            document.body.classList.add(payload);
            console.log(type, state)

            return {
                theme: payload,
                name: 'Mehul',
                logo: 'red-logo'
            }
        case 'GET_THEME':
            return state;
        default:
            return initialState;
    }
}

const StateContext = createContext({
    state: initialState,
    dispatch: null
})
export const Provider = StateContext.Provider;
export const reducer = stateFunc;
export const context = StateContext;
export const defaultState = initialState;
