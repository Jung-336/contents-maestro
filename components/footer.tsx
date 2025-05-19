import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start md:gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">컨텐츠 마에스트로</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 컨텐츠 마에스트로. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground">
            서비스 소개
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            이용약관
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            개인정보 처리방침
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            연락처
          </Link>
        </div>
      </div>
    </footer>
  )
}
