import React, { Component } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchAllStudentsThunk } from "../../thunks"
import { StudentNameListView } from "../views";

class StudentNameListContainer extends Component {
  
  render() {
    return <StudentNameListView 
    students={this.props.students}
    />;
  }
}


export default StudentNameListContainer;
