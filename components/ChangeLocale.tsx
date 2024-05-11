"use client"

import React from "react"

import { switchLocaleAction } from "../actions/switch-locale"
import { useTranslation } from "../i18n/client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

// We removed the `locale` prop because we can get it from the hook
export function ChangeLocale() {
  const { i18n, t } = useTranslation("common")
  // You can also use our custom hook instead of `i18n.resolvedLanguage`
  // const locale = useLocale();

  return (
    <div>
      <Select onValueChange={(e) => switchLocaleAction(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={i18n.resolvedLanguage} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">🇺🇸 {t("english")}</SelectItem>
          <SelectItem value="zh-CN">🇨🇳 {t("chinese")}</SelectItem>
          <SelectItem value="sv">🇸🇪 {t("swedish")}</SelectItem>
          <SelectItem value="de">🇩🇪 {t("german")}</SelectItem>
        </SelectContent>
      </Select>
      {/* <select
        onChange={e => switchLocaleAction(e.target.value)}
        value={i18n.resolvedLanguage}
      >
        <option value="en">🇺🇸 {t('english')}</option>
        <option value="zh-CN">🇨🇳 {t('chinese')}</option>
        <option value="sv">🇸🇪 {t('swedish')}</option>
      </select> */}
    </div>
  )
}
