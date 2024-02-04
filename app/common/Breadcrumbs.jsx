import { Breadcrumbs, Container, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, breadcrumb }) => {
  return (
    <div className="h-20">
      <Container>
        <div className="breadcrumb py-2">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">{breadcrumb}</Typography>
          </Breadcrumbs>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </Container>
    </div>
  );
};

export default Breadcrumb;
