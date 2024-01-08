import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <header>
          <h1 className="title">L'histoire de Windows</h1>
          <p className="description">
            Ce site web présente les différentes versions de Windows.
          </p>
        </header>
        <section>
          <h2>Windows 95</h2>
          <p>Contenu de la section 1</p>
          <img src="https://user-images.githubusercontent.com/24926784/145944730-48de7cfc-d585-41a9-8f90-f5d08570a03e.png" alt="Image 1" />
        </section>
        <section>
          <h2>Windows 98</h2>
          <p>Contenu de la section 1</p>
          <img src="https://lafibre.info/testdebit/windows_old/201404_windows_98se_bureau_bienvenue.png" alt="Image 1" />
        </section>
        <section>
          <h2>Windows Millenium Edition</h2>
          <p>Contenu de la section 1</p>
          <img src="https://i.pinimg.com/originals/ad/47/48/ad47480c93db686245abf0d4564bb07a.png" alt="Image 1" />
        </section>
        <section>
          <h2>Windows 2000</h2>
          <p>Contenu de la section 1</p>
          <img src="https://img-0.journaldunet.com/PmuNAOukL6HCUxY22QcxUMLIgXI=/800x/smart/f4fe570b2fc24ae7b3773f6c2047e1a4/ccmcms-jdn/1889450.jpg" alt="Image 1" />
        </section>
        <section>
          <h2>Windows XP</h2>
          <p>Contenu de la section 1</p>
          <img src="https://sf1.cnetfrance.fr/wp-content/uploads/cnet/2023/05/windows-xp-modern-big.jpg" alt="Image 1" />
        </section>
        <section>
          <h2>Windows Vista</h2>
          <p>Contenu de la section 1</p>
          <img src="https://www.01net.com/app/uploads/2017/04/maxresdefault.jpg" alt="Image 1" />
        </section>
        <section>
          <h2>Windows 7</h2>
          <p>Contenu de la section 3</p>
          <img src="https://livecards.net/pl/windows-7-professional-oem-70706.jpg" alt="Image 3" />
        </section>
        <section>
          <h2>Windows 8.1</h2>
          <p>Contenu de la section 2</p>
          <img src="https://upload.wikimedia.org/wikipedia/en/d/d2/Windows_8.1_Pro_Default_Start_Screen.png" alt="Image 2" />
        </section>
        <section>
          <h2>Windows 10</h2>
          <p>Contenu de la section 3</p>
          <img src="https://www.silicon.fr/wp-content/uploads/2017/05/Windows-10-Screen.png" alt="Image 3" />
        </section>
        <section>
          <h2>Windows 11</h2>
          <p>Contenu de la section 3</p>
          <img src="https://news.microsoft.com/wp-content/uploads/prod/sites/113/2021/06/Wondows-11-Start.jpg" alt="Image 3" />
        </section>
        <section>
          <h2>Frise chronologique du logo Microsoft</h2>
          <p>Contenu de la section 3</p>
          <img src="https://fr.officetooltips.com/images/tips/414/1.png" alt="Image 3" />
        </section>
      </main>
      <footer>
        <p>&copy; 2022 Mon site web</p>
      </footer>
    </div>
  );
};

export default App;
