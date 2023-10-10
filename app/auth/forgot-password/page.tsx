import { Suspense } from "react";
import { ForgotPassword } from "./components/ForgotPasswordForm";
import Loading from "./loading";

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ForgotPassword />
    </Suspense>
  );
}
