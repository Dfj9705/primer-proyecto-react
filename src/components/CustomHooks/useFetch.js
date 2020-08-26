import {useState, useEffect} from "react"

const useFetch= (initialState, url) =>{
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const getData = () =>{
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(response => {
            setData(response)
            setLoading(false)
        })
        .catch(error =>{
            setLoading(false)
            setError(error)
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return {
        data,
        loading,
        error
    }
}

//se importa en el otro documento
//se manda a llamar como en el useCourse, se deben pasar los parametros que aqui se escribieron

export default useFetch