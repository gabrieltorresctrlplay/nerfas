import { Botao } from '../components/Botao'

export const Home = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 bg-zinc-900'>
      <h1 className='text-3xl font-bold text-white'>Minha Base (Home)</h1>
      <Botao texto='Atacar' />
      <Botao texto='Defender' />
      <Botao texto='Fugir' />
    </div>
  )
}
