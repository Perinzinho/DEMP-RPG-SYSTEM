import { Textarea } from '@/components/ui/textarea'

interface AboutPanelProps {
  annotations?: string
  onChange: (value: string) => void
}

function AboutPanel({ annotations, onChange }: AboutPanelProps) {
  return (
    <div className="rounded-lg border border-[#2F5663] p-4 shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <p className="font-title mb-3 text-[15px] text-[#9DC4D1]">Sobre</p>
      <Textarea
        aria-label="Anotações"
        placeholder="Anotações"
        value={annotations ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="h-[200px] resize-y rounded border border-[#2F5663] bg-transparent px-3 py-2 font-title text-xs italic text-foreground transition-all duration-300 focus:border-[#1a6fb5] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.2)]"
      />
    </div>
  )
}

export default AboutPanel
