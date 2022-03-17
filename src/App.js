import React from 'react';
import './style.css';
import RoutePath from './RoutePath';
import EmployeeList from './EmployeeList';
export default function App() {
  return (
    <div className="view">
      
      <RoutePath />
     
      <EmployeeList />
    </div>
  );
}
