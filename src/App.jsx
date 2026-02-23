import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import BuildSection from './components/Sider/BuildSection/BuildSection'
import CatalogSection from './components/Sider/CatalogSection/CatalogSection'
import SectionGift from './components/Sider/SectionGift/SectionGift'
import SectionPromotion from './components/Sider/SectionPromotion/SectionPromotion'

function App() {
    return (
        <>
        <Header />
        <main>
            <BuildSection />
            <CatalogSection />
            <SectionGift />
            <SectionPromotion />
        </main>
        <Footer />
        </>
    )
}
export default App
