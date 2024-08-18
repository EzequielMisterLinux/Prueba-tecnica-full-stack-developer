import { styled } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';

export const TaskCard = styled(Card)({
  backgroundColor: '#2e2e2e',
  border: '1px solid #a16be4',
  boxShadow: '0px 0px 10px #a16be4',
  margin: '10px',
  
});

export const TaskContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
