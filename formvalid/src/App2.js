import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

const App2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              type="text"
              {...register("firstName", { required: true })}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              type="text"
              {...register("lastName")}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
              })}
            />
          </Form.Field>
          {errors.email && <p>Please check the email</p>}
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default App2;
