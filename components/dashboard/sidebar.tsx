"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, History, CreditCard, Settings, HelpCircle } from "lucide-react"

const sidebarItems = [
  {
    title: "대시보드",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "콘텐츠 히스토리",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "크레딧 구매",
    href: "/dashboard/credits",
    icon: CreditCard,
  },
  {
    title: "설정",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "도움말",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 flex-col border-r bg-muted/40 md:flex">
      <div className="flex flex-col gap-2 p-6">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted",
              pathname === item.href ? "bg-muted" : "transparent",
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  )
}
