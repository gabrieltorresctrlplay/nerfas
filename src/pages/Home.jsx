import { Botao } from '../components/Botao'

export const Home = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4 bg-zinc-900'>
      <Botao texto='Atacar' />
      <Botao texto='Defender' />
      <Botao texto='Fugir' />
    </div>
  )
}
