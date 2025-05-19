import { Sparkles, Clock, Search, BarChart4, Layers } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">주요 기능</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">콘텐츠 제작의 새로운 패러다임</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              컨텐츠 마에스트로는 AI 기술을 활용하여 블로그 콘텐츠 제작 과정을 혁신합니다.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Sparkles className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">AI 콘텐츠 생성</h3>
            <p className="text-center text-muted-foreground">
              GPT-4o 기반으로 고품질 블로그 콘텐츠를 자동으로 생성합니다.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Search className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">SEO 최적화</h3>
            <p className="text-center text-muted-foreground">
              검색 엔진 최적화 팁을 제공하여 콘텐츠의 가시성을 높입니다.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">시간 절약</h3>
            <p className="text-center text-muted-foreground">몇 초 만에 완성된 블로그 콘텐츠를 받아보세요.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BarChart4 className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">크레딧 시스템</h3>
            <p className="text-center text-muted-foreground">
              필요한 만큼만 사용하는 유연한 크레딧 기반 요금제를 제공합니다.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Layers className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">콘텐츠 히스토리</h3>
            <p className="text-center text-muted-foreground">
              생성한 모든 콘텐츠를 저장하고 언제든지 다시 확인할 수 있습니다.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <span className="text-2xl font-bold text-primary">+</span>
            </div>
            <h3 className="text-xl font-bold">무료 체험</h3>
            <p className="text-center text-muted-foreground">회원가입 시 10개의 무료 크레딧을 제공합니다.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
