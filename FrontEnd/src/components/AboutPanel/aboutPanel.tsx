import { Textarea } from '@/components/ui/textarea'

interface AboutPanelProps {
  annotations?: string
  onChange: (value: string) => void
}

function AboutPanel({ annotations, onChange }: AboutPanelProps) {
  return (
    <div className="surface-panel p-5 sm:p-6">
      <h2 className="panel-heading">Anotações</h2>
      <Textarea
        aria-label="Anotações"
        placeholder="Pistas, memórias e tudo o que não pode ser esquecido..."
        value={annotations ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-[240px] resize-y rounded-md border-border bg-background/50 p-3 text-sm leading-relaxed text-foreground"
      />
    </div>
  )
}

export default AboutPanel
