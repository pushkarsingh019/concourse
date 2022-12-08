import Navbar from "../components/Navbar";

import Head from "next/head";

function AboutScreen(){
    return(
        <div className="screen">
            <Navbar />
            <Head>
                <title>Concourse 2023 | About</title>
            </Head>
            <h1>About us</h1>
        </div>
    )
};

export default AboutScreen;