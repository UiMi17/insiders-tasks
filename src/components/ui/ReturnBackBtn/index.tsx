'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeftSharp } from '@mui/icons-material';
import { Button } from '@mui/material';

const ReturnBackBtn = () => {
  const router = useRouter();
  return <Button onClick={() => router.back()} className='w-full'><ArrowLeftSharp /></Button>;
};

export default ReturnBackBtn;