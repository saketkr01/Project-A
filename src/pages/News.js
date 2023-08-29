import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "./News.scss";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const today = new Date();
const date = today.toISOString().slice(0, 10);

const backDate = new Date(today);
backDate.setDate(backDate.getDate() - 7);
const yesterDay = backDate.toISOString().slice(0, 10);

const url =
  "https://newsapi.org/v2/everything?q=hiring&from=" +
  date +
  "&to=" +
  yesterDay +
  "&sortBy=popularity&apiKey=6adb874cd20c461d8a3a9b38128d8f14";

console.log("Today: " + date);
console.log("Prev Date: " + yesterDay);

const News = () => {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(url).then((response) => {
        console.log(response.data);
        setNews(response.data.articles);
      });
      setLoading(false);
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(news.length / 10);

  const [currentPage, setCurrentPage] = React.useState(1);

  const lastIndex = currentPage * 10;
  const firstIndex = lastIndex - 10;

  const currentData = news.slice(firstIndex, lastIndex);

  const NextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const PrevPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="NewsPage">
        <Header />
        <div className="mid-div">
          <div className="news-container">
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              currentData?.map((item) => {
                return (
                  <div className="news-element">
                    <div className="news-img">
                      <img src={item.urlToImage} alt="article" />
                    </div>
                    <div className="news-details">
                      <h3>{item.title}</h3>
                      <p>
                        {item.description.slice(0, 200)}
                        {item.description.length > 200 ? "..." : ""}
                      </p>
                      <h5>
                        Author: <span>{item.author}</span> | Published:{" "}
                        <span>{item.publishedAt.slice(0, 10)}</span>
                      </h5>
                      <Link to={item.url} target="_blank">
                        Read More
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="paging-container">
            <div className="paging-left">
              <button className="btn-paging" onClick={PrevPageHandler}>
                Prev
              </button>
            </div>
            <div className="paging-center">
              <h4>
                {currentPage} <span> / {totalPages}</span>
              </h4>
            </div>
            <div className="paging-right">
              <button className="btn-paging" onClick={NextPageHandler}>
                Next
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default News;
