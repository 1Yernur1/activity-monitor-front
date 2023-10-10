import { Suspense } from "react";
import Loading from "./loading";
import { OTPVerificationForm } from "./components/OTPVerificationForm";

export default function OTPVerificationPage() {
  return (
    <Suspense fallback={<Loading />}>
      <OTPVerificationForm />
    </Suspense>
  );
}
