import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TokenData } from '../../redux/slices/Auth'

function NavBarHook() {
const dis = useDispatch()
const res = useSelector(state=>state.Authentication.TokenData)
const Loading = useSelector(state=>state.Authentication.Loading)
const [cart, setCart] = useState(0)
const [user,setUser] = useState([])
useEffect(() => {
    dis(TokenData())
}, [])
useEffect(() => {
    if(Loading === false){
        if(res){
            setUser(res.data)
            }else{
                setUser('')
            }
    }
}, [Loading])
const logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser('')
    if(window.location.pathname !== '/'){
        window.location.href = '/'
    }
}
useEffect(() => {
    if(localStorage.getItem('cart') !== null){
        setCart(localStorage.getItem('cart'))
    }else{
        return
    }
}, [cart])

return [user,logout,cart,Loading]
}
export default NavBarHook