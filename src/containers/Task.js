import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { onDelete, onUpdate, onCheck, } from '../actions/AppActions';

import Task from '../components/App/Task';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onDelete,
  onUpdate,
  onCheck,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Task);
