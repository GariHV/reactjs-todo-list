import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/textInput/TextInput'
import Select from './components/select/Select.js'

const validate = (values) => {

  const errors = {}

  if(!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 3) {
    errors.name = 'El Titulo es muy corto'
  }

  if(!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'La descripcion es muy corta'
  }

  if(values.chancho=="") {
    errors.radio = 'Requerido'
  }

  if(!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors
}

const styles={
    form:{
      backgroundColor: "#310927",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      padding: "20px",
      borderRadius:"10px",
    },
    btn:{
      transition:" all 0.5s ease",
      backgroundColor: "#2185D0",
      borderRadius: "4px",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      fontWeight: "700",
      fontSize: "15px",
      cursor: "pointer",
    }
}


function Forms() {
  return (
    <Formik
      initialValues={{ name: '', lastname: '', chancho: '', radio: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form style={styles.form}>
      <h1>Crear Tarea Diaria</h1>
        <TextInput name="name" label="Titulo" />
        <br />
        <TextInput name="lastname" label="Descripcion" />
        <br />
        <Select label="Dificultad" name="chancho">
          <option value="">Seleccione...</option>
          <option value="facil">Facil</option>
          <option value="intermedio">Intermedio</option>
          <option value="dificil">Dificil</option>
        </Select>
        <Select label="Repetir a" name="radio">
          <option value="">Seleccione...</option>
          <option value="Diario">Diario</option>
          <option value="Semanal">Semanal</option>
          <option value="mensual">Mensual</option>
        </Select>
        <ErrorMessage name="radio" />
        <button style={styles.btn} type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;