import React from 'react';
import ReactDOM from 'react-dom/client';
import Estilos from './components/Estilos';
import LightSwitch from './components/LightSwitch';
import MyNewComponent from './components/MyNewComponent';
import SomeClassComponent from './components/SomeClassComponent';
import PersonCard from './components/PersonCard';
import App from './App';
import StateFuncional from './components/StateFuncional';
import UserForm from './components/UserForm';
import MovieForm from './components/MovieForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>Movie Form</h2>
    <MovieForm />
    <hr />
    <h2>Formulario</h2>
    <UserForm />
    <hr />
    <MyNewComponent Nombre="Lucas" Edad={29} />
    <SomeClassComponent>
      <p>Child of Light</p>
    </SomeClassComponent>
    <LightSwitch />
    <Estilos>
      <span>Probando</span>
    </Estilos>
    <StateFuncional />
    <App></App>
    <PersonCard firstName="John" lastName="Smith" age={8} hairColor={"Brown"} />
  </React.StrictMode>
);

