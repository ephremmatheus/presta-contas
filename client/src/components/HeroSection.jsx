import { Button } from "./Button";
import './HeroSection.css';
import React from "react";

export const HeroSection = () =>{
    return(
        <div className='hero-container'>
            <div className="hero-center">
                <h1>ORGANIZE SUAS FINANÇAS</h1>
                <p>O que você está esperando?</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>COMECE AGORA</Button>
                </div>
            </div>
        </div>
    )
}