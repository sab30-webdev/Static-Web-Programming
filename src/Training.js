import { useState } from "react";
import Cards from "./Cards/Cards";

const Training = ({ user }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <section className="landing-training">
        <div className="main-text">
          <h1>TRAINING</h1>
          <p>
            Maecenas pharetra convallis posuere morbi leo urna. Purus viverra
            accumsan in nisl nisi. Aliquet nec ullamcorper sit amet. Nibh cras
            pulvinar mattis nunc sed blandit libero.
          </p>
          <div className="button">PROJECTS</div>
          <div className="brand-icon-div search-div">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/search--v1.png"
              className="search-img"
              alt="search-img"
            />
            <input
              className="search float-start"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>
      <Cards user={user} search={search} />
    </>
  );
};

export default Training;
