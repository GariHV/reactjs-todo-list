import { useField } from 'formik'
import './Input.css'

const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <div className='field'>
      <label>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error 
        ? <div>{meta.error}</div> : null}
    </div>
  )
}

export default Select
