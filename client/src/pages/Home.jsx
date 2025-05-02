import { ComoFunciona } from "../components/ComoFunciona"
import { Funcionalidades } from "../components/Funcionalidades"
import { HeroSection } from "../components/HeroSection"
import { Nav } from "../components/nav"

export const Home = () => {
    return(
        <>
            <Nav />
            <HeroSection />
            <Funcionalidades />
            <ComoFunciona />
        </>
        
        
    )
}