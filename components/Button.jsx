function Button({type, text, redirect}){
    return(
        <button className={`${type}`} onClick={() => console.log(`redirecting to ${redirect}`)}>{text}</button>
    )
};

export default Button;