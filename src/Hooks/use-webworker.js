import { useEffect, useRef, useState } from 'react'
import {useDispatch} from "react-redux";
import {airdropTimerSeconds} from "../Redux/actions";

const workerHandler = (fn) => {
    onmessage = (event) => {
        postMessage(fn(event.data))
    }
}

export const useWebworker = (fn) => {
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)

    const workerRef = useRef(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const worker = new Worker(
            URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
        )
        workerRef.current = worker
        worker.onmessage = (event) => setResult(event.data)
        worker.onerror = (error) => setError(error.message)

        let time = setInterval(() => {
            dispatch(airdropTimerSeconds())
        }, 1000)

        return () => clearInterval(time)
        // return () => {
        //     worker.terminate()
        // }
    }, [fn])

    return {
        result,
        error,
        run: (value) => workerRef.current.postMessage(value),
    }
}

export const useDisposableWebworker = (fn) => {
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)

    const run = (value) => {
        const worker = new Worker(
            URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`]))
        )
        worker.onmessage = (event) => {
            setResult(event.data)
            worker.terminate()
        }
        worker.onerror = (error) => {
            setError(error.message)
            worker.terminate()
        }
        worker.postMessage(value)
    }

    return {
        result,
        error,
        run,
    }
}