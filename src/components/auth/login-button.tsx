"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  if (mode === "modal") {
    return <span>todo: implement modal</span>;
  }
  return (
    <button onClick={handleClick} className="cursor-pointer">
      {children}
    </button>
  );
}
