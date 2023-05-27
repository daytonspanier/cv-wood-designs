import React from 'react';
import Link from 'next/link';
import { AppBar, Button, Toolbar, Box, Typography,} from '@mui/material';
import Image from 'next/image';






const Navbar = () => {


  return (

      <AppBar position='static'>
        <Toolbar>
       <Box sx={{flexGrow: 1, display: 'flex'}}>
       <Image src='/logo-black.png' width={40} height={40} alt={'Cowichan Valley Wood Design Logo'} ></Image>
      </Box>
      <Box>
       <Button component="a" href="/" variant='text'>
        <Link href="/" style={{textDecoration: 'none'}}>Home</Link>
       </Button>
       <Button component="a" href="/About" variant='text'>
        <Link href="/About" style={{textDecoration: 'none'}}>About</Link>
       </Button>
       <Button component="a" href="/Gallery" variant='text'>
        <Link href="/Gallery" style={{textDecoration: 'none'}}>Gallery</Link>
       </Button>
       <Button component="a" href="/Contact" variant='text'>
        <Link href="/Contact" style={{textDecoration: 'none'}}>Contact</Link>
       </Button>


      </Box>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;
