export const Botao = props => {
  return (
    <button className='cursor-pointer rounded-lg border-b-4 border-blue-800 bg-blue-600 px-6 py-2 font-bold text-white shadow-lg transition-all hover:border-blue-900 hover:bg-blue-700 active:scale-95'>
      {props.texto}
    </button>
  )
}
