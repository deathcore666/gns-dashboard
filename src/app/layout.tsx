import React from 'react'
import {makeStyles} from '@mui/styles'

import Navbar from './Navbar'


type Props = {
  children: React.ReactNode
}

export const Layout = ({children}: Props) => {
  const styles = useStyles()

  return (
    <main>
      <Navbar />
      <div className={styles.pageContent}>
        {children}
      </div>
    </main>
  )
}

const useStyles = makeStyles({
  pageContent: {
    paddingTop: '100px',
  },
})