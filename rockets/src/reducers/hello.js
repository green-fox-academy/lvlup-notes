const defaultState = {
    hello: '2'
  }
  
  const hello = (state = defaultState, action) => {
      switch (action.type) {
        case 'LOADING':
          return state
        case 'RECEIVING':
          return state
        default:
          return state;
      }
    };
    
    export default hello;