import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { onAddTrack, onDelete, onUpdate, onCheck, onFilter } from '../actions/AppActions';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, CHECK_TASK, FILTER_DONE_TASKS  } from '../constants/AppConstants';

import App from '../components/App/index';

const mapStateToProps = (state) => ({
  taskStore: state.task,
  isActiveFilterStore: state.filter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onAddTrack,
  onDelete,
  onUpdate,
  onCheck,
  onFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
