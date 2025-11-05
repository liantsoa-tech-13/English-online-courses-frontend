import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="h-screen w-screen">
        <SidebarProvider>
          <div className="flex h-full w-full">
            <AppSidebar />

            <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
              <SidebarTrigger />

              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
