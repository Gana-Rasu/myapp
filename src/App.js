import React from 'react';
import Movies from './Movies';
import "./App.css"

function App() {
 
const moviedata = 
[
  {poster:"https://imgc.allpostersimages.com/img/posters/once-upon-a-time-in-hollywood_u-L-F9JLBB0.jpg",name:"ONCE UPON A TIME IN HOLLYWOOD",rating: 8.1,summary:"A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles."},
  {poster:"https://imgc.allpostersimages.com/img/posters/casablanca_u-L-F31XO90.jpg",name:"CASABLANCA",rating:8.9,summary:"A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco."},
  {poster:"https://imgc.allpostersimages.com/img/posters/a-clockwork-orange-a-stanley-kubrick-movie_u-L-F8SZ2S0.jpg",name:"A CLOCKWORK ORANGE",rating:8.1,summary:"In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned."},
  {poster:"https://imgc.allpostersimages.com/img/posters/dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb_u-L-F4S9CX0.jpg",name:"DR, STRANGELOVE",rating:8.6,summary:"An insane American general orders a bombing attack on the Soviet Union, triggering a path to nuclear holocaust that a war room full of politicians and generals frantically tries to stop."},
  {poster:"https://imgc.allpostersimages.com/img/posters/jaws_u-L-F9IMPK0.jpg",name:"JAWS",rating:8.6,summary:"When a killer shark unleashes chaos on a beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down."},
  {poster:"https://imgc.allpostersimages.com/img/posters/reservoir-dogs_u-L-F4S6XL0.jpg",name:"RESERVOIR DOGS",rating:8.3,summary:"When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant."},
  {poster:"https://imgc.allpostersimages.com/img/posters/vertigo-one-sheet_u-L-F9HLGF0.jpg",name:"VERTIGO",rating:8.7,summary:"A former San Francisco police detective juggles wrestling with his personal demons and becoming obsessed with the hauntingly beautiful woman he has been hired to trail, who may be deeply disturbed."},
  {poster:"https://imgc.allpostersimages.com/img/posters/lawrence-of-arabia_u-L-F4S6J00.jpg",name:"LAWRENCE OF ARABIA",rating:8.6,summary:"The story of T.E. Lawrence, the English officer who successfully united and led the diverse, often warring, Arab tribes during World War I in order to fight the Turks."},
  {poster:"https://imgc.allpostersimages.com/img/posters/lolita_u-L-Q1J9GDK0.jpg",name:"LOLITA",rating:8.9,summary:"A middle-aged college professor becomes infatuated with a fourteen-year-old nymphet."}

]

  return (
    <>
    <h1 className='title'>movie's page</h1>
    <div className='grid'>
   {moviedata.map(movie=>{
   return <Movies poster={movie.poster} name={movie.name} rating={movie.rating} summary={movie.summary} />
   }
     
   )}
    </div>
    </>
  );
}

export default App;
