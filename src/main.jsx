import React from "react";

import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";

import UserProvider

from "./context/UserContext";

import NotificationProvider

from "./context/NotificationContext";

ReactDOM.createRoot(

document.getElementById("root")

).render(

<React.StrictMode>

<BrowserRouter>

<UserProvider>

<NotificationProvider>

<App/>

</NotificationProvider>

</UserProvider>

</BrowserRouter>

</React.StrictMode>

);