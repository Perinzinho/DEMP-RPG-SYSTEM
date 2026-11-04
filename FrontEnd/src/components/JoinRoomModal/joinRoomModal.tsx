import { useState, type FormEvent } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Código inválido ou mesa não encontrada')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[400px] rounded-xl border-border bg-card p-7 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-title text-left text-3xl font-normal text-foreground">
            Entrar em mesa
          </DialogTitle>
          <DialogDescription className="text-left text-xs leading-relaxed">
            Uma nova história espera por você. Digite o código de seis caracteres compartilhado pelo
            mestre.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
          <div className="flex w-full flex-col gap-2">
            <Label htmlFor="roomCode" className="text-xs text-foreground">
              Código da mesa
            </Label>
            <Input
              type="text"
              id="roomCode"
              placeholder="000000"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.trim())}
              disabled={loading}
              maxLength={6}
              minLength={6}
              required
              autoComplete="off"
              className="h-12 rounded-lg border-border bg-background px-4 text-center font-mono text-xl tracking-[.35em] text-foreground"
            />
          </div>

          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading || roomCode.length !== 6}
            className="h-11 w-full rounded-lg bg-primary text-sm text-primary-foreground"
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
