import React, { useState } from 'react'
import {storage} from '../firebase'
const Test = () => {
    const [image,setImage] = useState(null);
    const [url,setUrl] = useState(null);
    const [progress,setProgress] = useState(0);

    const handleChange = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }
    const handleUpload = () =>{
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot=>{
                const progress = Math.round(
                    (snapshot.bytestTransFerred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error=>{console.log(error);
            },
            ()=>{
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url =>{
                        setUrl(url);
                    });
            }
            )
        //console.log(image);
    }
    return (
        <div>
            firebase upload
            <br/>
            {progress && progress}
            <input type="file" onChange={handleChange} />
            <button onClick={handleUpload}>Upload</button>
            {url && <img src={url} alt=""/>}
        </div>
    )
}

export default Test
