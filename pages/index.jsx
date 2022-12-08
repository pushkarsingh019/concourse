
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import GlassCard from "../components/GlassCard";
import SponsorComponent from "../components/SponsorComponent";
import {useEffect, useState} from "react";
import Image from "next/image";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

import Head from "next/head";

// imporitng assets
import uniLogo from "../public/universityLogo.jpeg"

// importing data
import sponsorData from "../data/sponsors";

// animating libaray
import FadeIn from "react-fade-in/lib/FadeIn";

function HeroSection(){
    return(
        <section className="hero-section section">
            <h1 className="gradient-text">CONCOURSE 2023</h1>
            <h3>The Management Fest You Have Been Waiting For.</h3>
            <Button text={`Register Now`} type="button" />
        </section>
    )
};

function ExploreSection(){

    return(
        <FadeIn transitionDuration={600}>
        <section className="explore-section">
            <h2>Explore Concourse</h2>
            <div className="explore-options">
                <GlassCard text={`Events`} redirect={`/events`} />
                <GlassCard text={`Archive`} redirect={`/archive`}  />
                <GlassCard text={`About Concourse`} redirect={`/about`} />
            </div>
        </section>
        </FadeIn>
    )
};

function WhatSection(){
    return(
        <FadeIn transitionDuration={600}>
        <section className="what-section">
            <h2>What is Concourse?</h2>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit laudantium rerum ullam voluptates, voluptatibus numquam quae quasi quaerat temporibus iste, nemo dolores est aut adipisci eius cum architecto soluta provident aperiam. Cumque voluptatum tempore sint veniam illo quos dolorem tenetur quo eum, officiis vitae minima, omnis quidem nisi. Omnis exercitationem laboriosam placeat at illum dicta, suscipit aperiam accusantium fuga rem ipsam possimus quibusdam officia consectetur unde corrupti, fugiat error est expedita eos ad dolorum? Cumque modi ab consectetur ad rem! Obcaecati explicabo quis voluptatem eaque recusandae nulla doloremque nam? Ex totam cum voluptatibus quidem, cumque eos nulla sequi voluptate quas vitae ullam, fugit facilis officiis nemo laudantium obcaecati consequuntur repellendus doloremque! Libero iste illo atque iure quisquam laboriosam dolorum eligendi reprehenderit exercitationem, quis ex voluptates laborum optio quae facilis alias, aperiam eaque nisi, assumenda consequuntur corrupti quaerat temporibus! Dolorum vel tempora consequatur molestiae, eos quasi reprehenderit neque illo modi enim!</p>
        </section>
    </FadeIn>
    )
};

function OrganisedBySection(){
    return(
        <FadeIn transitionDuration={600}>
        <section className="organised-by">
            <h3>Organised By Ahmedabad University</h3>
            <Image className="img" src={uniLogo} alt={`Ahmedabad University Logo`} width={200} height={200} objectFit="contain" />
        </section>
        </FadeIn>
    )
};

function SponsorSection({data}){
    return(
        <FadeIn transitionDuration={600}>
        <section className="sponsor-section">
            <h2>Sponsors</h2>
            <div className="sponsor-flex">
            {data.map((sponsor) => {
                return <SponsorComponent key={sponsor.name} name={sponsor.name} image={sponsor.image} />
            })}
            </div>
        </section>
        </FadeIn>
    )
};

function CTASection(){
    return(
        <FadeIn transitionDuration={600}>
        <section className="cta-section container">
            <h3>Register Now</h3>
            <h2>What are you waiting for?</h2>
            <br />
            <Button text={`Browse Events`} redirect="/events" type={`button`} />
        </section>
        </FadeIn>
    )
}

export default function HomeScreen(){


    return(
        <div className="screen">
            <Head>
                <title>Concourse 2023</title>
            </Head>
            <Navbar />
            <HeroSection />
            <ExploreSection />
            <WhatSection />
            <OrganisedBySection />
            <SponsorSection data={sponsorData} />
            <CTASection />
            <SocialSection />
            <Footer />
        </div>
    )
};

