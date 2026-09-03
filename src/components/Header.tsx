"use client";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import styles from './Header.module.css';
import { useSession } from 'next-auth/react';


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    let { data: session } = useSession();
    if(session != null && 'value' in session){
        session = JSON.parse(session?.value as string);
    }

    const toggleNavButtonClick = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <div className={styles.headerWrapper}>
            {/* Main Navigation */}
            <header className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <div className={styles.logo}>
                            <Link href="/" className={styles.logoText}>
                                <span style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>NeuroTech</span><span style={{ color: 'var(--neuro-accent)' }}>X</span>
                            </Link>
                        </div>
                        {/* Tabs as a proper row */}
                        <nav className={styles.nav}>
                            {[
                                { name: 'About', href: '/about' },
                                { name: 'Community', href: '/community' },
                                { name: 'Education', href: '/education' },
                                { name: 'Events', href: 'https://luma.com/neurotechx', external: true },
                                { name: 'Projects', href: '/projects' },
                                { name: 'Reports', href: '/reports' },
                                { name: 'Jobs', href: '/jobs' },
                            ].map((item) => (
                                item.external ? (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.navLink}
                                    >
                                        {item.name}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={styles.navLink}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                        </nav>
                    </div>

                    <div className={styles.rightSection}>
                        <Link href="/donate" className={styles.donateLink}>
                            Donate
                        </Link>
                        { session && 'user' in session ?
                            <a href="/dashboard" className={styles.joinButton}>
                                Dashboard
                            </a> :
                            <a href="/join" className={styles.joinButton}>
                                Join Community
                            </a>
                        }
                        
                        <nav className={styles.mobileNav} onClick={toggleNavButtonClick}>
                            <button id={styles.toggleNavButton}>
                                { 
                                mobileMenuOpen ? 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg> :
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                                 }
                            </button>
                            
                            
                            
                        </nav>
                    </div>
                </div>
            </header>

            <nav id={mobileMenuOpen ? styles.mobileNavLinks : styles.hidden}>
                { session && 'user' in session ?
                        <a href="/dashboard" className={styles.joinButton}>
                            Dashboard
                        </a> :
                        <a href="/join" className={styles.joinButton}>
                            Join Community
                        </a>
                    }
                <Link href="/donate" className={styles.donateLink}>
                    Donate
                </Link>
                {[
                    { name: 'About', href: '/about' },
                    { name: 'Community', href: '/community' },
                    { name: 'Education', href: '/education' },
                    { name: 'Events', href: 'https://luma.com/neurotechx', external: true },
                    { name: 'Projects', href: '/projects' },
                    { name: 'Reports', href: '/reports' },
                    { name: 'Jobs', href: '/jobs' },
                ].map((item) => (
                    item.external ? (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.navLink}
                        >
                            {item.name}
                        </a>
                    ) : (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.navLink}
                        >
                            {item.name}
                        </Link>
                    )
                ))}
            </nav>

            {/* Ticket Bar (Sub-header) - Restored "Wonderful" Style */}
            <div className={styles.ticketBanner}>
                <div className={styles.bannerContainer}>
                    <div className={styles.bannerContent}>
                        <span className={styles.badge}>Upcoming</span>
                        <span className={styles.bannerTitle}>California Neurotechnology Conference 2026</span>
                        <span className={styles.bannerDetails}>April 26 • UC Berkeley</span>
                    </div>
                    <a href="https://www.eventbrite.com/e/2026-california-neurotechnology-conference-tickets-1982321023544" target="_blank" className={styles.ticketLink}>
                        Get Tickets <ArrowRight width={14} height={14} />
                    </a>
                </div>
            </div>
        </div>
    );
}
