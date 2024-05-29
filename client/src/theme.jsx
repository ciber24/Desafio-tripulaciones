import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          width:'100%', // Ajusta el ancho del contenedor de tabs
          justifyContent:'center', // Centra las tabs horizontalmente
        },
        indicator: {
          backgroundColor: '#fff', // Color de la línea del scroller
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor:'',
          color: '#002766', // Color del texto del tab
          '&.Mui-selected': {
            backgroundColor:'',
            color: '#002766', // Color del texto del tab seleccionado
          },
        },
      },
    },
  },

 


});

export default theme;