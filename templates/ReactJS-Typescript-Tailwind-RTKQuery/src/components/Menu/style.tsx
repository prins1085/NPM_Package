import { styled } from "styled-components";
import { theme } from "../../styledProvider";

type CardProps = {
  colors: any;
};

interface ContainWrapperProps {
  folded: boolean;
}

export const HeaderContain = styled.header<ContainWrapperProps>`
  height: 70px;
  background: ${theme.colors.secondary};
  position: fixed;
  top: 0;
  left: ${(props: any) => (props.folded ? "115px" : "265px")};
  right: 0;
  z-index: 1000;
  transition: left 0.3s;
  box-shadow: 10px 0 15px 0 rgba(0, 0, 0, 0.15);
`;

export const SidebarContain = styled.aside<ContainWrapperProps>`
  background: ${theme.colors.secondary};
  width: ${(props: any) => (props.folded ? "95px" : "260px")};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.08);

  .active {
    img {
      filter: invert(43%) sepia(51%) saturate(5944%) hue-rotate(214deg)
        brightness(100%) contrast(90%);
    }
    &.active {
      outline: none;
      position: relative;
      background-color: ${theme.colors.primaryP8};
      border-radius: 0 25px 25px 0;
      border-left: 5px solid ${theme.colors.primary};
      padding: 12px 0;
    }
  }
`;

export const CustomScrollbar = styled.div`
  overflow: auto;
  scrollbar-width: none;
`;

export const RouteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.primaryP8};
  cursor: pointer;
  margin: 0 0 20px 25px;
  padding: 0 4px 0 0;
  color: ${theme.colors.primary};
  gap: 4px;
  border-radius: 8px;
`;

export const LogoutIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;