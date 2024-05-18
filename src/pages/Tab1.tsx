import React, { useState } from 'react';
import './Tab1.css';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert
} from '@ionic/react';

const Tab1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    // Aquí iría la lógica de autenticación.
    if (!email || !password) {
      setShowAlert(true);
    } else {
      console.log("Login exitoso");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='titulo'>Login</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className='contenido'>
        <div className='centro'>
          <IonGrid className='elemento'>
            <IonRow className="ion-justify-content-center">
              <IonCol size-md="6" size-sm="12">
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle className='titulo'>Iniciar Sesión</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    <IonItem>
                      <IonInput type="email" placeholder='Correo Electronico'></IonInput>
                    </IonItem>

                    <IonItem>
                      <IonInput type="password" placeholder='Contraseña'></IonInput>
                    </IonItem>

                    <IonButton expand="full" onClick={handleLogin}>Ingresar</IonButton>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={'Login fallido'}
          message={'Por favor, ingrese un correo electrónico y contraseña válidos'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  );

};

export default Tab1;

