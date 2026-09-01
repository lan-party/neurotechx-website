import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Cpu, Globe, Video } from 'lucide-react';
import styles from './page.module.css';
import SignupButtons from '@/components/SignupButtons';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      <div className='text-center mt-5'>
        <p>Sign in using one of the options below to get started in the NeuroTechX community.</p>
        <SignupButtons />
      </div>
      
     
    </div>
  );
}
