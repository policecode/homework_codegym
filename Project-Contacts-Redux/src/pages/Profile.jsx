import AuthLayout from "../layout/AuthLayout";
import CheckAuth from "../components/auth/CheckAuth";
import { useState } from "react";

export default function Profile() {
  return (
    <>
      <CheckAuth action="isLogin" />
      <AuthLayout layout="profile">
        <h1>Profile</h1>
      </AuthLayout>
    </>
  )
}

