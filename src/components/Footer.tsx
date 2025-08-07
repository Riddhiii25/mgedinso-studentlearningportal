import { Button } from "@/components/ui/button"
import { HelpCircle, Mail, MessageSquare, Shield, FileText } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card mt-8">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Button variant="ghost" size="sm" className="gap-2">
            <HelpCircle className="w-4 h-4" />
            FAQs
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Mail className="w-4 h-4" />
            Contact Us
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <MessageSquare className="w-4 h-4" />
            Feedback
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <FileText className="w-4 h-4" />
            Terms & Privacy
          </Button>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-4">
          © 2024 mgedinso. All rights reserved.
        </div>
      </div>
    </footer>
  )
}