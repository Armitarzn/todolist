import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({label, onClick, color='blue'}) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onClick} style={{background:color}}>{label}</Button>
    </Stack>
  );
}