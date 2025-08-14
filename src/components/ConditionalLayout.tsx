"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";

const ConditionalLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  if (pathname === "/admin") return <>{children}</>;

  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default ConditionalLayout;
