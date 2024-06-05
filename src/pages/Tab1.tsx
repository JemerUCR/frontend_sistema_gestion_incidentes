import React from 'react';
import axios from 'axios';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput, IonFooter, IonAlert } from '@ionic/react';
import './Tab1.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const handleLogin = async () => {
    try {
      // Realizar la solicitud HTTP GET para obtener todos los usuarios
      const response = await axios.get('http://127.0.0.1:8000/api/usuarios');
      // Actualizar el estado de los usuarios con los datos recibidos
      setUsers(response.data);
      // Mostrar los usuarios en la consola
      console.log('Usuarios:', response.data);
    } catch (error) {
      // Manejar errores
      console.error('Error al obtener usuarios:', error);
    }
  };

  return (
    
      <IonPage className='contenido'>

        <IonHeader>
          Jemerson
        </IonHeader>
       
        <IonContent color={""}>
          <IonToolbar>
            <IonTitle>Sistema Gestión de Riesgos</IonTitle>
            <img src="asset/icon/iconPage.png" alt="Icon" />
          </IonToolbar>

          <div className="login">
            <div id="login">
              <div className="username">
                <IonInput
                  placeholder="Usuario"
                  value={username}

                />
              </div>
              <div className="password">
                <IonInput
                  type="password"
                  placeholder="Contraseña"
                  value={password}

                />
              </div>
              <div className="button">
                <IonButton id="present-alert" onClick={handleLogin}>Ingresar</IonButton>
                <IonAlert
                  trigger="present-alert"
                  header="Mensaje"
                  message="Mensaje de alerta"
                  buttons={['Aceptar', 'Salir']}
                ></IonAlert>
              </div>
              <div className="recover">
                <IonButton href="#">Recuperar Contraseña?</IonButton>
              </div>
            </div>
          </div>
        </IonContent>

        <IonFooter><h6>Jemerson Rodriguez</h6>
        </IonFooter>
      </IonPage>
    

  );
};

export default LoginPage;


