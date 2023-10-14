import React from "react";
import ChevronArrowIcon from "../(ui)/ChevronArrowIcon";
import Link from "next/link";

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
        <i className="crow-icon"></i>
        <span className="logo_name">Kawa</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">
            <i className="bx bx-grid-alt"></i>
            <span className="link_name">Dashboard</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" href="/">
                Dashboard
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <Link href="/workspace">
              <i className="bx bx-collection"></i>
              <span className="link_name">Workspaces</span>
            </Link>
            <ChevronArrowIcon />
          </div>
          <ul className="sub-menu">
            <li>
              <Link className="link_name" href="/workspace">
                Workspaces
              </Link>
            </li>
            <li>
              <Link href="/workspace/my">My Workspaces</Link>
            </li>
            <li>
              <Link href="/workspace/team">Team Workspaces</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <Link href="/teams">
              <i className="bx bxs-group"></i>
              <span className="link_name">Teams</span>
            </Link>
            <ChevronArrowIcon />
          </div>
          <ul className="sub-menu">
            <li>
              <Link className="link_name" href="/teams">
                Teams
              </Link>
            </li>
            <li>
              <Link href="#">Manage My Teams</Link>
            </li>
            <li>
              <Link href="#">Explore Teams</Link>
            </li>
            <li>
              <Link href="#">Help</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="link_name">Analytics</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" href="#">
                Analytics
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-line-chart"></i>
            <span className="link_name">Chart</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" href="#">
                Chart
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <div className="iocn-link">
            <Link href="#">
              <i className="bx bx-plug"></i>
              <span className="link_name">Plugins</span>
            </Link>
            <ChevronArrowIcon />
          </div>
          <ul className="sub-menu">
            <li>
              <Link className="link_name" href="#">
                Plugins
              </Link>
            </li>
            <li>
              <Link href="#">UI Face</Link>
            </li>
            <li>
              <Link href="#">Pigments</Link>
            </li>
            <li>
              <Link href="#">Box Icons</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-compass"></i>
            <span className="link_name">Explore</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" href="#">
                Explore
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-history"></i>
            <span className="link_name">History</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" href="#">
                History
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="#">
            <i className="bx bx-cog"></i>
            <span className="link_name">Setting</span>
          </Link>
          <ul className="sub-menu blank">
            <li>
              <Link className="link_name" href="#">
                Setting
              </Link>
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
