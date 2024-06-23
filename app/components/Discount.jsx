"use client";

import { Container } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Discount = () => {
  const t = useTranslations("discount");
  return (
    <div className="dicount-bg h-96">
      <Container>
        <div className="absolute text-white">
          <h1  data-aos="fade-up" className="text-3xl font-bold mt-20">
            Where Do You Get Service?
          </h1>
          <div className="w-300">
            <h1  data-aos="fade-up" className="mt-2 text-2xl">
              {t("register")}{" "}
              <span className="font-bold">{t("company_email")}</span>{" "}
              {t("discount")}
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Discount;
