import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import './StudentMiniViewer.css';

const grades = ['Bad', 'Below average', 'Average', 'Good', 'Excellent'];
const StudentMiniViewer = props => {
  const { index, student } = props;
  return (
    <div className={index % 2 === 0 ? 'student-row-even' : 'student-row-odd'}>
      <div className="student-full-name">
        <Typography color="textSecondary" className="text-student">
          {student.fullName}
        </Typography>
      </div>
      <div className="student-birthday">
        <Typography color="textSecondary" className="text-student">
          {student.birthday}
        </Typography>
      </div>
      <div className="student-grade">
        <Typography color="textSecondary" className="text-student">
          {grades[student.grade]}
        </Typography>
      </div>
    </div>
  );
};

StudentMiniViewer.propTypes = {
  student: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};
export default StudentMiniViewer;
