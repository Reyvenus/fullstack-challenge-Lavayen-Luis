
import { useState, useEffect} from 'react';

import { getCharacters } from '../services/apiCharacters';
import { Character } from './Character';

export const ListaCharacter = () => {

    const [charList, setCharList] = useState([])
    const [image, setImage] = useState("")

    useEffect(() => {
        getCharacters()
          .then((data) => setCharList(data.results))
          .catch((err) => console.log(err))
      }, []);

  return (
    <div className='page'>
        <div className='showImage'>
            <img className='showImage1' src={image} alt="Image no avaliable" />
        </div>
        {
            charList.map(characters => 
                <Character 
                    key={characters.id}
                    {...characters}
                    setImage={setImage}
                />)
        }
    </div>
  )
}
