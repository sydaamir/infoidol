import React,{useState} from 'react';
import axios from 'axios';
import UploadMaadi from './UploadMaadi';

const UploadMusic = () => {

    const [UploadMusicData,setUploadMusicData]=useState({
        music_file: '',
        latitude: '12.8090768',
        longitude: '13.8907809',
        device_id: 'xfvgfgvfgf',
        user_id: '1',
        cat_id: '3',
        title: 'helllooooo',
    });
    const handleChange =(e) =>{
        console.log(e.target.files[0].name);
        // setUploadMusicData({...UploadMusicData,
        //     [UploadMusicData.music_file]: e.target.files[0].name})
        UploadMusicData.music_file = e.target.files[0];
        console.log('music state', UploadMusicData.music_file);
        console.log('state', UploadMusicData)
    }
    const MusicUpload = (e) =>{
        try{
            e.preventDefault();
            const headers={
                'content_type' : 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/upload_music',UploadMusicData,
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
            <form onSubmit={MusicUpload} method="post">
                <input type="file" id="myFile" name="filename" onChange={(e)=>handleChange(e)}/>
                <button>Upload Music</button>

            </form>
        </div>
    )
}

export default UploadMusic
