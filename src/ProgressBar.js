import React, { useState } from 'react'
import {ProgressBar} from 'react-bootstrap'
import axios from 'axios'

const Progress = () => {
    const [load, setLoad] = useState(0)
  const uploadFile = ({ files } ) => {
        const data = new FormData()
        data.append('file', files[0])
        const options = {
            onUploadProgress:(progressEvent) => {
                const { data, totalSize } = progressEvent
                let percent = Math.floor((data * 100) / totalSize)
                console.log(percent+"%")
                if (percent < 100) {
                    setLoad(percent)
                }
            }
      }
        axios.post('url', data, options).then(res => {
        setLoad(100, () => {
            setTimeout(() => {
                setLoad(0)
            },1000)
        })
    })
    }
    uploadFile()
   
    return (
        <div>
            {
                load > 0 && <ProgressBar now={load} active label={
                    `${load}%`
                }/>
            }
        </div>
    )
}

export default Progress
