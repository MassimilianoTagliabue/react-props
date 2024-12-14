import style from "./AppCard.module.css"

function AppCard ({title,image,content,tags,published}) {

    const addCard = () =>{

        return(
        <div className={style.card}>
                <div className={style.image}>
                    <img src={(image === "") ?"https://thefix.media/assets/imagePlaceholder.png" : image} alt="" />
                </div>
                <section className="pad">
                    <div className={style.postTitle}>{title}</div>
                    <div className="mb">{content}</div>
                    <button className={style.btn}>LEGGI DI PIÚ</button>
                </section>
            </div>
    )};

    
    
    return(
        <>
        {published && addCard()}
        
        </>
    )
}

export default AppCard;