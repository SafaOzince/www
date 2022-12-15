import React from "react";
import Link from "react-router-dom";
import { RedirectToWhatsAppPage } from "../../helpers/CommonHelper";
import WhatsappLogo from "../images/icons8-whatsapp-70.png";

const WhatsappChat = () => {

    return(
        <a href="#!" className="whatsapp_float" onClick={(e)=>{
            e.preventDefault();
            RedirectToWhatsAppPage();
        }}>
            <img src={WhatsappLogo}/>
        </a>
    )
}

export default WhatsappChat;