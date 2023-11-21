import React from "react";
import Card from "../components/Card"; // Update the import path
import Heading from "../components/Heading"; // Update the import path
import About from "../components/About"; // Update the import path

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("Get Started clicked");
  };

  return (
    <div>
      <div className="header">
        <Heading
          text="Discover the Best Food and Drinks"
          punchline="Naturally made Healthcare Products for the better care & support of your body."
          showButton={true}
          onButtonClick={handleButtonClick}
        />
      </div>
      <About description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries." />
      <Card
        title="Grilled  Tomatoes at Home"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        title="Snacks for Travel"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        title="Post-workout Recipes"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        title="How To Grill Corn"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        title="Crunchwrap Supreme"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
      <Card
        title="Broccoli Cheese Soup"
        content="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      />
    </div>
  );
};

export default HomePage;
