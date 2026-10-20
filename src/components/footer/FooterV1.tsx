"use client";
import dynamic from "next/dynamic";
import btnArrow from "@/assets/images/btn-arrow.svg"
import footerBigLogo from "@/assets/images/footer-big-logo.png"
import Image from "next/image";
import Link from "next/link";
import siteSettings from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>COMPANY</h4>
                                    <ul>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> Members
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> Stories
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/projects">
                                                <Image src={btnArrow} alt="icon" /> Projects
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    &copy; {(new Date().getFullYear())} {siteSettings.copyright}
                                </div>
                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>REACH OUT TO US</h4>
                                        <div className="links">
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href={`tel:${siteSettings.phone}`} className="with-border">{siteSettings.phone}</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href={`mailto:${siteSettings.email}`} className="with-border">{siteSettings.email}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="theme-btn">
                                        {`Let's Connect`}
                                        <Image src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>Social</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href={siteSettings.socialLinks.instagram} target="_blank">
                                                <Image src={btnArrow} alt="icon" /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href={siteSettings.socialLinks.twitter} target="_blank">
                                                <Image src={btnArrow} alt="icon" /> Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href={siteSettings.socialLinks.behance} target="_blank">
                                                <Image src={btnArrow} alt="icon" /> Behance
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href={siteSettings.socialLinks.dribbble} target="_blank">
                                                <Image src={btnArrow} alt="icon" /> Dribbble
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright">
                                    {siteSettings.address}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="split-text-anim">
                        <Image data-aos="slide-up" data-aos-duration={700} src={getImageUrl(siteSettings.footerLogo)} alt="logo" width={1800} height={340} />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default dynamic(() => Promise.resolve(FooterV1), { ssr: false });