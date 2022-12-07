import instagramLogo from "../public/Instagram.svg";
import mailLogo from "../public/Gmail.svg";
import SnapchatLogo from "../public/Snapchat.svg";
import Image from "next/image";
import { useRouter } from "next/router"

function SocialSection(){

    const router = useRouter();

    function clickHandler(mediaForm){
        if(mediaForm === "instagram"){
            router.push("https://instagram.com")
        }
        if(mediaForm === "mail"){
            router.push("to:concourse@ahduni.edu.in")
        }
        if(mediaForm === "snapchat"){
            router.push("https://snapchat.com")
        }
    }

    return(
        <section className="container social-section">
            <div className="part-one">
                <h2>Concourse</h2>
                <p>The Management Fest You Have Been Waiting For</p>
            </div>
            <div className="social-links">
                <Image width="75" height="75" alt="Instagram" src={instagramLogo}  onClick={() => clickHandler("instagram")} />
                <Image width="75" height="75" alt="Gmail" src={mailLogo} onClick={() => clickHandler("mail")} />
                <Image width="75" height="75" alt="Snapchat" src={SnapchatLogo} onClick={() => clickHandler("snapchat")} />
            </div>
        </section>
    )
};

export default SocialSection