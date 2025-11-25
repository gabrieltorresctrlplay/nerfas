export const Topbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-zinc-800 border-b border-zinc-700 shadow-lg'>
      <div className='flex items-center justify-between px-6 py-4'>
        {/* Logo/Título */}
        <div className='flex items-center gap-3'>
          <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center'>
            <span className='text-white font-bold text-sm'>N</span>
          </div>
          <h1 className='text-white font-bold text-xl'>Nerfas Game</h1>
        </div>

        {/* Menu de navegação */}
        <nav className='hidden md:flex items-center gap-6'>
          <a href='#' className='text-zinc-300 hover:text-white transition-colors duration-200'>
            Início
          </a>
          <a href='#' className='text-zinc-300 hover:text-white transition-colors duration-200'>
            Batalha
          </a>
          <a href='#' className='text-zinc-300 hover:text-white transition-colors duration-200'>
            Inventário
          </a>
          <a href='#' className='text-zinc-300 hover:text-white transition-colors duration-200'>
            Perfil
          </a>
        </nav>

        {/* Botões de ação */}
        <div className='flex items-center gap-3'>
          <button className='px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-700 rounded-lg transition-all duration-200'>
            Configurações
          </button>
          <button className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200 active:scale-95'>
            Sair
          </button>
        </div>

        {/* Menu mobile (hambúrguer) */}
        <button className='md:hidden text-white p-2'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
    </div>
  )
}