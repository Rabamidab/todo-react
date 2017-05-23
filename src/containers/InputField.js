import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { onAddTrack } from '../actions/AppActions';

import InputField from '../components/App/InputField';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  onAddTrack,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(InputField);
