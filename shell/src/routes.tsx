import modulesConfig from "./modules.json";
import { createBrowserRouter, type RouteObject, Outlet } from "react-router-dom";
import { Home } from "./pages";
import RemoteComponent from "./RemoteComponent";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Root layout with sidebar and header
const Layout = () => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Sidebar modules={modulesConfig} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <Header />
        <main
          style={{
            flex: 1,
            padding: "2rem",
            overflow: "auto",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

let moduleRoutes: RouteObject[] = [];

for (const module of modulesConfig) {
  if (module.type === "internal") {
    moduleRoutes.push({
      path: module.route,
      lazy: async () => {
        const { default: Component } = await import(`./pages/${module.name}.tsx`);
        return { Component };
      },
    });
  }

  if (module.type === "external") {
    moduleRoutes.push({
      path: module.route,
      element: <RemoteComponent name={module.name} module={module.module} />,
    });
  }
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ...moduleRoutes,
    ],
  },
]);

export default router;
