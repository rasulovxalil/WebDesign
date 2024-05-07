import React from 'react'
import Dashcard from '../src/components/Dashcard';
import Grid from '@mui/material/Grid';
import Lang from './Langauges';
import wate from '../src/svgs/water.svg'
import don from '../src/svgs/done.svg'
import clou from '../src/svgs/cloud.svg'
import ContentCard from '../src/components/ContentCard';
import ContentCard2 from '../src/components/ContentCard2';

export default function Content() {
  return (
    <Grid container spacing={2 } sx={{padding:"10%", alignItems:"center", justifyContent:"center"}}>
    <Grid container spacing={2} sx={{padding:"10%"}}>
      <Grid item md={4} xs={12}>
        <Dashcard  icon={wate} header={Lang.water.header} content={Lang.water.text} number={Lang.water.number}/>
      </Grid>
      <Grid item md={4} xs={12}>
        <Dashcard icon={don}  header={Lang.done.header} content={Lang.done.text} number={Lang.done.number}/>
      </Grid>
      <Grid item md={4} xs={12}>
        <Dashcard  icon={clou} header={Lang.cloud.header} content={Lang.cloud.text} number={Lang.cloud.number}/>
      </Grid>

    </Grid>
    <Grid container spacing={2}>
    <ContentCard/>
    <ContentCard2/>
    </Grid>
    </Grid>
  )
}
