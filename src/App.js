import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// USER AUTH CONTEXT
import { AuthProvider, RequireAuth } from "./context/UserAuthentication";

//LAYOUTS
import RootLayout from "./layouts/RootLayout";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Partners from "./pages/Partners";
import Policies from "./pages/Policies";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserDashboard from "./pages/UserDashboard";
import Error from "./pages/Error";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="policies" element={<Policies />} />
        <Route path="partners" element={<Partners />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <UserDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={myRouter} />
      </AuthProvider>
    </>
  );
}

export default App;
