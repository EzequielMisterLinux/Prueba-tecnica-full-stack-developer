import tw, { styled } from 'twin.macro';
import { Card, CardContent } from '@mui/material';

export const TaskCard = styled(Card)`
  ${tw`bg-opacity-20 backdrop-filter backdrop-blur-lg border border-neonPurple`}
  background-color: rgba(176, 38, 255, 0.1);
`;

export const TaskContent = styled(CardContent)`
  ${tw`flex justify-between items-center`}
`;
