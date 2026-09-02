import { MDXRemote } from 'next-mdx-remote/rsc';
import { DockitContent } from '@/lib/dockit';

interface DockitRendererProps {
    content: DockitContent;
}

export function DockitRenderer({ content }: DockitRendererProps) {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1>{content.frontmatter.title}</h1>

            {content.frontmatter.sourceUrl && (
                <p className="text-sm text-gray-500 mb-8">
                    Source:{' '}
                    <a
                        href={content.frontmatter.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        NTX-dockit
                    </a>
                </p>
            )}

            <MDXRemote source={content.content} />
        </div>
    );
}