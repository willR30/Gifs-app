import { PreviousSearched } from "./gifs/previous-searches";
import { SearchContainer } from "./shared/componets/search-container";
import { CustomHeader } from "./shared/componets/CustomHeader";
import { GifsCard } from "./gifs/gifs-card";
import { useState } from "react";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {




    //const [lo que se puesta en pantalla, funcion que manipula] = useState(VALOR INICIAL)


    const [historial, setHistorial] = useState(["Goku", "el mompirri", "Daddy Yankee", "naruto"])

    const [gifsResults, setResults] = useState<Gif[]>([]);



    const handledSearch = async (searched_parameter: string) => {
        searched_parameter = searched_parameter.trim().toLocaleLowerCase();
        if (searched_parameter.length === 0) return;
        //evitamos busquedas duplicadoas
        if (historial.includes(searched_parameter)) return;

        //manejamos el historial de busqueda
        const currentTerms = historial.slice(0, 6);
        setHistorial([searched_parameter, ...currentTerms].splice(0, 7));

        //mostramos los resultados de la consulta
        const resultados_gifs = await getGifsByQuery(searched_parameter);
        setResults(resultados_gifs);


    }

    return (


        <>
            <CustomHeader title="Buscador de Gifs"
                description="Descubre y comparte gifs" />


            <SearchContainer placeholder="Busca un sticker" onQuery={handledSearch}></SearchContainer>

            <PreviousSearched title="Busquedas recientes" searches={historial}></PreviousSearched>


            <div className="gifs-container">
                {
                    gifsResults?.map((gif) => (
                        <GifsCard element={gif}
                        
                        ></GifsCard>
                    ))
                }
            </div>
        </>

    );
}