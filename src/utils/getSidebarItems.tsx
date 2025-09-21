import { roles } from "@/constants"
import { adminSidebarItems } from "@/routes/AdminSideBarItems"
import { driverSidebarItems } from "@/routes/DriverSidebarItems"
import { RiderSideBarItems } from "@/routes/RiderSideBarItems"

export function getSidebarItems(userRole: string) {
    switch (userRole) {
        case roles.admin:
            return [...adminSidebarItems]
        case roles.superAdmin:
            return [...adminSidebarItems]
        case roles.Rider:
            return [...RiderSideBarItems]
        case roles.driver:
            return [...driverSidebarItems]
        default:
            return []
    }
}