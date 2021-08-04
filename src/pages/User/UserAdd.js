import React,{useState} from 'react'
import {auth} from '../../firebase'
import db from '../../firebase'
import Layout from "../../components/Layout"
const UserAdd = () => {
    const [email,setEmail] = useState('idre172@gmail.com')
    const [password,setPassword] = useState('Devs@321$')
    const [name,setName] = useState('Muhammad Idrees')

const  onSignUp =  async()=>{
    //console.log(name)
    //console.log(email)
    //console.log(password)
    await auth.createUserWithEmailAndPassword(email,password)
    .then((result)=> {
        db.firestore().collection("users")
        .doc(auth.currentUser.uid)
        .set({
            name,
            email
        })
        console.log("Success User")
        console.log(result)
    })
    .catch((error)=>console.log(error))
}
    return (
        <Layout>
            <button onClick={()=>onSignUp()}>Register </button>
        </Layout>
    )
}

export default UserAdd
