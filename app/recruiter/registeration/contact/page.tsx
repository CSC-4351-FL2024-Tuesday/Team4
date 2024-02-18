import { Separator } from "@/components/ui/separator"
import ContactForm from "./contact-form"

export default function ContactFormPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Contact Information</h3>
        <p className="text-sm text-muted-foreground">
          Enter Necessary Contact Information
        </p>
      </div>
      <Separator />
      <ContactForm />
    </div>
  )
}