import { getDockitContent } from '@/lib/dockit';
import { DockitRenderer } from '@/components/DockitRenderer';
import { notFound } from 'next/navigation';

export default function CommunityGrowthPage() {
    const content = getDockitContent('community-growth');

    if (!content) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <DockitRenderer content={content} />
        </div>
    );
}
