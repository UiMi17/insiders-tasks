import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

const Dashboard = () => {
  return <Box className='flex flex-col w-full h-full'>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' />
        </ListItemAvatar>
        <ListItemText
          primary='Remy Sharp'
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                remySharp@example.com
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' />
        </ListItemAvatar>
        <ListItemText
          primary='Remy Sharp'
          secondary={
            <>
              <Typography
                component='span'
                variant='body2'
                sx={{ color: 'text.primary', display: 'inline' }}
              >
                remySharp@example.com
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant='inset' component='li' />
    </List>
  </Box>;
};

export default Dashboard;