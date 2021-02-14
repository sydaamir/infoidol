import React,{useState} from 'react';
import axios from 'axios';

const MusicCategory = () => {
    const[musicCategoryData,setmusicCategoryData] = useState({
        user_id: '1',
        device_id: 'xfvgfgvfgf',
    });
    const MusicCategories= (e) =>{
        try{
            e.preventDefault();
                const headers={
                    'content_type' : 'application/json'
                }
                axios.post('https://infoidol.com/admin/WebApi/music_categories',musicCategoryData,{
                    headers : headers
                }).then(res =>{
                    console.log('response',res.data);
                })
            }
            catch(error){
                console.log('error',error);
            }
        }
    return (
        <div>
            <button onClick={MusicCategories}>Music Categories</button>
        </div>
    )
}

export default MusicCategory
