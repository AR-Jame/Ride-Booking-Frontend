import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { getSidebarItems } from "@/utils/getSidebarItems"
import { useProfileQuery } from "@/redux/features/auth/auth.api"
import { Link } from "react-router"
import Logo from "@/assets/icons/Logo"
import Switching from "./Switching"


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data: userData } = useProfileQuery(undefined);

  const data = {
    navMain: [...getSidebarItems(userData?.data?.role)],
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader className="border-b-2 w-full">
        <div className="mx-auto">
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {
          userData?.data?.role === "DRIVER" &&
          (
            <div className="mx-auto mt-3">
              <p className="">Update status</p>
              <Switching />
            </div>
          )
        }
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
