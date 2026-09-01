import LandingPageLayout from '@/components/LandingPageLayout';
import { ExternalLink, Building2, MapPin, DollarSign, ArrowRight } from 'lucide-react';

const FEATURED_JOBS = [
    {
        company: 'Orbit Neurotech',
        role: 'Founding Machine Learning Engineer',
        location: 'San Francisco, CA (On-site)',
        compensation: '$150K – $225K + Equity',
        description: 'Building foundation models of emotion using advanced BCI and AI. Real-time, multi-dimensional neural data.',
        link: 'https://orbitneuro.com/'
    },
    {
        company: 'Neuralink',
        role: 'Machine Learning Engineer (BCI Applications)',
        location: 'Fremont, CA / Austin, TX',
        description: 'Developing high-bandwidth brain-machine interfaces to connect humans and computers.',
        link: 'https://neuralink.com/careers/'
    },
    {
        company: 'Science Corporation',
        role: 'Software Engineer, Neural Interfaces',
        location: 'Alameda, CA',
        description: 'Building the future of vision restoration and clinical-stage neurotechnology.',
        link: 'https://science.xyz/'
    },
    {
        company: 'Precision Neuroscience',
        role: 'Full Stack Software Engineer',
        location: 'New York / Mountain View',
        description: 'Developing a high-resolution, minimally invasive neural interface.',
        link: 'https://precisionneuroscience.com/'
    },
    {
        company: 'Paradromics',
        role: 'Data Scientist / ML Engineer',
        location: 'Austin, TX',
        description: 'Creating the next generation of data-rate brain-computer interfaces.',
        link: 'https://paradromics.com/'
    },
    {
        company: 'Ampa Health',
        role: 'Backend Engineer – APIs & Data Systems',
        location: 'Palo Alto, CA',
        description: 'Building scalable backend infrastructure and data systems for healthcare innovation.',
        link: 'https://www.ampahealth.com/careers'
    },
    {
        company: 'Ampa Health',
        role: 'Frontend-focused Fullstack Software Engineer',
        location: 'Palo Alto, CA',
        description: 'Developing high-performance user interfaces and end-to-end features for medical technology.',
        link: 'https://www.ampahealth.com/careers'
    },
    {
        company: 'Merge',
        role: 'ML Research Scientist - Bayesian Optimization',
        location: 'San Francisco, CA',
        description: 'Bridging biological and artificial intelligence to maximize human ability through BCI development.',
        link: 'https://www.merge.io/careers'
    },
    {
        company: 'Merge',
        role: 'MLE / MLOps / Full-stack DL Engineer',
        location: 'San Francisco, CA',
        description: 'Building the infrastructure and pipelines for foundation models of intelligence and neural interfaces.',
        link: 'https://www.merge.io/careers'
    },
    {
        company: 'Axion',
        role: 'ML Researcher',
        location: 'San Francisco, CA',
        description: 'Developing non-invasive neural interfaces that translate brain signals and eye movements into seamless interactions.',
        link: 'https://www.axionclick.com/careers'
    },
    {
        company: 'Axion',
        role: 'Founding Software Engineer',
        location: 'San Francisco, CA',
        description: 'Building the software foundation for high-performance, wearable neural interface systems.',
        link: 'https://www.axionclick.com/careers'
    },
    {
        company: 'BrainsWay',
        role: 'Field Clinical Engineer',
        location: 'Remote / Various',
        description: 'Supporting the deployment and clinical application of Deep TMS (Transcranial Magnetic Stimulation) systems.',
        link: 'https://www.brainsway.com/about-brainsway/careers/'
    },
    {
        company: 'BrainsWay',
        role: 'Clinical Program Manager - TMS',
        location: 'Remote / Various',
        description: 'Leading clinical program initiatives for non-invasive neurostimulation treatments.',
        link: 'https://www.brainsway.com/about-brainsway/careers/'
    },
    {
        company: 'Beacon Biosignals',
        role: 'Neuroscientist, External Scientific Programs',
        location: 'Boston, MA / Remote',
        description: 'Analyzing clinical trial data and translating complex neural data into insights for drug development programs.',
        link: 'https://job-boards.greenhouse.io/beaconbiosignals/jobs/4110972009'
    },
    {
        company: 'Alto Neuroscience',
        role: 'Sr. Director Clinical Development / Program Leader',
        location: 'Remote (US)',
        description: 'Leading clinical development strategy and program execution for precision psychiatry initiatives.',
        link: 'https://altoneuroscience.com/careers/'
    },
    {
        company: 'Alto Neuroscience',
        role: 'Clinical Research Associate',
        location: 'Remote (US)',
        description: 'Supporting the monitoring and execution of clinical trials for innovative CNS therapeutics.',
        link: 'https://altoneuroscience.com/careers/'
    }
];

export default function JobsPage() {
    return (
        <LandingPageLayout
            title="NeuroTech Jobs"
            subtitle="Explore high-impact roles at the frontier of brain-computer interfaces and neural engineering."
            ctaText="Post a Job"
            ctaLink="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform"
        >
            <section className="mt-12">
                <h2 className="text-3xl font-serif font-bold mb-8">Featured Openings</h2>
                <div className="grid gap-6">
                    {FEATURED_JOBS.map((job) => (
                        <div key={`${job.company}-${job.role}`} className="card p-6 hover:border-neuro-accent transition-all group">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Building2 className="w-4 h-4 text-neuro-accent" />
                                        <span className="font-bold text-lg">{job.company}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-neuro-accent transition-colors">
                                        {job.role}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 max-w-2xl">
                                        {job.description}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>
                                        {job.compensation && (
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="w-4 h-4" />
                                                {job.compensation}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex shrink-0">
                                    <a 
                                        href={job.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 px-6 py-2 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity"
                                    >
                                        Apply <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* NeuroTech Futures Section - Moved Down */}
            <section className="mt-20 p-8 rounded-2xl bg-neuro-accent/5 border-2 border-neuro-accent/20">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-serif font-bold mb-4">NeuroTech Futures</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                        The premier job board for careers in neurotechnology. Find roles in clinical research, software engineering, and hardware development at top neurotech companies worldwide.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a 
                            href="https://neurotechjobs.io" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-8 py-3 bg-neuro-accent text-black rounded-full font-bold hover:brightness-110 transition-all"
                        >
                            Browse All Roles <ArrowRight className="w-5 h-5" />
                        </a>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/20 rounded-full font-bold hover:bg-muted/50 transition-all"
                        >
                            Post a Job
                        </a>
                    </div>
                </div>
            </section>

            <div className="mt-20">
                <h3 className="text-2xl font-serif font-bold mb-6">Related Job Boards</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <a href="https://bernstein-network.de/en/career/job-pool/" target="_blank" className="card p-4 hover:border-neuro-accent transition-colors flex items-center justify-between group">
                        <div>
                            <span className="font-bold block group-hover:text-neuro-accent">Bernstein Network Job Pool</span>
                            <span className="text-xs text-muted-foreground">Computational Neuroscience & Neurotechnology (Germany/Global)</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-neuro-accent" />
                    </a>
                </div>
            </div>
        </LandingPageLayout>
    );
}
