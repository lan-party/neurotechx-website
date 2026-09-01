import { getFeaturedProjects, getCommunityProjects, GitHubRepo } from '@/lib/github';
import Link from 'next/link';
import { ArrowRight, Star, GitFork, ExternalLink, Code2, BookOpen } from 'lucide-react';
import styles from './page.module.css';

export const revalidate = 3600; // Revalidate every hour

function ProjectCard({ repo, featured = false }: { repo: GitHubRepo, featured?: boolean }) {
    return (
        <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
            <div className={styles.cardHeader}>
                <div className={styles.repoOwner}>
                    <img src={repo.owner.avatar_url} alt={repo.owner.login} className={styles.avatar} />
                    <span>{repo.owner.login}</span>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <Star size={14} />
                        <span>{repo.stargazers_count}</span>
                    </div>
                </div>
            </div>

            <h3 className={styles.repoName}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    {repo.name}
                </a>
            </h3>

            <p className={styles.description}>{repo.description}</p>

            <div className={styles.topics}>
                {repo.topics.slice(0, 4).map(topic => (
                    <span key={topic} className={styles.topic}>{topic}</span>
                ))}
            </div>

            <div className={styles.cardFooter}>
                <span className={styles.language}>
                    <span className={styles.langColor} style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                    {repo.language}
                </span>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    View Code <ExternalLink size={14} />
                </a>
            </div>
        </div>
    );
}

function getLanguageColor(lang: string) {
    const colors: Record<string, string> = {
        Python: '#3572A5',
        JavaScript: '#f1e05a',
        TypeScript: '#2b7489',
        'C++': '#f34b7d',
        MATLAB: '#e16737',
        Julia: '#a270ba',
        Jupyter: '#DA5B0B'
    };
    return colors[lang] || '#8b9bb4';
}

export default async function ProjectsPage() {
    const featuredRepos = await getFeaturedProjects();
    const communityRepos = await getCommunityProjects();

    // Filter out duplicates (if a featured repo also appears in community list)
    const featuredIds = new Set(featuredRepos.map(r => r.id));
    const uniqueCommunityRepos = communityRepos.filter(r => !featuredIds.has(r.id));

    return (
        <div className="container py-12">
            <div className={styles.header}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    Open Source <span className="text-neuro-accent">Projects</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    Discover the tools powering the next generation of neurotechnology.
                    Add your project by tagging your GitHub repository with <code className="bg-muted px-2 py-1 rounded text-sm font-mono">neurotechx</code>.
                </p>
            </div>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Star className="text-yellow-500 fill-yellow-500" /> Featured Projects
                </h2>
                <div className={styles.grid}>
                    {featuredRepos.map(repo => (
                        <ProjectCard key={repo.id} repo={repo} featured={true} />
                    ))}
                    {/* Fallback for SCI Head Model if API fails or placeholder needed */}
                    <div className={`${styles.card} ${styles.featured}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.repoOwner}>
                                <div className={`${styles.avatar} bg-gray-200 flex items-center justify-center`}>SCI</div>
                                <span>SCI Institute</span>
                            </div>
                        </div>
                        <h3 className={styles.repoName}>
                            <a href="https://www.sci.utah.edu/software.html" target="_blank">SCI Head Models</a>
                        </h3>
                        <p className={styles.description}>
                            High-resolution anatomical head models for electromagnetic source imaging and stimulation (Placeholder).
                        </p>
                        <div className={styles.topics}>
                            <span className={styles.topic}>head-model</span>
                            <span className={styles.topic}>mri</span>
                            <span className={styles.topic}>segmentation</span>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.language}>Resource</span>
                            <a href="https://www.sci.utah.edu/software.html" target="_blank" className={styles.link}>
                                Visit Website <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* OpenViBE */}
                    <div className={`${styles.card} ${styles.featured}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.repoOwner}>
                                <div className={`${styles.avatar} bg-cyan-100 text-cyan-700 flex items-center justify-center`}>OV</div>
                                <span>Inria</span>
                            </div>
                        </div>
                        <h3 className={styles.repoName}>
                            <a href="https://openvibe.inria.fr/" target="_blank">OpenViBE</a>
                        </h3>
                        <p className={styles.description}>
                            Software for Brain-Computer Interfaces and Real-Time Neurosciences. A graphical platform for designing BCI scenarios.
                        </p>
                        <div className={styles.topics}>
                            <span className={styles.topic}>C++</span>
                            <span className={styles.topic}>Real-Time</span>
                            <span className={styles.topic}>BCI</span>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.language}>Platform</span>
                            <a href="https://openvibe.inria.fr/" target="_blank" className={styles.link}>
                                Visit Website <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* SPD Project */}
                    <div className={`${styles.card} ${styles.featured}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.repoOwner}>
                                <div className={`${styles.avatar} bg-purple-100 text-purple-700 flex items-center justify-center`}>TD</div>
                                <span>thibaultdesurrel</span>
                            </div>
                        </div>
                        <h3 className={styles.repoName}>
                            <a href="https://github.com/thibaultdesurrel/riemannien_dimension_reduction" target="_blank" className={styles.smallRepoName} >riemannien_dimension_reduction</a>
                        </h3>
                        <p className={styles.description}>
                            Riemannian dimension reduction for covariance matrices. Essential for advanced BCI signal processing.
                        </p>
                        <div className={styles.topics}>
                            <span className={styles.topic}>Riemannian</span>
                            <span className={styles.topic}>Machine Learning</span>
                            <span className={styles.topic}>BCI</span>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.language}>
                                <span className={styles.langColor} style={{ backgroundColor: '#3572A5' }}></span>
                                Python
                            </span>
                            <a href="https://github.com/thibaultdesurrel/riemannien_dimension_reduction" target="_blank" className={styles.link}>
                                View Code <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Code2 /> Community Projects
                </h2>
                <div className={styles.grid}>
                    {uniqueCommunityRepos.map(repo => (
                        <ProjectCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BookOpen /> Research & References
                </h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.repoOwner}>
                                <div className={`${styles.avatar} bg-blue-100 text-blue-600 flex items-center justify-center`}>N</div>
                                <span>Nature</span>
                            </div>
                        </div>
                        <h3 className={styles.repoName}>
                            <a href="https://www.nature.com/articles/s41586-025-09255-w#Ack1" target="_blank">
                                A generic non-invasive neuromotor interface for HCI
                            </a>
                        </h3>
                        <p className={styles.description}>
                            A high-bandwidth neuromotor interface offering performant out-of-the-box generalization across people. By Reality Labs at Meta.
                        </p>
                        <div className={styles.topics}>
                            <span className={styles.topic}>HCI</span>
                            <span className={styles.topic}>EMG</span>
                            <span className={styles.topic}>neuromotor</span>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.language}>Paper</span>
                            <a href="https://www.nature.com/articles/s41586-025-09255-w#Ack1" target="_blank" className={styles.link}>
                                Read Article <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Brain-CODE (OBI) */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.repoOwner}>
                                <div className={`${styles.avatar} bg-cyan-100 text-cyan-700 flex items-center justify-center`}>BC</div>
                                <span>OBI</span>
                            </div>
                        </div>
                        <h3 className={styles.repoName}>
                            <a href="https://www.braincode.ca/" target="_blank">Brain-CODE</a>
                        </h3>
                        <p className={styles.description}>
                            A large-scale neuroinformatics platform for data management and sharing. Enables collaborative brain research across Canada.
                        </p>
                        <div className={styles.topics}>
                            <span className={styles.topic}>Informatics</span>
                            <span className={styles.topic}>Open Data</span>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.language}>Platform</span>
                            <a href="https://www.braincode.ca/" target="_blank" className={styles.link}>
                                Visit Website <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>

                    {/* NERVE (OBI) */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.repoOwner}>
                                <div className={`${styles.avatar} bg-green-100 text-green-700 flex items-center justify-center`}>NV</div>
                                <span>OBI</span>
                            </div>
                        </div>
                        <h3 className={styles.repoName}>
                            <a href="https://braininstitute.ca/commercialization/nerve" target="_blank">NERVE Program</a>
                        </h3>
                        <p className={styles.description}>
                            Neurotech Entrepreneurship to Validate Emerging Innovations. Supporting neurotech startups and entrepreneurs.
                        </p>
                        <div className={styles.topics}>
                            <span className={styles.topic}>Entrepreneurship</span>
                            <span className={styles.topic}>Startup</span>
                        </div>
                        <div className={styles.cardFooter}>
                            <span className={styles.language}>Program</span>
                            <a href="https://braininstitute.ca/commercialization/nerve" target="_blank" className={styles.link}>
                                Learn More <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
