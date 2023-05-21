import React from 'react'

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.alert.type} text-${props.alert.type==='danger'?'danger':'success'} text-center`}>
        <strong>{props.alert.msg}</strong>
    </div>
  )
}
