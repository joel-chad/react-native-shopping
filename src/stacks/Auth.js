import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import context from '../context/context'
import AccountStacks from './accountArena'
import AuthStacks from './accountArena'

const Auth = () => {
    const CartContext = useContext(context)
  return (
    <>
      {CartContext.signedIn ? <AccountStacks/> : <AuthStacks/>}
    </>
  )
}

export default Auth