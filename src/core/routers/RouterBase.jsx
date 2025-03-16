import { BrowserRouter, Route, Routes } from "react-router-dom";
import { moduleRegistry } from "../../config/registry";
import { LayoutAuth, LayoutDashboard } from "../layouts";
import { PageDashboard, PageSignIn } from "../pages";
import { useAuth } from "../hooks";
import { AppContext } from "../context";

const authRouter = {
  layout: {
    path: "/",
    element: <LayoutAuth />,
  },
  childs: {
    signin: {
      path: "",
      index: true,
      element: <PageSignIn />,
    },
  },
};

const dashboardRouter = {
  layout: {
    path: "dashboard",
    element: <LayoutDashboard />,
  },
  childs: {
    dashboard: {
      index: true,
      path: "",
      element: <PageDashboard />,
    },
  },
};

export default function RouterBase() {
  const auth = useAuth();

  return (
    <AppContext.Provider value={{ auth }}>
      <BrowserRouter>
        <Routes>
          <Route
            path={authRouter.layout.path}
            element={authRouter.layout.element}
          >
            {Object.values(authRouter.childs).map((value, index) => (
              <Route key={index} {...value} />
            ))}
          </Route>

          <Route
            path={dashboardRouter.layout.path}
            element={dashboardRouter.layout.element}
          >
            {Object.values(dashboardRouter.childs).map((value, index) => (
              <Route key={index} {...value} />
            ))}
          </Route>

          {Object.values(moduleRegistry).map((module) => (
            <Route
              key={module.id}
              path={module.router.layout.path}
              element={module.router.layout.element}
            >
              {Object.values(module.router.childs).map((routerChild, index) => (
                <Route key={index} {...routerChild} />
              ))}
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
