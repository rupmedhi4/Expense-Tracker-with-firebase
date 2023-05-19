import React, { useState } from 'react'
import './Form.css'
import { auth } from '../../firebase';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';

export default function Formm() {
    const [fullName, setFullName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");

    const nameHandler = (e) => {
        setFullName(e.target.value)
    }
    const photoUrlHandler = (e) => {
        setPhotoUrl(e.target.value)
    }

    const formUpdateHandler = async (e) => {
        e.preventDefault()
        try {
           await updateProfile(auth.currentUser, {
                displayName: fullName,
                photoURL: photoUrl
            })
            toast.success('profile update successfully');
            
        }catch(err){
            toast.success(err.message);
        }
      setFullName("")
      setPhotoUrl("")
}
    return (
        <div>
            <div className="form-container">
                <div className="header">
                    <span className="frmspan">Contact Details</span>
                    <button className="cancel-button">Cancel</button>
                </div>
                <form onSubmit={formUpdateHandler}>
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={nameHandler} />

                        <label htmlFor="photoURL">Photo URL:</label>
                        <input type="text" id="photoURL"
                            placeholder="Photo URL"
                            value={photoUrl}
                            onChange={photoUrlHandler} />

                    </div>
                    <div className="button-container">
                        <button type="submit">Update</button>
                    </div>
                </form>
                <hr className="horizontal-line" />
            </div>
        </div>
    )
}

