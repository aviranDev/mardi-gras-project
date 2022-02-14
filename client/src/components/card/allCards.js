import React, { useEffect, useState } from "react";
import cardService from "../../services/cardService";
import Card from "./card";
import Border from "../common/border";
import PageHeader from "../common/pageHeader";

function AllCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const { data } = await cardService.getAllCards();
      setCards(data)
    }

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [])



  return (
    <div className="container min-vh-100 mt-4">
      <Border />
      <PageHeader title="Mardi gras sellers" />
      <div className="row">
        {cards.length ? (
          cards.map((card) => <Card key={card._id} card={card} />)
        ) : (
          <h5>No cards yet</h5>
        )}
      </div>
    </div>
  );
}


export default AllCards;
