import { FileText, Shield, ExternalLink } from 'lucide-react';

export default function TransparencyPage() {
    return (
        <div className="container py-12 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold mb-6">Transparency & Governance</h1>
            <p className="text-xl text-muted-foreground mb-12">
                Building trust through radical openness. We are committed to the highest standards of transparency in our operations, finances, and research practices.
            </p>

            <div className="grid gap-12">
                {/* Legal Entity Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Shield className="w-6 h-6" />
                        Legal Entity
                    </h2>
                    <div className="card p-6 bg-muted/50">
                        <dl className="grid md:grid-cols-2 gap-6">
                            <div>
                                <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Legal Name</dt>
                                <dd className="text-lg font-bold">Société BCI Montréal</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Operating Name</dt>
                                <dd className="text-lg font-bold">NeuroTechX</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Jurisdiction</dt>
                                <dd className="text-lg">Quebec, Canada</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">Status</dt>
                                <dd className="text-lg">Non-Profit Organization (NPO)</dd>
                            </div>
                        </dl>
                    </div>
                </section>

                {/* Financials Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <FileText className="w-6 h-6" />
                        Financial Reports
                    </h2>
                    <p className="mb-6 text-muted-foreground">
                        As a Canadian Non-Profit Organization, we file annual returns with both federal and provincial authorities. We make these documents publicly available to demonstrate our commitment to financial accountability.
                    </p>

                    <div className="space-y-4">
                        <div className="card p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                            <div>
                                <h3 className="font-bold text-lg">2026 Annual Financial Statements</h3>
                                <p className="text-sm text-muted-foreground">Includes Statement of Operations and Changes in Net Assets.</p>
                            </div>
                            <button className="btn btn-outline" disabled>Coming Soon</button>
                        </div>

                        <div className="card p-6 flex flex-col md:flex-row justify-between items-center gap-4 opacity-75">
                            <div>
                                <h3 className="font-bold text-lg">Federal Return (T2 / T1044)</h3>
                                <p className="text-sm text-muted-foreground">Canada Revenue Agency (CRA) filing.</p>
                            </div>
                            <span className="text-xs uppercase bg-muted px-2 py-1 rounded">Pending</span>
                        </div>

                        <div className="card p-6 flex flex-col md:flex-row justify-between items-center gap-4 opacity-75">
                            <div>
                                <h3 className="font-bold text-lg">Provincial Return (CO-17.SP)</h3>
                                <p className="text-sm text-muted-foreground">Revenu Québec filing.</p>
                            </div>
                            <span className="text-xs uppercase bg-muted px-2 py-1 rounded">Pending</span>
                        </div>
                    </div>
                </section>

                {/* Policies Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-6">Open Science Policies</h2>
                    <div className="card p-8 border-neuro-accent/20">
                        <h3 className="text-xl font-bold mb-4">Adoption of TOP Guidelines</h3>
                        <p className="mb-4">
                            We align with the <strong>Center for Open Science (COS)</strong> Transparency and Openness Promotion (TOP) Guidelines. All community research projects are encouraged to:
                        </p>
                        <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                            <li>Pre-register study protocols.</li>
                            <li>Publish data to open repositories (e.g., OpenNeuro, DANDI).</li>
                            <li>Use open-source software and transparent analysis pipelines.</li>
                        </ul>
                        <a href="https://www.cos.io/initiatives/top-guidelines" target="_blank" className="text-neuro-accent hover:underline inline-flex items-center gap-1">
                            Read the TOP Guidelines <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
