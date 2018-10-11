import { connect } from 'react-redux';
import Sliders from './components/Sliders';
import sliding from './actions/sliderAction';

const mapStateToProps = (state) => {
  return {
    colors: ['r', 'g', 'b'],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   sliding: (event) => dispatch(sliding(event, 'g'))
  }
}

const SlidersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sliders)

export default SlidersContainer;
