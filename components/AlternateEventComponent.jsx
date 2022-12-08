import Button from "./Button"
import Image from "next/image";
import dummyImage from "../public/dummyEvent.jpeg"


function AlternateEventComponent({eventName, eventSubtitle, eventDescription, eventTime, eventVenue, eventNumber, eventHead, eventLink, eventImage}){
    return(
        <div className="event-component">
            <div className="event-image-alternate">
            <Image className="image" src={dummyImage} alt="dummy image" height={262} width={454} />
            </div>
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
        </div>
    )
};

export default AlternateEventComponent;