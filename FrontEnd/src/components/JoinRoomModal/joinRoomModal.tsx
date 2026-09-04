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
      <DialogContent className="max-w-[360px] rounded-xl border-[#2F5663] bg-background shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
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
              className="h-12 rounded-lg border-none bg-muted px-4 text-lg tracking-[2px] text-foreground transition-all duration-300 focus:bg-[rgba(8,66,81,0.8)] focus:shadow-[0_0_0_2px_rgba(26,111,181,0.3)]"
            />
          </div>

          {error && (
            <p className="m-0 text-sm text-destructive animate-in fade-in duration-300">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading || !roomCode}
            className="h-11 w-full rounded-lg border border-[#2F5663] bg-muted font-title text-base text-foreground transition-all duration-300 hover:bg-[rgba(8,66,81,0.8)] hover:opacity-90"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                Entrando...
              </span>
            ) : (
              'Entrar'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default JoinRoomModal
