import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import { CustomizedButtonProps } from '../../utils/types';

const CustomizedButton =({componentColor, buttonName, onClick}: CustomizedButtonProps)=>{
  const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: componentColor.bgColorActive || '#0063cc',
    borderColor: componentColor.bgColorActive || '#0063cc',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: componentColor.bgColorHover || '#0069d9',
      borderColor: componentColor.borderColorHover || '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: componentColor.bgColorActive || '#0062cc',
      borderColor: componentColor.borderColor || '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "#65647C",
    backgroundColor: componentColor.bgColorActive || purple[700],
    '&:hover': {
      backgroundColor: componentColor.bgColorHover || purple[200],
    },
  }));

    return (
      <Stack spacing={2} direction="row">
        <ColorButton variant="contained" onClick={onClick}>{buttonName || "Button"}</ColorButton>
        {/* <BootstrapButton variant="contained" disableRipple>
          Bootstrap
        </BootstrapButton> */}
      </Stack>
    );
}

export default CustomizedButton;



