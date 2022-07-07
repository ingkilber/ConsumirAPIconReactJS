import React, { useEffect }  from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  //Creamos un variable de tipoi constante
  const url = 'https://jsonplaceholder.typicode.com/users';
  // para obtener los usuarios de la API
  const [usuarios, setUsuarios] = useState()
  // definir una funcion con respuestas
  const fetchApi = async () => {
    const respuesta = await fetch(url);
    //console.log(respuesta.status);
    // procesar o interprestar el json
    const respuestaJson = await respuesta.json()
    //mostrar contenido de la API por consola
    setUsuarios(respuestaJson)
    // console.log(respuestaJson)
  }
// este hooks ejecuta la funcion del inicio
    useEffect(() => {
      fetchApi ()
    }, [])


  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-link'>
          Nombre de usuarios y Celular traidos desde una API
          </h1>
          <p>
          { !usuarios ? 'Cargando...' :
            usuarios.map (( usuarios,index ) => {
              // ejemplo mostrar nombre de usuarios y numero de celular 
              return <ul key={index}> {'✅'} {usuarios.name} {'📲 '} {usuarios.phone} </ul>
            })
          }
        </p>
      </header>
    </div>
  );
}

export default App;
