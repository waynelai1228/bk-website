import Header from './Header.js';
import './App.css';

function Writeups() {
  return (
    <div className="Writeups">
      <Header />
      <div className={`${"fullpage"} ${"darkgray"} ${"section"}`} id="write-ups">
        <div className="sectionTitle">Write-ups</div>
        <div className="sectionContent">
          <a href="https://uwctf.cs.washington.edu/writeups/google-ctf-2017">Google CTF 2017</a><br/>
          <a href="https://uwctf.cs.washington.edu/writeups/uiuctf2017">UIUC CTF 2017</a><br/>
          <a href="https://github.com/BatmansKitchen/ctf-writeups">Write-ups Github</a><br/>
        </div>
      </div>
    </div>
  );
}

export default Writeups;
