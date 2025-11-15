import { steps } from "@/constants"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

interface Status {
  status: string
  at: string
}

export default function Stepper({
  history,
  onNext,
}: {
  history: Status[]
  onNext: (nextStep: string) => void
}) {
  const completedStatuses = history?.map((h) => h.status)
  const currentStep = completedStatuses[completedStatuses.length - 1]

  const formatTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  // Find next step
  const currentIndex = steps.findIndex((s) => s.step === currentStep)
  const nextStep =
    currentIndex !== -1 && currentIndex < steps.length - 1
      ? steps[currentIndex + 1].step
      : null

  return (
    <Card className="w-full max-w-xl mx-auto p-6">
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          {steps?.map((s) => {
            const isCompleted = completedStatuses.includes(s.step)
            const isActive = currentStep === s.step
            const historyEntry = history.find((h) => h.status === s.step)

            return (
              <div key={s.id} className="flex flex-col items-center flex-1">
                {isCompleted ? (
                  <CheckCircle2 className="text-green-600 w-6 h-6" />
                ) : (
                  <Circle
                    className={`w-6 h-6 ${isActive ? "text-blue-600" : "text-gray-400"
                      }`}
                  />
                )}
                <span
                  className={`mt-2 text-xs font-medium ${isActive ? "text-blue-600" : "text-gray-500"
                    }`}
                >
                  {s.step.replace("_", " ")}
                </span>
                {historyEntry && (
                  <span className="text-[10px] text-gray-400 mt-1">
                    {formatTime(historyEntry.at)}
                  </span>
                )}
              </div>
            )
          })}
        </div>

        {/* Next button */}
        <div className="mt-6 flex justify-center gap-3">
          <Button
            onClick={() => nextStep && onNext(nextStep)}
            disabled={!nextStep}
          >
            Next Step
          </Button>
          <Button variant={"destructive"} onClick={() => onNext("CANCELED")}>Cancel</Button>
        </div>
      </CardContent>
    </Card>
  )
}
