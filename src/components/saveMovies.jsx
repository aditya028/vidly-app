const SaveMovies = props => {
    return ( 
        <>
        <h1>Movie Id : {props.match.params.id}</h1>
        <button className="btn btn-primary" onClick = {() => props.history.push("/movies")}>Save</button>
        </>
     );
}
 
export default SaveMovies;