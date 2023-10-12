import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './store/slices/counter';
import { getPokemons, setPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

  const { page, pokemons, isLoading } = useSelector( state => state.pokemons);
  const dispatch = useDispatch();
  
  useEffect(() => {

    dispatch( getPokemons() );
    
  }, [])
  
  return (
    <>
        <h1>Pokemon App</h1>
        <hr />
        <span>Loading: { isLoading ? 'Cargando' : 'Cargado' } </span>

        <ul>
            {
              pokemons.map((({name}) => 
                
                <li key={name}>
                  {name}
                </li>  
              ))
            }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch(getPokemons() )}
        >
          Next
        </button>
            

    </>
  )
}
