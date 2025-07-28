import React, {useState} from "react";
import './EnvelopeAnimation.css';

const loveMessages = [
    "I can't wait to start a cult with you!","Youre the King of our cult and Im the Queen! ",
    "I cant wait to have tax exempt properties!", "I love you and just playing about the cult thing."
]
const EnvelopeAnimation = () =>{
    const[open, setOpen] = useState(false);
   const[messages, setMessages] = useState("");
   const handleClick = () => {
    if(!open){
        const randomIndex = Math.floor(Math.random()* loveMessages.length);
        setMessages(loveMessages[randomIndex]);

    }
    setOpen(!open);
   }

return(
    <div className="envelope-container" onClick={handleClick}>
        <div className={`envelope ${open ? 'open' : ''}`}>
            <div className="flap">
                {!open &&  <div className="heart">TO: Daniel</div>}
                <div className="body">
                    <div className={`card ${open ? 'slide-out' : ''}`}>
                        <p>
                            {open ? messages: "love letter"}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
);
};
export default EnvelopeAnimation;