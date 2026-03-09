import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Tag from './components/Tag/Tag'
import ProductCard from './components/ProductCard/ProductCard'

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
        stuff
        <ProductCard 
        title="Some product"
        description="some description" 
        link="/"
        image="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
    />
      </div>
      <Footer />

    </>
  )
}

export default App