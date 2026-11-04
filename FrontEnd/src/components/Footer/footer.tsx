import { ArrowUpRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <p>
          <strong>DEMP RPG SYSTEM</strong> <span className="ml-2">v2.3.0-beta</span>
        </p>
        <p>
          Desenvolvido por{' '}
          <a
            className="footer-author"
            href="https://github.com/Perinzinho"
            target="_blank"
            rel="noopener noreferrer"
          >
            Leonardo Perin
          </a>{' '}
          · 2026
        </p>
        <a
          className="footer-help"
          href="https://forms.gle/jjdWPYQYPupFcY8K6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reportar problema ou sugerir ideia <ArrowUpRight size={12} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
