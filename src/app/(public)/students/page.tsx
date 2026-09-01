import Link from 'next/link';
import { ArrowRight, Github, Globe, Mail, PlusCircle } from 'lucide-react';
import { studentClubs } from '@/data/clubs';
import styles from './page.module.css';

export default function StudentClubsPage() {
    return (
        <div className={styles.pageWrapper}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Student Clubs</h1>
                    <p className={styles.subtitle}>
                        The next generation of neurotechnology innovators. <br />
                        Explore student-led groups from universities around the world.
                    </p>

                    <div className={styles.addButton}>
                        <PlusCircle size={16} />
                        <span>Want to add your club? Scroll to the bottom!</span>
                    </div>
                </div>
            </section>

            {/* Clubs Grid */}
            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {studentClubs.map((club) => (
                            <div key={club.name} className={styles.card}>
                                <div className={styles.cardPadding}>
                                    <div className={styles.cardHeader}>
                                        <div className={styles.logoPlaceholder}>
                                            {/* In a real app, use next/image. Using placeholder for now if logo fails or is missing */}
                                            <span>{club.name.substring(0, 2)}</span>
                                        </div>
                                        <div className={styles.socialLinks}>
                                            {club.website && (
                                                <a href={club.website} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="Website">
                                                    <Globe size={18} />
                                                </a>
                                            )}
                                            {club.github && (
                                                <a href={club.github} target="_blank" rel="noopener noreferrer" className={styles.iconLink} title="GitHub">
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {club.email && (
                                                <a href={`mailto:${club.email}`} className={styles.iconLink} title="Contact">
                                                    <Mail size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className={styles.clubName}>{club.name}</h3>
                                    <div className={styles.clubMeta}>
                                        {club.university} • {club.location}
                                    </div>

                                    <p className={styles.clubDesc}>
                                        {club.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* "Add Your Club" Call to Action (PR Flow) */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 className={styles.ctaTitle}>Don&apos;t see your club?</h2>
                    <p className={styles.subtitle}>
                        This directory is community-maintained. The fastest way to get listed is to open a Pull Request on our GitHub repository.
                    </p>

                    <div className={styles.codeBlock}>
                        <p style={{ color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}># 1. Fork the repo & edit this file:</p>
                        <p style={{ color: 'var(--neuro-accent)', marginBottom: '1rem' }}>src/data/clubs.ts</p>

                        <p style={{ color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}># 2. Add your club object:</p>
                        <pre style={{ color: 'var(--foreground)' }}>
                            {`{
  name: "Your Club Name",
  university: "Your University",
  logo: "/images/clubs/your-logo.png",
  website: "https://...",
  description: "Short description..."
},`}
                        </pre>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                            href="https://github.com/NeuroTechX/neurotechx-website/edit/main/src/data/clubs.ts"
                            target="_blank"
                            className={styles.githubButton}
                        >
                            <Github style={{ marginRight: '0.5rem' }} size={20} />
                            Edit on GitHub
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
