import Alert from '@mui/material/Alert';
import {useState} from 'react';
import Form from './components/Form';
import './styles/App.css';

function App() {
  const [alert,setAlert] = useState({saverity: 'success', title: null});
  const [phone,setPhone] = useState('')
  return (
    <div className="App">
      {alert.title ? <Alert severity={alert.saverity} variant='filled' id='alert'>{alert.title}</Alert> : null}
      <Form setAlert={setAlert} phone={phone} setPhone={setPhone}/>
    </div>
  );
}

export default App;
