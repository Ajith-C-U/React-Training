import './App.css';
import DefaultRoutes from './routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function App() {

  const theme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DefaultRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
