import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Home from './Home';
import React from 'react';

const Layout = ({ children }: any) => {
  return <Outlet />;
};

const NoMatch = () => 'Not Found';

const Router = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/dashboards" element={<Home />} />
      <Route path="/dashboards/:id" element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  </Routes>
);

export default Router;
