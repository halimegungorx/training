import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {//gets news from API updates state variables
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27c3bf30833642eba9862221c821f5ad&page=${page}&pageSize=12`;
    const data = await fetch(url);
    setLoading(true);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {// more news loads as the user scrolls the page
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=27c3bf30833642eba9862221c821f5ad&page=${page+1}&pageSize=12`;
    setPage(page+1)
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  const prevPg = async () => { //previous page
    setPage(page - 1);
    updateNews();
  };

  const nxtPg = async () => { //next page
    if (page + 1 > Math.ceil(totalResults/12)) {

    } else {
      setPage(page + 1);
    updateNews();
    }
  };

  return (
    <>
      <div className="container my-3">
        <h2>Headlines</h2>
        {loading && <Loading />}
        <InfiniteScroll //infinite scroll effect is created without breaking the page
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container">
             <div className="row"> {/*sort news cards */}
              {!loading &&
                articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItems
                        title={element.title ? element.title.slice(0, 50) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 90)
                            : ""
                        }
                        imgUrl={element.urlToImage}
                        newsUrl={element.url}
                      />
                    </div>
                  );
                })}
            </div> {/* row end */}
          </div> {/* container end */}
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
            // previous page button 
            <button type="button" disabled={page <= 1}
              onClick={prevPg}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            // next page button 
            <button type="button" disabled={page + 1 > Math.ceil(totalResults/12)} onClick={nxtPg} className="btn btn-dark"
            >{" "}
              Next&rarr;
            </button>
          </div>  */}
      </div>
    </>
  );
};
News.defaultProps = {
  country: "us",
  pageSize: 12,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
