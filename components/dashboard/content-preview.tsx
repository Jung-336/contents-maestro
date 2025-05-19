"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Copy, RotateCcw, Save } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ContentPreviewProps {
  content: {
    title: string
    content: string
    seoTips: string[]
  }
  onSave: () => void
  onReset: () => void
}

export function ContentPreview({ content, onSave, onReset }: ContentPreviewProps) {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content.content)
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

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle>생성된 콘텐츠 미리보기</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="content">
          <TabsList className="mb-4">
            <TabsTrigger value="content">콘텐츠</TabsTrigger>
            <TabsTrigger value="seo">SEO 팁</TabsTrigger>
          </TabsList>
          <TabsContent value="content">
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: content.content.replace(/\n/g, "<br />") }} />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="seo">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">SEO 최적화 팁</h3>
              <ul className="space-y-2">
                {content.seoTips.map((tip, index) => (
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
        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="mr-2 h-4 w-4" />
          새로 작성
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleCopy}>
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
          <Button onClick={onSave}>
            <Save className="mr-2 h-4 w-4" />
            저장
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
