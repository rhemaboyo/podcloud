import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { withRouter } from 'react-router-dom';
import {logout} from '../actions/session_actions';
import {removeErrors} from '../actions/error_actions';
import {addOriginalPodcast} from '../actions/podcast_actions';
import {getSearchResults} from '../actions/search_actions';

const mapDispatchToProps = (dispatch) => {
  return {
    logout: user => dispatch(logout()),
    removeErrors: () => dispatch(removeErrors()),
    addOriginalPodcast: podcast => dispatch(addOriginalPodcast(podcast)),
    getSearchResults: searchTerm => dispatch(getSearchResults(searchTerm)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
