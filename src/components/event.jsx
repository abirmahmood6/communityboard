import React from 'react'

const Event = (props) => {
    
  return (
    <td className={'Event ' + props.color} >
      {props.imgSrc && <img
          src={props.imgSrc}
          alt="Event"
          style={{ width: '300px', height: '300px', borderRadius: '20px'}} 
        />}
      <h5>{props.name}</h5>
      <h6>📍 {props.location}</h6>
      <h5><button > View Menu </button></h5>
    </td>
  )
}

export default Event