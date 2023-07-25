import Link from "next/link";
import classes from "../Form.module.scss";
import { useRouter } from "next/router";

import Input from "../input/Input";
import Button from "../../UI/buttons/Button";

const LoginForm = () => {
  const router = useRouter();
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    router.push("/");
  };
  return (
    <form onSubmit={submitHandler} className={classes.content}>
      <h2 className={classes.greeting}>Nice to see you, again!</h2>
      <div className={classes.inputs}>
        <Input
          inputID="email"
          inputType="email"
          placeholder="Email"
          labelText={""}
        />
        <Input
          inputID="password"
          inputType="password"
          placeholder="Password"
          labelText={""}
        />
      </div>

      <div className={classes.buttons}>
        <Button
          isActive={true}
          type="submit"
          text="Login"
          link={false}
        ></Button>
        <Button
          link="/register"
          type={false}
          isActive={false}
          text="Register"
        ></Button>
      </div>
    </form>
  );
};

export default LoginForm;
