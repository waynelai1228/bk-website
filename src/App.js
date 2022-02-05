import logo from './bk_logo.png';
import Header from './Header.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={`${"fullpage"} ${"darkgray"}`} id="front-page">
        <img src={logo} id="logo" alt="logo" height="400px" width="400px"/>
        <div id="frontName">Batman&#39;s Kitchen</div>
        <div id="frontDescription">UW security and privacy community</div>
      </div>
      <div className={`${"fullpage"} ${"darkgray"} ${"section"}`} id="about-us">
        <div className="sectionTitle">About Us</div>
        <div className="sectionContent">
          Batman&#39;s Kitchen is the computer security and privacy community at University of Washington.
          We primarily participate in <a href="http://www.nationalccdc.org">CCDC</a> and CTFs competitions.
          Batman&#39;s Kitchen was founded in 2013 by a group of computer ethusiasts as a gathering place for hackers to break/hack stuff, learn, and have fun.
          At the present time, we keep striving to be an inclusive and supportive place for people to learn and grow in security field.
          <br/>
          <br/>
          We have a <a href="https://ctftime.org/team/3135">CTF time page</a>.
          <br/>
          <br/>
          During CCDC season, our CCDC meetings are happening at 6:00 pm on Tuesday and Thursday.
          Our regular weekly meeting is happening at 6:00 pm on Wednesday, where we invite speakers to come and talk to us about interesting security and privacy related topics.
          Newcomers who have no experience but just want to learn are totally welcome. Come visit, and you&#39;ll learn a ton. 
          <br/>
          <br/>
          *CTF is Capture the Flag – A sort of computer security competition. Common topics include web exploitation, reverse engineering, forensics, and more.
        </div>
      </div>
    </div>
  );
}

export default App;
