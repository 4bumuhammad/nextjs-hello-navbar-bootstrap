import { useState } from 'react';
import { Button, Alert } from 'react-bootstrap'
import styles from './index.module.css';


function Home() {
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
      setShowAlert(true);
    }
  
    const handleAlertClose = () => {
      setShowAlert(false);
    }

    return (
        <div className={styles.wrapper}>
        <h1>Hello, Dhony abu muhammad!</h1>
        <Button variant="primary" onClick={handleButtonClick}>Click me!</Button>
        <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible className={styles.alert}>
          <Alert.Heading>Popup Omnichannel message</Alert.Heading>
          <p>
            Power Commerce Asia provides omni channel and supply chain technology solutions for enterprises to bring their product closer to customers.
          </p>
        </Alert>      
      </div>
    );
}

export default Home;