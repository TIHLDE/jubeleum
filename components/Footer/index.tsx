/* eslint-disable @next/next/no-img-element */
import { Paper, Stack, Link as MuiLink, Divider } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MnemonicLogo } from './MnemonicLogo';

const Footer = () => {
  return (
    <Paper
      variant='outlined'
      sx={{
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      square
    >
      <Grid container spacing={5} sx={{ alignItems: 'center', maxWidth: 1000 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Typography>TIHLDE feirer 30 år! 🥳</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            direction='row'
            gap={1}
            alignItems='center'
            sx={{ justifyContent: 'center' }}
          >
            <Image
              alt='instagram'
              src='/icons/instagram.svg'
              width={35}
              height={35}
            />
            <MuiLink
              component={Link}
              href='https://www.instagram.com/tihlde/'
              color='#ffffff'
              fontWeight={600}
            >
              @Tihlde
            </MuiLink>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          Made with ❤️ by&nbsp; {'  '}
          <MuiLink
            sx={{ color: 'three.main' }}
            component={Link}
            href='https://tihlde.org/wiki/tihlde/undergrupper/index/'
          >
            Index
          </MuiLink>
        </Grid>

        <Grid item xs={12} textAlign={'center'}>
          <Typography gutterBottom>Sponsorer</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={'/../public/Bouvet_Logo_blue.png'}
            width={100}
            height={100}
            alt={'Bouvet Logo'}
            style={{
              height: 'auto',
              width: '100%',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MnemonicLogo />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
