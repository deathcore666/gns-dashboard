import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";


export const SignInForm = () => {
    const styles = useStyles();
    const [formData, setFormData] = useState({login: '', password: ''});

    
    const change=(e: any)=>{

        setFormData({...formData,[e.target.name]:e.target.value})
        
        }

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        console.log('data', formData)
    };

    
    return (
        <div className={styles.centerBox}>
          <Stack
            component="form"
            sx={{
              width: "45ch"
            }}
            spacing={2}
            noValidate
            autoComplete="off"
            onSubmit={onFormSubmit}
          >
            <TextField label="Логин"  onChange={change} value={formData.login} name="login"/>
            <TextField label="Пароль" type="password" value={formData.password} onChange={change} name="password"/>
            <Button variant="contained" type="submit" >Вход</Button>
          </Stack>
        </div>
    );
  };
  
  const useStyles = makeStyles({

    centerBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "750px",
    },
  });