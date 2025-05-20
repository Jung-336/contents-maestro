"use client"

import { Button } from "@/components/ui/button"
import { Coins } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export function CreditInfo() {
  const [credits, setCredits] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (!user) return

        const { data, error } = await supabase
          .from('credits')
          .select('amount')
          .eq('user_id', user.id)

        if (error) throw error

        const totalCredits = data.reduce((sum, record) => sum + record.amount, 0)
        setCredits(totalCredits)
      } catch (error) {
        console.error('Error fetching credits:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCredits()
  }, [])

  return (
    <div className="flex items-center gap-4 rounded-lg border p-3">
      <div className="flex items-center gap-2">
        <Coins className="h-5 w-5 text-yellow-500" />
        <div className="text-sm font-medium">
          {isLoading ? "로딩 중..." : `${credits} 크레딧 남음`}
        </div>
      </div>
      <Link href="/dashboard/credits">
        <Button size="sm" variant="outline">
          충전하기
        </Button>
      </Link>
    </div>
  )
}
