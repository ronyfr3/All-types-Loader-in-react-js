import React,{useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'


//use it with fetch data
const TopProgressBar = () => {
    const ref = useRef(null)
    return (
        <div>
             <LoadingBar color="#f11946" ref={ref} shadow={true} height={5} />
             <button
        onClick={() => ref.current.complete()}
      >
        Click
      </button>
        </div>
    )
}

export default TopProgressBar
