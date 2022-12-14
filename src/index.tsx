import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "./context/AuthContextProvider";
import { UnicornNotesContextProvider } from "./context/UnicornNotesContextProvider";
import { BlueberriesContextProvider } from "./context/BlueberriesContextProvider";
import ProfilesContextProvider from "./context/ProfilesContextProvider";
import UnicornBuddiesContextProvider from "./context/UnicornBuddiesContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProfilesContextProvider>
        <UnicornNotesContextProvider>
          <UnicornBuddiesContextProvider>
            <BlueberriesContextProvider>
              <App />
            </BlueberriesContextProvider>
          </UnicornBuddiesContextProvider>
        </UnicornNotesContextProvider>
      </ProfilesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
