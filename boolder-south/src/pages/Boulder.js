import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

function Boulder() {
  const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

  export default Boulder;