import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarNavItem from "./SidebarNavItem";
import { Logo } from "../../../components/Logo";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarNavItem />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
