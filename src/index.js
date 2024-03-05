import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter,createHashRouter} from 'react-router-dom';
import RegisterPage from "./pages/register"
import DashboardPage from "./pages/dashboard"
const router = createHashRouter([
  {
    path: "/",
    element: <RegisterPage/>,
  
  },
  {
    path:"/dashboard",
    element: <DashboardPage/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
