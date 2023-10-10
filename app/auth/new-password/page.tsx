"use client";
import { Suspense } from "react";
import Loading from "./loading";
import { ChangePasswordForm } from "./components/ChangePasswordForm";

export default function NewPasswordPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ChangePasswordForm />
    </Suspense>
  );
}
