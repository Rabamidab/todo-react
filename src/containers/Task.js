import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask, updateTask, checkTask } from '../actions/AppActions';

import Task from '../components/App/Task';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTask,
  updateTask,
  checkTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Task);
