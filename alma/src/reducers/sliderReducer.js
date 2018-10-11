const defaultStore = {
    r: '0',
    g: '0',
    b: '0',
};

const sliderReducer = (store = defaultStore, action) => {
  const tempStore = Object.assign({}, store, {});
  switch (action.type) {
    case 'SLIDING':
      tempStore[action.color] = action.event.target.value;
      return tempStore;
    default:
      return store;
  }
};

export default sliderReducer;
