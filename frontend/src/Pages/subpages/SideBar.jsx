import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => (
    <React.Fragment>
        <div>
            <div className="logo">
                <img src="" alt="logo" />
                <p>MovieBox</p>
            </div>
            <div className="options">
                <NavLink id='gohome'>
                    {/* home */}
                    Home
                </NavLink>
                <NavLink id='movies'>
                    {/* movies */}
                    Movies
                </NavLink>
                <NavLink id='series'>
                    {/* tv */}
                    TV Series
                </NavLink>
                <div id='schedule'>
                    {/* calendar */}
                    Upcoming
                </div>
            </div>
            <div id="advert">
                <p>Play movie quizes and earn free tickets</p>
                <p>50k people are playing now</p>
                <button>Start Playing</button>
            </div>
            <button>
                {/* door */}
                Log out
            </button>
        </div>
    </React.Fragment>
)

export default SideBar
