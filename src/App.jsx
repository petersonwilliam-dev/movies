// CSS
import './App.css'
// Modules
import { Routes, Route} from 'react-router-dom'
// Components
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Header from './components/header/Header'
import Container from './layout/container/Container'
import ContentNotFound from './pages/contentNotFound/ContentNotFound'
import ShowDetails from './pages/showDetails/ShowDetails'
import Footer from './components/footer/Footer'
import Cast from './components/showContent/elements/cast/Cast'

function App() {

  return (
    <div>
      <Header />
      <Container>
        <Routes>
          <Route exact="true" path='/' element={<Home />}/>
          <Route path='/search/:search/:page' element={<Search />}/>
          <Route path="/show/:type/:id" element={<ShowDetails />}/>
          <Route path='*' element={<ContentNotFound />}/>
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App
