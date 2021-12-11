import React from "react";
import { Button, Paper, Stack, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const SignInForm = () => {
    const styles = useStyles();
    return (
      <div className={styles.centerBox}>
        <Paper elevation={3} className={styles.stylePaper}>
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
        </Paper>
      </div>
    );
  };
  
  const useStyles = makeStyles({
  
    stylePaper: {
      padding: "75px 45px 75px 45px",
    },
    centerBox: {
      position: 'fixed',
      top: "25%",
      left: "38%",
    },
  });