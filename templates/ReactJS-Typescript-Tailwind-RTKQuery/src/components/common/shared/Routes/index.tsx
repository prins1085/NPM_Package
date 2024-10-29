
import { TITLE } from "../../../../common/constants/Title";
import iconDashboard from "../../../../assets/images/icon_dashboard.svg";
import iconCompany from "../../../../assets/images/icon_company.svg";
import iconUser from "../../../../assets/images/icon_user.svg";
import iconQuality from "../../../../assets/images/icon_quality.svg";

export const routesList = [
  { path: "dashboard", Icon: iconDashboard, screen: TITLE.DASHBOARD },
  { path: "company", Icon: iconCompany, screen: TITLE.COMPANY },
  { path: "usermanagement", Icon: iconUser, screen: TITLE.USER_MANAGEMENT },
  { path: "quality", Icon: iconQuality, screen: TITLE.QUALITY },
];
