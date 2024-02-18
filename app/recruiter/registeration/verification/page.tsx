import { Separator } from "@/components/ui/separator"
import VerificationForm from "./verification-form"

export default function VerificationFormPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Verification Information</h3>
        <p className="text-sm text-muted-foreground">
          Enter Necessary Verification Information
        </p>
      </div>
      <Separator />
      <VerificationForm />
    </div>
  )
}