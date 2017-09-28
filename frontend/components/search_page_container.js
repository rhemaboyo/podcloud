import { connect } from 'react-redux';
import SearchPage from './search_page';
import {selectAllPodcasts} from '../reducers/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const mapStateToProps = (state) => {
  return {
    podcasts: selectAllPodcasts(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
