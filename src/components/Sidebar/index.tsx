import Link from 'next/link';
import { Box, Drawer, List, ListItem, ListItemText, Toolbar } from '@mui/material';
import ReturnBackBtn from '@/components/ui/ReturnBackBtn';
import AuthBtn from '@/components/ui/AuthBtn';

const Sidebar = () => {
  return <Drawer
    variant='permanent'
    sx={{
      [`& .MuiDrawer-paper`]: { width: 240 },
    }}
  >
    <Toolbar>
      <ReturnBackBtn />
    </Toolbar>
    <List>
      <Link href='/profile' passHref>
        <ListItem button='true' component='div'>
          <ListItemText primary='Profile' />
        </ListItem>
      </Link>
      <Link href='/dashboard' passHref>
        <ListItem button='true' component='div'>
          <ListItemText primary='Dashboard' />
        </ListItem>
      </Link>
    </List>
    <Box className='absolute left-1/2 bottom-10 -translate-x-1/2'>
      <AuthBtn/>
    </Box>
  </Drawer>;
};

export default Sidebar;