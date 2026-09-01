import { BookOpen, GraduationCap, Users, Video, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function EducationPage() {
    return (
        <div className="container py-12">
            <h1 className="text-4xl font-serif font-bold mb-6 mt-3">Education & Data</h1>
            <p className="text-lg text-muted-foreground mb-12">
                Curated learning resources and open standards for the community.
            </p>

            <div className="mb-16 p-8 bg-muted rounded-xl border border-foreground/10 flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                    <span className="text-sm font-bold uppercase tracking-wider text-neuro-accent mb-2 block">Featured Resource</span>
                    <h2 className="text-3xl font-serif font-bold mb-4">The NeuroTech Primer</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        The definitive beginner&apos;s guide to brain-computer interfaces and neurotechnology. Written by the community, for the community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://neurotechx.com/primer" target="_blank" className="px-6 py-3 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-opacity">
                            Get the Book
                        </a>
                        <a href="https://neurotechx.com/primer" target="_blank" className="px-6 py-3 border border-foreground/20 rounded-full font-bold hover:bg-muted-foreground/10 transition-colors">
                            Read PDF
                        </a>
                    </div>
                </div>
                <div className="w-48 h-auto shrink-0 rotate-3 transition-transform hover:rotate-0 duration-500">
                    <img 
                        src="/images/neurotech-primer.png" 
                        alt="The NeuroTech Primer Cover" 
                        className="w-full h-full object-contain rounded shadow-2xl border border-foreground/5"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                            Open Data Archives
                        </h2>
                        <div className="card p-6 space-y-4">
                            <p className="text-sm text-muted-foreground">
                                We strongly believe in open science. Use these verified repositories for your research.
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://openneuro.org/" target="_blank" className="block font-bold hover:text-neuro-accent">OpenNeuro</a>
                                    <span className="text-xs text-muted-foreground">A free and open platform for sharing MRI, MEG, EEG, iEEG, and ECoG data.</span>
                                </li>
                                <li>
                                    <a href="https://nemar.org/" target="_blank" className="block font-bold hover:text-neuro-accent">NEMAR</a>
                                    <span className="text-xs text-muted-foreground">Neuroelectromagnetic Data Archive and Tools.</span>
                                </li>
                                <li>
                                    <a href="https://dandiarchive.org/" target="_blank" className="block font-bold hover:text-neuro-accent">DANDI Archive</a>
                                    <span className="text-xs text-muted-foreground">Distributed Archives for Neurophysiology Data Integration.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                            Open Source Analysis Tools
                        </h2>
                        <div className="card p-6 space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Essential Python toolkits for neural signal processing and parameterization.
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://fooof-tools.github.io/fooof/" target="_blank" className="block font-bold hover:text-neuro-accent">specparam (formerly FOOOF)</a>
                                    <span className="text-xs text-muted-foreground">Fitting Oscillations & One-Over-F. Parametrizing neural power spectra.</span>
                                </li>
                                <li>
                                    <a href="https://neurodsp-tools.github.io/neurodsp/" target="_blank" className="block font-bold hover:text-neuro-accent">NeuroDSP</a>
                                    <span className="text-xs text-muted-foreground">Digital signal processing for neural time series. Filtering, spectral analysis, and simulation.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4 flex items-center gap-2">
                            Developer Meetings
                        </h2>
                        <div className="card p-6 space-y-4">
                            <p className="text-sm text-muted-foreground">
                                Join the contributors building the next generation of open neurotech tools.
                            </p>
                            <ul className="space-y-3">
                                <li>
                                    <a href="https://github.com/neurotechx/eeg-expy" target="_blank" className="block font-bold hover:text-neuro-accent">EEG-ExPy</a>
                                    <span className="text-xs text-muted-foreground">Weekly developer meeting. Python EEG experiments.</span>
                                </li>
                                <li>
                                    <a href="https://github.com/NeuroTechX/moabb" target="_blank" className="block font-bold hover:text-neuro-accent">MOABB</a>
                                    <span className="text-xs text-muted-foreground">Weekly developer meeting. Mother of All BCI Benchmarks.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Gold Standard Education</h2>
                        <div className="card p-6 border-2 border-neuro-accent/20 bg-neuro-accent/5">
                            <a href="https://academy.neuromatch.io/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Neuromatch Academy <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                The gold standard for online computational neuroscience and deep learning education. Intensive, community-driven, and open.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Computational Neuroscience</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Deep Learning</span>
                            </div>
                        </div>

                        <div className="card p-6 border-2 border-neuro-accent/20 bg-neuro-accent/5 mt-6">
                            <a href="https://github.com/neurotech-berkeley/neurotech-course" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                NeuroTech Course (Berkeley) <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                The original open-source neurotechnology curriculum. A comprehensive survey of biosignals, hardware, and labs from UC Berkeley.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">University Curriculum</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Labs & Hardware</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Foundational Skills & Workshops</h2>
                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mb-6">
                            <a href="https://brainhack.org/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Brainhack Global <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Collaborative workshops for open brain science. A unique format that combines education, hackathons, and unconferences.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Open Science</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Global Events</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30">
                            <a href="https://software-carpentry.org/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Software Carpentry <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Teaching essential lab skills for research computing. The foundational &quot;missing semester&quot; of coding skills for scientists.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Git & Shell</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Python/R</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mt-6">
                            <a href="https://missing.csail.mit.edu/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                The Missing Semester (MIT) <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                The Missing Semester of Your Computer Science Education. Master the command line, use a powerful text editor, use fancy features of version control systems, and much more!
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Shell</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Vim/Git</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Security</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mt-6">
                            <a href="https://cuttingeeg.org/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                CuttingEEG <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Deep dive into MEEG methodology. Association promoting cutting-edge methods for EEG and MEG research through conferences and hands-on workshops.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Advanced Methodology</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Signal Processing</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mt-6">
                            <a href="https://lucklab.ucdavis.edu/blog/category/EEG%2FERP" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Luck Lab (ERP Info) <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                The gold standard for Event-Related Potential (ERP) methodology. Best practices for experimental design and analysis from Prof. Steve Luck.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">ERPs</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Experimental Design</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mt-6">
                            <a href="https://direct.mit.edu/books/monograph/4013/Analyzing-Neural-Time-Series-DataTheory-and" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Analyzing Neural Time Series Data <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                The essential guide to spectral analysis and time-frequency dynamics. Mike X Cohen&apos;s definitive textbook on analyzing neural data.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Time-Frequency</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Spectral Analysis</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mt-6">
                            <a href="https://pursue.richmond.edu/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                PURSUE <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Preparing Undergraduates for Research in STEM Using Electrophysiology. Open teaching materials, datasets, and labs for semester-long courses.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Undergraduate Research</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">Open Courseware</span>
                            </div>
                        </div>

                        <div className="card p-6 border-l-4 border-neuro-accent bg-muted/30 mt-6">
                            <a href="https://www.s-ccs.de/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Stuttgart Computational Cognitive Science (S-CCS) <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Understanding human behavior and brain activity under realistic conditions. Advancing MEEG, Eye-Tracking, and VR methods with open tools like Unfold.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-background px-2 py-1 rounded border">Computational Modeling</span>
                                <span className="text-xs bg-background px-2 py-1 rounded border">VR & Eye-Tracking</span>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Interactive Learning</h2>
                        <div className="card p-6 border-l-4 border-neuro-accent">
                            <a href="https://eegedu.com/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                EEGEdu <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                An interactive brain playground in your browser. Learn EEG basics with Muse devices without installing software.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-muted px-2 py-1 rounded">Muse</span>
                                <span className="text-xs bg-muted px-2 py-1 rounded">Browser-Based</span>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Hardware & Student Kits</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">OpenBCI</h3>
                                <p className="text-sm text-foreground/80 mb-4 h-10">
                                    The open-source gold standard for BCI research and education.
                                </p>
                                <a href="https://shop.openbci.com/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Visit Store <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">Backyard Brains</h3>
                                <p className="text-sm text-foreground/80 mb-4 h-10">
                                    &quot;Neuroscience for Everyone.&quot; Affordable SpikerBoxes for classrooms.
                                </p>
                                <a href="https://backyardbrains.com/products/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    View Kits <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">PiEEG</h3>
                                <p className="text-sm text-foreground/80 mb-4 h-10">
                                    Raspberry Pi shields for reading EEG, EMG, ECG, and more.
                                </p>
                                <a href="https://pieeg.com/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Learn More <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">Muse (InteraXon)</h3>
                                <p className="text-sm text-foreground/80 mb-4 h-10">
                                    Consumer-grade EEG headbands widely used for accessible research.
                                </p>
                                <a href="https://choosemuse.com/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Shop Muse <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Open Hardware & DIY</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">FreeEEG32 / 128</h3>
                                <p className="text-sm text-foreground/80 mb-4 h-10">
                                    Manufacture your own high-channel EEG kits. (GitHub)
                                </p>
                                <a href="https://github.com/neuroidss/FreeEEG32-beta" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    View Source <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">OpenEIT (Spectra)</h3>
                                <p className="text-sm text-foreground/80 mb-4 h-10">
                                    Mind&apos;s Eye Biomedical. Open-source Earnings Impedance Tomography.
                                </p>
                                <a href="https://ktt.OPENEIT.github.io/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    View Project <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background md:col-span-2">
                                <h3 className="font-bold text-lg mb-2">Open Science Hardware Communities</h3>
                                <div className="flex flex-wrap gap-4 text-sm">
                                    <a href="https://openhardware.science/" target="_blank" className="flex items-center gap-1 hover:text-neuro-accent">
                                        <ExternalLink className="w-3 h-3" /> GOSH
                                    </a>
                                    <span className="text-muted-foreground">|</span>
                                    <a href="https://librehub.github.io/" target="_blank" className="flex items-center gap-1 hover:text-neuro-accent">
                                        <ExternalLink className="w-3 h-3" /> LibreHub
                                    </a>
                                    <span className="text-muted-foreground">|</span>
                                    <a href="https://open-neuroscience.com/" target="_blank" className="flex items-center gap-1 hover:text-neuro-accent">
                                        <ExternalLink className="w-3 h-3" /> Open Neuroscience
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Frontier Tech & Community Science</h2>
                        <div className="grid md:grid-cols-1 gap-6">
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">MedARC (Sophont)</h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    Open multimodal medical AI. A community science research collective building foundational models for medicine.
                                </p>
                                <a href="https://medarc.ai/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Join Collective <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">Biopunk Lab</h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    A community lab for citizen science and DIY biology.
                                </p>
                                <a href="https://biopunklab.com/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Visit Lab <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">OpenFlexure</h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    A 3D-printable microscope for open science.
                                </p>
                                <a href="https://openflexure.org/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Print It <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">Mind in Vitro</h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    NSF Expedition: Computing with living neurons.
                                </p>
                                <a href="https://mindinvitro.illinois.edu/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Explore Research <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Professional Development</h2>
                        <div className="grid md:grid-cols-1 gap-6">
                            {/* Summer 2026 Events */}
                            <div className="card p-6 bg-background border-2 border-neuro-accent/20">
                                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-neuro-accent animate-pulse"></span>
                                    Major Summer 2026 Events
                                </h3>
                                <div className="space-y-4">
                                    <div className="pb-3 border-b border-border/50">
                                        <a href="https://humanbrainmapping.org" target="_blank" className="font-bold hover:text-neuro-accent flex items-center gap-1">
                                            OHBM 2026 & Brainhack <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <div className="flex justify-between text-xs mt-1">
                                            <span className="text-foreground/80">Organization for Human Brain Mapping</span>
                                            <span className="font-mono text-muted-foreground">June 14-18 • Bordeaux, France</span>
                                        </div>
                                    </div>

                                    <div className="pb-3 border-b border-border/50">
                                        <a href="https://fens.org/meetings/fens-forum/fens-forum-2026" target="_blank" className="font-bold hover:text-neuro-accent flex items-center gap-1">
                                            FENS Forum 2026 <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <div className="flex justify-between text-xs mt-1">
                                            <span className="text-foreground/80">Federation of European Neuroscience Societies</span>
                                            <span className="font-mono text-muted-foreground">July 6-10 • Barcelona, Spain</span>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="https://neuromatch.io/academy/" target="_blank" className="font-bold hover:text-neuro-accent flex items-center gap-1">
                                            Neuromatch Academy 2026 <ExternalLink className="w-3 h-3" />
                                        </a>
                                        <div className="flex justify-between text-xs mt-1">
                                            <span className="text-foreground/80">Computational Neuroscience & Deep Learning</span>
                                            <span className="font-mono text-muted-foreground">July 6-24 • Online</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-6 bg-background border-neuro-accent/30">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-neuro-accent animate-pulse"></span>
                                    BCI & Neurotechnology Spring School 2026
                                </h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    <strong>April 27 – May 6, 2026</strong>. The largest online BCI education event. 140+ hours of lectures, hackathons, and certification for free. Organized by g.tec.
                                </p>
                                <a href="https://www.gtec.at/spring-school-2026/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    Register for Free <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">Queen&apos;s University</h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    Neurotech Micro-credential Program. A grant-funded partnership with NeuroTechX to deliver hands-on skills in imaging, recording, and ethics.
                                </p>
                                <a href="https://neurotechmicrocreds.com/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    View Program <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-4">Modern Data Science Stack</h3>

                                <div className="mb-6 pb-4 border-b border-border/50">
                                    <span className="text-xs font-bold uppercase text-muted-foreground mb-3 block tracking-wider">The Python Neuro-ML Ecosystem</span>
                                    <div className="space-y-3">
                                        <div>
                                            <a href="https://scikit-learn.org/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                                scikit-learn <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <p className="text-xs text-muted-foreground">The foundation of machine learning in Python.</p>
                                        </div>
                                        <div className="pl-3 border-l-2 border-border ml-1">
                                            <a href="https://nilearn.github.io/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                                Nilearn <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <p className="text-xs text-muted-foreground">Statistical learning for neuroimaging (built on scikit-learn).</p>
                                        </div>
                                        <div className="pl-3 border-l-2 border-border ml-1">
                                            <a href="https://github.com/NeuroTechX/moabb" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                                MOABB <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                            <p className="text-xs text-muted-foreground">
                                                The Mother of All BCI Benchmarks.
                                                <br />
                                                <span className="opacity-75">PI: <a href="https://sylvchev.github.io" target="_blank" className="hover:text-neuro-accent underline">Sylvain Chevallier</a></span>
                                            </p>
                                            <a href="https://iopscience.iop.org/article/10.1088/1741-2552/addf80" target="_blank" className="text-[10px] text-muted-foreground hover:text-neuro-accent hover:underline block mt-1 flex items-center gap-1">
                                                📄 Read: Learning from small datasets (BCI Meeting 2023 Workshop) <ExternalLink className="w-2 h-2 inline" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <a href="https://probabl.ai" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                            probabl.ai <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <p className="text-xs text-muted-foreground">Professional scikit-learn certification & maintenance.</p>
                                    </div>

                                    <div>
                                        <a href="https://huggingface.co/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                            Hugging Face <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <p className="text-xs text-muted-foreground mb-2">The AI community building the future. Models, datasets, and spaces.</p>
                                        <div className="pl-3 border-l-2 border-border ml-1">
                                            <span className="text-xs font-bold text-muted-foreground block mb-1">Notable Models:</span>
                                            <a href="https://huggingface.co/datasets/pscotti/mindeyev2" target="_blank" className="text-xs font-bold hover:text-neuro-accent flex items-center gap-1">
                                                MedARC MindEye 2 <ExternalLink className="w-2 h-2" />
                                            </a>
                                            <p className="text-[10px] text-muted-foreground">State-of-the-art fMRI-to-image reconstruction (1hr training).</p>
                                        </div>
                                    </div>

                                    <div>
                                        <a href="https://www.pymc.io/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                            PyMC <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <p className="text-xs text-muted-foreground">Probabilistic programming for Bayesian modeling.</p>
                                    </div>

                                    <div>
                                        <a href="https://www.codabench.org/" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1 group">
                                            Codabench <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <p className="text-xs text-muted-foreground">Reproducible benchmarks and challenges. The next-generation platform for open science competitions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold mb-4">Google Summer of Code (GSoC)</h2>
                        <div className="grid md:grid-cols-1 gap-6">
                            <div className="card p-6 bg-background border-neuro-accent/20">
                                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Current Call (2026)
                                </h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    INCF is calling for project ideas and mentors for GSoC 2026. Join the global open-source development initiative.
                                </p>
                                <a href="https://www.incf.org/blog/call-project-ideas-and-mentors-gsoc-2026" target="_blank" className="text-neuro-accent hover:underline font-bold inline-flex items-center gap-1">
                                    View Call for Proposals <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div className="card p-6 bg-background">
                                <h3 className="font-bold text-lg mb-2">Past Highlights</h3>
                                <p className="text-sm text-foreground/80 mb-4">
                                    NeuroTechX members have a strong history of contribution, including the notable project by <strong>John Griffith & Morgan Hough</strong>.
                                </p>
                                <span className="text-muted-foreground text-sm italic">
                                    Archives available via INCF
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Community & Media Partners */}
            <div className="mt-16 mb-16">
                <h2 className="text-2xl font-serif font-bold mb-6">Partners & Research Hubs</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="card p-6 border-l-4 border-neuro-accent flex flex-col justify-between">
                        <div>
                            <a href="https://braininstitute.ca/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                Ontario Brain Institute <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Accelerating neuroscience discovery and innovation. Home to the <strong>Brain-CODE</strong> open data platform and neurotech entrepreneurship programs.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">Research Hub</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Open Data</span>
                        </div>
                    </div>
                    <div className="card p-6 border-l-4 border-neuro-accent flex flex-col justify-between">
                        <div>
                            <a href="https://www.bciguys.com/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                The BCI Guys <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                Entertaining and educational videos on Brain-Computer Interfaces. The world&apos;s leading BCI media platform.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">Media</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Education</span>
                        </div>
                    </div>
                    <div className="card p-6 border-l-4 border-neuro-accent flex flex-col justify-between">
                        <div>
                            <a href="https://www.neurosociety.center/" target="_blank" className="text-xl font-bold hover:text-neuro-accent mb-2 block flex items-center gap-2">
                                The NeuroSociety <ExternalLink className="w-4 h-4" />
                            </a>
                            <p className="text-sm text-foreground/80 mb-4">
                                A global non-profit community at the intersection of neuroscience, technology, and society.
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <span className="text-xs bg-muted px-2 py-1 rounded">Community</span>
                            <span className="text-xs bg-muted px-2 py-1 rounded">Non-Profit</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Resources Section */}
            <div>
                <h2 className="text-2xl font-serif font-bold mb-6">Video Resources</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <a href="https://www.youtube.com/playlist?list=PLQ-_L3_D0_T1y8QJ_Qk4k4Q6_Q1_" target="_blank" className="card p-6 block hover:border-neuro-accent transition-colors group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-neuro-accent">NeuroTech 101</h3>
                        <p className="text-sm text-muted-foreground">Foundational concepts and tutorials.</p>
                    </a>
                    <Link href="/education/webinars" className="card p-6 block hover:border-neuro-accent transition-colors group">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-neuro-accent">Webinar Series</h3>
                        <p className="text-sm text-muted-foreground">Deep dives with industry experts.</p>
                    </Link>
                    <a href="https://www.youtube.com/neurotechx" target="_blank" className="card p-6 block hover:border-neuro-accent transition-colors group bg-muted/50">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-neuro-accent">Browse All Videos</h3>
                        <p className="text-sm text-muted-foreground">Explore our full library on YouTube.</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
