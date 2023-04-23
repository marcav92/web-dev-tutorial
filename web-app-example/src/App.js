import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import axios from 'axios';

function App() {

  const handleClick = async () => {
    const result = await axios.get("https://g8a0y6fe28.execute-api.us-east-1.amazonaws.com/marco")
    alert(result.data.message)
  }

  return (
    <div className="App">
      <Button variant="outlined" onClick={handleClick}>Outlined</Button>
    </div>
  );
}

export default App;
