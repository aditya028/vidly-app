import _ from 'lodash' ; 

export function paginate(movie , pageNum , pageSize){
    const start = (pageNum-1)*pageSize ; 
    const end = pageNum*pageSize ;
    const movieSliced = _.slice(movie, start, end) ; 
    return movieSliced ;
}