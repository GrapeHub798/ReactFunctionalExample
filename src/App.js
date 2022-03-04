import './App.css';
import { Container } from 'react-bootstrap';
import InputForm from './components/inputform/inputform';
import Grid from './components/grid/grid';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
        <Container>
          <InputForm doSearch={setSearchTerm} />
          <Grid searchValue={searchTerm} />
        </Container>
      </div>
  );
}

export default App;
