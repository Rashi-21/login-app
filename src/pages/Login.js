import React, {useEffect} from 'react'

function Login() {
    let API = 'https://run.mocky.io/v3/30b48a92-fd6c-4e92-bbb1-4390aa7c7124'

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchApiData(API)
    }, [])

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

export default Login
