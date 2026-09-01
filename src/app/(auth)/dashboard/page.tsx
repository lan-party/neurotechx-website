'use client';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Cpu, Globe, Video } from 'lucide-react';
import styles from './page.module.css';
import SignupButtons from '@/components/SignupButtons';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col min-h-screen">
      
      hello, {session?.user?.name}!
     
    </div>
  );
}
