import * as React from 'react';
import {useNavigate} from "react-router-dom";
import LandingInfo from "../components/LandingInfo";
import { useState } from "react";
import * as url from "url";
import './Home.css';


const Home = ({ classes }) => {

    let navigate = useNavigate();
    const routeWeb = () =>{
        let path = `https://app-vacancymatcher.firebaseapp.com/`;
        navigate(path);
    }

    return (
        <>
            <div className="section for-hero">
                <div className="container for-hero" style={{marginLeft:"auto", marginRight:"auto"}}>
                    <div className="row for-hero">
                        <div className="hero-text-column">
                            <h1>Vacancy Matcher</h1>
                            <p className="hero-subheading">Heb je ooit door de straten van Antwerpen gelopen en je afgevraagd wat er zich allemaal afspeelt in de leegstaande panden om je heen?
                            <br style={{marginBottom:"10px"}} />Met vacancy matcher kun je gemakkelijk lege ruimtes in Antwerpen visualiseren en analyseren om kansen voor sociaal cultureel gebruik te identificeren.</p>
                            <button>Download</button> or visit our website
                        </div>
                        <div className="hero-image-column">
                            <img src="/mobile.png" alt="" className="hero-image" />
                        </div>
                    </div>
                </div>
                <div className="floating-circle-small for-hero"></div>
                <div className="floating-circle-medium for-hero"></div>
            </div>
            <div className="container">
            <div className="body">
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg"/>
                    <div>
                        <h2>Over de app</h2>
                        <p>
                            Deze app is geschikt voor mensen die op zoek zijn naar leegstaande panden, ongeacht hun grootte.
                            Via de app kun je door verschillende panden bladeren en direct in contact komen met de eigenaren.
                            Hierdoor kunt u gunstige tarieven bedingen of zelfs een vrij pand bemachtigen.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <img src="https://cdn.pixabay.com/photo/2020/10/23/13/43/windows-5678769_1280.jpg"/>
                    <div>
                        <h2>Waar komen deze panden vandaan?</h2>
                        <p>
                            Hoewel eigenaren hun eigen pand kunnen toevoegen, wordt een aanzienlijk deel van de
                            vermeldingen op de app geleverd door de stad. De stad markeert leegstaande gebouwen
                            en we ontwerpen een gebruiksvriendelijke interface waarmee gebruikers deze panden
                            gemakkelijk kunnen zoeken en vinden.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div>
                        <h3 style={{marginBottom:"1.5rem"}}>Hoe krijg ik toegang tot de app?</h3>
                        <a href=""><img style={{maxHeight:'3rem'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0Gd4N9TDP1mkn_kZaGWPt3x9vYZVJ8xS-SNT8Rt_X48jnuvN-ou7kYXr__b59ifQCro&usqp=CAU" /></a>
                        <a href="https://app-vacancymatcher.firebaseapp.com/">website</a>
                    </div>
                </div>
                <div className="item">
                    <p>Made by The Three Musketeers</p>
                </div>
            </div>
            </div>
        </>
    );
}


export default Home;
