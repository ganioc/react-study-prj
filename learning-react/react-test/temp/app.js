const incrementAction = { type: 'INCREMENT'}
const decrementAction = {type: 'DECREMENT'}

console.log('hello test app.js')

function reducer(state, action){
    if(action.type === 'INCREMENT'){
        return state+1;
    }
    else if(action.type === "DECREMENT"){
        return state -1;
    }
    else{
        return state;
    }
}

function createStore(reducer){
    let state = 0;

    const getState = ()=> (state);

    const dispatch = (action) =>{
        state = reducer(state, action);
    }

    return{
        getState,
        dispatch,
    }
}


console.log( reducer(0, incrementAction));
console.log( reducer(1,incrementAction));
console.log( reducer(2, decrementAction));

const store = createStore(reducer);
store.dispatch(incrementAction);
console.log('state:', store.getState())