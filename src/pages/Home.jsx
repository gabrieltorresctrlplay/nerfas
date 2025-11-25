import { Botao } from '../components/Botao'
import { Topbar } from '../components/Topbar'

export const Home = () => {
  return (
    <div className='min-h-screen bg-zinc-900'>
      <Topbar />
      <div className='flex min-h-screen flex-col items-center justify-center gap-4 pt-20'>
        <h2 className='mb-8 text-3xl font-bold text-white'>Escolha sua ação</h2>
        <Botao texto='Atacar' />
        <Botao texto='Defender' />
        <Botao texto='Fugir' />
      </div>
    </div>
  )
}
