import React, { useEffect, useState } from 'react'

const ButtonLoader = () => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('url')
        setLoading(false)
    },[])
    return (
        <div>
            <button>
                {
                    loading&& <i className="fa fa-fresh fa-spin"></i>
                }
                click
            </button>
        </div>
    )
}

export default ButtonLoader
