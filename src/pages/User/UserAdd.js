import React,{useState} from 'react'
import firebase from 'firebase'
import Layout from "../../components/Layout"
const UserAdd = () => {
    const [email,setEmail] = useState('idre172@gmail.com')
    const [password,setPassword] = useState('Devs@321$')
    const [name,setName] = useState('Muhammad Idrees')

const  onSignUp =  async()=>{
   
    await firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result)=> {
        firebase.firestore().collection("users")
        .doc(firebase.auth().currentUser.uid)
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
