import React,{useState} from 'react';
import axios from 'axios';

const VideoCategory = () => {
    const [VideoCategoryData,setVideoCategoryData] = useState({
        user_id: '1',
        device_id: 'xfvgfgvfgf',
    });
    const VideoCategories =(e) =>{
        try{
            e.preventDefault();
            const headers={
                'content_type': 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/video_categories',VideoCategoryData,
            {
                headers: headers
            }).then(res=> {
                console.log('response',res.data);
            })
        }
        catch(error){
            console.log('error',error);
        }
    }
    return (
        <div>
            <button onClick={VideoCategories}>Video Category </button>
        </div>
    )
}

export default VideoCategory
