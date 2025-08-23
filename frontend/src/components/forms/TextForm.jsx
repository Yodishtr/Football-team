import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function TextForm({label, value, name, onChange, onBlur, error, helperText}) {
  return (
    <TextField 
        sx = {{width: "100%"}}
        id="standard-basic" 
        label={label} 
        variant="standard" 
        value = {value}
        name = {name}
        onChange = {onChange}
        onBlur = {onBlur}
        error = {error}
        helperText = {helperText}
    />
  );
}
