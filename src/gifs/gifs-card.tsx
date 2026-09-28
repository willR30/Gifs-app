interface Cards {
    element : Gif;
}

class Gif{

    public id?: string;
    public url?: string;
    public title?: string;

}

export const GifsCard = ({element}: Cards) => {
    return (
        <>
            <div key={element.id} className="gif-card" >
                <img src={element.url} alt={element.title} />
                <h3>{element.title}</h3>
            </div>
        </>
    );
}