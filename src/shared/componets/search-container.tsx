import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    onQuery: (query: string) => void;

}

export const SearchContainer = ({ placeholder, onQuery }: Props) => {

    const [query, setQuery] = useState("")


    const handleSearch = () => {
        onQuery(query);
        setQuery("")
    };

    

    //el use efect es para procesos asincronos 
    //en este caso al escribir el input se hace la peticion al api
    //se llama debouncer

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);
        //onQuery(query);


        return () => {
            //funcion de liempieza
            clearTimeout(timeoutId);
        }
    }, [query, onQuery])


    return (
        <>
            <div className="search-container">

                <input placeholder={placeholder}
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                   // onKeyDown={(evento) => handleKeySearch(evento.key.toString())}

                ></input>
                <button
                    onClick={handleSearch}
                >
                    Buscar</button>
            </div>
        </>
    );

}