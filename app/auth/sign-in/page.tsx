import { Suspense } from "react";
import { SignInForm } from "./components/SignInForm";
import Loading from "./loading";

export default function SignInPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SignInForm />
    </Suspense>
  );
}
