import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const [dataBaseLoginData, setdataBaseLoginData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showEmpDetails, SetShowEmpdetails] = useState(false);

  return (
    <div className="LoginPage">
      <form onSubmit={handleSubmit()}>
        <br /> <label> Email</label> &nbsp; &nbsp; &nbsp; &nbsp;
        <input
          type="email"
          {...register('email', { required: true }, { pattern: /\d+/ })}
          placeholder="abcd@abc.com"
        />
        {errors.email && <p className="error">Please provide valid email.</p>}
        <br /> <label> Password</label> &nbsp;
        <input
          type="password"
          {...register('password', { required: true }, { pattern: /\d+/ })}
          placeholder="******"
        />
        {errors.password && <p className="error">Please enter Password.</p>}
        <br />
        <input
          type="submit"
          onClick={() => {
            SetShowEmpdetails(true);
          }}
        />
      </form>
    </div>
  );
};
export default LoginPage;
