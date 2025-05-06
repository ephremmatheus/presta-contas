import { useRef } from "react"
import { ComoFunciona } from "../components/ComoFunciona"
import { Funcionalidades } from "../components/Funcionalidades"
import { HeroSection } from "../components/HeroSection"
import { Nav } from "../components/Nav"
import { Demonstraçao } from "../components/Demonstraçao"
import { Depoimentos } from "../components/Depoimentos"

export const Home = () => {
    const homeRef = useRef(null);  
    const funcionalidadesRef = useRef(null);
    const comoFuncionaRef = useRef(null);
    const demoRef = useRef(null);
    
    const scrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToFuncionalidades = () => {
        funcionalidadesRef.current?.scrollIntoView({ behavior: 'smooth' });
    };


    const scrollToComoFunciona = () => {
        comoFuncionaRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToDemo = () => {
        demoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    

    return(
        <>
            <Nav homeScroll = {scrollToHome} funcionalidadesScroll={scrollToFuncionalidades} demoScroll = {scrollToDemo}/>
            <HeroSection homeRef = {homeRef} comoFuncionaScroll={scrollToComoFunciona}/>
            <Funcionalidades funcionalidadesRef={funcionalidadesRef}/>
            <ComoFunciona comoFuncionaRef={comoFuncionaRef} />
            <Demonstraçao demoRef = {demoRef} />
            <Depoimentos />
        </>
        
        
    )
}