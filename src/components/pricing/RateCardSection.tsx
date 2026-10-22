"use client";
import React, { useState } from "react";
import Image from "next/image";
import Union from "@/assets/images/Union.svg";
import btnArrow from "@/assets/images/btn-arrow.svg";

const RateCardSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!companyName || !email || !phone) return;
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setCompanyName("");
        setEmail("");
        setPhone("");
        setIsModalOpen(false);
    };

    return (
        <section className="pricing-sec rate-card-sec" style={{ padding: "80px 0" }}>
            <div className="custom-container">
                <div className="section-header section-header2 text-center" style={{ marginBottom: "50px" }}>
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        OFFICIAL AGENCY RATE CARD
                    </span>
                    <h2 className="section-title section-title2">
                        Transparent Pricing, <span>Exceptional Value</span>
                    </h2>
                    <p className="section-desc" style={{ maxWidth: "700px", margin: "15px auto 30px" }}>
                        Access our comprehensive service fee schedule, creative campaign rates, and flexible engagement models.
                        Click below to request the complete official confidential rate card directly to your inbox.
                    </p>
                    <div>
                        <button
                            type="button"
                            className="theme-btn"
                            onClick={() => setIsModalOpen(true)}
                            style={{
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "16px 36px",
                                fontSize: "16px",
                                fontWeight: "600",
                                background: "var(--primary, #c9f31d)",
                                color: "#000",
                                borderRadius: "30px",
                                border: "none",
                                textTransform: "uppercase"
                            }}
                        >
                            Request a Rate Card
                            <Image src={btnArrow} alt="arrow" />
                        </button>
                    </div>
                </div>

                {/* Rate Card Category Overview */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" }}>
                    <div className="pricing-box" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "35px 30px" }}>
                        <span style={{ fontSize: "12px", color: "var(--primary, #c9f31d)", textTransform: "uppercase", letterSpacing: "1px" }}>01. Creative & Branding</span>
                        <h3 style={{ fontSize: "22px", margin: "10px 0 15px", color: "#fff" }}>Brand Identity & Strategy</h3>
                        <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6" }}>Full visual identity systems, typography, color palettes, brand guidelines, and brand architecture tailored for modern market leaders.</p>
                        <ul className="feature-lists" style={{ marginTop: "20px", color: "#ddd", fontSize: "14px" }}>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Logo & Brand Mark Suite</li>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Complete Brand Styleguide</li>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Stationery & Asset Kits</li>
                        </ul>
                    </div>

                    <div className="pricing-box" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "35px 30px" }}>
                        <span style={{ fontSize: "12px", color: "var(--primary, #c9f31d)", textTransform: "uppercase", letterSpacing: "1px" }}>02. AI & Creative Tech</span>
                        <h3 style={{ fontSize: "22px", margin: "10px 0 15px", color: "#fff" }}>Hybrid AI Campaigns</h3>
                        <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6" }}>AI-assisted creative rendering combined with human art direction to deliver high-velocity, award-worthy commercial campaigns.</p>
                        <ul className="feature-lists" style={{ marginTop: "20px", color: "#ddd", fontSize: "14px" }}>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Photorealistic AI Concept Art</li>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Rapid Visual Prototyping</li>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Generative Media Assets</li>
                        </ul>
                    </div>

                    <div className="pricing-box" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "16px", padding: "35px 30px" }}>
                        <span style={{ fontSize: "12px", color: "var(--primary, #c9f31d)", textTransform: "uppercase", letterSpacing: "1px" }}>03. 360° Digital</span>
                        <h3 style={{ fontSize: "22px", margin: "10px 0 15px", color: "#fff" }}>Integrated Campaigns</h3>
                        <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6" }}>Omnichannel digital marketing, social media content sprints, performance creative ads, and conversion landing pages.</p>
                        <ul className="feature-lists" style={{ marginTop: "20px", color: "#ddd", fontSize: "14px" }}>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Multi-Platform Creative Run</li>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Performance Video & Motion</li>
                            <li><span className="icon"><i className="las la-check" style={{ color: "var(--primary, #c9f31d)" }} /></span> Audience Growth Strategy</li>
                        </ul>
                    </div>
                </div>

                {/* Modal for Request a Rate card */}
                {isModalOpen && (
                    <div
                        style={{
                            position: "fixed",
                            inset: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            backdropFilter: "blur(12px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999,
                            padding: "20px"
                        }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <div
                            style={{
                                background: "#161616",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                                borderRadius: "20px",
                                padding: "40px 35px",
                                maxWidth: "520px",
                                width: "100%",
                                position: "relative",
                                boxShadow: "0 25px 60px rgba(0,0,0,0.7)"
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                style={{
                                    position: "absolute",
                                    top: "20px",
                                    right: "20px",
                                    background: "none",
                                    border: "none",
                                    color: "#fff",
                                    fontSize: "24px",
                                    cursor: "pointer"
                                }}
                            >
                                <i className="las la-times" />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <h3 style={{ fontSize: "24px", color: "#fff", marginBottom: "8px" }}>Request Official Rate Card</h3>
                                    <p style={{ color: "#999", fontSize: "14px", marginBottom: "25px" }}>
                                        Please share your organization details to receive BrandSpace&apos;s full commercial fee matrix.
                                    </p>

                                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                                        <div>
                                            <label style={{ display: "block", color: "#ddd", fontSize: "13px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Company Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. Acme Corporation"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "14px 18px",
                                                    borderRadius: "10px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    color: "#fff",
                                                    fontSize: "15px",
                                                    outline: "none"
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: "block", color: "#ddd", fontSize: "13px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Work Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="e.g. contact@company.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "14px 18px",
                                                    borderRadius: "10px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    color: "#fff",
                                                    fontSize: "15px",
                                                    outline: "none"
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <label style={{ display: "block", color: "#ddd", fontSize: "13px", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                                Phone Number *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                placeholder="e.g. +880 1700 000000"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                style={{
                                                    width: "100%",
                                                    padding: "14px 18px",
                                                    borderRadius: "10px",
                                                    background: "rgba(255, 255, 255, 0.05)",
                                                    border: "1px solid rgba(255, 255, 255, 0.12)",
                                                    color: "#fff",
                                                    fontSize: "15px",
                                                    outline: "none"
                                                }}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="theme-btn"
                                            style={{
                                                cursor: "pointer",
                                                marginTop: "10px",
                                                padding: "16px",
                                                borderRadius: "12px",
                                                background: "var(--primary, #c9f31d)",
                                                color: "#000",
                                                fontSize: "15px",
                                                fontWeight: "600",
                                                border: "none",
                                                textTransform: "uppercase",
                                                width: "100%",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: "10px"
                                            }}
                                        >
                                            Send Request
                                            <Image src={btnArrow} alt="arrow" />
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <div style={{ textAlign: "center", padding: "20px 10px" }}>
                                    <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(201, 243, 29, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                                        <i className="las la-check" style={{ fontSize: "32px", color: "var(--primary, #c9f31d)" }} />
                                    </div>
                                    <h3 style={{ color: "#fff", fontSize: "22px", marginBottom: "12px" }}>Request Submitted!</h3>
                                    <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6", marginBottom: "25px" }}>
                                        Thank you, <strong style={{ color: "#fff" }}>{companyName}</strong>. Our business development team has received your request and will send the official Rate Card to <strong style={{ color: "#fff" }}>{email}</strong> shortly.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        style={{
                                            padding: "12px 28px",
                                            borderRadius: "25px",
                                            background: "rgba(255, 255, 255, 0.1)",
                                            color: "#fff",
                                            border: "1px solid rgba(255, 255, 255, 0.2)",
                                            cursor: "pointer",
                                            fontSize: "14px"
                                        }}
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RateCardSection;
