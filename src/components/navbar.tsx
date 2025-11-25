"use client"

import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, Trees, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { PHONE_NUMBER, PHONE_HREF, COMPANY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tree Removal",
    href: "/tree-removal",
    description: "Safe removal of hazardous trees, crane work, and large takedowns.",
  },
  {
    title: "Tree Trimming",
    href: "/tree-trimming",
    description: "Structural pruning, deadwooding, and health maintenance.",
  },
  {
    title: "Stump Grinding",
    href: "/stump-grinding",
    description: "Deep root grinding and complete lawn reclamation.",
  },
  {
    title: "Emergency Service",
    href: "/emergency-storm-damage",
    description: "24/7 Storm response for trees on houses or driveways.",
  },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-stone-900/90 backdrop-blur-md text-white">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="bg-green-600 p-2 rounded-sm group-hover:bg-green-500 transition-colors">
             <Trees className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight uppercase">{COMPANY_NAME}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white data-[active]:bg-white/10 data-[state=open]:bg-white/10 text-sm font-medium uppercase tracking-wider">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-stone-900 text-stone-400">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/#about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider text-stone-300">
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/#faq" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider text-stone-300">
                  FAQ
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider text-stone-300">
                  Blog
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider text-stone-300">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport className="bg-stone-900 border-stone-800" />
          </NavigationMenu>

          <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white font-bold uppercase tracking-wide rounded-none px-6">
            <Link href={PHONE_HREF}>
              <Phone className="mr-2 h-4 w-4" />
              {PHONE_NUMBER}
            </Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-stone-900 border-stone-800 text-white overflow-y-auto p-6">
              <SheetTitle className="text-left mb-8 flex items-center gap-2 text-white">
                 <Trees className="h-6 w-6 text-green-500" /> {COMPANY_NAME}
              </SheetTitle>
              <nav className="flex flex-col gap-6">
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500">Services</h4>
                  {components.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="block text-lg font-light uppercase hover:text-green-500 transition-colors pl-4 border-l border-stone-800 hover:border-green-500"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                
                <div className="space-y-4">
                   <h4 className="text-sm font-bold uppercase tracking-widest text-stone-500">Company</h4>
                   <Link href="/#about" className="block text-lg font-light uppercase hover:text-green-500 transition-colors pl-4 border-l border-stone-800 hover:border-green-500">About</Link>
                   <Link href="/blog" className="block text-lg font-light uppercase hover:text-green-500 transition-colors pl-4 border-l border-stone-800 hover:border-green-500">Blog</Link>
                   <Link href="/#faq" className="block text-lg font-light uppercase hover:text-green-500 transition-colors pl-4 border-l border-stone-800 hover:border-green-500">FAQ</Link>
                   <Link href="/contact" className="block text-lg font-light uppercase hover:text-green-500 transition-colors pl-4 border-l border-stone-800 hover:border-green-500">Contact</Link>
                </div>

                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold h-12 uppercase tracking-wide rounded-none mt-8">
                  <Link href={PHONE_HREF}>
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-green-400 focus:bg-white/10 focus:text-green-400",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none text-white uppercase">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-stone-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";