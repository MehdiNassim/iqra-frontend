import React from 'react';
import './Teacher.css';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
// import RangePicker from "react-range-picker";
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import StudentMiniViewer from '../studentMiniViewer/StudentMiniViewer';
import Chart from '../chart/Chart';
import ChartKey from '../chart/chartKey/ChartKey';

const students = [
  { fullName: 'Mehdi Nassim KHODJA', birthday: '25/08/1996', grade: 0 },
  { fullName: 'Amir KHOUTIR', birthday: '25/08/1996', grade: 2 },
  { fullName: 'Chakib AFRAOUCENE', birthday: '25/08/1996', grade: 3 },
  { fullName: 'Mohammed Amine GUERRAS', birthday: '25/08/1996', grade: 4 },
  { fullName: 'Abderezak KAFI', birthday: '25/08/1996', grade: 1 },
  { fullName: 'Mehdi Nassim KHODJA', birthday: '25/08/1996', grade: 0 },
  { fullName: 'Amir KHOUTIR', birthday: '25/08/1996', grade: 2 },
  { fullName: 'Chakib AFRAOUCENE', birthday: '25/08/1996', grade: 3 },
  { fullName: 'Mohammed Amine GUERRAS', birthday: '25/08/1996', grade: 4 },
  { fullName: 'Abderezak KAFI', birthday: '25/08/1996', grade: 1 },
  { fullName: 'Mehdi Nassim KHODJA', birthday: '25/08/1996', grade: 0 },
  { fullName: 'Amir KHOUTIR', birthday: '25/08/1996', grade: 2 },
  { fullName: 'Chakib AFRAOUCENE', birthday: '25/08/1996', grade: 3 },
  { fullName: 'Mohammed Amine GUERRAS', birthday: '25/08/1996', grade: 4 },
  { fullName: 'Abderezak KAFI', birthday: '25/08/1996', grade: 1 },
  { fullName: 'Mehdi Nassim KHODJA', birthday: '25/08/1996', grade: 0 },
  { fullName: 'Amir KHOUTIR', birthday: '25/08/1996', grade: 2 },
  { fullName: 'Chakib AFRAOUCENE', birthday: '25/08/1996', grade: 3 },
  { fullName: 'Mohammed Amine GUERRAS', birthday: '25/08/1996', grade: 4 },
  { fullName: 'Abderezak KAFI', birthday: '25/08/1996', grade: 1 },
];

const styles = {
  icon: {
    color: '#3f88fb',
    marginLeft: '20px',
    marginRight: '13px',
    height: '24px',
    width: '24px',
  },
  search: {
    background: '#e8eaee',
    borderRadius: 3,
    border: 0,
    paddingLeft: 20,
    paddingRight: 8,
    paddingTop: 12,
  },
  bootstrapRoot: {
    width: '146px',
    height: '56px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    color: 'White',
    backgroundColor: '#3f88fb',
    borderColor: '#3f8fff',
    fontFamily: ['Work Sens', 'Roboto'].join(','),
    '&:hover': {
      backgroundColor: '#3f88fb',
      borderColor: '#3f8fff',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3f88fb',
      borderColor: '#3f88fb',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.1)',
    },
  },
};

const Teacher = props => {
  const { classes } = props;
  return (
    <div className="teacherBg">
      <div className="students">
        <div className="search-filter">
          <div className="search-container">
            <TextField
              classes={{
                root: classes.search,
              }}
              fullWidth
              placeholder="search"
              InputProps={{
                disableUnderline: true,
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          {/* <RangePicker placeholder="okay" /> */}
        </div>
        <div className="new-student-container">
          <div className="inputs-container">
            <AddIcon color="secondary" className={classes.icon} />
            <Input className="input-full-name" placeholder="new student name" disableUnderline />
            <Input className="input-date" disableUnderline type="date" />
          </div>
          <div className="start-button">
            <Button variant="contained" className={classes.bootstrapRoot}>
              START
            </Button>
          </div>
        </div>
        <div style={{ maxHeight: 700, overflow: 'auto' }} className="students-table">
          {students.map((value, index) => (
            <StudentMiniViewer student={value} index={index} />
          ))}
        </div>
      </div>
      <div className="chart-container">
        <Chart />
        <ChartKey />
      </div>
    </div>
  );
};
export default withStyles(styles)(Teacher);
