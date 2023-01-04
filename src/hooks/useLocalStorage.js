import {useEffect, useState} from 'react';

export default function useLocalStorage(key, defualtValue){
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)
        if(typeof defualtValue === 'function'){
            return defualtValue()
        } else {
            return defualtValue
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key,value])

    return [value, setValue]
}