import Navbar from "../components/Navbar";
import Image from "next/image";
import PersonCard from "../components/PersonCard";
import teamData from "../data/teamData";
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

import Head from "next/head";

import FadeIn from "react-fade-in/lib/FadeIn";

function ContactScreen(){

    return(
        <FadeIn>
        <div className="screen">
            <Head>
                <title>Concourse 2023 | Contact</title>
            </Head>
            <Navbar />
            <h1>Contact Us</h1>
            <section className="contact-section container">
                {teamData.map((member) => {
                    return(
                        <PersonCard key={member.id} name={member.name} title={member.title} number={member.number} />
                    )
                })}
            </section>
            <SocialSection />
            <Footer />
        </div>
        </FadeIn>
    )
};

export default ContactScreen;