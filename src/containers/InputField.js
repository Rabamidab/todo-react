import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/AppActions';

import InputField from '../components/App/InputField';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
