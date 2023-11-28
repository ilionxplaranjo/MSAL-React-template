import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom";
import {RootLayout} from "./layouts/RootLayout.tsx";

// pages
import Home from "./pages/Home.tsx";

// styling
import './App.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />}/>
        </Route>
    )
)

function App() {

  return (
      <RouterProvider router={router} />
  )
}

export default App
