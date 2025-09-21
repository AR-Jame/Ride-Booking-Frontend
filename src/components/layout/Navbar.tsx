
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types";

interface MenuItem {
  id: number;
  title: string;
  url: string;
  role: TRole | "PUBLIC"
}

interface Navbar1Props {
  menu?: MenuItem[];
}

const Navbar = ({
  menu = [
    {
      id: 1,
      title: "Home",
      role: "PUBLIC",
      url: "/"
    },
    {
      id: 2,
      title: "About Us",
      role: "PUBLIC",
      url: "about-us",
    },
    {
      id: 3,
      title: "Features",
      role: "PUBLIC",
      url: "features",
    },
    {
      id: 4,
      title: "Contact",
      role: "PUBLIC",
      url: "contact",
    },
    {
      id: 5,
      title: "FAQ",
      role: "PUBLIC",
      url: "faq",
    },
    {
      id: 6,
      title: "Dashboard",
      role: "ADMIN",
      url: "/admin",
    },
    {
      id: 7,
      title: "Dashboard",
      role: "SUPER_ADMIN",
      url: "/admin",
    },
    {
      id: 8,
      title: "Dashboard",
      role: "DRIVER",
      url: "/driver",
    },
    {
      id: 9,
      title: "Dashboard",
      role: "RIDER",
      url: "/rider",
    },
  ],
}: Navbar1Props) => {

  const { data } = useProfileQuery(undefined);
  console.log(data);

  return (
    <section className="py-4">
      <div className="container mx-auto">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">

            <Link to={"/"}>
              <Logo />
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => (item.role === "PUBLIC" && renderMenuItem(item)))}
                  {menu.map((item) => (item.role === data?.data?.role && renderMenuItem(item)))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            {
              data?.success ?
                <Button>Logout</Button>
                :
                <Link className="cursor-pointer" to={'/login'}>
                  <Button>Login</Button>
                </Link>
            }
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={'/'}>
              <Logo />
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={'/'}>
                      <Logo />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  {menu.map((item) => (item.role === "PUBLIC" && renderMobileMenuItem(item)))}
                  {menu.map((item) => (item.role === data?.data?.role && renderMobileMenuItem(item)))}
                  <div className="flex flex-col gap-3">
                    {
                      data?.success ?
                        <Button className="w-full">Logout</Button>
                        :
                        <Link className="cursor-pointer" to={'/login'}>
                          <Button className="w-full">Login</Button>
                        </Link>
                    }
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section >
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.id}>
      <Link
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
        to={item.url}>
        {item.title}
      </Link>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.id} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};


export { Navbar };
