import { cn } from '@/lib/utils'

const STEPS = [
  { number: 1, label: 'Informações' },
  { number: 2, label: 'Atributos' },
  { number: 3, label: 'Perícias' },
]

interface StepIndicatorProps {
  currentStep: number
}

function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="mb-10 flex justify-center gap-8 border-b border-[#1a6fb5] pb-4">
      {STEPS.map((step) => (
        <span
          key={step.number}
          className={cn(
            'text-sm text-[#6E97A4]',
            currentStep === step.number && 'border-b-2 border-[#1a6fb5] pb-1.5 text-foreground'
          )}
        >
          {step.number}. {step.label}
        </span>
      ))}
    </div>
  )
}

export default StepIndicator
