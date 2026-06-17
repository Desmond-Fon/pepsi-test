import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import "./styles.css"
import pepsi from '../../assets/about.jpg'
import pep from '../../assets/hero2.jpg'
import products from '../../components/products'
import Card from "../../components/Card"

function Home() {
    return (
        <>
            <Nav />
            <main className='main'>
                <div className="hero">
                    <h1 className="heading hero-text"><span className="hero-">Pepsi</span> <span className="hero-red">Prebiotic</span> <span className="hero-">Cola</span> </h1>
                    <p className="paragraph hero-description">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds.</p>
                    <button className="paragraph hero-button">Buy Now</button>
                </div>

                <section className="container about-section">
                    <div className="section-image"><img src={pepsi} alt="pepsi" className="section-image-img" /></div>

                    <div className="section-left">
                        <h2 className="heading section-title">About <span className="hero-blue">Pepsi</span> <span className="gradient-text">Prebiotic</span> <span className="hero-red">Cola</span></h2>
                        <div className="section-description-container">
                            <p className="paragraph section-description">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore alias optio. Amet ea explicabo, culpa illum temporibus quod, ducimus odit assumenda in incidunt placeat sed blanditiis, voluptatibus quos cupiditate!.</p>
                            <p className="paragraph section-description">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore alias optio. Amet ea explicabo, culpa illum temporibus quod, ducimus odit assumenda in incidunt placeat sed blanditiis, voluptatibus quos cupiditate!.</p><p className="paragraph section-description">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore alias optio. Amet ea explicabo, culpa illum temporibus quod, ducimus odit assumenda in incidunt placeat sed blanditiis, voluptatibus quos cupiditate!.</p>
                        </div>
                    </div>
                </section>

                <section className="container product-section">
                    <div className="flex">
                        <h2 className="heading product-title section-title gradient-text">Our Products</h2>
                    </div>

                    <div className="product-grid">
                        <div className="product-grid-item">
                            <img src={pep} alt="pepsi" className="product-grid-item-img" />
                            <div className="product-grid-item-content">
                                <h3 className="grid-heading heading hero-red">Pepsi Classic Cola</h3>
                                <p className="grid-description paragraph hero-blue two-line-ellipsis">The original bold, refreshing cola with a crisp finish and signature Pepsi taste in every sip.</p>
                                <p className="grid-price paragraph hero-red">$1.99</p>
                                <button className="grid-button">Buy Now</button>
                            </div>
                        </div>

                        {products.map((product, i) => {
                            return (
                                <Card key={i} product={product} />
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home