import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { getFilteredTasks, getTasks, getFilter } from '../selectors/App';
import TasksList from '../components/App/TasksList';

const mapStateToProps = (state) => ({
  taskStore: getFilteredTasks(getFilter(state), getTasks(state)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
