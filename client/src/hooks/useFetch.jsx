import { useState, useEffect } from "react"
import axios from 'axios'


const useFetch = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
}

useEffect(() => {
    const fetchData = async () => {
        setLoading(true)

        try {
            const res = await axios
        } catch (error) {
            setError(error)
        }
    }
}, [])