import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import { useDispatch } from "react-redux";
import {
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";

import { TabPanel, TabContext  } from '@mui/lab';

const HomePage = () => {

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      Home Page
    </div>
  )
}

export default HomePage