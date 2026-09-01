import { ArrowUpRight } from 'lucide-react';
import styles from './page.module.css';
import InstagramImage from '@/components/InstagramImage';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            {/* Top Images from Instagram */}
            <div className={styles.instagramGrid}>
                <a href="https://www.instagram.com/p/DB_9Z_TSZ_S/" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
                    <InstagramImage 
                        src="/images/about-instagram-1.png" 
                        alt="NeuroTechX Event 1" 
                        className={styles.instagramImage} 
                        fallbackSrc="https://placehold.co/600x600/1a1a1a/ffffff?text=Instagram+Photo+1"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors flex items-center justify-center">
                        <span className="text-white font-bold opacity-0 hover:opacity-100 transition-opacity">View on Instagram</span>
                    </div>
                </a>
                <a href="https://www.instagram.com/p/C_id_mOS_ST/" target="_blank" rel="noopener noreferrer" className={styles.instagramLink}>
                    <InstagramImage 
                        src="/images/about-instagram-2.png" 
                        alt="NeuroTechX Event 2" 
                        className={styles.instagramImage} 
                        fallbackSrc="https://placehold.co/600x600/1a1a1a/ffffff?text=Instagram+Photo+2"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors flex items-center justify-center">
                        <span className="text-white font-bold opacity-0 hover:opacity-100 transition-opacity">View on Instagram</span>
                    </div>
                </a>
            </div>

            <section className={styles.section}>
                <h1 className={styles.title}>Our Story</h1>
                <p className={styles.subtitle}>
                    NeuroTechX was founded in 2015 by Yannick Roy and a dedicated team of engineers and scientists who recognized a critical gap: the lack of a bridge between the rigorous academic world of neuroscience and the fast-paced, hands-on culture of technology enthusiasts.
                </p>
                <div className={styles.cardText}>
                    <p>
                        What began as a small group of hackers in Montreal quickly evolved into the largest global community for neurotechnology. Our mission remains centered on three pillars: Community, Education, and Professional Development. We continue to foster an open, global community dedicated to the advancement of neurotechnology.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Our Origins</h2>
                <p className="max-w-2xl mb-12 text-lg text-muted-foreground">
                    NeuroTechX stands on the shoulders of giants. We acknowledge the founders and intellectual sources whose open-source contributions laid the technical foundation for our global community.
                </p>
                
                <div className={styles.originsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Paris: CogLab</h3>
                        <span className={styles.cardLabel}>Historical Pillar</span>
                        <p className={styles.cardText}>
                            Founded in 2013 at <em>La Paillasse</em>, CogLab pioneered the &quot;Community Lab&quot; model, exploring cognitive science through DIY hardware and open citizen science.
                        </p>
                        <a href="https://coglab.fr/home-en/" target="_blank" className={styles.link}>
                            Visit CogLab <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>San Francisco: Berkeley CogTech</h3>
                        <span className={styles.cardLabel}>Historical Pillar</span>
                        <p className={styles.cardText}>
                            The Cognitive Technology Group at Berkeley was a seminal student organization that set the standard for what would become <em>NeuroTech@Berkeley</em>.
                        </p>
                        <a href="http://www.explorecogtech.com/" target="_blank" className={styles.link}>
                            Visit Project <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Montreal: District 3 Workshop</h3>
                        <span className={styles.cardLabel}>Educational Milestone (2018)</span>
                        <p className={styles.cardText}>
                            The &quot;Deep Learning for EEG&quot; workshop at Concordia University bridged the gap between raw signal processing and modern machine learning.
                        </p>
                        <a href="https://github.com/NeuroTechX/bci-workshop" target="_blank" className={styles.link}>
                            View Materials <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Global: muse-lsl & eeg-notebooks</h3>
                        <span className={styles.cardLabel}>Technical Milestone</span>
                        <p className={styles.cardText}>
                            The democratized access to EEG data through muse-lsl and eeg-notebooks enabled large-scale studies and hyperscanning protocols worldwide.
                        </p>
                        <div className="flex flex-col gap-2">
                            <a href="https://github.com/NeuroTechX/eeg-notebooks" target="_blank" className={styles.link}>
                                eeg-notebooks <ArrowUpRight className={styles.icon} />
                            </a>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Open Science: MOABB</h3>
                        <span className={styles.cardLabel}>Technical Milestone</span>
                        <p className={styles.cardText}>
                            The <strong>Mother of All BCI Benchmarks (MOABB)</strong> project set a new standard for reproducibility in BCI research, providing a comprehensive framework for dataset benchmarking.
                        </p>
                        <a href="https://github.com/NeuroTechX/moabb" target="_blank" className={styles.link}>
                            View MOABB <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>NeuroTechX Services</h3>
                        <span className={styles.cardLabel}>Strategic Milestone (2019 - 2024)</span>
                        <p className={styles.cardText}>
                            Launched in 2019, NTX Services provided expert advisory to the neurotech industry. Its successful operation and eventual transition in 2024 marked a pivotal moment, enabling the core NeuroTechX organization to redouble its commitment to community-driven open science.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Queen&apos;s University</h3>
                        <span className={styles.cardLabel}>Strategic Milestone (2026)</span>
                        <p className={styles.cardText}>
                            A grant-funded partnership to launch the Neurotech Micro-credential Program, setting a new standard for hands-on neurotechnology education.
                        </p>
                        <a href="https://neurotechmicrocreds.com/" target="_blank" className={styles.link}>
                            Visit Program <ArrowUpRight className={styles.icon} />
                        </a>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Board of Directors</h2>
                <div className={styles.originsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Morgan Hough</h3>
                        <span className={styles.cardLabel}>Director</span>
                        <p className={styles.cardText}>
                            A specialist in Clinical Neurology (Oxford) and Biophysics (Reed), Morgan co-founded NeuroFedora and bridges scientific research with open-source development.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>John Griffiths, PhD</h3>
                        <span className={styles.cardLabel}>Director</span>
                        <p className={styles.cardText}>
                            Assistant Professor at the University of Toronto, John specializes in mathematical modeling of brain dynamics and neuroimaging analysis.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Susan Boehnke, PhD</h3>
                        <span className={styles.cardLabel}>Director</span>
                        <p className={styles.cardText}>
                            Associate Professor at Queen&apos;s University and Director of the NeuroTech Micro-credential Program, leading ethics and education initiatives.
                        </p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Officers & Leadership</h2>
                <div className={styles.originsGrid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Han Cat Nguyen</h3>
                        <span className={styles.cardLabel}>Officer</span>
                        <p className={styles.cardText}>
                            A biomedical engineer expert in biosensor design and DIY neurotechnology hardware development.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Dhruv Mehrotra</h3>
                        <span className={styles.cardLabel}>Officer</span>
                        <p className={styles.cardText}>
                            Neuroscience researcher and developer of Pynapple, focusing on spontaneous brain activity and decision-making.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Sophie Valentine</h3>
                        <span className={styles.cardLabel}>Content Lab Lead</span>
                        <p className={styles.cardText}>
                            Experimental psychologist leading the NTX Content Laboratory with a focus on digital health innovation.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
