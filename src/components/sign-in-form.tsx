import React, {useState}from "react";
import { Button, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const SignInForm = () => {
    const styles = useStyles();
    const [sign, setSign] = useState({login:'', password: ''})

function hendleSubmit(e: any) {
setSign(e.target.value)
}

    return (
        <div className={styles.centerBox}>
          <Stack
            component="form"
            sx={{
              width: "45ch",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            <TextField label="Логин" value={sign.login}/>
            <TextField label="Пароль" type="password" value={sign.password}/>
            <Button variant="contained" onClick={hendleSubmit}>Вход</Button>
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