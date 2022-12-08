import Navbar from "../components/Navbar"
import {EventsSection} from "./events"
import SocialSection from "../components/SocialSection";
import Footer from "../components/Footer";

import FadeIn from "react-fade-in/lib/FadeIn";

import Head from "next/head";

function ArchiveScreen(){
    return(
        <FadeIn>
        <div className="screen">
            <Head>
                <title>Concourse 2023 | Archive</title>
            </Head>
            <Navbar />
            <h1>Archive</h1>
            <h2 className="subtitle">2022</h2>
            <EventsSection />
            <SocialSection />
            <Footer />
        </div>
        </FadeIn>
    )
};

export default ArchiveScreen