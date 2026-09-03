import { useState, type FormEvent } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface JoinRoomModalProps {
  onClose: () => void
  onJoin: (roomCode: string) => Promise<unknown>
}

function JoinRoomModal({ onClose, onJoin }: JoinRoomModalProps) {
  const [roomCode, setRoomCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await onJoin(roomCode)
    } catch {
      setError('Código inválido ou mesa não encontrada')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[360px] rounded-xl border-[#2F5663] bg-background">
        <DialogHeader>
          <DialogTitle className="font-title text-center text-2xl text-foreground">
            Entrar em mesa
          </DialogTitle>
        </DialogHeader>

        <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="roomCode" className="font-title text-sm text-foreground">
              Código da mesa
            </Label>
            <Input
              type="text"
              id="roomCode"
              placeholder="000000"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              disabled={loading}
              maxLength={6}
              className="h-12 rounded-lg border-none bg-muted px-4 text-lg tracking-[2px] text-foreground"
            />
          </div>

          {error && <p className="m-0 text-sm text-destructive">{error}</p>}

          <Button
            type="submit"
            disabled={loading || !roomCode}
            className="h-11 w-full rounded-lg border border-[#2F5663] bg-muted font-title text-base text-foreground hover:opacity-85"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default JoinRoomModal
