"use client";

import { logoutAction } from "@/actions/logout";
import { Button } from "../ui/button";

type LogoutButtonProps = {
  children?: React.ReactNode;
};

export function LogoutButton({ children }: LogoutButtonProps) {
  return (
    <Button
      onClick={logoutAction}
      className="hover:cursor-pointer transform transition-all active:scale-110"
    >
      {children}
    </Button>
  );
}
