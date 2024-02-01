// CounterComponent.js
import React, { useState, useEffect } from 'react';

const CounterComponent = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [tutorCount, setTutorCount] = useState(0);
  const [parentsCount, setParentsCount] = useState(0);
  const [enquiriesCount, setEnquiriesCount] = useState(0);

  const studentTarget = 1276;
  const tutorTarget = 468;
  const parentsTarget = 1055;
  const enquiriesTarget = 2000;

  useEffect(() => {
    const incrementCounters = () => {
      setStudentCount((prevCount) => (prevCount < studentTarget ? prevCount + 1 : prevCount));
      setTutorCount((prevCount) => (prevCount < tutorTarget ? prevCount + 1 : prevCount));
      setParentsCount((prevCount) => (prevCount < parentsTarget ? prevCount + 1 : prevCount));
      setEnquiriesCount((prevCount) => (prevCount < enquiriesTarget ? prevCount + 1 : prevCount));

      // Continue incrementing if any target is not reached
      if (studentCount < studentTarget || tutorCount < tutorTarget || parentsCount < parentsTarget || enquiriesCount < enquiriesTarget) {
        setTimeout(incrementCounters, 50); // Adjust the delay as needed
      }
    };

    // Call the incrementCounters function when the component mounts
    incrementCounters();
  }, [studentCount, tutorCount, parentsCount, enquiriesCount]); // Depend on counts to avoid stale closures

  return (
    <div className='container'>
    <div className="counter-container">
      <div>
        <span id="studentCount">{studentCount}</span>
        <span id='ab'>Students</span>
      </div>
      <div>
        <span id="tutorCount">{tutorCount}</span>
        <span id='ab'>Tutors</span>
      </div>
      <div>
        <span id="parentsCount">{parentsCount}</span>
        <span id='ab'>Happy Parents</span>
      </div>
      <div>
        <span id="enquiriesCount">{enquiriesCount}</span>
        <span id='ab'>Enquiries</span>
      </div>
    </div>
    </div>
  );
};

export default CounterComponent;
