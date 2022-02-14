import React, { useState, useEffect } from "react";
import cardService from "../../services/cardService";
import userService from "../../services/userService";
import MyCard from "./myCard";
import Border from "../common/border";
import PageHeader from "../common/pageHeader";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function MyCards() {
  const [profile, setProfile] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData()
    fecthUserProfile()
  }, [])

  async function fetchData() {
    const { data } = await cardService.getMyCards();
    if (data.length) {
      setCards(data)
    }
  }

  const fecthUserProfile = async () => {
    const { data } = await userService.getUserProfile();
    setProfile(data)
  }




  const handelCardDelete = async (id) => {
    await cardService.deleteCardById(id);
    toast("Card deleted");
    setCards({
      cards: cards.filter((card) => card._id !== id)
    })
    fetchData()
  };

  return (
    <div className="container min-vh-100 mt-4">
      <Border />
      <PageHeader title="My business profile" />
      <div className="row">
        <div className="col-8">
          <p>
            Hello <b>{profile.name}</b>, Here you can manage your business account
            details
          </p>
        </div>

        <div className="row">
          {cards.length ? (
            cards.map((card) => (
              <MyCard
                key={card._id}
                card={card}
                onDelete={() => handelCardDelete(card._id)}
              />
            ))
          ) : (
            <>
              <h5>No business profile yet ? create one here</h5>
              <div className="row">
                <div className="col-6">
                  <Link to="/create-card">
                    {" "}
                    <i className="bi bi-plus"></i>Create a new card
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCards;
