import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSize() {
  return (
    <Stack className="place-self-center  border-pink-600">
      
      <Pagination count={10} size="large" />
    </Stack>
  );
}