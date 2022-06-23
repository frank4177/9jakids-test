import React, { useEffect, useState } from "react";
import "./games.css";
import axios from "axios";
import Topbar from "../../components/topbar/topbar";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Navbarr from "../../components/navbar/navbar";

const SearchResult = () => {
  const [games, setGames] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { keyword } = useParams();


  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get(
          "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"
        );
        console.log(res);
        setGames(res.data);
      } catch (err) {}
    };
    getGames();
  }, []);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    setFilteredProducts(
      games.filter((game) =>
        Object.entries(filters).every(([key, value]) =>
          game[key].includes(value)
        )
      )
    );
  }, [games, filters]);

  return (
    <div>
      <Topbar />
      <Navbarr />
      <div className="games-container" style={{height: "90vh"}}>
        <div className="filter">
          <select name="Group" onChange={handleFilters}>
            <option value="" selected disabled>
              Group
            </option>
            <option value="Academic">Academic</option>
            <option value="Financial Literacy">Financial Literacy</option>
            <option value="">None</option>
          </select>

          <select name="Level" onChange={handleFilters}>
            <option value="" selected disabled>
              Level
            </option>
            <option value="Key Stage 1">Key Stage 1</option>
            <option value="Financial Literacy">Financial Literacy</option>
            <option value="Key Stage 2">Key Stage 2</option>
          </select>
        </div>
        <div className="games-wrapper">
          {filteredProducts
  .filter((game) => {
    if (game.Subject.toLowerCase().includes(keyword.toLowerCase())  || game.Topic.toLowerCase().includes(keyword.toLowerCase()) || game.Level.toLowerCase().includes(keyword.toLowerCase())) {
      return game;
    }
  }).map((game, index) => (
            <div className="game" game={game} key={index}>
              <div className="img-wrap">
                <img src={game.GameImage} className="game-img" />
                <img src={game.GameImage} className="small-img" alt="" />
              </div>
              <div className="game-desc-wrap">
                <div className="game-title">{game.GameTitle}</div>
                <div className="game-desc">{game.GameDescription}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchResult;
