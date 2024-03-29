import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Routes, Route, Outlet } from "react-router-dom";
import { Courses } from "./components/Courses";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Profile",
    path: "/crafted/pages/profile/overview",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const CoursesPage = () => (
  <Routes>
    <Route
      element={
        <>
          <></>
          <Outlet />
        </>
      }
    >
      <Route
        path="list"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>List</PageTitle>
            <Courses />
          </>
        }
      />
    </Route>
  </Routes>
);

export default CoursesPage;
