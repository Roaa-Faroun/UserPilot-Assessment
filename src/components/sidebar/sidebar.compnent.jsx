import "./sidebar.css";
import logo from "../../assets/imgs/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faTicket,
  faLightbulb,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
const SideBar = () => {
  return (
    <aside>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <li>
          <div>
            <FontAwesomeIcon color={" #DDE2FF;"} icon={faChartPie} />
          </div>
          <div>
            <a href="#">Overview</a>
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon color={" #DDE2FF"} icon={faTicket} inverse />
          </div>
          <div>
            <a href="#">Tickets</a>
          </div>
        </li>
        <li>
          <div>
            <FontAwesomeIcon color={"#DDE2FF"} icon={faLightbulb} />
          </div>
          <div>
            <a href="#">Ideas</a>
          </div>
        </li>
        <li className="active">
          <div>
            <FontAwesomeIcon color={"#DDE2FF"} icon={faUserTie} />
          </div>
          <div>
            <a href="#">Users</a>
          </div>
        </li>
      </ul>
    </aside>
  );
};
export default SideBar;
