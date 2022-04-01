import React from "react";
import "./Home.css";
import content from '../../content/pages/home';
import { Container } from "@mui/material";
import CategoryCarousel from "../../components/categoryCarousel/categoryCarousel";

const Landing = () => {
    return (
        <Container id="landing-home">
            {
                content.map((category) => 
                    <CategoryCarousel category={category} />
                )
            }
        </Container>
    )
};

export default Landing;
