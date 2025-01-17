import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Plans from './Plans';
import "./TinyUrl.css";
import pic from '../../pic/close.jpg';
import { Block } from '@mui/icons-material';

// import Status from './Status';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  height: 700,
  backgroundColor: "#9d979e", // הוסף את הצבע ישירות כאן
  color: "#fff",
  textAlign: "center",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4, 
};

export default function BasicModal({flag,setFlag}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setFlag(false);

  return (
    <div>
      <Modal
        open={flag}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{borderRadius:"5%", border: "none"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <box-icon name='transfer'></box-icon>
          {/* <i class='bx bx-transfer'></i> */}
          {/* <img src={pic} alt="Logo" onClick={()=>setFlag(!flag)} className="close"/> */}
          <h1 className='why'>WHY US?</h1>
          {/* <h3>Welcome to TinyURL</h3> */}
          {/* <Status/> */}
          
         
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Plans setFlag={setFlag}flag={flag}></Plans>
          
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}