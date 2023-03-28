import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

// USER AUTH CONTEXT
import { AuthProvider, RequireAuth } from "./context/UserAuthentication";
// import { auth } from "./index";

//LAYOUTS
import RootLayout from "./layouts/RootLayout";

//TEMP STATE MACHINE
import { StateMachineProvider, createStore } from "little-state-machine";

//PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import Partners from "./pages/Partners";
import Policies from "./pages/Policies";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import UserDashboard from "./pages/UserDashboard";
import Welcome from "./pages/Welcome";
import Error from "./pages/Error";

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route exact path="welcome" element={<Welcome />}>
          <Route path="stepOne" element={<StepOne />} />
          <Route path="stepTwo" element={<StepTwo />} />
        </Route>
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

//LITTLE STATE MACHINE STORE
createStore({
  data: {},
});

function App() {
  return (
    <>
      <StateMachineProvider>
        <AuthProvider>
          <RouterProvider router={myRouter} />
        </AuthProvider>
      </StateMachineProvider>
    </>
  );
}

export default App;
