import { useField } from 'formik'
import './Input.css'

const styles={
  textI:{
    width: "100%",
  },
  label:{
    fontWeight: "700",
  },
  input:{
    
  }
}

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="field">
      <label className="label">{label}</label>
      <input className="input" {...field} {...props}/>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </div>
  )
}

export default TextInput
