import AuthLayout from "../layout/AuthLayout";
import CheckAuth from "../components/auth/CheckAuth";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Profile() {
  const { authUser, dispatchAuth, setLoading } = useContext(GlobalContext);
  return (
    <>
      <CheckAuth action="isLogin" />
      <AuthLayout layout="profile">
        <h1>Profile</h1>
      </AuthLayout>
    </>
  )
}

