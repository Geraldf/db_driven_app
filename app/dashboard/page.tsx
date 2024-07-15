import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import MBC from "@/components/mbc"

import PlaceholderContent from "../placeholder-content"

export default function DashboardPage() {
  return (
    <ContentLayout title="Dashboard">
      <MBC />
      <PlaceholderContent />
    </ContentLayout>
  )
}
