"use client";
import { useEffect, useState } from "react";
import { USER_AUTH_EVENT, getUserToken } from "@/utils/userUtils";
import { useRouter } from "next/navigation";

export function RequireUserAuth({ children, toRegister = "/register" }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  const check = () => {
    const token = getUserToken();
    if (!token) router.push(toRegister);
    else setChecking(false);
  };

  useEffect(() => {
    check();
  }, []); // eslint-disable-line

  useEffect(() => {
    const h = () => check();
    window.addEventListener(USER_AUTH_EVENT, h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener(USER_AUTH_EVENT, h);
      window.removeEventListener("storage", h);
    };
  }, []); // eslint-disable-line

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2" />
      </div>
    );
  }
  return children;
}

export function RequireUserComplete({
  children,
  toRegister = "/register",
  toDetails = "/user-details",
}) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  const check = () => {
    const token = getUserToken();
    const complete = localStorage.getItem("userOnboardingComplete");
    if (!token) router.push(toRegister);
    else if (!complete) router.push(toDetails);
    else setChecking(false);
  };

  useEffect(() => {
    check();
  }, []); // eslint-disable-line

  useEffect(() => {
    const h = () => check();
    window.addEventListener(USER_AUTH_EVENT, h);
    window.addEventListener("storage", h);
    return () => {
      window.removeEventListener(USER_AUTH_EVENT, h);
      window.removeEventListener("storage", h);
    };
  }, []); // eslint-disable-line

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2" />
      </div>
    );
  }
  return children;
}
