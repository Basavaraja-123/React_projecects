import { NavLink } from "react-router-dom"
import './Home.css'
import { useRef } from "react";
import TwitterLogo from '../img/twitter-logo.svg'
import HomeLogo from '../img/home outline.svg'
import ProfileLogo from '../img/profile outline.svg'
import ExploreLogo from '../img/explore.svg'
import NotificationLogo from '../img/notification.svg'
import MoreLogo from '../img/more.svg'
import ListsLogo from '../img/lists.svg'
import BookmarksLogo from '../img/Vector12.svg'
import MessagesLogo from '../img/messages.svg'
import Tyomniy from '../img/Vector.svg';
import Ustoz from "../img/bobur.png"
import mushtariy from "../img/mushtariy.png"
import uzim from "../img/uzim.jpg"
import devachki from "../img/devachki.png"
import devfoto from "../img/foto.png"
import ImageLogo from '../img/image.svg'
import GifLogo from '../img/gif.svg'
import ScheduleLogo from '../img/schedule.svg'
import SmileLogo from '../img/smile.svg'
import StatusLogo from '../img/stats.svg';
import useUser from "../Hooks/UseUser";
import commentLogo from '../img/comment.svg'
import retweetLogo from '../img/retweet.svg'
import shareLogo from '../img/share.svg'
import likeLogo from '../img/like.svg'
import statisticsLogo from '../img/statistics.svg'
import likeFillogo from '../img/like fill.svg'
import shashlik from '../img/shashlik.png'
import searchicon from '../img/search.svg'
import settingsicons from '../img/settings.svg'


function Home() {
    // let [token, setToken] = useAuth()
    let tyomniy = useRef()
    let tyomniy__mini = useRef()
    let header = useRef()
    let tweet__btn = useRef()
    let [obj] = useUser()

    let counter = useRef()
    let counter1 = useRef()
    let counter2 = useRef()

    let data = JSON.parse(obj)


    return (
        <>
            <div ref={tyomniy} className="home__mini-container">
            <div ref={tyomniy__mini} className="tyomniy">
                <header ref={header} className="home__header">
            <img className="header__logo" src={TwitterLogo} alt="img" />
            <ul className="header__list">
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={HomeLogo} alt="img" />
                Home</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={ExploreLogo} alt="img" />
                Explore</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={NotificationLogo} alt="img" />
                Notifications</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={MessagesLogo} alt="img" />
                Messages</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={BookmarksLogo} alt="img" />
                Bookmarks</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={ListsLogo} alt="img" />
                Lists</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Profile">
                <img className="header__link--img" src={ProfileLogo} alt="img" />
                Profile</NavLink>
                </li>
                <li className="header__item">
                <NavLink className="header__navlink" to="/Home">
                <img className="header__link--img" src={MoreLogo} alt="img" />
                More</NavLink>
                </li>
            </ul>
            <button className="header__btn" to="/Home">
                Tweet
            </button>
            <NavLink className="Profile__navlink" to="/Profile">
                <img className="Profile__link--img" src={Ustoz} alt="img" />
                <span className="header__link--span">
                <h2 className="Profile__link-title">{data.username}</h2>
                <a className="Profile__link--link" href="#link">{data.email}</a>
                </span>
                <img className="Profile__link--logo" src={MoreLogo} alt="img" />
            </NavLink>
        </header>
        <main className="main">
            <div className="main__container">
        <div className="main__header">
                <h2 className="main__header--title">Home</h2>
            <img className="main__header--img" src={Tyomniy} alt="img"  onClick={() => {
                tyomniy.current.classList.toggle('toggle')
                tyomniy__mini.current.classList.toggle('toggle__mini')
                header.current.classList.toggle('border')
            }}/>
        </div>
        <div className="main__next">
            <span className="main__next--span">
            <img className="main__next--img" src={Ustoz} alt="img"/>
            <input className="main__next--input" type="text" placeholder="What’s happening" maxLength="100" minLength="1" onChange={(e) => {
                 if(e.target.value.length >= 2){
                     tweet__btn.current.style.opacity = '1';
                 } else{
                    tweet__btn.current.style.opacity = '0.4';
                 }
            }}/>
            </span>
            <ul className="main__next--list">
                <li className="main__next--item">
                    <img className="main__next--icon" src={ImageLogo} alt="img" />
                </li>
                <li className="main__next--item">
                    <img className="main__next--icon" src={GifLogo} alt="img" />
                </li>
                <li className="main__next--item">
                    <img className="main__next--icon" src={StatusLogo} alt="img" />
                </li>
                <li className="main__next--item">
                    <img className="main__next--icon" src={SmileLogo} alt="img" />
                </li>
                <li className="main__next--item">
                    <img className="main__next--icon" src={ScheduleLogo} alt="img" />
                </li>
            </ul>
            <button className="tweet__btn" ref={tweet__btn}>Tweet</button>
        </div>
        <div className="main__next2">
            <div className="main__next2--span">
            <img className="main__next2--img" src={devfoto} alt="img" />
            <h2 className="main__next2--title">Designsta</h2>
            </div>
            <p className="main__next2--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, culpa.</p>
           <ul className="main__next2--list">
               <li className="main__next2--item">
               <img className="main__next2--icon" src={commentLogo} alt="img" />
               <p className="main__next2--count">14</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={retweetLogo} alt="img" />
               <p className="main__next2--count">6</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={likeLogo} alt="img" onClick={(e) => {
                   e.target.classList.toggle('focus')
                   if(e.target.classList.contains('focus')){
                    e.target.src = likeFillogo
                    counter.current.textContent = '123'
                   }else {
                    e.target.src = likeLogo
                    counter.current.textContent = '122'
                   }
               }}/>
               <p ref={counter} className="main__next2--count">122</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={shareLogo} alt="img" />
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={statisticsLogo} alt="img" />
               </li>
           </ul>
        </div>
        <div className="main__next2">
            <span className="main__next2--span">
            <img className="main__next2--img" src={devachki} alt="img" />
            <h2 className="main__next2--title">cloutexhibition</h2>
            </span>
            <p className="main__next2--text">YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
           <ul className="main__next2--list">
               <li className="main__next2--item">
               <img className="main__next2--icon" src={commentLogo} alt="img" />
               <p className="main__next2--count">8</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={retweetLogo} alt="img" />
               <p className="main__next2--count">6</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={likeLogo} alt="img" onClick={(e) => {
                   e.target.classList.toggle('focus')
                   if(e.target.classList.contains('focus')){
                    e.target.src = likeFillogo
                    counter1.current.textContent = '3'
                   }else {
                    e.target.src = likeLogo
                    counter1.current.textContent = '2'
                   }
               }}/>
               <p ref={counter1} className="main__next2--count">2</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={shareLogo} alt="img" />
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={statisticsLogo} alt="img" />
               </li>
           </ul>
        </div>
        <div className="main__next3">
            <span className="main__next2--span">
            <img className="main__next2--img" src={Ustoz} alt="img" />
            <h2 className="main__next2--title">{data.username}</h2>
            </span>
            <p className="main__next2--text">Обетда.....<br /> Кечиринглар...</p>
            <img className="main__next2--abed" src={shashlik} alt="img" />
           <ul className="main__next2--list">
               <li className="main__next2--item">
               <img className="main__next2--icon" src={commentLogo} alt="img" />
               <p className="main__next2--count">8</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={retweetLogo} alt="img" />
               <p className="main__next2--count">6</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={likeLogo} alt="img" onClick={(e) => {
                   e.target.classList.toggle('focus')
                   if(e.target.classList.contains('focus')){
                    e.target.src = likeFillogo
                    counter2.current.textContent = '43'
                   }else {
                    e.target.src = likeLogo
                    counter2.current.textContent = '42'
                   }
               }}/>
               <p ref={counter2} className="main__next2--count">42</p>
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={shareLogo} alt="img" />
               </li>
               <li className="main__next2--item">
               <img className="main__next2--icon" src={statisticsLogo} alt="img" />
               </li>
           </ul>
        </div>
            </div>
        </main>
        <footer className="footer">
        <span className="footer__span">
            <img className="footer__icon" src={searchicon} alt="img" />
        <input className="footer__input" type="text" placeholder="Search Twitter"/>
        </span>
        <div className="footer__wrapper">
            <span className="footer__wrapper--span">
            <h2 className="footer__wrapper--title">
            Trends for you
            </h2>
            <img className="footer__wrapper--icon" src={settingsicons} alt="" />
            </span>
            <div className="footer__list--div">
            <ul className="footer__wrapper--list">
                <li className="footer__wrapper--item">
                    <p className="footer__wrapper--list-text">Trending in Uzbekistan</p>
                    <h2 className="footer__wrapper--list-title">Revolution</h2>
                    <p className="footer__wrapper--text">2.3k Tweets</p>
                </li>
                <li className="footer__wrapper--item">
                    <p className="footer__wrapper--list-text">Trending in Russian</p>
                    <h2 className="footer__wrapper--list-title">Revolution</h2>
                    <p className="footer__wrapper--text">8.3m Tweets</p>
                </li>
                <li className="footer__wrapper--item">
                    <p className="footer__wrapper--list-text">Trending in America</p>
                    <h2 className="footer__wrapper--list-title">Revolution</h2>
                    <p className="footer__wrapper--text">14.6m Tweets</p>
                </li>
            </ul>
            <ul className="footer__wrapper--list-more">
                <li className="footer__wrapper--item-more">
                    <img className="footer__wrapper--item-icon" src={MoreLogo} alt="img" />
                </li>
                <li className="footer__wrapper--item-more">
                    <img className="footer__wrapper--item-icon" src={MoreLogo} alt="img" />
                </li>
                <li className="footer__wrapper--item-more">
                    <img className="footer__wrapper--item-icon" src={MoreLogo} alt="img" />
                </li>
            </ul>
            </div>
            <NavLink className="footer__wrapper--Navlink" to="/Profile">Show more</NavLink>
        </div>
        <div className="footer__dropped">
            <h2 className="footer__dropped--title">You might like</h2>
            <ul className="footer__dropped--list">
                <li className="footer__dropped--item">
                   <span className="footer__dropped--span">
                   <img className="footer__dropped--img" src={mushtariy} alt="img" />
                    <h2 className="footer__dropped--item-title">Mushtariy</h2>
                   </span>
                    <p className="footer__dropped--text">@Mushtar565266</p>
                    <button className="footer__dropped--btn" onClick={(e) => {
                    e.target.classList.toggle('follow')
                    if(e.target.classList.contains('follow')){
                        e.target.textContent = 'Unfollow'
                    }else {
                        e.target.textContent = 'Follow'
                    }
                    }}>Follow</button>
                </li>
                <li className="footer__dropped--item">
                   <span className="footer__dropped--span">
                   <img className="footer__dropped--img" src={uzim} alt="img" />
                    <h2 className="footer__dropped--item-title">Farrux</h2>
                   </span>
                    <p className="footer__dropped--text">Farrukh_Musratov</p>
                    <button className="footer__dropped--btn" onClick={(e) => {
                    e.target.classList.toggle('follow')
                    if(e.target.classList.contains('follow')){
                        e.target.textContent = 'Unfollow'
                    }else {
                        e.target.textContent = 'Follow'
                    }
                    }}>Follow</button>
                </li>
            </ul>
            <NavLink className="footer__wrapper--Navlink" to="/Profile">Show more</NavLink>
        </div>
        <ul className="footer__list">
            <li className="footer__item">
                <a className="footer__link" href="#link">Terms of Service</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#link">Privacy Policy</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#link">Cookie Policy</a>
            </li>
        </ul>
        <ul className="footer__list">
            <li className="footer__item">
                <a className="footer__link" href="#link">Imprint</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#link">Ads Info</a>
            </li>
            <li className="footer__item">
                <a className="footer__link" href="#link">© 2021 Twitter, Inc.</a>
            </li>
        </ul>
        </footer>
            </div>
            </div>
            </>
    )
}

export default Home
