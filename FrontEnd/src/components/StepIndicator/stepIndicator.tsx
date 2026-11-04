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
    <ol
      className="mb-8 flex justify-between gap-2 border-b border-border pb-5"
      aria-label="Etapas de criação do investigador"
    >
      {STEPS.map((step) => (
        <li
          key={step.number}
          aria-current={currentStep === step.number ? 'step' : undefined}
          className={cn(
            'flex items-center gap-2 text-xs transition-colors duration-200 sm:text-sm',
            currentStep === step.number
              ? 'border-b-2 border-[#1a6fb5] pb-1.5 text-foreground'
              : currentStep > step.number
                ? 'text-[#6ea8d8]'
                : 'text-[#6E97A4]'
          )}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-[10px]">
            {step.number}
          </span>{' '}
          {step.label}
        </li>
      ))}
    </ol>
  )
}

export default StepIndicator
