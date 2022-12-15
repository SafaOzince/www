import React from "react";
import Link from "react-router-dom";
import { RedirectToWhatsAppPage } from "../../helpers/CommonHelper";
import WhatsappLogo from "../images/whatsapp-logo.png";

const WhatsappChat = () => {

    return(
        // <div className="whatsapp">
        <a href="#!" className="whatsapp_float" onClick={(e)=>{
            e.preventDefault();
            RedirectToWhatsAppPage();
        }}>
            <img src={WhatsappLogo}/>
        </a>
        // </div>
    )
}

export default WhatsappChat;