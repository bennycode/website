export const initialState = {
  version: '',
};

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case types.QUACK:
      return true;
    /* ... */
    default:
      return state;
  }
}
