import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tag from './components/Tag/Tag'
import ProductCard from './components/ProductCard/ProductCard'

import MessiImage from "./assets/messi.jpg"
import LamineImage from "./assets/Lamine.jpg"
import RacecarImage from "./assets/racecar.jpg"
import NeymarImage from "./assets/neymar.jpg"

function App() {

  return (
    <>
      <Header />
      <div className="categories">
        <Tag text="Best Sellers" isSpecial />
        <Tag text="New Releases" isSpecial />
        <Tag text="Fashion" />
        <Tag text="Tech" />
        <Tag text="Books" />
        <Tag text="Indie Crafts" />
        <Tag text="Home & Garden" />
      </div>
      <div className="main-content">

        <div className="card-image">
    <ProductCard 
        title="Iphone 1" 
        description="Latest Apple phone"
        link="/"
        image={RacecarImage}
    />
    <ProductCard 
        title="Lionel Messi"
        description="Best player itw" 
        link="/"
        image={MessiImage}
    />
    <ProductCard 
        title="Lamine Yamal"
        description="Best youngstar itw" 
        link="/"
        image={LamineImage}
    />
    <ProductCard 
        title="Neymar"
        description="Best styler" 
        link="/"
        image={NeymarImage}
    />
    </div>
      </div>
      <Footer />

    </>
  )
}

export default App