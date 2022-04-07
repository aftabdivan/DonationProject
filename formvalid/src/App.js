import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
      <br/><br/>
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
      <br/><br/>
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/i})} />
      {errors.Email && <span style={{color:"red"}}>Please check the email</span>}
      <br/><br/>
      <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <br/><br/>
      <select {...register("Title", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <br/><br/>
      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />
      <br/><br/>
      <input type="submit" />
    </form>
  );
}

export default App;
