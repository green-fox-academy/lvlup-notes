import {  loading, receive } from './actions'

const getRocketsFromApi = dispatch => () => {
  dispatch(loading())
  fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(payload => dispatch(receive(payload)))
};

export default getRocketsFromApi;