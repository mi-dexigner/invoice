import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
const Profile = () => {
    return (
        <Layout>
            {/*https://firebase.google.com/docs/auth/web/manage-users#web-v8_4*/}
            <Link to="/user-create">User Register</Link>
            <div className="profile__sec">
                <div className="profile__img"></div>
                <div className="profile__content">
                    <h2>John Doe</h2>
                    <h6>UI/UX Design Team</h6>
                    <small>Web Designer</small>
                    <div className="emp-idd">Employee ID : FT-0001</div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile
