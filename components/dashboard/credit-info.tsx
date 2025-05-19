import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"
import Link from "next/link"

interface CreditInfoProps {
  credits: number
}

export function CreditInfo({ credits }: CreditInfoProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-3">
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-yellow-500" />
        <div className="text-sm font-medium">{credits} 크레딧 남음</div>
      </div>
      <Link href="/dashboard/credits">
        <Button size="sm" variant="outline">
          충전하기
        </Button>
      </Link>
    </div>
  )
}
