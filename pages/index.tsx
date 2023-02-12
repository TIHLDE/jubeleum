import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Countdown } from "../components/Countdown/Countdown";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TihldeLogo, { TihldeJubLogo } from "../components/TihldeLogo/TihldeLogo";
import Image from "next/image";

export default function Home({ data }: { data: any }) {
  const [height, setheight] = useState(100);
  const [width, setwidth] = useState(100);
  useEffect(() => {
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }, []);
  return (
    <>
      <Head>
        <title>TIHLDE | Jubileum</title>
        <meta name='description' content='Tihlde feirer 30 år!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Jumbotron>
          <Grid
            container
            direction='column'
            sx={{ height: '100%', zIndex: 100 }}
          >
            <Grid item xs={9} p={2}>
              <Stack direction='row' mt={10} height={100} mb={2}>
                <TihldeLogo
                  logoColor='white'
                  size='large'
                  sx={{
                    margin: 0,
                    height: '100%',
                    width: '100%',
                  }}
                />
              </Stack>
              <Typography textAlign='center' fontWeight={600}>
                TIHLDE feirer 30 år! Det blir fest, morro, merch, CTF og mye
                mer!
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Countdown />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <IconButton onClick={() => window.scrollTo(0, 550)} title='ned'>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Jumbotron>
        <Paper
          square
          variant='elevation'
          sx={{
            py: 2,
            px: 1,
          }}
        >
          <Grid container sx={{ maxWidth: 500, mx: 'auto' }}>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                startIcon={<OpenInNewIcon />}
                component={Link}
                href='https://tihlde.org/'
              >
                Tihlde.org
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                component={Link}
                href='/merch'
              >
                Merch
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                startIcon={<OpenInNewIcon />}
                variant='contained'
                component={Link}
                href='https://tihlde.org/toddel/'
              >
                Tøddel
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                startIcon={<OpenInNewIcon />}
                variant='contained'
                component={Link}
                disabled
                href='https://tihlde.org/toddel/'
              >
                Historie
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                startIcon={<OpenInNewIcon />}
                variant='contained'
                component={Link}
                disabled
                href='https://tihlde.org/toddel/'
              >
                Daljer
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3 }}>
          <Typography variant='h4' textAlign='center' my={2}>
            Jubileumsmerch ⏳
          </Typography>
          <Grid container sx={{ maxWidth: 600, mx: 'auto' }}>
            <Grid item xs={12} md={6}>
              <Card
                variant='outlined'
                sx={{
                  position: 'relative',
                  objectFit: 'contain',
                  m: 1,
                }}
              >
                <CardContent sx={{ position: 'relative', height: 300 }}>
                  <Image
                    src='/hettegenser.png'
                    fill
                    alt='hettegenser'
                    style={{ objectFit: 'contain' }}
                  />
                </CardContent>

                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Hettegenser
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    300 kr
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                variant='outlined'
                sx={{
                  position: 'relative',
                  objectFit: 'contain',
                  m: 1,
                }}
              >
                <CardContent sx={{ position: 'relative', height: 300 }}>
                  <Image
                    src='/hettegenser.png'
                    fill
                    alt='hettegenser'
                    style={{ objectFit: 'contain' }}
                  />
                </CardContent>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Hettegenser
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    300 kr
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3 }}>
          <Typography variant='h4' textAlign='center' my={2}>
            Arrangementer 🥳
          </Typography>
          <Card variant='outlined' sx={{ maxWidth: 400, mx: 'auto' }}>
            <CardMedia
              sx={{ height: 140 }}
              image={data.image}
              title='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {data.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data.description}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data.list_count} / {data.limit} påmeldt. Venteliste:{' '}
                {data.waiting_list_count}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                endIcon={<OpenInNewIcon />}
                component={Link}
                href='https://tihlde.org/arrangementer/489/tihlde-30-ar/'
                variant='contained'
              >
                Til påmelding
              </Button>
            </CardActions>
          </Card>
        </Paper>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.tihlde.org/events/489/`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
