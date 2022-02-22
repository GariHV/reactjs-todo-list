import React from 'react'
import { useField } from 'formik'
import './Input.scss'


const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="field">
      <p className="label">{label}</p>
      <input className="input" {...field} {...props}/>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default TextInput
