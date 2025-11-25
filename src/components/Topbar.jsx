export const Topbar = () => {
  return (
    <div className='fixed top-0 right-0 left-0 z-50 border-b border-zinc-700 bg-zinc-800 shadow-lg'>
      <div className='flex items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-3'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600'>
            <span className='text-sm font-bold text-white'>N</span>
          </div>
          <h1 className='text-xl font-bold text-white'>Nerfas Game</h1>
        </div>

        <nav className='hidden items-center gap-6 md:flex'>
          <a
            href='#'
            className='text-zinc-300 transition-colors duration-200 hover:text-white'
          >
            Início
          </a>
          <a
            href='#'
            className='text-zinc-300 transition-colors duration-200 hover:text-white'
          >
            Batalha
          </a>
          <a
            href='#'
            className='text-zinc-300 transition-colors duration-200 hover:text-white'
          >
            Inventário
          </a>
          <a
            href='#'
            className='text-zinc-300 transition-colors duration-200 hover:text-white'
          >
            Perfil
          </a>
        </nav>

        <div className='flex items-center gap-3'>
          <button className='rounded-lg px-4 py-2 text-zinc-300 transition-all duration-200 hover:bg-zinc-700 hover:text-white'>
            Configurações
          </button>
          <button className='rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-red-700 active:scale-95'>
            Sair
          </button>
        </div>

        <button className='p-2 text-white md:hidden'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
