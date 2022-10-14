import React from "react";
import * as contactIcon from "react-icons/fa";

type Props = {
  bgContact: string[];
  email: string;
  phone: string;
};

function Contact(props: Props) {
  return (
    <div className="contact_container text-white">
      <div className={`email ${props.bgContact[0]} mb-3 p-4`}>
        <p className="uppercase">email id</p>
        <contactIcon.FaEnvelope className="inline-block mr-2" />
        <span className="text-white">{props.email}</span>
      </div>
      <div className={`phone ${props.bgContact[1]} mb-3 p-4`}>
        <p className="uppercase">phone no</p>
        {<contactIcon.FaPhoneAlt className="inline-block mr-2" />}
        <span className="text-white">{props.email}</span>
      </div>
    </div>
  );
}

export default Contact;
