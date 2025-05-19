import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Copy, ExternalLink, Search } from "lucide-react"

// 샘플 데이터
const contentHistory = [
  {
    id: 1,
    title: "2025년 디지털 마케팅 트렌드: 성공적인 전략을 위한 가이드",
    createdAt: "2025-05-18T14:30:00Z",
  },
  {
    id: 2,
    title: "재택근무의 생산성을 높이는 10가지 홈 오피스 인테리어 팁",
    createdAt: "2025-05-15T09:45:00Z",
  },
  {
    id: 3,
    title: "초보자를 위한 주식 투자 가이드: 시작하기 전에 알아야 할 것들",
    createdAt: "2025-05-10T16:20:00Z",
  },
  {
    id: 4,
    title: "건강한 식습관을 위한 7가지 영양소 균형 잡힌 식단 계획",
    createdAt: "2025-05-05T11:15:00Z",
  },
  {
    id: 5,
    title: "효과적인 시간 관리 기술: 생산성을 높이는 5가지 방법",
    createdAt: "2025-05-01T08:30:00Z",
  },
]

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">콘텐츠 히스토리</h2>
        <p className="text-muted-foreground">생성한 모든 콘텐츠를 확인하고 관리하세요</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="콘텐츠 검색..." className="pl-8" />
        </div>
        <Button variant="outline">필터</Button>
        <Button variant="outline">정렬</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>생성된 콘텐츠</CardTitle>
          <CardDescription>총 {contentHistory.length}개의 콘텐츠가 있습니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentHistory.map((content) => (
              <div
                key={content.id}
                className="flex flex-col gap-2 rounded-lg border p-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="space-y-1">
                  <h3 className="font-medium">{content.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {new Date(content.createdAt).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Copy className="mr-2 h-4 w-4" />
                    복사
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    보기
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Button variant="outline" size="sm" disabled>
              이전
            </Button>
            <div className="text-sm text-muted-foreground">페이지 1 / 1</div>
            <Button variant="outline" size="sm" disabled>
              다음
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
