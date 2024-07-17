import './index.css'
import Title from './componets/Title/Title'
import Input from './componets/Input/Input'
import Resultados from './componets/Resultados/Resultados'

const App = () => {
  return (
    <>
      <Title Title={ 'Mini Netflix' } />
      <Input />
      <Resultados />
    </>
  )
}

export default App