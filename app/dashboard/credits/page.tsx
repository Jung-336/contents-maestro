import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function CreditsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">크레딧 구매</h2>
        <p className="text-muted-foreground">필요한 만큼 크레딧을 구매하여 콘텐츠를 생성하세요</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>소량 패키지</CardTitle>
            <CardDescription>소규모 콘텐츠 생성에 적합합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-center">
              <span className="text-4xl font-bold">5,000원</span>
              <span className="ml-1 text-muted-foreground">/ 10 크레딧</span>
            </div>
            <ul className="space-y-2 text-sm">
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
          </CardContent>
          <CardFooter>
            <Button className="w-full">구매하기</Button>
          </CardFooter>
        </Card>

        <Card className="border-primary">
          <CardHeader>
            <div className="inline-flex items-center rounded-full border border-primary bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              인기
            </div>
            <CardTitle className="mt-2">중간 패키지</CardTitle>
            <CardDescription>정기적인 콘텐츠 생성에 적합합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-center">
              <span className="text-4xl font-bold">40,000원</span>
              <span className="ml-1 text-muted-foreground">/ 100 크레딧</span>
            </div>
            <div className="mb-4 text-center text-sm">
              <span className="line-through">50,000원</span>
              <span className="ml-2 text-primary">20% 할인</span>
            </div>
            <ul className="space-y-2 text-sm">
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
          </CardContent>
          <CardFooter>
            <Button className="w-full">구매하기</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>대량 패키지</CardTitle>
            <CardDescription>전문 콘텐츠 제작자를 위한 패키지입니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 text-center">
              <span className="text-4xl font-bold">175,000원</span>
              <span className="ml-1 text-muted-foreground">/ 500 크레딧</span>
            </div>
            <div className="mb-4 text-center text-sm">
              <span className="line-through">250,000원</span>
              <span className="ml-2 text-primary">30% 할인</span>
            </div>
            <ul className="space-y-2 text-sm">
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
          </CardContent>
          <CardFooter>
            <Button className="w-full">구매하기</Button>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>결제 정보</CardTitle>
          <CardDescription>안전한 결제를 위해 토스페이먼츠를 사용합니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-bold">T</span>
                </div>
                <div>
                  <p className="font-medium">토스페이먼츠</p>
                  <p className="text-sm text-muted-foreground">신용카드, 간편결제 등 다양한 결제 수단을 지원합니다</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>* 결제 후 즉시 크레딧이 충전됩니다.</p>
              <p>* 구매한 크레딧은 환불이 불가능합니다.</p>
              <p>* 크레딧에는 유효기간이 없습니다.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
