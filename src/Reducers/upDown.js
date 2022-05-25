const initval = 0;

const upDown = (state = initval,action) => {
    switch (action.type) {
        case "INCR":
            return state = state + 1;
            
        case "DECR":
            return state = state - 1;
    
        default:
            return state;
    }
}

export default upDown;