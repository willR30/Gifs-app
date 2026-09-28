//vamos a declarar las propos que son los valores que se van a recibir

import type { FC } from "react";

//como parametros
interface Props {
    title: string;
    searches: string[];
}

export const PreviousSearched: FC<Props> = ({ title, searches }: Props) => {
    return (
        <>
            <div className="previous-searches">
                <h2>{title}</h2>
                <ul className="previous-searches-list">
                    {
                        searches.map(elemento => (
                            <li key={elemento}>{elemento}</li>
                        ))
                    }
                </ul>
            </div>
        </>

    );

}