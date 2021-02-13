import React, {useState, useEffect} from 'react'
import axios from 'axios'
const Login = () => {
    

    let [data, setData] = useState(null);
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        push_id: '',
        device_id: 'ajdgshag'
    })
    const handleChange = (e) => {
        setUserData({...userData,
            [e.target.name]: e.target.value
        })
    } 
    const userLogin =  (e) => {
        try {
            e.preventDefault();
            const headers = {
                'Content_type': 'application/json'
            }
            axios.post('https://infoidol.com/admin/WebApi/login', userData, {
                headers: headers
            }).then(res => {
                console.log('response',res);
                console.log('response', res.data.data.name);
                data = res.data.data;
                console.log('state data', data);

            })
            // console.log(response.data.data);
            // const stateData = await response.data.data;
            // console.log('api response', stateData);
            // setData(stateData);
            // console.log('stateData',data);

        } catch (error) {
            console.log('error',error)
        }
    }
    return (
        <div>
            <form onSubmit={userLogin}>
                <input name="username" placeholder="enter email" type="text" onChange={e => handleChange(e)} />
                <input name="password" placeholder="enter password" type="text" onChange={e => handleChange(e)} />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Login
