import { useState, useEffect } from 'react';
import StarshipDisplay from '../page/StarshipDisplay';
import '../Style.css'

function SwApi() {

    const [starships, setSartship] = useState([])

    const getStarship = async () => {

        try {
            const response = await fetch("https://swapi.dev/api/starships/")
            const data = await response.json()
            // console.log(data.results)
            setSartship(data.results)

        } catch (e) {
            console.log('fetch err')
        }

    }

    useEffect(() => {
        getStarship()
    }, [])

    return (
        <div>
            <h1 className='title'>STAR WARS STARSHIP</h1>
            {
                <div className='container'>

                    {starships.map((starship) => (
                        <div className='card'>
                            <StarshipDisplay starship={starship} />
                        </div>
                    ))}
                </div>
            }

        </div>

    )

}

export default SwApi