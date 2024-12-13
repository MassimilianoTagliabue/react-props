import style from "./AppCard.module.css"

function AppCard ({title,image,content,tags,published}) {

        
    
    return(
        <>
            <div className={style.card}>
                <div className={style.square}></div>
                <section className="pad">
                    <div className={style.postTitle}>{title}</div>
                    <div className="mb">{content}</div>
                    <button className={style.btn}>LEGGI DI PIÚ</button>
                </section>
            </div>
        </>
    )
}

export default AppCard;