import { connect } from 'react-redux';
import Display from './components/Display';

const defaultState = {
    r: '0',
    g: '0',
    b: '0',
};

const mapStateToProps = (state = defaultState) => ({colors: state});


const DisplayContainer = connect(
  mapStateToProps
)(Display)

export default DisplayContainer;
