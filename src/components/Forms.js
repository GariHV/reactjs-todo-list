import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from './textInput/TextInput'
import Select from './select/Select'


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

  if(values.chancho==="") {
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
      color:"white",
      maxHeight:"70%",
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


function Forms(props) { 
  const {onSubmit, id, data} = props
  const idInt = parseInt(id, 10)
  let ids = 0;
  if (idInt !== 0) {
    ids= data.filter( todos =>{
      return todos.id === idInt
    })
    console.log(ids);
  }
  function formFill(params) {
    if(ids[0]){
      return ids[0][params]
    } return '';
  }
  return (
    <Formik

      initialValues={{ name: formFill('title'), lastname: formFill("description"), chancho: formFill('dificultad'), radio: formFill('repeticion'),edit:(ids===0)? 0:idInt }}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form style={styles.form} >
      <h1>Crear Tarea Diaria</h1>
        <TextInput name="name" label="Titulo" />
        <br />
        <TextInput name="lastname" label="Descripcion" />
        <br />
        <Select label="Dificultad" name="chancho" >
          <option value="">Seleccione...</option>
          <option value="facil">Facil</option>
          <option value="intermedio" selected>Intermedio</option>
          <option value="dificil">Dificil</option>
        </Select>
        <Select label="Repetir a" name="radio">
          <option value="">Seleccione...</option>
          <option value="Diario">Diario</option>
          <option value="Semanal">Semanal</option>
          <option value="mensual">Mensual</option>
        </Select>
        <ErrorMessage name="radio" />
        <input type='hidden' name="edit"/>
        <button style={styles.btn} type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default Forms;