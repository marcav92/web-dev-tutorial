import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function App() {
  const [formValue, setFormValue] = useState("");

  const handleClick = async () => {
    const result = await axios.post("https://qnrlas3pq7.execute-api.us-east-1.amazonaws.com/tutorial-marco/contacts/"+formValue)
    // console.log(result)
    alert(result.data.name)
  }

  const handleChange = (e) => {
    setFormValue(e.target.value)
    // console.log(formValue)
    // setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={handleClick}>Outlined</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />
    </div>
  );
}

export default App;
