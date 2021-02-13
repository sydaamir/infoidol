import axios from 'axios';
import React,{useState} from 'react'

const VideoDislike = () => {
    const [DisLikeVideoData,setDisLikeVideoData] = useState({
        video_id: '4',
        user_id: '1',
        device_id: 'xfvgfgvfgf',
    });

    const DisLikeVideo = (e) =>{
        try{
            e.preventDefault();
            const headers={
                'content_type': 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/video_dislike', DisLikeVideoData,{
                headers: headers
            }).then(res => {
                console.log('response', res.data);
            })
        } catch(error){
            console.log('error',error);
        }
    }
    return (
        <div>
            <button onClick={DisLikeVideo}>Disliked Video</button>
        </div>
    )
}

export default VideoDislike
