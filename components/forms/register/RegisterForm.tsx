import { useRouter } from "next/router";
import classes from "../Form.module.scss";

import Input from "../input/Input";
import Button from "@/components/UI/buttons/Button";

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/");
  };
  return (
    <form onSubmit={submitHandler} className={classes.content}>
      <h2 className={classes.greeting}>Nice to see you!</h2>

      <div className={classes.inputs}>
        <Input
          inputID="email"
          inputType="email"
          placeholder="Email"
          labelText={""}
        />

        <div className={classes.pair}>
          <Input
            inputID="name"
            inputType="text"
            placeholder="Name"
            labelText={""}
          />
          <Input
            inputID="surname"
            inputType="text"
            placeholder="Surname"
            labelText={""}
          />
        </div>

        <div className={classes.group}>
          <Input
            inputID="password"
            inputType="password"
            placeholder="Password"
            labelText={""}
          />
          <Input
            inputID="password"
            inputType="password"
            placeholder="Confirm Password"
            labelText={""}
          />
        </div>
      </div>

      <div className={classes.buttons}>
        <Button
          isActive={true}
          type="submit"
          text="Register"
          link={false}
        ></Button>
        <Button
          link="/login"
          type={false}
          isActive={false}
          text="Login"
        ></Button>
      </div>
    </form>
  );
};
export default RegisterForm;
