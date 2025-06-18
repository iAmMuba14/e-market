import './Contact.css';

import { IoCallOutline } from "react-icons/io5";
import { PiEnvelopeSimple } from "react-icons/pi";

const Contact = () => {
  return (
    <div className="contact section">
        <div className="contactContents">
            <div className="topBar">
                <div className="left">
                    <span>Home / </span><span>Contact</span>
                </div>
            </div>

            <div className="contactBody">
                <div className="contactInfo">
                    <div className="info">
                        <div className="call">
                            <div className="icon">
                                <IoCallOutline size={30} />
                            </div>
                            Call To Us
                        </div>
                        <span>We are available 24/7</span>
                        <span>Phone: +8801611112222</span>
                    </div>
                    <div className="info">
                        <div className="call">
                            <div className="icon">
                                <PiEnvelopeSimple size={30} />
                            </div>
                            Write To Us
                        </div>
                        <span>Fill out our form and we will contact <br />
                        you within 24 hours</span>
                        <span>Email: customer@exclusive.com</span>
                        <span>Email: support@exclusive.com</span>
                    </div>
                </div>
                <div className="contactInputs">
                    <div className="contactInput">
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Your Email' />
                        <input type="text" placeholder='Your Phone' />
                    </div>
                    <textarea name="message" id="" placeholder='Your Message'></textarea>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact