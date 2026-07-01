"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/useTranslation"

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const { lang } = useTranslation()
  useEffect(() => {
    const langDef = document.documentElement.lang
    if (!(langDef === lang)) {
      document.documentElement.lang = lang
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr"
    }
  }, [lang])

  return <>{children}</>
}
