import Footer from "../../components/Footer"
import Nav from "../../components/Nav"
import hero from '../../assets/hero.jpg'
import pepsi from '../../assets/about.jpg'
import pep from '../../assets/hero2.jpg'
import products from '../../components/products'
import Card from "../../components/Card"

function Home() {
    return (
        <>
            <Nav />
            <main className="min-h-[80vh]">
                <div
                    style={{ backgroundImage: `url(${hero})` }}
                    className="min-h-[90vh] bg-no-repeat w-full bg-cover bg-center flex justify-center flex-col items-center gap-5"
                >
                    <h1 className="font-heading text-[65px] text-white text-center leading-normal uppercase">
                        <span>Pepsi</span> <span className="text-brand-red">Prebiotic</span> <span>Cola</span>
                    </h1>
                    <p className="font-body text-2xl text-white text-center w-[500px] leading-normal">
                        Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds.
                    </p>
                    <button className="font-body bg-brand-red text-xl px-10 py-2.5 font-bold rounded-[30px] text-white border-none cursor-pointer">
                        Buy Now
                    </button>
                </div>

                <section className="w-4/5 mx-auto flex justify-between items-center gap-20 py-[60px]">
                    <div className="w-[30%]">
                        <img src={pepsi} alt="pepsi" className="w-full h-full object-cover" />
                    </div>

                    <div className="w-[70%]">
                        <h2 className="font-heading text-[40px] pb-5">
                            About <span className="text-brand-blue">Pepsi</span>{" "}
                            <span className="bg-gradient-to-br from-brand-red to-brand-blue bg-clip-text text-transparent inline-block">Prebiotic</span>{" "}
                            <span className="text-brand-red">Cola</span>
                        </h2>
                        <div className="flex flex-col gap-[30px] text-[rgb(72,71,71)]">
                            <p className="font-body text-xl leading-normal">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore alias optio. Amet ea explicabo, culpa illum temporibus quod, ducimus odit assumenda in incidunt placeat sed blanditiis, voluptatibus quos cupiditate!.</p>
                            <p className="font-body text-xl leading-normal">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore alias optio. Amet ea explicabo, culpa illum temporibus quod, ducimus odit assumenda in incidunt placeat sed blanditiis, voluptatibus quos cupiditate!.</p>
                            <p className="font-body text-xl leading-normal">Pepsi Prebiotic Cola is a refreshing cola with a unique blend of flavors that is sure to satisfy your taste buds Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem dolore alias optio. Amet ea explicabo, culpa illum temporibus quod, ducimus odit assumenda in incidunt placeat sed blanditiis, voluptatibus quos cupiditate!.</p>
                        </div>
                    </div>
                </section>

                <section className="w-4/5 mx-auto py-[60px]">
                    <div className="flex justify-center items-center">
                        <h2 className="font-heading text-center pb-10 text-[40px] bg-gradient-to-br from-brand-red to-brand-blue bg-clip-text text-transparent inline-block">
                            Our Products
                        </h2>
                    </div>

                    <div className="grid grid-cols-4 gap-[30px]">
                        <div className="flex flex-col gap-2.5 items-center rounded-[20px] overflow-hidden shadow-[0_0_10px_0_rgba(0,0,0,0.1)]">
                            <img src={pep} alt="pepsi" className="w-full h-[300px] object-cover" />
                            <div className="flex flex-col gap-5 p-5 w-full">
                                <h3 className="text-2xl font-heading text-brand-red">Pepsi Classic Cola</h3>
                                <p className="text-lg font-body text-brand-blue line-clamp-2">The original bold, refreshing cola with a crisp finish and signature Pepsi taste in every sip.</p>
                                <p className="text-2xl font-bold italic font-body text-brand-red">$1.99</p>
                                <button className="w-full font-body px-5 py-2.5 rounded-[30px] bg-brand-blue text-white border-none cursor-pointer">Buy Now</button>
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
