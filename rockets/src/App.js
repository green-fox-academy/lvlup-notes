import React from 'react';

const App = ({ loading, payload, getRockets }) => {
  if(loading){
    return <p>loading...</p>
  }
  if(payload.length === 0){
    return (<button onClick={getRockets}>Get rockets</button>);
  } else {
    return payload.map(e => (
      <p key={e.flight_number}>{e.mission_name}</p>
    ))
  }
};

export default App;
