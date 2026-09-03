import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Cpu, Globe, Video } from 'lucide-react';
import styles from './page.module.css';
import SignupButtons from '@/components/SignupButtons';
import { useSession } from 'next-auth/react';
import SlackButton from '@/components/SlackButton';
import SignOutButton from '@/components/SignOutButton';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex flex-col min-h-screen gap-4 p-5">
      
      <div>
        <p>Welcome back, {session?.user?.name}!</p>
      </div>
      

      <div>
        <SlackButton />
      </div>

      <div>  
        <SignOutButton />
      </div>
     
    </div>
  );
}
