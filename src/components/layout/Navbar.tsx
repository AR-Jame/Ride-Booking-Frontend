
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
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

interface MenuItem {
  title: string;
  url: string;
}

interface Navbar1Props {
  menu?: MenuItem[];
}

const Navbar = ({
  menu = [
    {
      title: "Home",
      url: "/"
    },
    {
      title: "About Us",
      url: "about-us",
    },
    {
      title: "Features",
      url: "features",
    },
    {
      title: "Contact",
      url: "contact",
    },
    {
      title: "FAQ",
      url: "faq",
    },
  ],
}: Navbar1Props) => {
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
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to={'/login'}><Button>Login</Button></Link>
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
                  {menu.map((item) => renderMobileMenuItem(item))}
                  <div className="flex flex-col gap-3">
                    <Link to={'/login'}>
                      <Button className="w-full">Login</Button>
                    </Link>
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
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        <Link to={item.url}>
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <Link key={item.title} to={item.url} className="text-md font-semibold">
      {item.title}
    </Link>
  );
};


export { Navbar };
