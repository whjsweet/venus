// const models = (state = { number: 1 }, action) => {
//     switch (action.type) {
//         case 'increment': {
//             state.number += 1
//             return { ...state }
//         };
//         default: return state;
//     }
// };
// export default models;

export default {
    namespace: 'first',

    state: {},

    subscriptions: {
        setup({ dispatch, history }) {
            // eslint-disable-line
            history.listen(location => {
                console.log(1, location);
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {
            // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        increment(state, action) {
            state.number += 1;
            return state;
        },
    },
};
