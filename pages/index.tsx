import Head from "next/head"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { Countdown } from "../components/Countdown/Countdown"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import HistoryIcon from "@mui/icons-material/History"
import EastIcon from "@mui/icons-material/East"
import CheckroomIcon from "@mui/icons-material/Checkroom"
import ReactMarkdown from "react-markdown";
import {
  Button,
  Link as MuiLink,
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
  useMediaQuery,
  useTheme,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material"
import TihldeLogo from "../components/TihldeLogo/TihldeLogo"
import Image from "next/image"
import { WaveOne, WaveThree } from "../components/Waves/waves"
import Wave from "../components/Wave/wave"
import { MerchItems } from "../components/MerchBox/MerchItems"
import { MerchBox } from "../components/MerchBox/MerchBox"
import { ROUTES } from "../utility/constants/routes"
import Logo from "../components/Logo"

export default function Home({ data, events }: { data: any; events: any[] }) {
  const [height, setheight] = useState(100);
  const [width, setwidth] = useState(100);
  const lgBreakpoint = useMediaQuery('(min-width:800px)');
  const smBreakpoint = useMediaQuery('(min-width:500px)');
  var imageListWidth = 2;
  const theme = useTheme();
  if (lgBreakpoint) {
    imageListWidth = 2;
  } else if (smBreakpoint) {
    imageListWidth = 2;
  } else {
    imageListWidth = 1;
  }
  useEffect(() => {
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }, []);
  return (
    <>
      <Head>
        <title>TIHLDE | Jubileum</title>
        <meta
          name='description'
          content='Tihlde feirer 30 år - Se merch, arrangementer og mer!'
        />
        <link rel='canonical' href='https://jubileum.tihlde.org/' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Jumbotron>
          <Stack
            alignItems='center'
            justifyContent='center'
            spacing={1}
            sx={{ height: '80vh', width: '100%', padding: 3 }}
          >
            <Logo sx={{ width: '100%', maxWidth: '25rem' }} />
            <Box>
              <Typography textAlign='center' fontWeight={600}>
                TIHLDE feirer 30 år! Det blir fest, moro, merch, CTF og mye mer!
              </Typography>
            </Box>
            <Box>
              <Countdown />
            </Box>
          </Stack>
        </Jumbotron>
        <Wave />

        <Paper
          square
          variant='elevation'
          sx={{
            py: 3,
            px: 1,
          }}
        >
          <Grid
            container
            columns={10}
            sx={{ maxWidth: { xs: '60vw', md: '70vw' }, mx: 'auto' }}
            gap={{ xs: 1, md: 0 }}
          >
            {Buttons.map((item) => (
              <Grid item={true} key={item.title} xs={10} md={5} lg={2} p={1}>
                <Button
                  startIcon={item.startIcon}
                  fullWidth
                  component={Link}
                  href={item.href}
                  variant={item.variant}
                  color={item.color}
                  disabled={item.disabled}
                  target={item.target}
                >
                  {item.title}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3, position: 'relative' }}>
          <Link href='/merch'>
            <Typography variant='h4' textAlign='center' my={2}>
              Jubileumsmerch ⏳
            </Typography>
          </Link>
          <Grid
            container
            sx={{ maxWidth: 800, mx: 'auto', zIndex: 1, position: 'relative' }}
          >
            {MerchItems.slice(0, 2).map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <MerchBox
                  title={item.title}
                  price={item.price}
                  url={item.url}
                  available={item.available}
                />
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: 'block',
              width: 'fit-content',
              margin: 'auto',
            }}
          >
            <Button
              endIcon={<EastIcon />}
              variant='contained'
              sx={{
                position: 'relative',
                zIndex: '2',
                mt: 2,
              }}
              href={ROUTES.MERCH}
            >
              Se mer
            </Button>
          </Box>
          <WaveOne sx={{ color: 'four.main', height: '50%' }} />
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3 }}>
          <Typography variant='h4' textAlign='center' my={2}>
            Arrangementer 🥳
          </Typography>
          <ImageList
            gap={6}
            cols={imageListWidth}
            variant='masonry'
            sx={{
              maxWidth: '80vw',
              mx: 'auto',
              [theme.breakpoints.down('lg')]: {
                width: '90vw',
              },
              [theme.breakpoints.up('xl')]: {
                width: '50vw',
              },
            }}
          >
            {events.map((event, i) => (
              <ImageListItem key={i}>
                <Card
                  key={i}
                  variant='outlined'
                  sx={{ width: '100%', maxWidth: '500px', mx: 'auto' }}
                  component='div'
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={event.image}
                    title={event.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {event.title}
                    </Typography>
                    <ReactMarkdown>
                      {event.description.substring(0, 150) + ' ...'}
                    </ReactMarkdown>

                    <Typography variant='body2' color='text.secondary'>
                      {event.list_count} / {event.limit} påmeldt. Venteliste:{' '}
                      {event.waiting_list_count}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      endIcon={<OpenInNewIcon />}
                      component={Link}
                      href={`https://www.tihlde.org/arrangementer/${event.id}`}
                      variant='contained'
                    >
                      Til påmelding
                    </Button>
                  </CardActions>
                </Card>
              </ImageListItem>
            ))}
          </ImageList>
        </Paper>
      </main>
    </>
  );
}
type Button = {
  href: string;
  title: string;
  variant: 'contained' | 'outlined' | 'text';
  disabled: true | false;
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  startIcon?: React.ReactNode;
  target?: '_blank' | 'unset';
};


export const Buttons: Array<Button> = [

  {
    title: 'Merch',
    href: '/merch',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <CheckroomIcon />,
    target: "unset"
  },
  {
    title: 'Tøddel',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <OpenInNewIcon />,
    target: "_blank"
  },
  {
    title: 'Tihlde.org',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <OpenInNewIcon />,
    target: "_blank"
  },
  {
    title: 'Daljer',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: true,
    color: 'primary',
    startIcon: <WorkspacePremiumIcon />,
    target: "unset"

  },
  {
    title: 'Historie',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: true,
    color: 'primary',
    startIcon: <HistoryIcon />,
    target: "unset"
  },
];
export async function getServerSideProps() {
  //fetching all arrangements urls
  const urlsUnfiltered = await fetch("https://api.tihlde.org/events/?&organizer=jubkom").then((resp) => resp.json()).then((data) => data.results.map((event: { id: any }) => event.id));
  //removing url element "489"
  const urls = urlsUnfiltered.filter((url: any) => url !== 489);


  const events = await Promise.all(
    urls.map((url: any) =>
      fetch(`https://api.tihlde.org/events/${url}/`).then((resp) => resp.json())
    )
  );
  return { props: { events: events } };
}
