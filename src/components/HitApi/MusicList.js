import React,{useState} from 'react';
import axios from 'axios';

const MusicList = () => {
    const [musicListData,setmusicListData] = useState({
        device_id: 'xfvgfgvfgf',
        user_id: '1',
    });
    const musicListBlock =(e) =>{
        try{
            e.preventDefault();
            const headers={
                'content_type' : 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/music_list',musicListData,
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
            <button onClick={musicListBlock}>Music List</button>
        </div>
    )
}

export default MusicList
