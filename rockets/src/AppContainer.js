import { connect } from 'react-redux';
import App from './App';
import getRocketsFromApi from './api';

const mapStateToProps = state => state.rocket;

const mapDispatchToProps = dispatch => ({
  getRockets: getRocketsFromApi(dispatch),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;