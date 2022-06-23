import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import "./games.css";
import axios from "axios";

const Games = ({id}) => {
  const [morePost, setMorePost] = useState(6);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get(
          "https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter"
        );

        setGames(res.data);
      } catch (err) {}
    };
    getGames();
  }, []);

  const animation = {
    offscreen: { opacity: 0, y: "30%" },
    onscreen: {
      opacity: 1,
      y: "0%",
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 2,
      },
    },
  };

  return (
    <div className="games-container">
      <div className="games-title">Popular Games</div>
      <div className="games-wrapper" style={{height:"100%"}}>
        {games.map((game, index) => (
          <motion.div
            className="game"
            game={game}
            key={index}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.5 }}
            variants={animation}
            id={id}
          >
            <div className="img-wrap">
              <img src={game.GameImage} className="game-img" />
              <img src={game.GameImage} className="small-img" alt="" />
            </div>
            <div className="game-desc-wrap">
              <div className="game-title">{game.GameTitle}</div>
              <div className="game-desc">{game.GameDescription}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Games;
