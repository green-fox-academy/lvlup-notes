import { connect } from 'react-redux';
import Slider from './components/Slider';
import sliding from './actions/sliderAction';

const mapStateToProps = (state) => {
  return {
    color: state.color
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
   sliding: (event) => dispatch(sliding(event, props.color))
  }
}

const SlidersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Slider)

export default SlidersContainer;
