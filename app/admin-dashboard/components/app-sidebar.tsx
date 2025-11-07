"use client"

import { useState } from "react"
import { Book, Check, Home, Settings, Users, ChevronDown, ChevronRight } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

const items = [
  {
    title: "Home",
    url: "/admin-dashboard",
    icon: Home,
  },
  {
    title: "Users",
    icon: Users,
    children: [
      { title: "All Users", url: "/admin-dashboard/users" },
      { title: "Add New", url: "/admin-dashboard/users/new" },
    ],
  },
  {
    title: "Lessons",
    icon: Book,
    children: [
      { title: "All Lessons", url: "/admin-dashboard/levels" },
      { title: "Add Lesson", url: "/admin-dashboard/lessons/new" },
    ],
  },
  {
    title: "Tests",
    url: "/admin-dashboard/tests",
    icon: Check,
  },
  {
    title: "Settings",
    url: "/admin-dashboard/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <Sidebar collapsible="icon" className="w-[230px] bg-white border-r border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-600 text-[13px] uppercase tracking-wider px-3 py-2">
            <div className="flex flex-row items-center space-x-2">
              <Image src="/Logo/Logo.png" alt="Logo" width={25} height={25} />
              <h1>EOC<span>M</span></h1>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <>
                      <SidebarMenuButton
                        onClick={() => toggleMenu(item.title)}
                        className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800 transition"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5 text-gray-500 text-[16px]" />
                          <h6 className="font-medium text-[16px]">{item.title}</h6>
                        </div>
                        {openMenus[item.title] ? (
                          <ChevronDown className="h-5 w-5 text-gray-400 text-[16px]" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400 text-[16px]" />
                        )}
                      </SidebarMenuButton>

                      {openMenus[item.title] && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.children.map((sub) => (
                            <a
                              key={sub.title}
                              href={sub.url}
                              className="block px-2 py-1.5 rounded-md text-[16px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                              {sub.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <SidebarMenuButton asChild className="px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800 transition">
                      <a href={item.url} className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5 text-gray-500 text-[16px]" />
                        <h6 className="font-medium text-[16px]">{item.title}</h6>
                      </a>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
