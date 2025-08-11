import { Metadata } from "next";
import LoginView from "@/modules/login";
export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <LoginView />
  );
}