import { Box } from '@chakra-ui/layout';
import Sidebar from './sidebar';

const Playerlayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0">
        <Box height="100px" width="100vw" bg="black"></Box>
      </Box>
    </Box>
  );
};

export default Playerlayout;
