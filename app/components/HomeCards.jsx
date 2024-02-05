"use client";

import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { homeService } from "../services/homeService";
import Card from "./Card";
import { motion } from "framer-motion";

const HomeCards = () => {
  const [card, setCard] = useState([]);

  async function getCards() {
    const homeCards = await homeService();
    setCard(homeCards.data.options.cards);
  }

  useEffect(() => {
    getCards();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3 }}
      className="h-auto my-10"
    >
      <Container>
        <Grid container spacing={3}>
          {card.map((homecard) => (
            <Card key={homecard.id} homecard={homecard} />
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default HomeCards;
