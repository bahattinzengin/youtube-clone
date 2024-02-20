import { useContext } from 'react'
import SideBar from '../components/SideBar'
import { YoutubeContext } from '../context/youtubeContext';
import Loading from './../components/Loading';
import VideoCard from '../components/VideoCard';

const Feed = () => {

  const { videos } = useContext(YoutubeContext);


  // console.log(videos);
  return (
    <div
      className='flex gap-3 '>
      <SideBar />
      <div className='videos'>
        {!videos  // true
          ? (<Loading type={"video"}  />)
          :
          (videos.map((item) =>
            item.type === "video" && <VideoCard key={item.videoId} video={item} />))}
      </div>


    </div>
  )
}

export default Feed