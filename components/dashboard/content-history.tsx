"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ExternalLink } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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
]

export function ContentHistory() {
  const { toast } = useToast()

  const handleCopy = (title: string) => {
    navigator.clipboard.writeText(title)
    toast({
      title: "복사 완료",
      description: "콘텐츠 제목이 클립보드에 복사되었습니다.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>최근 생성한 콘텐츠</CardTitle>
        <CardDescription>최근에 생성한 콘텐츠 목록입니다</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contentHistory.length === 0 ? (
            <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
              <p className="text-sm text-muted-foreground">아직 생성된 콘텐츠가 없습니다</p>
            </div>
          ) : (
            contentHistory.map((content) => (
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
                  <Button size="sm" variant="outline" onClick={() => handleCopy(content.title)}>
                    <Copy className="mr-2 h-4 w-4" />
                    복사
                  </Button>
                  <Link href={`/dashboard/content/${content.id}`}>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      보기
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        {contentHistory.length > 0 && (
          <div className="mt-4 flex justify-center">
            <Link href="/dashboard/history">
              <Button variant="outline">모든 콘텐츠 보기</Button>
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
