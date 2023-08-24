
import { Layout } from '@/components/layouts'
import { EntriesList } from '@/components/ui'
import { EntriesContext } from '@/context/entries'
import { UIContext } from '@/context/ui'
import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Grid, Typography } from '@mui/material'
import { useContext } from 'react'
import Image from 'next/image';


export default function HomePage() {
  const { refreshJugadores } = useContext(EntriesContext)

  const {laRonda, setRonda, elPick} = useContext(UIContext)



  const  handleClick=(iRonda:number)=>{
      setRonda(iRonda)
      refreshJugadores();
  }

  return (
    <Layout title='Draft - Homepage'>
      <div style={{display:'flex',justifyContent:'center'}} >
        <Typography component="h1" >Ronda</Typography>
      </div>
      <Box display="flex"  flexDirection="row" overflow="scroll" gap={1} justifyContent="center">
        {[...Array(14).keys()].map(i =>
          <Chip key={i} label={i+1} onClick={()=>handleClick(i)}  variant={laRonda==i?"filled":"outlined"} />)}
      </Box>
      <Grid container spacing={2} marginTop={1}>
        <Grid item xs={12} sm={2.4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Jugadores" />
            <CardContent>
              <Typography variant='h5' sx={{display:'flex', justifyContent:'center',marginBottom:2}}>Pick: {elPick}</Typography>
              <EntriesList equipo="Draft" ronda={(laRonda+1).toString()} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={2.4} >
          <Card sx={{height: 'calc(100vh - 100px)' }}>
            <div style={{margin:5, justifyContent:'center',display:'flex'}} >
              <Image alt='5G' src='/img/5G.png' width='200' height="100"/>
            </div>
            <CardContent >
              <EntriesList equipo='5G' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={2.4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <div style={{margin:5, justifyContent:'center',display:'flex'}} >
              <Image alt='Altice Power' src='/img/AlticePower.png' width='180' height="100"/>
            </div>
            <CardContent>
              <EntriesList equipo='AlticePower' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={2.4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <div style={{margin:5, justifyContent:'center',display:'flex'}} >
              <Image alt='Los Pro' src='/img/LosPro.png' width='160' height="100"/>
            </div>
            <CardContent>
              <EntriesList equipo='LosPro' />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={2.4} >
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <div style={{margin:5, justifyContent:'center',display:'flex'}} >
              <Image alt='Alta Gama' src='/img/AltaGama.png' width='180' height="100"/>
            </div>
            <CardContent>
              <EntriesList equipo='AltaGama' />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}
