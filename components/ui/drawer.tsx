"use client"

import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
)
Drawer.displayName = "Drawer"

const DrawerTrigger = DrawerPrimitive.Trigger as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Trigger>
>

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Close>
>

const DrawerOverlay = DrawerPrimitive.Overlay as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>

const DrawerContent = DrawerPrimitive.Content as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
)
DrawerHeader.displayName = "DrawerHeader"

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
)
DrawerFooter.displayName = "DrawerFooter"

const DrawerTitle = DrawerPrimitive.Title as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>

const DrawerDescription = DrawerPrimitive.Description as React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
