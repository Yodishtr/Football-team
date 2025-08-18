import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextForm({label}) {
  return (
    <TextField 
        sx = {{width: "100%"}}
        id="standard-basic" 
        label={label} 
        variant="standard" 
    />
  );
}
