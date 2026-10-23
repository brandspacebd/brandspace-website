"use client";
import dynamic from "next/dynamic";
import btnArrow from '@/assets/images/btn-arrow.svg';
import contactThumb from '@/assets/images/contact.png';
import Image from 'next/image';
import { toast } from 'react-toastify';
import defaultContactData from '@/assets/jsonData/contact/ContactData.json';

const ContactV1 = () => {
    const contactData = defaultContactData || {
        subtitle: "GET IN TOUCH",
        title: "Let's Create Something Iconic Together",
        description: "Have a bold brand vision or upcoming campaign? Our team is ready to collaborate. Fill out the brief below or reach out directly."
    };

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks For Your Message");
    }

    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200}>Let’s <span>Connect</span></h3>
                            <p>
                                <span className="required">*</span> {contactData.description}
                            </p>
                            <form id="contact-form" className="contact-form" onSubmit={handleForm}>
                                <div className="input-group">
                                    <input type="text" name="name" placeholder="Name" autoComplete="off" required />
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="E-mail" autoComplete="off" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="phone" autoComplete="off" placeholder="Phone" required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <textarea name="message" id="message" placeholder="Message" autoComplete="off" required />
                                </div>
                                <div className="input-group">
                                    <button type="submit" className="theme-btn">
                                        Send Message
                                        <Image src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                            <div id="result" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-box">
                            <Image src={contactThumb} alt="contact-img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(ContactV1), { ssr: false });