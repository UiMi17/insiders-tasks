'use client';

import { Button } from '@mui/material';
import { redirect } from 'next/navigation';

const AuthBtn = () => {
  return <Button onClick={() => redirect('/auth')} className='w-full h-full'>Sign in</Button>;
};

export default AuthBtn;