import { Separator } from "@/components/ui/separator"
import RecruiterForm from "./recruiter-form"

export default function RecruiterFormPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Recruiter Information</h3>
        <p className="text-sm text-muted-foreground">
          Enter Necessary information about the recruiter
        </p>
      </div>
      <Separator />
      <RecruiterForm />
    </div>
  )
}