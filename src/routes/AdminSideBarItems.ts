import AllUser from "@/pages/admin/AllUser";

export const adminSidebarItems = [
    {
        title: "User management",
        items: [
            {
                title: "All users",
                url: "/admin/users",
                component: AllUser
            },
        ],
    },
    {
        title: "Ride management",
        items: [
            {
                title: "All rides",
                url: "/admin/rides",
                // component: 
            },
        ],
    },
]