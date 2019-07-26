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

    state: {
        number: 1
    },

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
        *increment({ payload }, { call, put }) {
            // eslint-disable-line
            yield put({ type: 'increment1' });
        },
    },

    reducers: {
        increment1(state, action) {
            state.number += 1;
            return { ...state };
        },
    },
};
