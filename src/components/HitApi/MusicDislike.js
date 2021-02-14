import React,{useState} from 'react';
import axios from 'axios';

const MusicDislike = () => {
    const [musicDislikeData,setmusicDislikeData]= useState({
        music_id: '4',
        user_id: '1',
        device_id: 'xfvgfgvfgf',
    })
    const MusicDislike = (e) =>{
        try{
            e.preventDefault();
            const headers={
                'content_type' : 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/music_dislike',musicDislikeData,
            {
                headers: headers
            }).then(res=>{
                console.log('response',res.data);
            })
        }
        catch(error){
            console.log('error',error);
        }
    }
    return (
        <div>
            <button onClick={MusicDislike}>Music Dislike</button>
        </div>
    )
}

export default MusicDislike
