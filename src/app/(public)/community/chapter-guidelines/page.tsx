import { DockitRenderer } from '@/components/DockitRenderer';
import { getDockitContent } from '@/lib/dockit';
import { notFound } from 'next/navigation';

async function getPageData() {
  const content = getDockitContent('chapter-guidelines');
  if (!content) {
    return null;
  }
  return content;
}

export default async function Page() {
  const content = await getPageData();
  if (!content) {
    notFound();
  }
  return <DockitRenderer content={content} />;
}
