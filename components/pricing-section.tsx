import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">크레딧 요금제</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">필요한 만큼만 사용하세요</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              합리적인 가격으로 고품질 콘텐츠를 생성하세요. 1개의 크레딧으로 1개의 블로그 콘텐츠를 생성할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">무료 체험</h3>
              <p className="text-muted-foreground">회원가입 시 자동으로 제공됩니다.</p>
            </div>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              0원
              <span className="ml-1 text-base font-normal text-muted-foreground">/ 10 크레딧</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>10개 블로그 콘텐츠 생성</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>SEO 최적화 팁 제공</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>콘텐츠 히스토리 저장</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/signup">
                <Button className="w-full">무료로 시작하기</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-primary">
            <div className="space-y-2">
              <div className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                인기
              </div>
              <h3 className="text-2xl font-bold">중간 패키지</h3>
              <p className="text-muted-foreground">정기적인 콘텐츠 생성에 적합합니다.</p>
            </div>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              40,000원
              <span className="ml-1 text-base font-normal text-muted-foreground">/ 100 크레딧</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              <span className="line-through">50,000원</span>
              <span className="ml-2 text-primary">20% 할인</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>100개 블로그 콘텐츠 생성</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>SEO 최적화 팁 제공</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>콘텐츠 히스토리 저장</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>우선 지원</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/signup">
                <Button className="w-full">구매하기</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">대량 패키지</h3>
              <p className="text-muted-foreground">전문 콘텐츠 제작자를 위한 패키지입니다.</p>
            </div>
            <div className="mt-4 flex items-baseline text-3xl font-bold">
              175,000원
              <span className="ml-1 text-base font-normal text-muted-foreground">/ 500 크레딧</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              <span className="line-through">250,000원</span>
              <span className="ml-2 text-primary">30% 할인</span>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>500개 블로그 콘텐츠 생성</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>SEO 최적화 팁 제공</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>콘텐츠 히스토리 저장</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>우선 지원</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                <span>전용 기술 지원</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <Link href="/signup">
                <Button className="w-full" variant="outline">
                  구매하기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
