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
    var metadata = {
        contentType: 'image/jpeg',
      };
    const handleUpload = () =>{
       
        const uploadTask = storage.ref(`images/${image.name}`).put(image,metadata);
        uploadTask.on(
            "state_changed",
            snapshot=>{
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
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
                    .then(downloadURL =>{
                        console.log('File available at', downloadURL);
                        setUrl(downloadURL);
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
            <br/>
            <input type="file" onChange={handleChange} />
            <br/>
            <button onClick={handleUpload}>Upload</button>
            <br/>
            {url && <img src={url} alt=""/>}
        </div>
    )
}

export default Test
