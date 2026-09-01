import { fetchFeeds } from '@/lib/rss';
import NewsRiver from '@/components/NewsRiver';
import Sidebar from '@/components/Sidebar';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
    const newsItems = await fetchFeeds();

    return (
        <div className="container py-8 md:py-12">
            <section className="mb-12 border-b pb-8">
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight my-4">
                    NeuroTechX <span className="text-muted-foreground font-light text-3xl">Reports</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                    Industry intelligence, newsletters, and the pulse of the neurotechnology ecosystem.
                </p>
            </section>

            <div className="grid-river">
                <main>
                    <NewsRiver items={newsItems} />
                </main>

                <Sidebar />
            </div>
        </div>
    );
}
