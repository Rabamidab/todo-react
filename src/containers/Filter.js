import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterDoneTasks, activateFilterDoneTasks } from '../actions/AppActions';
import { getDoneTasksFilter } from '../selectors/App';

import Filter from '../components/App/Filter';

const mapStateToProps = (state) => ({
  filter: getDoneTasksFilter(state),
  // taskStore: getFilteredTasks(getFilter(state), getTasks(state)),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  filterDoneTasks,
  activateFilterDoneTasks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
