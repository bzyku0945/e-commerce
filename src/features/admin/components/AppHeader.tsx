"use client";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import React from "react";

const AppHeader = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");

  return (
    <header className="flex items-center h-16 px-4 gap-2">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => {
            const displayName = path.charAt(0).toUpperCase() + path.slice(1);
            const isLast = index === paths.length - 1;
            return (
              <React.Fragment key={path}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {path === "admin" ? "Dashboard" : displayName}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={`/${path}`}>
                      {displayName}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
      <ModeToggle />
    </header>
  );
};

export default AppHeader;
