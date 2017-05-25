import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getSearchingTasks, getFilteredTasks, getTasks, getSearchFilter ,getFilter, getDoneTasksFilter } from '../selectors/App';
import TasksList from '../components/App/TasksList';

const mapStateToProps = (state) => ({
  taskStore: getFilteredTasks(getDoneTasksFilter(state), getSearchingTasks(getSearchFilter(state) ,getTasks(state))),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
