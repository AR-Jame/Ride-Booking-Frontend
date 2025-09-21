import type { ISidebarItems } from "@/types"

export const generateRoutes = (sideBarItems: ISidebarItems[]) => {
    return sideBarItems.flatMap((section) =>
        section.items.map((route) => ({
            path: route.url,
            Component: route.component
        }))
    )
}