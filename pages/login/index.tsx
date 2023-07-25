import Link from "next/link";

import AuthBackground from "@/components/forms/AuthBackground";
import LoginForm from "@/components/forms/login/LoginForm";
import { useRouter } from "next/router";

const Auth: React.FC = () => {
  return (
    <AuthBackground logoSrc="./imgs/authPage/rl-logo.png">
      <LoginForm></LoginForm>
    </AuthBackground>
  );
};
export default Auth;
