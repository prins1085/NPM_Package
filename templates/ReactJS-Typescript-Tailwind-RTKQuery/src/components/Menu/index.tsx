import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import iconLogout from "../../assets/images/icon_logout.svg";
import iconProfile from "../../assets/images/icon_profile.svg";
import iconDropdown from "../../assets/images/icon_dropdown.svg";
import * as style from "./style";
import { routesList } from "../common/shared/Routes";
import TypoGraphy from "../common/TypoGraphy";
import { theme } from "../../styledProvider";
import { TITLE } from "../../common/constants/Title";
import { actions } from "../../redux/store/store";
import Cookies from "js-cookie";

const Menu = (props: any) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isShow, setIsShow] = React.useState(false);
  const [isSidebarFolded, setIsSidebarFolded] = useState(false);
  const currentUser = useSelector((state: any) => state.auth.currentUser);
  console.log('currentUser: ', currentUser);

  React.useEffect(() => {
    if (pathname.includes("/login") || pathname.includes("/forgotPassword")) {
      setIsShow(false);
    } else {
      setIsShow(true);
    }
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove(TITLE.TOKEN);
    actions.auth.setCurrentUser(null);
    navigate("/login");
  };

  const handleClickProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      {isShow ? (
        <>
          <div className="flex">
            <style.SidebarContain folded={isSidebarFolded}>
              <style.CustomScrollbar className="flex flex-col gap-6 mt-2 relative">
                <div className="flex justify-center items-center pl-6">
                  <img src={logo} alt="LOGO" />
                </div>
                {routesList?.map(({ path, Icon, screen }: any, index: any) => {
                  const isActive = pathname === `/${path}`;
                  return (
                    <NavLink to={`/${path}`} key={index} className="py-3">
                      <div className="flex items-center gap-4 pl-6">
                        <style.RouteIcon>
                          <img
                            src={Icon}
                            alt="logo"
                            style={{
                              filter: !isActive
                                ? "hue-rotate(0deg) brightness(0) saturate(100%) invert(0)"
                                : "none",
                            }}
                          />
                        </style.RouteIcon>
                        <div className="flex gap-1">
                          <TypoGraphy
                            text={screen}
                            color={
                              isActive
                                ? theme.colors.primary
                                : theme.colors.textT1
                            }
                            size="sm"
                            weight="medium"
                          />
                        </div>
                      </div>
                    </NavLink>
                  );
                })}
                <div className="flex-1" />
                <style.LogoutSection onClick={handleLogout}>
                  <style.LogoutIcon>
                    <img src={iconLogout} alt="logout" />
                  </style.LogoutIcon>
                  {!isSidebarFolded && (
                    <TypoGraphy
                      text={TITLE.LOGOUT}
                      className="!capitalize"
                      size="md"
                      weight="medium"
                      color={theme.colors.primary}
                    />
                  )}
                </style.LogoutSection>
              </style.CustomScrollbar>
            </style.SidebarContain>
            <div className="flex-1 flex flex-col h-[100vh]">
              <style.HeaderContain
                className="flex justify-between items-center px-5 gap-5"
                folded={isSidebarFolded}
              >
                <div className="text-lg font-semibold">
                  {routesList.find(({ path }: any) => `/${path}` === pathname)
                    ?.screen || "TEXOTILE"}
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={handleClickProfile}>
                  <img
                    src={iconProfile}
                    className="w-[40px] h-[40px] rounded-[50%]"
                    alt="profileicon"
                  />
                  {/* <TypoGraphy text={currentUser?.name} size="sm" weight="medium" color={theme.colors.textT1} />
                  <img
                    src={iconDropdown}
                    alt="dropdownicon"
                  /> */}
                </div>
              </style.HeaderContain>
            </div>
          </div>
        </>
      ) : (
        props.children
      )}
    </>
  );
};

export default Menu;
