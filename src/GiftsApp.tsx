import { PreviousSearched } from "./gifs/previous-searches";
import { SearchContainer } from "./shared/componets/search-container";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/componets/CustomHeader";
import { GifsCard } from "./gifs/gifs-card";
import { useState } from "react";

export const GifsApp = () => {




    //const [lo que se puesta en pantalla, funcion que manipula] = useState(VALOR INICIAL)


    const [historial, setHistorial] = useState(["Goku", "el mompirri", "Daddy Yankee", "naruto"])



    const handledSearch = (searched_parameter: string) => {
        searched_parameter = searched_parameter.trim().toLocaleLowerCase();
        if (searched_parameter.length ===0  ) return;
        //evitamos busquedas duplicadoas
        if (historial.includes(searched_parameter)) return;

        const currentTerms = historial.slice(0,6);
        setHistorial([searched_parameter, ...currentTerms].splice(0,7));

        
    }

    return (


        <>
            <CustomHeader title="Buscador de Gifs"
                description="Descubre y comparte gifs" />


            <SearchContainer placeholder="Busca un sticker" onQuery={handledSearch}></SearchContainer>

            <PreviousSearched title="Busquedas recientes" searches={historial}></PreviousSearched>


            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <GifsCard element={gif}></GifsCard>
                    ))
                }
            </div>
        </>

    );
}