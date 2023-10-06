import React from "react";
import ChevronArrowIcon from "../(ui)/ChevronArrowIcon";

{
  /* <script>
    let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
      arrow[i].addEventListener("click", (e)=>{
     let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
     arrowParent.classNameList.toggle("showMenu");
      });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
      sidebar.classNameList.toggle("close");
    });
    </script> */
}
// interface SideBarProps {
//   isOpen?: boolean;
// }
// {`sidebar ${!isOpen ? "close" : ""}`}
function SideBar() {
  return (
    <div className="sidebar close">
      <div className="logo-details">
        <i className="bx bxl-c-plus-plus"></i>
        <span className="logo_name">Kawa</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-collection"></i>
              <span className="link_name">Workspaces</span>
            </a>
            <ChevronArrowIcon />
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Workspaces
              </a>
            </li>
            <li>
              <a href="#">My Workspaces</a>
            </li>
            <li>
              <a href="#">Team Workspaces</a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bxs-group"></i>
              <span className="link_name">Teams</span>
            </a>
            <ChevronArrowIcon />
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Teams
              </a>
            </li>
            <li>
              <a href="#">Manage My Teams</a>
            </li>
            <li>
              <a href="#">Explore Teams</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name">Analytics</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Analytics
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-line-chart"></i>
            <span className="link_name">Chart</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Chart
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <a href="#">
              <i className="bx bx-plug"></i>
              <span className="link_name">Plugins</span>
            </a>
            <ChevronArrowIcon />
          </div>
          <ul className="sub-menu">
            <li>
              <a className="link_name" href="#">
                Plugins
              </a>
            </li>
            <li>
              <a href="#">UI Face</a>
            </li>
            <li>
              <a href="#">Pigments</a>
            </li>
            <li>
              <a href="#">Box Icons</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-compass"></i>
            <span className="link_name">Explore</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Explore
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-history"></i>
            <span className="link_name">History</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                History
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i className="bx bx-cog"></i>
            <span className="link_name">Setting</span>
          </a>
          <ul className="sub-menu blank">
            <li>
              <a className="link_name" href="#">
                Setting
              </a>
            </li>
          </ul>
        </li>
        <li>
          <div className="profile-details">
            <div className="profile-content">
              {/* <img src="image/profile.jpg" alt="profileImg"/> */}
            </div>
            <div className="name-job">
              <div className="profile_name">Prem Shahi</div>
              <div className="job">Web Desginer</div>
            </div>
            <i className="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
