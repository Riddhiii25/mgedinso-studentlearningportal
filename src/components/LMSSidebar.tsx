import { 
  LayoutDashboard, 
  BookOpen, 
  ShoppingCart,
  Video, 
  FileText, 
  ClipboardList,
  UserCheck,
  MessageCircleQuestion
} from "lucide-react"
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
  { title: "Dashboard", url: "/portal", icon: LayoutDashboard },
  { title: "My Courses", url: "/my-courses", icon: BookOpen },
  { title: "Buy Courses", url: "/buy-courses", icon: ShoppingCart },
  { title: "Live Class", url: "/live-class", icon: Video },
  { title: "Home Assignment", url: "/home-assignment", icon: FileText },
  { title: "Online Assignment", url: "/online-assignment", icon: ClipboardList },
  { title: "Attendance", url: "/attendance", icon: UserCheck },
  { title: "Doubt Form", url: "/doubt-form", icon: MessageCircleQuestion },
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
            <h2 className="font-semibold text-foreground">mgedinso</h2>
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
            <p className="text-xs text-muted-foreground">Student</p>
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
                            ? "text-foreground" 
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