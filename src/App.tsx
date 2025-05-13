import "./styles.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { HelmetProvider } from "react-helmet-async";
import ProviderMuiTheme from "./@shared/Contexts/ProviderMuiTheme";
import { Home } from "./Routes";

export default function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <ProviderMuiTheme>
          <Home />
        </ProviderMuiTheme>
      </HelmetProvider>
    </div>
  );
}
