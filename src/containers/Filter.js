import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterDoneTasks } from '../actions/AppActions';

import Filter from '../components/App/Filter';

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filterDoneTasks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
