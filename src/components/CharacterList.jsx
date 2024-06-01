import { useEffect, useState } from 'react';
import Character from './Character';

function NavPage(props){
  return (
    <div className='d-flex justify-content-between align-items-center'>
       <p>Page actual {props.page}</p>
       <button className='btn btn-primary btn-sm'
       onClick={()=>props.setPage(props.page +1)}
       >
        Pagina {props.page + 1} 
       </button>
    </div>
  )
}

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      setloading(false)
      setCharacters(data.results);
    }

    fetchData();
  }, [page]);

  if(loading){
    return(
      <div>Cargando</div>
    )
  }

  return (
    <div className='container'>

      <NavPage page={page} setPage={setPage}/>

      {loading ? <h1>Cargando</h1> :  
      

      <div className='row'>


      {characters.map((character) => (
        <div className='col-md-4' key={character.id}>
          <Character  character={character} />
        </div>
      ))}

      </div>
}
<NavPage page={page} setPage={setPage}/>

    </div>
  );
}
