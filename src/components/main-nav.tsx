'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import LogoIcon from './logo-icon'
import Logo from './logo'
import { Button } from './ui/button'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Template 1',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 2',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 3',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 4',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 5',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 6',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 7',
    href: '#',
    description: 'Reserved for future use.',
  },
  {
    title: 'Template 8',
    href: '#',
    description: 'Reserved for future use.',
  },
]

export function MainNav() {
  return (
    <div className="fixed top-0 inset-x-0 bg-zinc-900/10 backdrop-blur-lg border-b z-50">
      <div className="grid grid-cols-12 gap-0 p-4 items-center">
        <div className="col-span-12 md:col-span-2">
          <Link href="/">
            <Logo className="w-auto h-14" />
          </Link>
        </div>
        <div className="col-span-12 md:col-span-8 hidden md:block">
          <div className="flex w-full justify-center self-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Learn
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <LogoIcon className="h-auto w-14" />
                            <div className="mb-2 mt-4 text-lg font-medium">
                              About Kaspa
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Learn more about Kaspa and the underlying
                              technology that powers it.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Learn more about Kaspa and the underlying technology.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Key Features">
                        Learn more about Key Features of Kaspa.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Tokenomics"
                      >
                        Learn more about Tokenomics of Kaspa.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Build
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
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
                  <Link href="/mine-kaspa" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Mine
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contribute" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contribute
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="https://explorer-tn11.kaspa.org"
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Explorer
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/newspaper" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Newspaper
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="col-span-12 md:col-span-2 hidden md:block">
          <div className="flex justify-end">
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
