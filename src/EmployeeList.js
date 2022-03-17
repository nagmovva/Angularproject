import React, { useEffect, useState } from 'react';
import Counter from './Counter';

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [data]);
  const getName = () => {
    setName(document.getElementById('name').value);
  };

  var myref = React.useRef();
  var myref2 = React.useRef();

  React.useEffect(() => {
    myref.current.focus();
  });

  var checkEnter = (e) => {
    if (e.key === 'Enter') {
      myref2.current.focus();
    }
  };

  return (
    <div>
      <div className="name_view">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder=" Write Your Name"
          ref={myref}
          onKeyUp={checkEnter}
        />
        <button onClick={getName} ref={myref2}>
          Enter
        </button>
      </div>

      <br />

      <Counter key={name} name={name} />
      <br />
      <p>
        Hello <b>{name}</b>
        .Here you can check EmployeesDeatils
      </p>
      <h1>EmployeeDetails Page</h1>
      {data.map((d) => {
        return (
          <div className="cardview">
            <h4>Name:{d.name}</h4>
            <p>Email id:{d.email}</p>
            <p>website:{d.website}</p>
            <p>phone:{d.phone}</p>
          </div>
        );
      })}
    </div>
  );
};
export default EmployeeList;
