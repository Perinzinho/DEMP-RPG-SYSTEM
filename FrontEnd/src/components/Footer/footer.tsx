function Footer() {
  return (
    <footer className="w-full">
      <div className="h-[2px] w-full bg-secondary" />
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-1 px-4 py-3 text-center sm:px-6">
        <p className="font-title m-0 text-[11px] text-foreground sm:text-[14px]">
          DEMP RPG SYSTEM V2.2.1-beta
        </p>
        <p className="font-title m-0 text-[11px] text-foreground sm:text-[14px]">
          Desenvolvido por{' '}
          <a
            href="https://github.com/Perinzinho"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6ea8d8] underline transition-colors duration-300 hover:text-[#9dc4d1]"
          >
            Leonardo Perin
          </a>{' '}
          - 2026
        </p>
        <p className="font-title m-0 text-[11px] text-foreground sm:text-[14px]">
          Encontrou algum problema? Ou tem uma ideia de sugestão{' '}
          <a
            href="https://forms.gle/jjdWPYQYPupFcY8K6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6ea8d8] underline transition-colors duration-300 hover:text-[#9dc4d1]"
          >
            Clique aqui
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
