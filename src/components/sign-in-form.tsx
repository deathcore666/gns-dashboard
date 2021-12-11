import React from "react";
import { Button, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const SignInForm = () => {
    const styles = useStyles();
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
            <TextField label="Логин" />
            <TextField label="Пароль" />
            <Button variant="contained">Вход</Button>
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