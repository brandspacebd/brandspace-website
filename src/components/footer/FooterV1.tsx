"use client";
import dynamic from "next/dynamic";
import btnArrow from "@/assets/images/btn-arrow.svg"
import footerBigLogo from "@/assets/images/footer-big-logo.png"
import Image from "next/image";
import Link from "next/link";
import siteSettingsRaw from "@/assets/jsonData/settings/siteSettings.json";
import getImageUrl from "../utilities/getImageUrl";
import { SiteSettings } from "@/types/content";

const siteSettings = siteSettingsRaw as SiteSettings;

const FooterV1 = () => {
    const phone = siteSettings.phone || "+880 1727 881588";
    const email = siteSettings.email || "emailtobrandspace@gmail.com";
    const address = siteSettings.address || "Dhaka, Bangladesh";
    const copyright = siteSettings.copyright || "ALL RIGHTS RESERVED";
    const socialLinks = siteSettings.socialLinks || {};

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
                                            <Link className="with-border" href="/team">
                                                <Image src={btnArrow} alt="icon" /> Team
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/stories">
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
                                    &copy; {(new Date().getFullYear())} {copyright}
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
                                            {phone && (
                                                <div className="split-text-anim">
                                                    <a data-aos="slide-up" data-aos-duration={700} href={`tel:${phone}`} className="with-border">{phone}</a>
                                                </div>
                                            )}
                                            {email && (
                                                <div className="split-text-anim">
                                                    <a data-aos="slide-up" data-aos-duration={700} href={`mailto:${email}`} className="with-border">{email}</a>
                                                </div>
                                            )}
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
                                        {socialLinks.instagram && (
                                            <li>
                                                <a className="with-border" href={socialLinks.instagram} target="_blank" rel="noreferrer">
                                                    <Image src={btnArrow} alt="icon" /> Instagram
                                                </a>
                                            </li>
                                        )}
                                        {socialLinks.twitter && (
                                            <li>
                                                <a className="with-border" href={socialLinks.twitter} target="_blank" rel="noreferrer">
                                                    <Image src={btnArrow} alt="icon" /> Twitter
                                                </a>
                                            </li>
                                        )}
                                        {socialLinks.behance && (
                                            <li>
                                                <a className="with-border" href={socialLinks.behance} target="_blank" rel="noreferrer">
                                                    <Image src={btnArrow} alt="icon" /> Behance
                                                </a>
                                            </li>
                                        )}
                                        {socialLinks.dribbble && (
                                            <li>
                                                <a className="with-border" href={socialLinks.dribbble} target="_blank" rel="noreferrer">
                                                    <Image src={btnArrow} alt="icon" /> Dribbble
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div className="copyright">
                                    {address}
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