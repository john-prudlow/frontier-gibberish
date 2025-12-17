// const apiURL = import.meta.env.VITE_MOVIE_API_URL;
  // const searchPath = import.meta.env.VITE_MOVIE_API_SEARCH_PATH;
  // const apiToken = import.meta.env.VITE_MOVIE_API_TOKEN;
  // const imgURL = import.meta.env.VITE_MOVIE_API_IMG_URL;
  // console.log(apiURL);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //     const response = await fetch(
  //       `${apiURL}${searchPath}${params.movie}`, 
  //       {
  //         headers: {
  //           Authorization: `Bearer ${apiToken}`,
  //           "Content-Type": "application/json"
  //         }
  //       }
  //     );
  //     const result = await response.json();
  //     setMovie(result);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, [params.movie]);

  return (
    <>
    <MoviesForm />
    <button onClick={() => navigate(-1)}>Go Back</button>
    <h2>MOVIE TITLE</h2>
    {/* <img src={movie.poster_path ? `${imgURL}${movie.poster_path}` : ""} alt={movie.title} />
    <p>{movie.overview}</p> */}
    {/* <ul className="results">
        {movie?.results?.map((movie) => (
            <Card
              id={movie.id}
              title={movie.title}
              date={movie.release_date}
              imageURL={imgURL}
              imagePath={movie.poster_path}
              description={movie.overview}
            />
        ))}
    </ul> */}
    </>
  );
}