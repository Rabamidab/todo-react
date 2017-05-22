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
    onAddTrack: (taskName) => {
      dispatch({ type: ADD_TASK, title: taskName })
    },
    onDelete: (taskIndex) => {
      dispatch({ type: DELETE_TASK, payload: taskIndex })
    },
    onUpdate: (taskParams) => {
      dispatch({ type: UPDATE_TASK, params: taskParams, })
    },
    onCheck: (taskParams) => {
      dispatch({ type: CHECK_TASK, params: taskParams, })
    },
    onFilter: (isFilterActive) => {
      dispatch({ type: FILTER_DONE_TASKS, params: isFilterActive, })
    },
    // onAddTrack, onDelete, onUpdate, onCheck, onFilter
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
