import { lazy, Suspense } from "react";
import { createHashRouter, RouterProvider } from "react-router";
import "./App.css";
import RouterLayout from "./Layout/RouterLayout.jsx";
import Loading from "./Components/Loading/Loading.jsx";

// Lazy Pages
const Home = lazy(() => import("./Pages/Home/Home.jsx"));
const About = lazy(() => import("./Pages/About/About.jsx"));
const Services = lazy(() => import("./Pages/Services/Services.jsx"));
const ServicesWithId = lazy(
  () => import("./Pages/Services/ServicesWithId.jsx"),
);
const Audience = lazy(() => import("./Pages/Audience/Audience.jsx"));
const Contact = lazy(() => import("./Pages/Contact/Contact.jsx"));
const Clients = lazy(() => import("./Pages/Clients/Clients.jsx"));
const ClientsDetails = lazy(() => import("./Pages/Clients/ClientsDetails.jsx"));
const Certification = lazy(
  () => import("./Pages/Certification/Certification.jsx"),
);

const router = createHashRouter([
  {
    path: "",
    element: <RouterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "services/:id", element: <ServicesWithId /> },
      { path: "audience", element: <Audience /> },
      { path: "contact", element: <Contact /> },
      { path: "clients", element: <Clients /> },
      { path: "clients/clients-Details", element: <ClientsDetails /> },
      { path: "certifications", element: <Certification /> },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
