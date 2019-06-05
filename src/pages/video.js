import React from 'react'

import Layout from '../components/Layout';
import Loading from '../components/Loading';

export default() => {
    const [isLoading,
        setIsLoading] = React.useState(true);
    const [videos,
        setVideos] = React.useState([]);
    React.useEffect(() => {
        const URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GATSBY_YOUTUBE_TOKEN}&channelId=${process.env.GATSBY_CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`;
        const fetchVideos = async(url) => {
            const res = await fetch(url);
            if(res.status === 200) {
                const parse = await res.json();
                const videoList = parse.items;
                videoList.pop();
                setVideos(videoList.filter(video => video.id.kind.includes('video')));
                setIsLoading(false);
            }
        }
        fetchVideos(URL);

    }, []);
    const meta = {
        title: 'Videos | Praveen Bisht',
        description: `I've been posting a lot o videos some tutorials some timelapse for quite a while now. So here's all the videos I've made so far`,
        keywords: 'youtube, video, codepen, programming,html,css,javascript,react',
        imgUrl: {
            google: '',
            facebook: '',
            twitter: ''
        }
    }
    return <Layout meta={meta}>
        <div className="container">
            <h4 className="page-heading">Explore Videos</h4>
            {isLoading
                ? <Loading width={100} height={'450px'}/>
                : <div id="videos">
                    {videos.map(video => (
                        <div className="video" key={video.id.videoId}>
                            <a
                                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                backgroundImage: `url(${video.snippet.thumbnails.high.url})`
                            }}>a</a>
                        </div>
                    ))
}
                </div>
}
        </div>
    </Layout>
}
