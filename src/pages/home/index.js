
import React, { Component } from "react";

import CarouselImage from "../../assets/cover.png";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import Cover from "../../components/cover/cover";
import { Carousel } from "../../components/Carousel";
import Titleintroduction from "../../components/titleintroduction/titleintroduction";
import Blog from "../../components/BlogCard/blog";
import Forum from "../../components/ForumCard/forum";
import Twitter from "../../components/twitterfeed/twitter";

class Home extends Component {
  render(){
    return(
      
        <DefaultLayout>
          <Cover />
          <Carousel image={CarouselImage} />
          <Titleintroduction />
          <p>inde.home test</p>
          <Blog />
          <Forum />
          <Twitter />
        </DefaultLayout>
      
    );
  }
}

export default Home;
