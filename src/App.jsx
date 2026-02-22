import Header from './components/Header/Header'
import BuildSection from './components/Sider/BuildSection/BuildSection'
import CatalogSection from './components/Sider/CatalogSection/CatalogSection'
import SectionGift from './components/Sider/SectionGift/SectionGift'

function App() {
    return (
        <>
        <Header />
        <main>
            <BuildSection />
            <CatalogSection />
            <SectionGift />
        </main>
        </>
    )
}
export default App
