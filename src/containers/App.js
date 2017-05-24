import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onAddTrack, onDelete, onUpdate, onCheck, onFilter } from '../actions/AppActions';
import { getFilteredTasks } from '../selectors/App';

import App from '../components/App/App';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
