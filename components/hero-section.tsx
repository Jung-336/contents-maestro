"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function HeroSection() {
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
    <section className="w-full py-12 md:py-24 lg:py:32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                AI로 블로그 콘텐츠를 자동 생성하세요
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                주제만 입력하면 SEO 최적화된 고품질 블로그 콘텐츠를 AI가 자동으로 작성해 드립니다. 시간을 절약하고
                콘텐츠 품질을 높이세요.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              {isLoggedIn ? (
                <Link href="/dashboard">
                  <Button size="lg" className="w-full min-[400px]:w-auto">
                    대시보드로 이동
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signup">
                    <Button size="lg" className="w-full min-[400px]:w-auto">
                      무료로 시작하기
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                      로그인
                    </Button>
                  </Link>
                </>
              )}
              <Link href="/#pricing">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  요금제 보기
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl border bg-background shadow-xl">
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <div className="ml-4 h-6 w-40 rounded-md bg-muted" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full rounded-md bg-muted" />
                  <div className="h-4 w-5/6 rounded-md bg-muted" />
                  <div className="h-4 w-4/6 rounded-md bg-muted" />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-full rounded-md bg-muted/50" />
                  <div className="h-3 w-full rounded-md bg-muted/50" />
                  <div className="h-3 w-full rounded-md bg-muted/50" />
                  <div className="h-3 w-full rounded-md bg-muted/50" />
                  <div className="h-3 w-4/5 rounded-md bg-muted/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
