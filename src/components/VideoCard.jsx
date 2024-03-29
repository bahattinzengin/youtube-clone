import millify from 'millify';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const VideoCard = ({ video, type }) => {
    // console.log(video);
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();

    // console.log(video);
    return (



        <div
        className={`cursor-pointer ${type && "row"}`}
            onClick={() => navigate(`/watch/${video.videoId}`)}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
              
            {/* resim kısmı */}
            <div


            >
                <img
                    className='rounded-lg w-full h-full object-contain'
                    src={
                        isHover && video.richThumbnail ? video.richThumbnail[0].url :
                            video.thumbnail[0].url} />
            </div>

            {/* detay alanı */}
            <div className='flex gap-4 mt-5' >
                <img
                    className='w-14 h-14 rounded-full'
                    src={video.channelThumbnail[0]?.url} alt=""
                />
                <div >
                    <h4 className={`font-bold ${type && "truncate"}`}>{video.title}</h4>
                    <p>{video?.channelTitle} </p>
                    <div className='flex gap-2'>
                        <p>{millify(video.viewCount)
                        } </p>
                        <p>{video.publishedTimeText} </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default VideoCard