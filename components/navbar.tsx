"use client";
import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link  } from "@heroui/link";
import { Button } from "@heroui/button";
import { siteConfig } from "@/config/site";


export default function MyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} 
      isBordered
      className="md:h-[7rem] w-full sticky top-0 inset-x-0 z-40 backdrop-blur-lg bg-background/80"
      >
      
      <NavbarContent>
        <NavbarBrand>
          <Link color="foreground" href="/">
            <p className="font-bold text-inherit">{siteConfig.name}</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex gap-7">
        {siteConfig.navItems.map((item, index) => (
          item.label == "BOOK NOW"
          ?
            <NavbarMenuItem key={`${item}-${index}`}>
              <Button as={Link} color="primary" href={item.href} variant="shadow" radius="none">
                {item.label}
              </Button>
            </NavbarMenuItem>
          :
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={"foreground"}
                href={item.href}
                size="md"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
        ))}
      </NavbarContent>


    {/* NAV toggle menu */}
      <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden"/>
      
      <NavbarMenu>
        {siteConfig.navMenuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href={item.href}
              size="md"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

    </Navbar>
  );
}

