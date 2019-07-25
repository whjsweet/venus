const models = (state = { number: 1 }, action) => {
    switch (action.type) {
        case 'increment': {
            state.number += 1
            return { ...state }
        };
        default: return state;
    }
};
export default models;