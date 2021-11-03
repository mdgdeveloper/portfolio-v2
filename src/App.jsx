import './App.css'
import Announce from './components/announce/Announce'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Work from './components/work/Work'
import Social from './components/social/Social'
import Study from './components/study/Study'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'


function App() {


  return (
   <div>
      <Announce />
      <Header />
      <Main />
      <Social />
      <Study />
      <Work />
      <Contact />
      <Footer />
   </div>
  )
}

export default App
