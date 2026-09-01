import { getPlaylistVideos, getLatestVideosFromChannels } from '@/lib/youtube';
import { Play, Calendar, ExternalLink, Building2 } from 'lucide-react';
import styles from './page.module.css';

export const revalidate = 86400; // Revalidate every 24 hours

const WEBINAR_PLAYLIST_ID = 'PL7yYIG1eq9bTbK-W66TCl7t8wTXwelSNz';
const COMPANY_CHANNEL_IDS = [
    'UCsMcOzuljcqa3AXmv1d9iMQ', // g.tec
    'UC0H_4GYxvbgPeYyJJsvFDnA', // Interaxon (Muse)
    'UCEbrTekAH9f45zDh8CCS_2A', // Neuroelectrics
    'UC_RC53Bee3aPiABSMPnvdHA', // ANT Neuro
    'UCnXRXgx8aMDzdgoSKF-Pyhw', // Magstim EGI
    'UCXifD9arenz_20VlzLDHbwA', // NIRx
    'UC6K8TjErLGrO5wir6NiFn_Q', // Blackrock Neurotech
    'UCGtpku8Bixc3A2aUDxnjYWQ', // Kernel
    'UCiapTHFahMm2PZvhVELJlPA', // Neuralink
    'UCeX5-jzyyt8LkbT1U3GK1wA', // Synchron
    'UCMnLqRishpp6X2MatJ3W_Hg', // OpenBCI
    'UCv9ckwPCVEYeQuGiF8qdlQA', // Bitbrain
    'UCu_ATpgyp5EEgxoBNb1iC9Q', // Wearable Sensing
    'UClXO1ZPnR_x2DzSnDBgjJ4w', // Emotiv
    'UCBds3B6R3zHUKlDtqXnCABA', // Neurable
    'UCXts-j3mtasjgvPl__2P6zA', // Paradromics
    'UCnPqWoBCGyRL80bTOCZN5AQ', // Precision Neuroscience
    'UCKaffupDA8KKrDE0rd668Xw',
    'UCWao4UCMenzvHOHdx_KImBg',
    'UCVR80bpCIQyWgyGa20OLmvw',
    'UCLt4d8cACHzrVvAz9gtaARA',
    'UCkVxeTv9Q3Hw2I3Us3U8_Bg',
    'UCAod4c7tYIiDY1o_F2sOCiw',
    'UCMIYoORlCnvo9bahMCPF0PQ'
];

export default async function WebinarsPage() {
    const [webinarVideos, companyVideos] = await Promise.all([
        getPlaylistVideos(WEBINAR_PLAYLIST_ID),
        getLatestVideosFromChannels(COMPANY_CHANNEL_IDS)
    ]);

    return (
        <div className="container py-12">
            <div className={styles.header}>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    Industry <span className="text-neuro-accent">Webinars</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Technical workshops and deep dives featuring experts from the leading neurotechnology companies worldwide.
                </p>
            </div>

            <section className="mb-16">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b pb-2">
                    <Play className="text-neuro-accent" size={24} /> NeuroTechX Webinar Series
                </h2>
                <div className={styles.grid}>
                    {webinarVideos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 border-b pb-2">
                    <Building2 className="text-neuro-accent" size={24} /> Latest from Industry Partners
                </h2>
                <div className={styles.grid}>
                    {companyVideos.map((video) => (
                        <VideoCard key={`${video.id}-${video.channelTitle}`} video={video} />
                    ))}
                </div>
            </section>

            {webinarVideos.length === 0 && companyVideos.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-muted-foreground">No videos found. Please check back later.</p>
                </div>
            )}
        </div>
    );
}

function VideoCard({ video }: { video: any }) {
    return (
        <a 
            href={`https://www.youtube.com/watch?v=${video.id}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.card}
        >
            <div className={styles.thumbnailContainer}>
                <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className={styles.thumbnail}
                />
                <div className={styles.playOverlay}>
                    <div className="bg-neuro-accent p-4 rounded-full text-white shadow-xl">
                        <Play fill="white" size={24} />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className="flex justify-between items-start mb-2">
                    <div className={styles.date}>
                        <Calendar size={12} className="inline mr-1" />
                        {new Date(video.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </div>
                    {video.channelTitle && (
                        <div className="text-[10px] bg-muted px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-muted-foreground">
                            {video.channelTitle}
                        </div>
                    )}
                </div>
                <h3 className={styles.title}>{video.title}</h3>
                <p className={styles.description}>{video.description}</p>
                <div className={styles.footer}>
                    Watch Video <ExternalLink size={14} />
                </div>
            </div>
        </a>
    );
}
