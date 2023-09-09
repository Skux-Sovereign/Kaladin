import React from 'react';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import NewPatient from './components/NewPatient';
import NavBar from './components/NavBar';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return(
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />

      <div className="router-div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<NewPatient />} />
        </Routes>
      </div>
    </ThemeProvider>
    </>
  );
}
