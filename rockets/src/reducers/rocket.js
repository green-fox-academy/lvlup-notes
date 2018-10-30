const defaultState = {
  loading: false,
  payload: [],
}

const rocket = (state = defaultState, action) => {
    switch (action.type) {
      case 'LOADING':
        return Object.assign({}, state, {loading: true})
      case 'RECEIVING':
        return Object.assign({}, state, {
          loading: false,
          payload: action.payload,
        });
      default:
        return state;
    }
  };
  
  export default rocket;