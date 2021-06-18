import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { FormControlLabel } from '@material-ui/core';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (


    <FormControlLabel
      control = {<Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      /> }   
      label="Snooze"
    />

  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TextField
        variant="standard"
        color="secondary"
        type="time"
        label="Alarm"
        size="medium"
      />
      <CheckboxExample/>
      <ButtonGroup>

        <Button onClick={()=>alert('Alarm is set')}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        >
        Save
      </Button>

      <Button onClick={()=>alert('Alarm is deleted')}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<DeleteIcon />}
        >
        Delete
      </Button>

      </ButtonGroup>

        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
