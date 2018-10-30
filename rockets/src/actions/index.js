export function loading(){
  return {
    type: 'LOADING'
  }
}

export function receive(payload){
  return {
    type: 'RECEIVING',
    payload,
  }
}