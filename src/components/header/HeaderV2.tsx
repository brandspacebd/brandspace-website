import Link from 'next/link';
import logo1 from "@/assets/images/logo-1.png"
import Image from 'next/image';

const HeaderV2 = () => {
    return (
        <>
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={logo1} alt="logo" />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link href="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link href="/projects">Projects <span>(7)</span></Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us <span /></Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact <span /></Link>
                                </li>
                                <li className="dropdown-menu-item">
                                    <Link href="#">All Pages <i className="las la-angle-down" /></Link>
                                    <ul className="dropdown-list">
                                        <li><Link href="/">Home - Ham Menu</Link></li>
                                        <li><Link href="/home-2">Home - Notch Menu</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/projects">Projects</Link></li>
                                        <li><Link href="/project-details/1">Project Single</Link></li>
                                        <li><Link href="/blog">Blog</Link></li>
                                        <li><Link href="/blog-details/1">Blog Detail</Link></li>
                                        <li><Link href="/service-details/1">Service Single</Link></li>
                                        <li><Link href="/team-details/1">Team Single</Link></li>
                                        <li><Link href="/faq">Faq</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/not-found">404</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <a className="with-border" href="tel:+1234567890">(+84) 0123456789</a>
                            <a href="mailto:email@example.com">
                                <i className="iconoir-mail-out" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV2;