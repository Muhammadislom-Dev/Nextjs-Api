import { useEffect, useState } from "react"
import axios from "axios"

function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios
      .get(`https://api.oxo.uz/api/v1/forms/get-form/`)
      .then(res => {
        setData(res.data)
        setIsLoading(false)
        console.log(data);
      })
      .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }


  return(
    <div>
        Hello world
    </div>
  )
}
export default Home