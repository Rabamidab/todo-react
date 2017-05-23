import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { onFilter } from '../actions/AppActions';

import Filter from '../components/App/Filter';

const mapStateToProps = (state) => ({
  isActiveFilterStore: state.filter,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
