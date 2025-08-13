import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import AppSidebar from "../../features/admin/components/AppSidebar";
import AppHeader from "../../features/admin/components/AppHeader";

const AdminPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="flex flex-col flex-1 p-4 gap-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminPageLayout;
