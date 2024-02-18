import { Separator } from "@/components/ui/separator"
import AdditionalForm from "./additional-form"

export default function AdditionalFormPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Additional Information</h3>
        <p className="text-sm text-muted-foreground">
          Enter Necessary Additional Information
        </p>
      </div>
      <Separator />
      <AdditionalForm />
    </div>
  )
}