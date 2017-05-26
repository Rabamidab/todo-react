import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { findTask } from '../actions/AppActions';
import { getTasks } from '../selectors/App';

import SearchingField from '../components/App/SearchingField';

const mapStateToProps = (state) => ({
  taskStore: getTasks(state),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  findTask,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchingField);
