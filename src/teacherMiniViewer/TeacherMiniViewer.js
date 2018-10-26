import React from 'react';
import './TeacherMiniViewer.css';
import { Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PropTypes from 'prop-types';

class TeacherMiniViewer extends React.Component{
    render(){
      const {teacher} = this.props;
      const {avatar,firstName,lastName} = teacher;
      return <div className="teacher-mini-viewer">
        <img alt={`${firstName} ${lastName}`} className="teacher-avatar" src={avatar} />
        <div className="teacher-full-name">
          <Typography variant="subheading">{firstName} {lastName}</Typography>
          <ArrowDropDownIcon />
        </div>
      </div>;
    };
};

TeacherMiniViewer.propTypes = {
  teacher: PropTypes.object.isRequired,
};



export default TeacherMiniViewer;
