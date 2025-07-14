import { Home, BookOpen, Video, ClipboardList, BarChart3, CreditCard, HelpCircle, MessageSquare } from "lucide-react"
import { NavLink } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigation = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "My Courses", url: "/courses", icon: BookOpen },
  { title: "Live Classes", url: "/live-classes", icon: Video },
  { title: "Assignments/Quizzes", url: "/assignments", icon: ClipboardList },
  { title: "Analytics/Progress", url: "/analytics", icon: BarChart3 },
  { title: "Payments", url: "/payments", icon: CreditCard },
  { title: "Help/Support", url: "/help", icon: HelpCircle },
]

export function LMSSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">EduFlow</h2>
            <p className="text-xs text-muted-foreground">Learning Management</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mt-4 p-3 rounded-lg bg-muted/50">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">John Doe</p>
            <p className="text-xs text-muted-foreground">Instructor</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`
                      }
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}