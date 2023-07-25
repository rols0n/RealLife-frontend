import Link from "next/link";

import AuthBackground from "@/components/forms/AuthBackground";

import { useRouter } from "next/router";
import RegisterForm from "@/components/forms/register/RegisterForm";

const Auth: React.FC = () => {
  return (
    <AuthBackground logoSrc="./imgs/realLife-logo.png">
      <RegisterForm></RegisterForm>
    </AuthBackground>
  );
};
export default Auth;
