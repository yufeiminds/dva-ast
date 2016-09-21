
export default {
  namespace: 'count',
  state: 0,
  reducers: {
    add(state) { return state + 1; },
  },
  effects: {
    *addAsync(_, { call, select, put }) {
      yield put({ type: 'add' });
    },
  },
};
