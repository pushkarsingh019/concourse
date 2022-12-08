import Navbar from "../components/Navbar";
import EventComponent from "../components/EventComponent";
import eventsData from "../data/eventsData";
import Footer from "../components/Footer";
import SocialSection from "../components/SocialSection";

import FadeIn from "react-fade-in/lib/FadeIn";

import Head from "next/head";

function EventsSection(){
    return(
       <section className="events-section">
             {eventsData.map((event) => {
            return(
                <EventComponent key={event.name} eventName={event.name} eventSubtitle={event.subtitle} eventDescription={event.description} eventTime={event.time} eventVenue={event.venue} eventNumber={event.contactNumber} eventHead={event.contactName} eventLink={event.formLink} />
            )
        })}
       </section>
    )
}

function EventScreen(){
    return(
        <FadeIn transitionDuration={500}>
        <div className="screen">
            <Head>
                <title>Concourse 2023 | Events</title>
            </Head>
            <Navbar />
            <h1>Events</h1>
            <EventsSection />
            <SocialSection />
            <Footer />
        </div>
        </FadeIn>
    )
};

export default EventScreen;
export {EventsSection}