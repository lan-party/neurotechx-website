import { ExternalLink, Mail } from 'lucide-react';
import Image from 'next/image';

const newsletterArchive = [
    {
        year: '2024',
        editions: [
            { title: 'May 2024', url: 'https://mailchi.mp/200293c09f37/may-the-neurotech-be-with-you', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/cc0d9526-5e78-37d5-6585-847198068ddb.png' },
            { title: 'April 2024', url: 'https://mailchi.mp/663625d9706b/neurotechnology-is-blooming-with-new-advancements', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/c1d99de7-75f0-e841-ca66-c4c9866e1244.png' },
            { title: 'March 2024', url: 'https://mailchi.mp/f9dcc82ae38a/hello-neurotech-world-id0joxu371', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/e4b321a2-8207-ab6a-7b67-878b569184f2.png' },
            { title: 'February 2024', url: 'https://mailchi.mp/1a56caa46999/catch-up-with-the-neurotech-space', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/03bf5099-21a5-ad8e-fda8-c03d66b6eba9.png' },
            { title: 'January 2024', url: 'https://mailchi.mp/2036440a9add/start-the-year-with-ntx', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/f566b993-8a5f-6913-3fc9-e2b4a8bf3c4a.png' },
        ]
    },
    {
        year: '2023',
        editions: [
            { title: 'December 2023', url: 'https://mailchi.mp/a4eb073ff95a/happy-winter-holidays', image: '' },
            { title: 'November 2023', url: 'https://mailchi.mp/576b48be79d0/hello-neurotech-world-vy6n31k899', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/179def2d-3f02-0f22-5329-7832513c0391.png' },
            { title: 'October 2023', url: 'https://mailchi.mp/db815ac1d11c/trick-or-brain-treat', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/63810ae1-30ef-4021-04a5-6d8acc1eacf3.png' },
            { title: 'September 2023', url: 'https://mailchi.mp/48b019836d64/explore-the-neurotech-world', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/1fee27c1-2bf1-6832-e8cf-670a2b0b635d.png' },
            { title: 'August 2023', url: 'https://mailchi.mp/d49cdd3b241c/its-time-to-catch-up-with-neurotech-news', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/51d2e768-3360-85e8-92c1-ceaff77edfbc.png' },
            { title: 'July 2023', url: 'https://mailchi.mp/6bad776296a5/explore-the-neurotech-world', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/f7c1c0c8-95dc-81a9-c40d-8f47df1a690c.png' },
            { title: 'June 2023', url: 'https://mailchi.mp/babf97cb7b01/start-your-summer-with-neurotech', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/b912d28a-0a4a-351e-7c6f-d8edf00b642a.png' },
            { title: 'Micro-credential Special', url: 'https://mailchi.mp/315a9457b26b/enrollment-now-open-for-the-neurotech-micro-credential-program', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/a1615280-3e68-868b-53de-30128c45b8ed.png' },
            { title: 'May 2023', url: 'https://mailchi.mp/da108c2c4160/may-the-neurotech-be-with-you', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/69e7560f-a1ec-835c-1e6c-bf6e0e81a570.png' },
            { title: 'April 2023', url: 'https://mailchi.mp/39c922073c95/neurotechnology-is-blooming-with-new-advancements', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/515fa827-92a3-2ce8-7100-5f36b236d13f.png' },
            { title: 'March 2023', url: 'https://mailchi.mp/ec2c1a164922/discover-the-infinite-possibilities-of-neurotechnology', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/2cd2e932-9a45-5f8a-311f-9abad781c27a.png' },
            { title: 'February 2023', url: 'https://mailchi.mp/eace02ab2522/lets-unlock-secrets-one-element-at-a-time', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/c35b3237-30c7-71d0-61b6-320f03f95656.png' },
            { title: 'January 2023', url: 'https://mailchi.mp/fa06c76083b2/new-year-new-brain', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/95eabe0a-793b-d04b-d033-ece6fc92de37.png' },
        ]
    },
    {
        year: '2022',
        editions: [
            { title: 'December 2022', url: 'https://mailchi.mp/17a7eb4517ca/keep-your-brain-cozy-with-neurotech-news', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/c576a7aa-0993-3744-adad-838f0ca89ccd.png' },
            { title: 'November 2022', url: 'https://mailchi.mp/092e0b6da7ab/hello-neurotech-white-hat-hackers', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/b48a13c1-9034-a539-ac0f-0582440a9ee2.png' },
            { title: 'October 2022', url: 'https://mailchi.mp/7aeb1f96d071/hello-neurotech-zombies-trick-or-brain', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/72d4c4d7-9698-d552-6f5f-7be41ef5a9e6.png' },
            { title: 'September 2022', url: 'https://mailchi.mp/1cf253d0e5b3/celebrate-fall-with-neurotechx', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/d3fcdc62-09e6-83c4-6096-3743b706ae11.png' },
            { title: 'August 2022', url: 'https://mailchi.mp/bb50313f29ab/connect-to-the-world-wide-neurotech', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/87d5db11-b5be-a73d-0a37-961d10ffc9bf.png' },
            { title: 'July 2022', url: 'https://mailchi.mp/8d73410b5ebf/catch-up-with-the-neurotechs-infinity', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/f20d8c9d-9236-6815-ccdb-b7cd4c4ff9f5.png' },
            { title: 'June 2022', url: 'https://mailchi.mp/6ff0dd1ef563/start-your-summer-with-neurotech', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/fde6365d-0589-9893-eef5-8d7a90415c33.png' },
            { title: 'May 2022', url: 'https://mailchi.mp/3b48951c1b5c/may-the-neurotech-be-with-you', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/b58778de-7332-2c0b-cf71-d93f9d9942e4.png' },
            { title: 'April 2022', url: 'https://mailchi.mp/a8e1419d51c7/neurotech-is-blossoming', image: '' },
            { title: 'March 2022', url: 'https://mailchi.mp/d15af6ff6a5c/blow-your-mind-with-neurotech', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/3d89ef29-6657-a5e4-f0c3-5e9e41194a33.png' },
            { title: 'February 2022', url: 'https://mailchi.mp/248bbf405e31/explore-the-neurotech-world', image: '' },
            { title: 'January 2022', url: 'https://mailchi.mp/499dfa07c03f/happy-new-year', image: 'https://mcusercontent.com/5124b2527cf13d913a8beeea3/images/fb9f8403-b218-a30a-ec06-313b1fea98ba.png' },
        ]
    },
    {
        year: '2015 - 2021',
        editions: [
            { title: 'Holiday 2021', url: 'https://mailchi.mp/3e5caf44a4e3/our-best-wishes-for-the-holidays', image: '' },
            { title: 'December 2021', url: 'https://mailchi.mp/0dcdf45601d1/hello-neurotech-world-6rcxjd2q4n', image: '' },
            { title: 'October 2021', url: 'https://mailchi.mp/neurotechx/hello-neurotech-world-dget2iaioc', image: '' },
            { title: 'September 2021', url: 'https://mailchi.mp/neurotechx/hello-neurotech-world-bh8ttvoie9', image: '' },
            { title: 'December 2020', url: 'https://us12.campaign-archive.com/?u=5124b2527cf13d913a8beeea3&id=64bab28a04', image: '' },
            { title: 'January 2020', url: 'https://us12.campaign-archive.com/?u=5124b2527cf13d913a8beeea3&id=53d3d747fb', image: '' },
            { title: 'May 2019', url: 'http://eepurl.com/gpW8dH', image: '' },
            { title: 'November 2015 (Digest #1)', url: 'https://us12.campaign-archive.com/?u=5124b2527cf13d913a8beeea3&id=e753aad7de', image: '' },
        ]
    }
];

const DEFAULT_NEWSLETTER_IMAGE = '/images/hero-bg.png'; // Using existing asset as placeholder

export default function NewsletterArchivePage() {
    return (
        <div className="container py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl font-serif font-bold mb-6">Newsletter Archive</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A curated history of the global neurotechnology ecosystem. 
                            From technical deep dives to community highlights and industry breakthroughs.
                        </p>
                    </div>
                    <div className="bg-neuro-accent/5 p-8 rounded-2xl border border-neuro-accent/20 md:w-80">
                        <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
                            <Mail className="w-5 h-5 text-neuro-accent" />
                            Get the Digest
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Join 15,000+ subscribers receiving the best of neurotech in their inbox.
                        </p>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfZyzhVdOLU8_oQ4NylHL8EFoKLIVmryGXA4u7HDsZpkTryvg/viewform" 
                            target="_blank" 
                            className="w-full inline-flex items-center justify-center rounded-xl text-sm font-bold bg-neuro-accent text-white hover:opacity-90 transition-all h-12 px-6 shadow-lg shadow-neuro-accent/20"
                        >
                            Subscribe Now
                        </a>
                    </div>
                </div>

                <div className="space-y-20">
                    {newsletterArchive.map((section) => (
                        <div key={section.year}>
                            <div className="flex items-center gap-4 mb-10">
                                <h2 className="text-3xl font-serif font-bold">{section.year}</h2>
                                <div className="h-px bg-border flex-1"></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {section.editions.map((edition) => (
                                    <a
                                        key={edition.url}
                                        href={edition.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-neuro-accent/50 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="aspect-[16/9] relative overflow-hidden bg-muted">
                                            <img
                                                src={edition.image || DEFAULT_NEWSLETTER_IMAGE}
                                                alt={edition.title}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                                <span className="text-white text-xs font-bold flex items-center gap-1">
                                                    Read Edition <ExternalLink className="w-3 h-3" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex justify-between items-start gap-2">
                                                <h3 className="font-bold text-lg leading-tight group-hover:text-neuro-accent transition-colors">
                                                    {edition.title}
                                                </h3>
                                                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all" />
                                            </div>
                                            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                                Click to view the full newsletter on Mailchimp.
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-muted/30 rounded-3xl text-center border border-border">
                    <h2 className="text-2xl font-serif font-bold mb-4">Looking for something specific?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                        Our newsletters cover a wide range of topics, from technical tutorials to industry analysis. 
                        If you can&apos;t find what you&apos;re looking for, feel free to reach out to our community on Slack.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="/community" className="inline-flex items-center justify-center rounded-xl text-sm font-bold border border-border bg-background hover:bg-muted transition-all h-12 px-8">
                            Back to Community
                        </a>
                        <a href="/" className="inline-flex items-center justify-center rounded-xl text-sm font-bold bg-foreground text-background hover:opacity-90 transition-all h-12 px-8">
                            Return Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
