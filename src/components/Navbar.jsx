import { useState } from "react"
import Sidebar from "./Sidebar"
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"


export default function Navbar(){
    const [showSidebar, setShowSiderbar] = useState(false)
  
    const links = [
      {  
        name: "Home",
        path: "/",
        icon: faHome
      },
      {
        name: "Recipes",
        path: "/recipes",
        icon: faList
      },
      {
        name: "Settings",
        path: "/settings",
        icon: faCog
      }
    ]
  
    function closeSidebar(){
        setShowSiderbar(false)
    }
  
    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">FOODLAB</a>
                <div className="nav-links">
                    { links.map(link =>(
                        <a href="#!" key={link.name}>{link.name}</a>
                    ))

                    }
                    {/* <a href="#!">Home</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">About</a>
                    <a href="#!">Settings</a> */}
                </div>
                <div onClick={() => setShowSiderbar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links}/>}

        </>
    )
}