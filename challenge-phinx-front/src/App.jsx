import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './helpers/RoutesPath'
import { Home } from "./view/home"
import { PokemonProvider } from './context/pokemonContext'


function App() {


  return (
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  )
}

export default App
