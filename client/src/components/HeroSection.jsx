import { Button } from "./Button";
import './HeroSection.css';
import React from "react";

export const HeroSection = () =>{
    return(
        <div className='hero-container'>
            <div className="hero-center">
                <div className="hero-titles">
                    <h1>Clareza e confiança nas contas</h1>
                    <p>Síndicos informam, moradores acompanham.</p>
                </div>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>COMECE AGORA</Button>
                </div>
            </div>
        </div>
    )
}