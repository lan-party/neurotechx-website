import React from 'react'
import styles from './Header.module.css';
import Link from 'next/link';

const DashboardHeader = () => {
  return (
    <div className={styles.headerWrapper}>
            <header className={styles.mainHeader}>
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <div className={styles.logo}>
                            <Link href="/" className={styles.logoText}>
                                <span style={{ fontWeight: 900, letterSpacing: '-0.05em' }}>NeuroTech</span><span style={{ color: 'var(--neuro-accent)' }}>X</span>
                            </Link>
                        </div>
                        
                    </div>

                    <div className={styles.rightSection}>
                        
                    </div>
                </div>
            </header>
        </div>
  )
}

export default DashboardHeader
