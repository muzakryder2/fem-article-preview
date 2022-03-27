import { useState } from "react";
import { motion } from "framer-motion";
import {
  RiShareForwardFill,
  RiFacebookBoxFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";

import cardImg from "../assets/images/drawers.jpg";
import avatarImg from "../assets/images/avatar-michelle.jpg";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      <div className="card__image">
        <img src={cardImg} alt="drawers" />
      </div>
      <div className="card__content">
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I've got some simple tips to help
          you make any room feel complete.
        </p>
        <div className="card__content__social">
          <img src={avatarImg} alt="michelle" />
          <div className="card__content__nameDate">
            <h3>Michelle Appleton</h3>
            <p>28 Jun 2020</p>
          </div>
          <RiShareForwardFill
            className={`share-btn ${isOpen ? "active" : null}`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          className="share__modal__wrapper"
        >
          <div className="share__modal">
            <p>share</p>
            <a href="#" className="share__modal-link">
              <RiFacebookBoxFill />
            </a>
            <a href="#" className="share__modal-link">
              <RiTwitterFill />
            </a>
            <a href="#" className="share__modal-link">
              <RiPinterestFill />
            </a>
            <div className="share__modal__triangle"></div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
