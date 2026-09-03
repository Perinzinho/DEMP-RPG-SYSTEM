import { Textarea } from '@/components/ui/textarea'

interface AboutPanelProps {
  annotations?: string
  onChange: (value: string) => void
}

function AboutPanel({ annotations, onChange }: AboutPanelProps) {
  return (
    <div>
      <p className="font-title mb-3 text-[15px] text-[#9DC4D1]">Sobre</p>
      <Textarea
        aria-label="Anotações"
        placeholder="Anotações"
        value={annotations ?? ''}
        onChange={(e) => onChange(e.target.value)}
        className="h-[200px] resize-y rounded border border-[#2F5663] bg-transparent px-3 py-2 font-title text-xs italic text-foreground"
      />
    </div>
  )
}

export default AboutPanel
