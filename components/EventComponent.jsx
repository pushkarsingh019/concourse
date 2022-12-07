import Button from "./Button"
import Image from "next/image";


function EventComponent({eventName, eventSubtitle, eventDescription, eventTime, eventVenue, eventNumber, eventHead, eventLink, eventImage}){
    return(
        <div className="event-component">
            <div className="event-details">
                <h2>{eventName}</h2>
                <h4>{eventSubtitle}</h4>
                <br />
                <p>{eventDescription}</p>
                <br />
                <div className="micro-details">
                    <div className="details">
                        <p>Time : {eventTime}</p>
                        <p>Venue : {eventVenue}</p>
                        <p>Contact : {eventNumber} - {eventHead}</p>
                    </div>
                    <Button text={`Register Now`} redirect={eventLink} type="button" />
                </div>
            </div>
            <div className="event-image">

            </div>
        </div>
    )
};

export default EventComponent;