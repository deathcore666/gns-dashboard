import React from 'react';
import { makeStyles } from "@mui/styles";
import { SignInForm } from './sign-in-form';
import { Grid } from '@mui/material';

export const SignIn = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.borderR}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} md={3}>
            <header className={styles.header}>
              <img src="/img/logoGNS.svg" className="App-logo" alt="logo" />

              <div>
                <span>
                  Государственная Налогавая Служба
                  <br />
                  <span className={styles.spanColor}>
                    Кыргызской Республики
                  </span>
                </span>
              </div>
            </header>
          </Grid>
          <Grid item xs={6} md={7}>
            <div>
              <div className={styles.text}>
                <span>Аналитическая система ГНС</span>
              </div>
              <div className={styles.txtSpan}>
                <div>
                  <span>ККМ:</span>20438
                </div>

                <div>
                  <span>Пробито чеков:</span>20438
                </div>
                <div>
                  <span>Выявлено нарушений:</span>20438
                </div>
                <div>
                  <span>Проверка субьектов:</span>20438
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={6} md={2}>
            <SignInForm />
          </Grid>
          <Grid item xs={6} md={6}>
            <img alt="kg" src="/img/kg.svg" width={990} height={465} />
          </Grid>
          <Grid item xs={6} md={2}>
            <img alt="chart" src="/img/chart.svg" width={290} height={450} />
          </Grid>
        </Grid>
      </div>
      <footer className={styles.styleFooter}>
        <img alt="table" src="/img/footer-tab.svg" />

        <img alt="floor" src="/img/footer.svg" />
      </footer>
    </div>
  );
};

const useStyles = makeStyles({
  borderR: {
    border: "10px solid #36353D",
    borderRadius: "65px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: '150px',
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },

  header: {
    display: "flex",
    alignItems: "center",
    color: "#000000",
    fontSize: "18px",
  },
  spanColor: {
    color: "#3BA6B3",
  },

  styleFooter: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    position:'absolute',
    top: '590px',
  },
  chart: {
    width: "200px",
    height: "350px",
  },
  text: {
    fontWeight: "900",
    fontSize: "48px",
    color: "#3BA6B3",
    paddingBottom: "20px",
  },
  txtSpan: {
    fontSize: "24px",
    lineHeight: "28px",
    display: "flex",
    justifyContent: "space-between",
    "&  span  ": {
      color: "#BDBDBD",
    },

  },
});