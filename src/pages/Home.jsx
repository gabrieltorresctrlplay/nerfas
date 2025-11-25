import { Botao } from '../components/Botao'
import { Topbar } from '../components/Topbar'

export const Home = () => {
  return (
    <div className='min-h-screen bg-zinc-900'>
      <Topbar />
      
      {/* Conteúdo principal com padding-top para compensar a topbar fixa */}
      <div className='flex h-screen flex-col items-center justify-center gap-4 pt-20'>
        <h2 className='text-white text-3xl font-bold mb-8'>Escolha sua ação</h2>
        <Botao texto='Atacar' />
        <Botao texto='Defender' />
        <Botao texto='Fugir' />
      </div>
    </div>
  )
}
