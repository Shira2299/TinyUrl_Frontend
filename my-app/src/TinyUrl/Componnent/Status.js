import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
   
  let img="/static/images/avatar/2.jpg";
  const onClick = (e) => {
     console.log('frfgrg')
  }

  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Travis Howard" src="img" />
      <input type="file" onClick={ (e) => this.handleChange(e.target.files) } />
    </Stack>
  );
}
