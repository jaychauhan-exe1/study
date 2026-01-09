import { Sidebar } from "@/app/components/Sidebar"

export default function TopicsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-[220px] border-r border-zinc-800">
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="flex-1 px-10 py-8">
        {children}
      </main>
    </div>
  )
}
