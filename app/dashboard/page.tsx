"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { ContentHistory } from "@/components/dashboard/content-history"
import { CreditInfo } from "@/components/dashboard/credit-info"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { ContentPreview } from "@/components/dashboard/content-preview"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"

export default function DashboardPage() {
  const [topic, setTopic] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<null | {
    title: string
    content: string
    seoTips: string[]
  }>(null)
  const { toast } = useToast()
  const [credits, setCredits] = useState(8)

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "주제를 입력해주세요",
        description: "블로그 콘텐츠를 생성하려면 주제나 키워드를 입력해야 합니다.",
        variant: "destructive",
      })
      return
    }

    if (credits <= 0) {
      toast({
        title: "크레딧이 부족합니다",
        description: "콘텐츠를 생성하려면 크레딧을 충전해주세요.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)

    try {
      // 크레딧 차감
      const { error: creditsError } = await supabase
        .from('credits')
        .insert([
          {
            user_id: (await supabase.auth.getUser()).data.user?.id,
            amount: -1,
            type: 'content_generation',
            description: `콘텐츠 생성: ${topic}`
          }
        ])

      if (creditsError) throw creditsError

      // 크레딧 상태 업데이트
      setCredits((prev) => prev - 1)

      // 실제 구현에서는 API 호출로 대체됩니다
      setTimeout(() => {
        // 샘플 생성 콘텐츠
        setGeneratedContent({
          title: `${topic}에 관한 완벽 가이드: 2025년 최신 트렌드와 전략`,
          content: `
# ${topic}에 관한 완벽 가이드: 2025년 최신 트렌드와 전략

## 소개
${topic}은 현대 비즈니스와 일상생활에서 중요한 역할을 합니다. 이 글에서는 ${topic}의 최신 트렌드와 효과적인 전략에 대해 알아보겠습니다.

## ${topic}의 중요성
오늘날 경쟁이 치열한 시장에서 ${topic}은 성공을 위한 핵심 요소입니다. 효과적인 ${topic} 전략을 구현하면 다음과 같은 이점이 있습니다:
- 비즈니스 성장 가속화
- 고객 경험 향상
- 운영 효율성 증대
- 경쟁 우위 확보

## 2025년 ${topic} 트렌드
### 1. AI 기술의 통합
인공지능 기술은 ${topic} 분야에 혁명을 일으키고 있습니다. 머신러닝 알고리즘과 자연어 처리 기술을 활용하여 더 정확한 예측과 개인화된 경험을 제공할 수 있습니다.

### 2. 데이터 기반 의사결정
데이터는 효과적인 ${topic} 전략의 핵심입니다. 빅데이터 분석을 통해 고객 행동을 이해하고 시장 트렌드를 예측할 수 있습니다.

### 3. 지속가능성 중시
환경 문제에 대한 인식이 높아지면서, 지속가능한 ${topic} 방식이 중요해지고 있습니다. 친환경적인 접근법은 브랜드 이미지 향상에도 도움이 됩니다.

## 효과적인 ${topic} 전략 수립 방법
1. **명확한 목표 설정**: 구체적이고 측정 가능한 목표를 설정하세요.
2. **타겟 고객 이해**: 고객의 니즈와 선호도를 철저히 분석하세요.
3. **경쟁사 분석**: 경쟁사의 전략을 연구하고 차별화 포인트를 찾으세요.
4. **다양한 채널 활용**: 여러 채널을 통합적으로 활용하여 시너지 효과를 창출하세요.
5. **성과 측정 및 최적화**: 지속적으로 성과를 측정하고 전략을 개선하세요.

## 결론
${topic}은 계속해서 진화하고 있으며, 최신 트렌드를 파악하고 효과적인 전략을 구현하는 것이 성공의 열쇠입니다. 이 가이드를 참고하여 2025년 ${topic} 전략을 수립하시기 바랍니다.
        `,
          seoTips: [
            `주요 키워드: ${topic}, ${topic} 전략, ${topic} 트렌드 2025`,
            "H1 태그에 주요 키워드를 포함시키세요",
            "각 섹션에 H2, H3 태그를 사용하여 콘텐츠 구조화",
            `이미지에 대체 텍스트 추가 (예: '${topic} 인포그래픽')`,
            `메타 디스크립션: '2025년 ${topic} 트렌드와 성공 전략을 알아보세요. 최신 동향과 효과적인 접근법을 통해 경쟁 우위를 확보하세요.'`,
            "내부 링크: 관련 콘텐츠로 연결",
            "외부 링크: 신뢰할 수 있는 통계 자료나 연구 결과 인용",
            `소셜 미디어 공유 시 관련 해시태그 사용 (#${topic} #트렌드2025)`,
          ],
        })

        setIsGenerating(false)

        toast({
          title: "콘텐츠 생성 완료!",
          description: "AI가 블로그 콘텐츠를 성공적으로 생성했습니다.",
        })
      }, 3000)
    } catch (error) {
      toast({
        title: "콘텐츠 생성 오류",
        description: "콘텐츠 생성 중 오류가 발생했습니다. 다시 시도해주세요.",
        variant: "destructive",
      })
      setIsGenerating(false)
    }
  }

  const handleSave = () => {
    if (!generatedContent) return

    toast({
      title: "콘텐츠 저장 완료",
      description: "생성된 콘텐츠가 히스토리에 저장되었습니다.",
    })

    // 콘텐츠 저장 후 초기화
    setGeneratedContent(null)
    setTopic("")
  }

  const handleReset = () => {
    setGeneratedContent(null)
    setTopic("")
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">대시보드</h2>
          <p className="text-muted-foreground">블로그 콘텐츠를 생성하고 관리하세요</p>
        </div>
        <CreditInfo />
      </div>

      <DashboardStats />

      {!generatedContent ? (
        <Card>
          <CardHeader>
            <CardTitle>콘텐츠 생성</CardTitle>
            <CardDescription>블로그 주제나 키워드를 입력하면 AI가 콘텐츠를 자동으로 생성합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="블로그 주제 또는 키워드를 입력하세요. 예: '홈 오피스 인테리어 팁', '디지털 마케팅 트렌드 2025'"
              className="min-h-32"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              disabled={isGenerating}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-sm text-muted-foreground">1 콘텐츠 = 1 크레딧</p>
            <Button onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  생성 중...
                </>
              ) : (
                "콘텐츠 생성하기"
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <ContentPreview content={generatedContent} onSave={handleSave} onReset={handleReset} />
      )}

      <ContentHistory />
    </div>
  )
}
