import React from "react";
import "./Home.css";
import content from '../../content/pages/home';
import { Container, Tabs, Tab, Typography } from "@mui/material";
import ArticlePreview from "../../components/articles/preview/ArticlePreview";

const Landing = () => {
    return (
        <Container id="landing-home">
            <Typography variant="h1">inforNation</Typography>
            {
                content.map((category) => 
                <>
                <h1>{category.title}</h1>
                    <Tabs
                        key={`category-${category}`}
                        value={0}
                        variant='scrollable'
                        scrollButtons
                        >
                        {category.articles.map((article, ii) => 
                            <Tab
                                key={`${category}-${article}-${ii}-preview`} 
                                icon={<ArticlePreview article={article} />}
                            />
                        )}
                    </Tabs>
                </>
                )
            }
        </Container>
    )
}

export default Landing;
