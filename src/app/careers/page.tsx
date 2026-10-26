import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import AboutV2 from "@/components/about/AboutV2";
import TeamV1 from "@/components/team/TeamV1";
import ServicesV2 from "@/components/services/ServicesV2";
import ContactV1 from "@/components/contact/ContactV1";
import careersData from "@/assets/jsonData/careers/CareersData.json";
import careersHeroData from "@/assets/jsonData/pages/careers.json";

export const metadata = {
    title: "Careers at Brandspace - Join Our Creative Crew",
    description: "Explore career opportunities, creative roles, and culture at Brandspace agency."
};

const CareersPage = () => {
    const jobList = careersData && careersData.length > 0 ? careersData : [
        { title: "Senior Brand Strategist", department: "Strategy & Creative", location: "Dhaka, Bangladesh / Hybrid", type: "Full-Time" },
        { title: "AI Prompt Engineer & Visual Designer", department: "Creative Tech", location: "Remote / Hybrid", type: "Full-Time" },
        { title: "Lead Motion Graphics Artist", department: "Video & Animation", location: "Dhaka, Bangladesh", type: "Full-Time" },
        { title: "Full-Stack Web Developer (Next.js)", department: "Engineering", location: "Dhaka, Bangladesh", type: "Full-Time" }
    ];

    return (
        <div className="aixor-main careers-page">
            <LayoutV3>
                <HeroV2 data={careersHeroData} />
                <AboutV2 />
                <div style={{ padding: "60px 0 20px" }}>
                    <div className="custom-container">
                        <div className="section-header section-header2 text-center" style={{ marginBottom: "40px" }}>
                            <span className="section-subtitle">CURRENT OPENINGS</span>
                            <h2 className="section-title section-title2">
                                Build The Future of <span>Creative Tech</span>
                            </h2>
                            <p className="section-desc" style={{ maxWidth: "600px", margin: "15px auto" }}>
                                We are always scouting for relentless thinkers, visual virtuosos, and innovative storytellers.
                            </p>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
                            {jobList.map((job, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        background: "rgba(255, 255, 255, 0.03)",
                                        border: "1px solid rgba(255, 255, 255, 0.08)",
                                        borderRadius: "16px",
                                        padding: "30px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        gap: "20px"
                                    }}
                                >
                                    <div>
                                        <span style={{ fontSize: "12px", color: "var(--primary, #c9f31d)", textTransform: "uppercase" }}>{job.department}</span>
                                        <h3 style={{ fontSize: "20px", color: "#fff", margin: "8px 0" }}>{job.title}</h3>
                                        <div style={{ color: "#888", fontSize: "13px" }}>📍 {job.location} • 💼 {job.type}</div>
                                    </div>
                                    <a
                                        href={`/contact?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                                        className="theme-btn"
                                        style={{
                                            display: "inline-block",
                                            textAlign: "center",
                                            padding: "10px 20px",
                                            borderRadius: "20px",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                            background: "rgba(255, 255, 255, 0.08)",
                                            color: "#fff",
                                            border: "1px solid rgba(255, 255, 255, 0.15)",
                                            textDecoration: "none"
                                        }}
                                    >
                                        Apply Now →
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <ServicesV2 />
                <TeamV1 />
                <ContactV1 />
            </LayoutV3>
        </div>
    );
};

export default CareersPage;
