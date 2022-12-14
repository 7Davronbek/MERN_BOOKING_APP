import { useState, useEffect } from "react"
import axios from 'axios'

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

const useFetch = url => {
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(error)
            }
        }

        fetchData()
    }, [url])

    const reFetch = async () => {
        setLoading(true)

        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(error)
        }

        return { data, loading, error, reFetch }
    }
}
