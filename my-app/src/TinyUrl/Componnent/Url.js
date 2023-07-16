import react from 'react';
//import   "../css/url.css";
import React, { useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Url = (props) => {
    let u=props.urlShow;
    console.log('props.urlShow', props.urlShow)
    return(

        <div>
      <Accordion style={{borderStyle:"solid",borderColor:"green"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"       
        >
            <ul>
          <Typography>  {u ? <p>{u.orginalUrl}</p> : <p>no urlShow</p>}</Typography>
          {/* <Typography>  {u ? <p>{u.links[0]}</p> : <p>no urlShow</p>}</Typography>  */}
          </ul>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
    )
}
export default Url;