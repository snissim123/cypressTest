import React from 'react';
import 'rbx/index.css';
import { Button } from "rbx";
import { db } from './index';
import { timeParts, getCourseTerm, hasConflict, getCourseNumber } from './times';

const buttonColor = selected => (
  selected ? `button is-success is-selected` : 'button'
);

const saveCourse = (course, meets) => {
    db.child('courses').child(course.id).update({meets})
      .catch(error => alert(error));
  };
  
const moveCourse = course => {
    const meets = prompt('Enter new meeting data, in this format:', course.meets);
    if (!meets) return;
    const {days} = timeParts(meets);
    if (days) saveCourse(course, meets); 
    else moveCourse(course);
    };
  
  const Course = ({ course, state, user }) => (
    <Button 
      data-cy={ course.title }
      color={ buttonColor(state.selected.includes(course)) }
      onClick={ () => state.toggle(course) }
      onDoubleClick={ user ? () => moveCourse(course) : null }
      disabled={ hasConflict(course, state.selected) }
      >
      { getCourseTerm(course) } CS { getCourseNumber(course) }: { course.title }
    </Button>
  );

export default Course;