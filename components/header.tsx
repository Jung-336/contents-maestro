"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"
import { useState, useEffect } from "react"

export function Header() {
  const pathname = usePathname()
  // 실제 구현에서는 Supabase 또는 다른 인증 시스템을 통해 로그인 상태를 확인합니다
  // 여기서는 데모를 위해 로컬 상태를 사용합니다
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 데모 목적으로 URL 경로에 따라 로그인 상태를 시뮬레이션합니다
  useEffect(() => {
    // 대시보드 경로에 있으면 로그인 상태로 간주
    setIsLoggedIn(pathname.startsWith("/dashboard"))
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">컨텐츠 마에스트로</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground",
              )}
            >
              홈
            </Link>
            <Link
              href="/#pricing"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/#pricing" ? "text-primary" : "text-muted-foreground",
              )}
            >
              요금제
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {isLoggedIn ? (
            <Link href="/dashboard">
              <Button>대시보드</Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  로그인
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">회원가입</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
