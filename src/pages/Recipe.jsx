import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("summary");

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>

      <Info>
        <Button
          className={activeTab === "summary" ? "active" : ""}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </Button>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "summary" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          </div>
        )}
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: rgb(128, 0, 0);
    color: white;
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  li {
    font-size: 14px;
    line-height: 2rem;
  }

  ul {
    margin-top: 2rem;
  }

  @media (max-width: 1365px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    h2 {
      text-align: center;
      margin-top: -60px;
    }

    img {
      width: 100%;
    }

    li {
      margin-left: 20px;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media (max-width: 1365px) {
    width: 100%;

    margin-top: 20px;
  }
`;

const Info = styled.div`
  margin-left: 5rem;

  h3 {
    color: black;
    font-size: 14px;
    text-align: justify;
    line-height: 2rem;
  }

  @media (max-width: 1365px) {
    width: 100%;
    margin: 0;
  }
`;

export default Recipe;
