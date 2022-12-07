import Image from "next/image"

const imageSource = ""
function SponsorComponent({name, image}){
    return(
        <div className="sponsor-component">
            <div className="img"></div>
            {/* <Image width={250} height={250} alt={name} src={imageSource} style={{borderRadius : "50%" }} /> */}
            <br />
            <h3>{name}</h3>
        </div>
    )
};

export default SponsorComponent