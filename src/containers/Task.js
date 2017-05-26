import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask, updateTask, checkTask, upTask, downTask } from '../actions/AppActions';

import Task from '../components/App/Task';

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  updateTask,
  upTask,
  downTask,
}, dispatch);

export default connect(null, mapDispatchToProps)(Task);
