import Image from "next/image"

function PersonCard({name, title, number}){
    return(
        <div className="person-card">
            <div className="img">
            </div>
            <br />
            <h3>{name}</h3>
            <p>{title}</p>
            <code>{number}</code>
        </div>
    )
};

export default PersonCard;