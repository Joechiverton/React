function MovieCard({movie}){

    function onFavouriteClick() {
        alert("clicked")
    }

    return <div className ="movie-card">
        <div className = "movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className = "movie-overlay">
                <button className = "favourite-btn" onClick={onFavouriteClick}>
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <P>{movie.release_date}</P>
        </div>
    </div>
}

export default MovieCard;