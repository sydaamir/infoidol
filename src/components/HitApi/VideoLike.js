import React, {useState} from 'react';
import axios from 'axios';

const VideoLike = () => {
    const [likeVideoData, setLikeVideoData] = useState({
        video_id: '4',
        user_id:'1',
        device_id:'xfvgfgvfgf',
        emoji_code: 'fgfhh'
    });

    const LikeVideo = (e) => {
        try{
            e.preventDefault();
            const headers = {
                'Content_type': 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/video_like', likeVideoData, {
                headers: headers
            }).then(res =>{
                console.log('response', res.data);
            })
        } catch (error){
            console.log('error',error)
        }
    }
    return(
        <div>
            <button onClick={LikeVideo}>Like Video</button>
        </div>
    )
}
export default VideoLike

