import React, { useState } from 'react'
import { useEffect } from 'react'

function AppHook() {
const [GetUser, setGetUser] = useState(JSON.parse(localStorage.getItem('user')))
const [isUser, setIsUser] = useState('')
const [isAdmin, setIsAdmin] = useState('')
useEffect(() => {
    if(GetUser !== null){
        if(GetUser.role === "user"){
            setIsUser(true)
            setIsAdmin(false)
        }else if(GetUser.role === "admin"){
            setIsUser(false)
            setIsAdmin(true)
        }
    }else{
        setIsUser(false)
        setIsAdmin(false)
    }
}, [])

return [isUser,isAdmin]
}

export default AppHook