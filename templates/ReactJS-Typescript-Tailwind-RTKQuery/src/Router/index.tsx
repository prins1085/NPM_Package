import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import { useGetCurrentUserQuery } from "../api/auth";
import { useSelector } from "react-redux";
import { actions } from "../redux/store/store";
import AuthHandler from "../auth/AuthHandler";
import Dashboard from "../pages/Dashboard";
import Menu from "../components/Menu";

const Router = () => {
  const [stopUserQuery, setStopUserQuery] = useState(false);
  const [loader, setLoader] = useState(false);
  const currentUserQuery = useGetCurrentUserQuery(null);
  const currentUser = useSelector((state: any) => state.auth.currentUser);

  useEffect(() => {
    if (!stopUserQuery) {
      actions.auth.setCurrentUser(currentUserQuery.data?.result);
      actions.auth.setLoading(currentUserQuery.isLoading);
    }
    setLoader(true);
  }, [currentUserQuery, stopUserQuery]);

  return (
    <BrowserRouter>
      <AuthHandler />
      {loader && (
        <Menu>

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/login"
            element={<Login setStopUserQuery={setStopUserQuery} />}
            />
          {currentUser && (
            <Route path="*" element={<Navigate to="/dashboard" />} />
          )}
        </Routes>
          </Menu>
      )}
    </BrowserRouter>
  );
};

export default Router;
