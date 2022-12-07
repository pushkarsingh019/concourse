import Link from "next/link"
import {useRouter} from "next/router"

function Navbar(){

    const router  = useRouter();


    return(
        <nav className="navbar">
            <h3 className="navbar__logo" onClick={() => router.push('/')}>CONCOURSE</h3>
            <div className="navbar__links">
                <Link  href={`/events`} ><a className="navbar__link">Events </a></Link>
                <Link  href={`/archive`}><a className="navbar__link">Archive</a></Link>
                <Link  href={`/contact`}><a className="navbar__link">Contact</a></Link>
            </div>
        </nav>
    )
};

export default Navbar