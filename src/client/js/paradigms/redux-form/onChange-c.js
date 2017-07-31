export const expenseFormPlugin = (state, action) => {
  if (
    action.type === '@@redux-form/CHANGE' &&
    action.meta &&
    action.meta.form === 'expenseForm' &&
    action.meta.field
  ) {
    if (action.meta.field === 'time' || action.meta.field === 'rate') {
      const time = state.values.time ? parseInt(state.values.time, 10) : 0;
      const rate = state.values.rate ? parseInt(state.values.rate, 10) : 0;
      const total = time * rate;
      return {
        ...state,
        values: {
          ...state.values,
          total: total
        }
      };
    }
  }
  return state;
};
