/* eslint-disable no-unused-vars */
import { connect } from 'react-redux';
import ProjectList from './ProjectsList';

const mapStateToProps = (state) => ({
  projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
