import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';
import theme from './theme';
import TopBar from './components/TopBar';
import RegionalStats from './views/RegionalStats';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <TopBar />
        <RegionalStats />
      </div>
    </ThemeProvider>
  );
}

export default App;
