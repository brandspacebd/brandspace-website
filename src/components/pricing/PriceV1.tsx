"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import Union from "@/assets/images/Union.svg"
import pricingNavbar from "@/assets/images/pricing-navbar.svg"
import pricingShape1 from "@/assets/images/pricing-shape1.png"
import pricingShape2 from "@/assets/images/pricing-shape2.png"
import btnArrow from "@/assets/images/btn-arrow.svg"
import featuredIcon from "@/assets/images/featured-icon.svg"
import Image from "next/image";
import useTabIndicator from "@/hooks/useTabIndicator";
import { useRef } from "react";
import RetainerServiceData from "@/assets/jsonData/pricing/RetainerServiceData.json";

const PriceV1 = () => {

    const indicatorRef = useRef<HTMLSpanElement>(null);
    const navRef = useRef<HTMLUListElement>(null);
    useTabIndicator({ navRef, indicatorRef });

    const monthlyPlans = RetainerServiceData?.monthly || [];
    const annualPlans = RetainerServiceData?.annual || [];

    return (
        <>
            <div className="pricing-sec" id="pricing">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            {RetainerServiceData?.subtitle || "PRICING PLANS"}
                        </span>
                        <h2 className="section-title section-title2">
                            {RetainerServiceData?.title || "Flexible Plans, Powerful Results"}
                        </h2>
                        <p className="section-desc">
                            {RetainerServiceData?.description || "Whether you're a startup looking for a boost or an established brand aiming to elevate your presence, we have a plan that fits your goals and budget."}
                        </p>
                    </div>
                    <div className="pricing_nav_wrap">
                        <ul className="pricing_nav nav-tabs" id="myTab" role="tablist" ref={navRef}>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="monthly-tab" data-bs-toggle="tab" data-bs-target="#monthly" type="button" role="tab" aria-controls="monthly" aria-selected="true">Monthly</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="annual-tab" data-bs-toggle="tab" data-bs-target="#annual" type="button" role="tab" aria-controls="annual" aria-selected="false">Annual <span>-20%</span></button>
                            </li>
                        </ul>
                        <span className="nav-hover-shape" ref={indicatorRef} style={{ left: 439, opacity: 1 }}>
                            <Image src={pricingNavbar} alt="shape" />
                        </span>
                    </div>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="monthly" role="tabpanel" aria-labelledby="monthly-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <Image src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <Image src={pricingShape2} alt="shape" />
                                </div>
                                {monthlyPlans.map((plan, idx) => (
                                    <div className="pricing-box" data-aos="fade-up" data-aos-delay={idx * 200} key={plan.id}>
                                        {plan.featured && (
                                            <span className="pricing-featured-icon">
                                                <Image src={featuredIcon} alt="icon" />
                                            </span>
                                        )}
                                        <div className="pricing-header">
                                            <span className="title">{plan.title}</span>
                                            <h3 className="price">{plan.price}<span>{plan.period}</span></h3>
                                            {plan.notice && (
                                                <p className="content">
                                                    <span className="required">*</span> {plan.notice.replace(/^\*\s*/, '')}
                                                </p>
                                            )}
                                            <ul className="feature-lists">
                                                {plan.features?.map((feat, fIdx) => (
                                                    <li key={fIdx}><span className="icon"><i className="las la-check" /></span> {feat}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <Link href={plan.buttonUrl || "/contact"} className="theme-btn">
                                                {plan.buttonText || "Let's Start Now"} <Image src={btnArrow} alt="icon" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tab-pane fade" id="annual" role="tabpanel" aria-labelledby="annual-tab">
                            <div className="pricing-lists">
                                <div className="shape_img shape_img1">
                                    <Image src={pricingShape1} alt="shape" />
                                </div>
                                <div className="shape_img shape_img2">
                                    <Image src={pricingShape2} alt="shape" />
                                </div>
                                {annualPlans.map((plan, idx) => (
                                    <div className="pricing-box" data-aos="fade-up" data-aos-delay={idx * 200} key={plan.id}>
                                        {plan.featured && (
                                            <span className="pricing-featured-icon">
                                                <Image src={featuredIcon} alt="icon" />
                                            </span>
                                        )}
                                        <div className="pricing-header">
                                            <span className="title">{plan.title}</span>
                                            <h3 className="price">{plan.price}<span>{plan.period}</span></h3>
                                            {plan.notice && (
                                                <p className="content">
                                                    <span className="required">*</span> {plan.notice.replace(/^\*\s*/, '')}
                                                </p>
                                            )}
                                            <ul className="feature-lists">
                                                {plan.features?.map((feat, fIdx) => (
                                                    <li key={fIdx}><span className="icon"><i className="las la-check" /></span> {feat}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <Link href={plan.buttonUrl || "/contact"} className="theme-btn">
                                                {plan.buttonText || "Let's Start Now"} <Image src={btnArrow} alt="icon" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(PriceV1), { ssr: false });