"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Union from "@/assets/images/Union.svg";
import btnArrow from "@/assets/images/btn-arrow.svg";
import defaultRetainerData from "@/assets/jsonData/pricing/RetainerCalculatorData.json";

interface ServiceOption {
    id: string;
    name: string;
    baseHours: number;
    hourlyRate: number;
    description: string;
}

const SERVICES: ServiceOption[] = (defaultRetainerData && defaultRetainerData.services && defaultRetainerData.services.length > 0)
    ? defaultRetainerData.services
    : [
    {
        id: "branding",
        name: "Brand Identity & Strategy",
        baseHours: 20,
        hourlyRate: 60,
        description: "Continuous brand guidelines maintenance, collateral, sub-brand styling"
    },
    {
        id: "ai_creative",
        name: "AI & Hybrid Creative Campaigns",
        baseHours: 25,
        hourlyRate: 70,
        description: "High-concept generative key visuals, AI prompt crafting, visual direction"
    },
    {
        id: "digital_marketing",
        name: "Social Media & Digital Marketing",
        baseHours: 30,
        hourlyRate: 50,
        description: "Monthly content calendars, performance ad variations, community creative"
    },
    {
        id: "web_uiux",
        name: "Web Design & UI/UX Support",
        baseHours: 25,
        hourlyRate: 65,
        description: "Landing page design, conversion rate optimization, digital interface upkeep"
    },
    {
        id: "motion_video",
        name: "Video Production & Motion Graphics",
        baseHours: 20,
        hourlyRate: 75,
        description: "Promotional reels, 2D/3D motion graphics, brand stingers & animation"
    }
];

const RetainerCalculatorSection = () => {
    const [selectedServices, setSelectedServices] = useState<string[]>(["branding", "ai_creative"]);
    const [commitmentMonths, setCommitmentMonths] = useState<number>(6); // 3, 6, 12 months
    const [urgencyTier, setUrgencyTier] = useState<"standard" | "priority" | "dedicated">("standard");

    const toggleService = (id: string) => {
        setSelectedServices((prev) =>
            prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
        );
    };

    // Calculate monthly retainer estimation
    const calculation = useMemo(() => {
        const active = SERVICES.filter((s) => selectedServices.includes(s.id));
        const totalHours = active.reduce((acc, s) => acc + s.baseHours, 0);
        let baseFee = active.reduce((acc, s) => acc + s.baseHours * s.hourlyRate, 0);

        // Commitment discount
        let discountPct = 0;
        if (commitmentMonths === 6) discountPct = 0.10; // 10% off
        if (commitmentMonths === 12) discountPct = 0.20; // 20% off

        // Tier multiplier
        let tierMultiplier = 1.0;
        if (urgencyTier === "priority") tierMultiplier = 1.2;
        if (urgencyTier === "dedicated") tierMultiplier = 1.45;

        const discountedFee = baseFee * (1 - discountPct) * tierMultiplier;
        const bdtEquivalent = Math.round(discountedFee * 120);

        return {
            totalHours,
            monthlyUSD: Math.round(discountedFee),
            monthlyBDT: bdtEquivalent.toLocaleString(),
            discountPct: Math.round(discountPct * 100)
        };
    }, [selectedServices, commitmentMonths, urgencyTier]);

    return (
        <section className="pricing-sec retainer-calc-sec" style={{ padding: "80px 0" }}>
            <div className="custom-container">
                <div className="section-header section-header2 text-center" style={{ marginBottom: "50px" }}>
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        MONTHLY RETAINER FEE CALCULATOR
                    </span>
                    <h2 className="section-title section-title2">
                        Build Your Custom <span>Agency Retainer</span>
                    </h2>
                    <p className="section-desc" style={{ maxWidth: "720px", margin: "15px auto" }}>
                        Configure the exact creative disciplines and capacity your organization requires.
                        Get an immediate real-time estimate of monthly investment and guaranteed dedicated capacity.
                    </p>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px", alignItems: "start" }}>
                    {/* Left: Configuration Controls */}
                    <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.08)", borderRadius: "20px", padding: "35px 30px" }}>
                        <h4 style={{ color: "#fff", fontSize: "18px", marginBottom: "20px", textTransform: "uppercase", letterSpacing: "1px" }}>
                            1. Select Required Disciplines
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            {SERVICES.map((service) => {
                                const isChecked = selectedServices.includes(service.id);
                                return (
                                    <div
                                        key={service.id}
                                        onClick={() => toggleService(service.id)}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "14px",
                                            padding: "16px",
                                            borderRadius: "12px",
                                            cursor: "pointer",
                                            background: isChecked ? "rgba(201, 243, 29, 0.08)" : "rgba(255, 255, 255, 0.02)",
                                            border: isChecked ? "1px solid rgba(201, 243, 29, 0.4)" : "1px solid rgba(255, 255, 255, 0.06)",
                                            transition: "all 0.2s"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "22px",
                                                height: "22px",
                                                borderRadius: "6px",
                                                border: isChecked ? "2px solid var(--primary, #c9f31d)" : "2px solid #666",
                                                background: isChecked ? "var(--primary, #c9f31d)" : "transparent",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginTop: "2px",
                                                flexShrink: 0
                                            }}
                                        >
                                            {isChecked && <i className="las la-check" style={{ color: "#000", fontSize: "14px", fontWeight: "bold" }} />}
                                        </div>
                                        <div>
                                            <div style={{ color: isChecked ? "#fff" : "#ccc", fontSize: "15px", fontWeight: "600" }}>{service.name}</div>
                                            <div style={{ color: "#888", fontSize: "12px", marginTop: "4px" }}>{service.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Commitment Period */}
                        <h4 style={{ color: "#fff", fontSize: "18px", margin: "30px 0 15px", textTransform: "uppercase", letterSpacing: "1px" }}>
                            2. Agreement Term
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                            {[
                                { months: 3, label: "3 Months", discount: "Base" },
                                { months: 6, label: "6 Months", discount: "10% Off" },
                                { months: 12, label: "12 Months", discount: "20% Off" }
                            ].map((item) => (
                                <button
                                    key={item.months}
                                    type="button"
                                    onClick={() => setCommitmentMonths(item.months)}
                                    style={{
                                        padding: "12px 8px",
                                        borderRadius: "10px",
                                        border: commitmentMonths === item.months ? "1px solid var(--primary, #c9f31d)" : "1px solid rgba(255, 255, 255, 0.1)",
                                        background: commitmentMonths === item.months ? "rgba(201, 243, 29, 0.15)" : "transparent",
                                        color: commitmentMonths === item.months ? "var(--primary, #c9f31d)" : "#aaa",
                                        cursor: "pointer",
                                        fontSize: "13px",
                                        textAlign: "center"
                                    }}
                                >
                                    <div style={{ fontWeight: "600" }}>{item.label}</div>
                                    <div style={{ fontSize: "11px", opacity: 0.8 }}>{item.discount}</div>
                                </button>
                            ))}
                        </div>

                        {/* Turnaround / Support SLA */}
                        <h4 style={{ color: "#fff", fontSize: "18px", margin: "30px 0 15px", textTransform: "uppercase", letterSpacing: "1px" }}>
                            3. Turnaround & Priority Tier
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                            {[
                                { tier: "standard", label: "Standard", desc: "48-72h SLA" },
                                { tier: "priority", label: "Priority", desc: "24-48h SLA" },
                                { tier: "dedicated", label: "Dedicated", desc: "Same-Day SLA" }
                            ].map((item) => (
                                <button
                                    key={item.tier}
                                    type="button"
                                    onClick={() => setUrgencyTier(item.tier as "standard" | "priority" | "dedicated")}
                                    style={{
                                        padding: "12px 8px",
                                        borderRadius: "10px",
                                        border: urgencyTier === item.tier ? "1px solid var(--primary, #c9f31d)" : "1px solid rgba(255, 255, 255, 0.1)",
                                        background: urgencyTier === item.tier ? "rgba(201, 243, 29, 0.15)" : "transparent",
                                        color: urgencyTier === item.tier ? "var(--primary, #c9f31d)" : "#aaa",
                                        cursor: "pointer",
                                        fontSize: "13px",
                                        textAlign: "center"
                                    }}
                                >
                                    <div style={{ fontWeight: "600" }}>{item.label}</div>
                                    <div style={{ fontSize: "11px", opacity: 0.8 }}>{item.desc}</div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Summary & Dynamic Quote */}
                    <div style={{ background: "linear-gradient(180deg, rgba(201, 243, 29, 0.08) 0%, rgba(20, 20, 20, 0.95) 100%)", border: "1px solid rgba(201, 243, 29, 0.25)", borderRadius: "20px", padding: "40px 35px", position: "sticky", top: "100px" }}>
                        <span style={{ fontSize: "12px", color: "var(--primary, #c9f31d)", textTransform: "uppercase", letterSpacing: "1.5px", fontWeight: "600" }}>
                            Calculated Retainer Summary
                        </span>

                        <div style={{ marginTop: "20px", marginBottom: "25px" }}>
                            <div style={{ fontSize: "44px", fontWeight: "700", color: "#fff", lineHeight: "1" }}>
                                ${calculation.monthlyUSD.toLocaleString()}
                                <span style={{ fontSize: "16px", color: "#888", fontWeight: "400" }}> / month</span>
                            </div>
                            <div style={{ fontSize: "15px", color: "var(--primary, #c9f31d)", marginTop: "8px" }}>
                                Approx. ৳{calculation.monthlyBDT} BDT / month
                            </div>
                            {calculation.discountPct > 0 && (
                                <div style={{ display: "inline-block", background: "rgba(201, 243, 29, 0.15)", color: "var(--primary, #c9f31d)", padding: "4px 10px", borderRadius: "12px", fontSize: "12px", marginTop: "10px" }}>
                                    ✓ {calculation.discountPct}% Term Savings Applied
                                </div>
                            )}
                        </div>

                        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "20px", marginBottom: "25px" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: "14px", marginBottom: "10px" }}>
                                <span>Guaranteed Monthly Hours:</span>
                                <strong style={{ color: "#fff" }}>{calculation.totalHours} hrs / mo</strong>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: "14px", marginBottom: "10px" }}>
                                <span>Active Creative Disciplines:</span>
                                <strong style={{ color: "#fff" }}>{selectedServices.length} Selected</strong>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: "14px", marginBottom: "10px" }}>
                                <span>Agreement Term:</span>
                                <strong style={{ color: "#fff" }}>{commitmentMonths} Months</strong>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: "14px" }}>
                                <span>Turnaround Priority:</span>
                                <strong style={{ color: "#fff", textTransform: "capitalize" }}>{urgencyTier}</strong>
                            </div>
                        </div>

                        <Link
                            href={`/contact?subject=Retainer%20Inquiry%20($${calculation.monthlyUSD}/mo)`}
                            className="theme-btn"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "10px",
                                width: "100%",
                                padding: "16px",
                                borderRadius: "12px",
                                background: "var(--primary, #c9f31d)",
                                color: "#000",
                                fontWeight: "600",
                                textTransform: "uppercase",
                                textDecoration: "none"
                            }}
                        >
                            Lock in This Retainer
                            <Image src={btnArrow} alt="arrow" />
                        </Link>

                        <p style={{ fontSize: "12px", color: "#777", textAlign: "center", marginTop: "15px", lineHeight: "1.5" }}>
                            Custom deliverables, dedicated creative director, and rollover hours available upon consultation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RetainerCalculatorSection;
