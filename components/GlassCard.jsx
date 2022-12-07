import { useRouter } from "next/router"

function GlassCard({text, redirect}){

    const router = useRouter();

    return(
        <div className="glasmorphic-card" onClick={() => router.push(redirect)}>
            <h3>{text}</h3>
        </div>
    )
};

export default GlassCard;