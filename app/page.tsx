import Link from "next/link"

import { ContentLayout } from "@/components/admin-panel/content-layout"
import MBC from "@/components/mbc"
import PlaceholderContent from "@/app/placeholder-content"

export default function DashboardPage() {
  return (
    <ContentLayout title="Home">
      <MBC />
      <PlaceholderContent />
    </ContentLayout>
  )
}
