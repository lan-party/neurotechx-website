import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Cpu, Globe, Video } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            The International<br />
            <span style={{ color: 'var(--neuro-accent)' }}>Neurotechnology</span> Community
          </h1>
          <p className={styles.heroSubtitle}>
            NeuroTechX is a volunteer-led organization that represents the largest global community of neurotechnology innovators.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform"
              target="_blank"
              className={styles.buttonPrimary}
            >
              Join the Community <ArrowRight width={20} height={20} />
            </a>
            <Link
              href="/education"
              className={styles.buttonSecondary}
            >
              Explore Education
            </Link>
          </div>
        </div>
      </section>



      {/* Featured Stories Grid - 2x2 Layout */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Row 1, Col 1: The Book */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.book}`}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: "url('/images/neurotech-primer.png')",
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#172554'
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.4), transparent)' }} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>The NeuroTech Primer</h3>
                <p className={styles.cardDescription}>
                  The essential guide to Brain-Computer Interfaces. Whether you&apos;re a student or a professional, start your journey here.
                </p>
                <Link href="/education" className={styles.cardLink}>
                  Read Book <ArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>

            {/* Row 1, Col 2: MOABB (Mother of All BCI Benchmarks) */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.moabb}`}>
                {/* Abstract Data Background */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.2,
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(20, 184, 166, 0.4) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }} />

                {/* MOABB Logo */}
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 3rem' }}>
                  <img
                    src="/images/moabb-logo.svg"
                    alt="MOABB Logo"
                    style={{ width: '100%', height: 'auto', maxWidth: '240px' }}
                  />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Open Source Benchmarks</h3>
                <p className={styles.cardDescription}>
                  Build reproducible BCI research with MOABB. The community standard for dataset benchmarking.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/NeuroTechX/moabb" target="_blank" className={styles.cardLink}>
                    View Repo <ArrowRight width={16} height={16} />
                  </a>
                  <a href="https://arxiv.org/abs/2404.15319" target="_blank" className={styles.cardLink} style={{ color: 'var(--muted-foreground)' }}>
                    Read Paper <ArrowRight width={16} height={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Row 2, Col 1: Global Hackathon */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.hackathon}`}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom right, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))' }} />

                {/* Globe / Network Visualization */}
                <Globe style={{ width: '8rem', height: '8rem', color: 'rgba(129, 140, 248, 0.2)' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '2.25rem', fontWeight: 700, color: 'rgba(255, 255, 255, 0.1)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Global</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Global Hackathons</h3>
                <p className={styles.cardDescription}>
                  Join thousands of hackers worldwide in our annual distributed hackathon events. Build the future, together.
                </p>
                <a href="https://brainhack.org/" target="_blank" className={styles.cardLink}>
                  Join Next Event <ArrowRight width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Row 2, Col 2: Top Medium Article */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.article}`}>
                {/* Publication Style Background */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: '#ffffff',
                  backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  opacity: 0.5
                }} />
                
                <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '0 2rem' }}>
                   <img 
                    src="/images/logo-black.svg" 
                    alt="NeuroTechX Content Lab" 
                    style={{ width: '80%', height: 'auto', marginBottom: '1rem' }} 
                  />
                  <div style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: 800, 
                    color: '#000', 
                    letterSpacing: '0.1em', 
                    textTransform: 'uppercase',
                    borderTop: '2px solid #000',
                    paddingTop: '0.5rem'
                  }}>
                    Content Lab
                  </div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  The State of Neurotech 2026
                </h3>
                <p className={styles.cardDescription}>
                  A deep dive into the emerging trends, funding landscapes, and breakthrough technologies defining the decade.
                </p>
                <a href="https://medium.com/neurotechx" target="_blank" className={styles.cardLink}>
                  Read Article <ArrowRight width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Row 2, Col 3: Community Chapters */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.community}`}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3, backgroundImage: 'radial-gradient(#22c55e 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <Users style={{ width: '6rem', height: '6rem', color: '#4ade80' }} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Local Chapters</h3>
                <p className={styles.cardDescription}>
                  Connect with neurotech enthusiasts in 30+ cities worldwide. Find a meetup near you.
                </p>
                <Link href="/community" className={styles.cardLink}>
                  Find Chapter <ArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>

            {/* Row 2, Col 4: FUS Forward Podcast */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.podcast}`}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: "url('/images/fus-forward-logo.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)' }} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>FUS Forward</h3>
                <p className={styles.cardDescription}>
                  Explore advancements in focused ultrasound with host Charles Caskey.
                </p>
                <a href="https://podcasts.apple.com/us/podcast/fus-forward/id1857021050" target="_blank" className={styles.cardLink}>
                  Listen Now <ArrowRight width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Row 1, Col 4: Industry Webinars */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.brainbox}`}>
                <Video style={{ width: '7rem', height: '7rem', color: '#f87171', opacity: 0.8 }} />
                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontFamily: 'monospace', color: '#fca5a5', fontSize: '0.75rem' }}>ARCHIVE</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Industry Webinars</h3>
                <p className={styles.cardDescription}>
                  Technical workshops from g.tec, Interaxon (Muse), Neuroelectrics, BEL, ANT Neuro, Magstim EGI, NIRx, and others.
                </p>
                <Link href="/education/webinars" className={styles.cardLink}>
                  Watch Archive <ArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>

            {/* Row 2, Col 4: PURSUE (New) */}
            <div className={styles.card}>
              <div className={styles.cardVisual} style={{
                backgroundImage: "url('/images/pursue-thumbnail.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.2)' }} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>PURSUE</h3>
                <p className={styles.cardDescription}>
                  Preparing Undergraduates for Research in STEM Using Electrophysiology. Open materials & datasets.
                </p>
                <a href="https://pursue.richmond.edu/" target="_blank" className={styles.cardLink}>
                  Visit Website <ArrowRight width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Row 2, Col 4: Many Analysts (New) */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.manyAnalysts}`}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: "url('/images/many-analysts.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.8
                }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)' }} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Many Analysts</h3>
                <p className={styles.cardDescription}>
                  A collaborative project investigating how different analysis pipelines affect results in personality neuroscience.
                </p>
                <a href="https://www.coscience-personality.com/manyanalysts" target="_blank" className={styles.cardLink}>
                  Visit Project <ArrowRight width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Row 3, Col 1: BALLADEER Dataset (New) */}
            <div className={styles.card}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Preview Image Area */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border)'
                }}>
                  {/* Abstract Data Visualization (CSS) */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.1,
                    backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                  {/* Simulated EEG Traces */}
                  <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100px', opacity: 0.5 }} preserveAspectRatio="none">
                    <path d="M0,50 Q20,20 40,50 T80,50 T120,50 T160,50" fill="none" stroke="#3b82f6" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                    <path d="M0,70 Q30,40 60,70 T120,70 T180,70" fill="none" stroke="#ef4444" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  </svg>

                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: '#0f172a',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                    Scientific Data
                  </div>
                </div>

                <div className={styles.cardContent} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>
                    nature.com
                  </div>
                  <h3 className={styles.cardTitle} style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                    A Multimodal Dataset for Neurophysiological and AI Applications
                  </h3>
                  <p className={styles.cardDescription} style={{ fontSize: '0.9rem', lineHeight: '1.5', flex: 1 }}>
                    The BALLADEER ADHD Dataset integrates simultaneous EEG, eye-tracking, and physiological signals from children and adolescents. It facilitates machine learning models for ADHD classification and biomarker discovery through cross-modal analyses.
                  </p>
                  <a href="https://www.nature.com/articles/s41597-026-06758-7" target="_blank" className={styles.cardLink} style={{ marginTop: '1rem' }}>
                    Read Full Article <ArrowRight width={16} height={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Row 1, Col 3: Support (Donate) */}
            <div className={styles.card}>
              <div className={`${styles.cardVisual} ${styles.donate}`}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.2, background: 'repeating-linear-gradient(45deg, #7f1d1d 0, #7f1d1d 10px, transparent 10px, transparent 20px)' }} />
                <div style={{ padding: '15px 26px 15px 26px', border: '2px solid #ef4444', borderRadius: '50%', color: '#ef4444', fontWeight: 'bold', fontSize: '2rem' }}>♥</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Support the Mission</h3>
                <p className={styles.cardDescription}>
                  Help us keep these resources open and free. NeuroTechX is a non-profit organization.
                </p>
                <Link href="/donate" className={styles.cardLink}>
                  Donate Now <ArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pulse / Blog Teaser Section */}
      <section className={styles.pulseSection}>
        <div className={styles.container}>
          <Globe style={{ width: '3rem', height: '3rem', margin: '0 auto 1.5rem', color: 'var(--muted-foreground)' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', fontWeight: 700, marginBottom: '1rem' }}>The Pulse of Neurotech</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', maxWidth: '42rem', margin: '0 auto 2.5rem' }}>
            Catch up on the latest news from around the world, curated by our community and automated streams.
          </p>
          <a
            href="https://medium.com/neurotechx"
            target="_blank"
            className={styles.buttonPrimary}
            style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}
          >
            Read the Blog
          </a>
        </div>
      </section>
    </div>
  );
}
