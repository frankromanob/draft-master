
import { Layout } from '@/components/layouts'
import { EntriesContext } from '@/context/entries'
import { Box, Card, CardContent, CardHeader, CardMedia, Chip, Grid, Typography } from '@mui/material'
import { useContext } from 'react'
import Image from 'next/image';
import { DraftList } from '@/components/ui/DraftList'


export default function HomePage() {


    return (
        <Layout title='Draft - Resultados'>
            <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Typography component="h1" >Resultados del draft</Typography>
            </div>
            <div style={{ display:'flex', alignContent:'center' }}>
                <Grid container spacing={2} marginTop={1} >
                    <Grid item xs={12} sm={6} >
                        <Card sx={{ height: 'calc(100vh - 100px)' }}>
                            <CardContent>
                                <DraftList />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}
