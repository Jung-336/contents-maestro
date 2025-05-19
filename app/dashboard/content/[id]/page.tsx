"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Download, Share2, Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

// 샘플 데이터
const contentData = {
  id: "1",
  title: "2025년 디지털 마케팅 트렌드: 성공적인 전략을 위한 가이드",
  createdAt: "2025-05-18T14:30:00Z",
  content: `
# 2025년 디지털 마케팅 트렌드: 성공적인 전략을 위한 가이드

디지털 마케팅 환경은 끊임없이 진화하고 있습니다. 2025년에 접어들면서, 기업들은 새로운 기술과 소비자 행동 변화에 적응해야 합니다. 이 글에서는 2025년 주목해야 할 디지털 마케팅 트렌드와 성공적인 전략을 위한 가이드를 제공합니다.

## 1. AI 기반 개인화 마케팅의 확산

인공지능 기술의 발전으로 개인화된 마케팅이 더욱 정교해지고 있습니다. 2025년에는 AI가 소비자의 행동 패턴, 선호도, 구매 이력을 분석하여 초개인화된 콘텐츠와 제안을 제공할 것입니다.

### 실행 전략:
- 고객 데이터 플랫폼(CDP)을 구축하여 통합된 고객 프로필 생성
- AI 기반 콘텐츠 추천 엔진 도입
- 행동 기반 자동화 마케팅 캠페인 설계

## 2. 음성 검색 최적화의 중요성 증가

음성 인식 기술의 발전과 스마트 스피커의 보급으로 음성 검색이 계속 증가하고 있습니다. 2025년에는 검색의 30% 이상이 화면 없이 이루어질 것으로 예상됩니다.

### 실행 전략:
- 자연어 질문에 답하는 콘텐츠 구성
- 장문형 키워드와 대화체 콘텐츠 최적화
- 로컬 SEO 강화 (음성 검색의 많은 부분이 지역 정보 관련)

## 3. 메타버스 마케팅의 주류화

가상 현실과 증강 현실 기술의 발전으로 메타버스가 새로운 마케팅 채널로 부상하고 있습니다. 2025년에는 더 많은 브랜드가 메타버스 내에서 경험을 제공하고 커뮤니티를 구축할 것입니다.

### 실행 전략:
- 가상 이벤트 및 경험 제공
- 디지털 제품 및 NFT 개발
- 메타버스 내 브랜드 공간 구축

## 4. 지속가능성과 윤리적 마케팅

소비자들은 점점 더 환경 및 사회적 책임을 중요시하고 있습니다. 2025년에는 지속가능성과 윤리적 가치를 마케팅 전략의 핵심으로 삼는 브랜드가 경쟁 우위를 차지할 것입니다.

### 실행 전략:
- 지속가능한 비즈니스 관행 강조
- 투명한 공급망 및 생산 과정 공개
- 사회적 가치를 반영한 콘텐츠 제작

## 5. 데이터 프라이버시 중심 마케팅

개인정보 보호에 대한 규제가 강화되고 소비자의 인식이 높아지면서, 데이터 프라이버시를 존중하는 마케팅 접근법이 필수적입니다.

### 실행 전략:
- 제로파티 데이터 수집 강화
- 투명한 데이터 사용 정책 수립
- 쿠키 없는 마케팅 전략 개발

## 결론

2025년 디지털 마케팅 환경에서 성공하기 위해서는 기술 트렌드를 따라가는 것뿐만 아니라, 소비자의 변화하는 가치와 기대에 부응하는 것이 중요합니다. AI 기반 개인화, 음성 검색 최적화, 메타버스 마케팅, 지속가능성, 데이터 프라이버시를 고려한 전략을 수립하여 경쟁 우위를 확보하세요.
  `,
  seoTips: [
    "주요 키워드: 디지털 마케팅 트렌드 2025, AI 마케팅, 음성 검색 최적화, 메타버스 마케팅",
    "H1 태그에 주요 키워드를 포함시키세요",
    "각 섹션에 H2, H3 태그를 사용하여 콘텐츠 구조화",
    "이미지에 대체 텍스트 추가 (예: '2025 디지털 마케팅 트렌드 인포그래픽')",
    "메타 디스크립션: '2025년 디지털 마케팅 트렌드와 성공 전략을 알아보세요. AI 개인화, 음성 검색, 메타버스 마케팅 등 최신 트렌드 분석.'",
    "내부 링크: 관련 콘텐츠(AI 마케팅, SEO 전략 등)로 연결",
    "외부 링크: 신뢰할 수 있는 통계 자료나 연구 결과 인용",
    "소셜 미디어 공유 시 트렌드 관련 해시태그 사용 (#디지털마케팅2025 #마케팅트렌드)",
  ],
}

export default function ContentPage({ params }: { params: { id: string } }) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentData.content)
      setCopied(true)
      toast({
        title: "복사 완료",
        description: "콘텐츠가 클립보드에 복사되었습니다.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "복사 실패",
        description: "콘텐츠를 복사하는 데 실패했습니다. 다시 시도해주세요.",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    const element = document.createElement("a")
    const file = new Blob([contentData.content], { type: "text/markdown" })
    element.href = URL.createObjectURL(file)
    element.download = `${contentData.title.replace(/\s+/g, "-").toLowerCase()}.md`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    toast({
      title: "다운로드 완료",
      description: "콘텐츠가 마크다운 파일로 다운로드되었습니다.",
    })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: contentData.title,
          text: "컨텐츠 마에스트로로 생성된 콘텐츠입니다.",
          url: window.location.href,
        })
        .then(() => {
          toast({
            title: "공유 완료",
            description: "콘텐츠가 성공적으로 공유되었습니다.",
          })
        })
        .catch(() => {
          toast({
            title: "공유 실패",
            description: "콘텐츠를 공유하는 데 실패했습니다.",
            variant: "destructive",
          })
        })
    } else {
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "링크 복사 완료",
        description: "콘텐츠 링크가 클립보드에 복사되었습니다.",
      })
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">콘텐츠 상세</h2>
          <p className="text-muted-foreground">생성된 콘텐츠를 확인하고 활용하세요</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                복사됨
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                복사
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            다운로드
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            공유
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{contentData.title}</CardTitle>
          <CardDescription>
            {new Date(contentData.createdAt).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
            에 생성됨
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="content">
            <TabsList className="mb-4">
              <TabsTrigger value="content">콘텐츠</TabsTrigger>
              <TabsTrigger value="seo">SEO 팁</TabsTrigger>
            </TabsList>
            <TabsContent value="content">
              <div className="prose dark:prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: contentData.content.replace(/\n/g, "<br />") }} />
              </div>
            </TabsContent>
            <TabsContent value="seo">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">SEO 최적화 팁</h3>
                <ul className="space-y-2">
                  {contentData.seoTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                      <p>{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-muted-foreground">ID: {contentData.id}</p>
          <Button>블로그에 게시하기</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
