import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTask } from '../actions/AppActions';
import { getSearchFilter } from '../selectors/App';

import InputField from '../components/App/InputField';

const mapStateToProps = (state) => ({
    filter: getSearchFilter(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
