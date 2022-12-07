import Navbar from "../components/Navbar";
import EventComponent from "../components/EventComponent";
import eventsData from "../data/eventsData";

function EventScreen(){
    return(
        <div className="screen">
            <Navbar />
            <section className="events-section">
                {eventsData.map((event) => {
                    return(
                        <EventComponent key={event.name} eventName={event.name} eventSubtitle={event.subtitle} eventDescription={event.description} eventTime={event.time} eventVenue={event.venue} eventNumber={event.contactNumber} eventHead={event.contactName} eventLink={event.formLink} />
                    )
                })}
            </section>
        </div>
    )
};

export default EventScreen;