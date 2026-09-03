function Footer() {
  return (
    <footer className="w-full">
      <div className="h-[2px] w-full min-h-[2px] bg-secondary" />
      <div className="mx-auto flex w-full max-w-[60vw] flex-col items-center justify-center gap-1 py-3 text-center">
        <p className="font-title m-0 text-[clamp(10px,0.85vw,16px)] text-foreground">
          DEMP RPG SYSTEM V2.1.0-beta
        </p>
        <p className="font-title m-0 text-[clamp(10px,0.85vw,16px)] text-foreground">
          Desenvolvido por{' '}
          <a
            href="https://github.com/Perinzinho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6ea8d8] underline"
          >
            Leonardo Perin
          </a>{' '}
          - 2026
        </p>
        <p className="font-title m-0 text-[clamp(10px,0.85vw,16px)] text-foreground">
          Encontrou algum problema? Ou tem uma ideia de sugestão{' '}
          <a
            href="https://forms.gle/jjdWPYQYPupFcY8K6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6ea8d8] underline"
          >
            Clique aqui
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
