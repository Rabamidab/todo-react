import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getFilteredTasks } from '../selectors/App';

import TasksList from '../components/App/TasksList';

const mapStateToProps = (state) => ({
  taskStore: getFilteredTasks(state.task, state.filter),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
