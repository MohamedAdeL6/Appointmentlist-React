import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import DateCount from './ComponentPro.js/DateCount';
import DateList from './ComponentPro.js/DateList';
import DateAction from './ComponentPro.js/DateAction';
import Data from "./Data/Data.json"

function App() {

  const [personData , setPersonData] = useState([])
  
  const deleteData = () => {
    setPersonData([]);
  }

  const viewData = () => {
    setPersonData(Data);
  }

  return (
      <div className="App">
        <Container  >
          <DateCount person = {personData}/>
          <DateList personData={personData}/>
          <DateAction  deleteData={deleteData} viewData={viewData} />
        </Container>
      </div>
  );  
}

export default App;
