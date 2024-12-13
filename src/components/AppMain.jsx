import style from "./AppMain.module.css"
import AppCard from "./AppCard.jsx";
import posts from "../data/data.js";

function AppMain({ posts }) {


    return (
        <main className={style.container}>
            
            {posts.map((curPost, index) => {
                    return (
                        <>
                        <AppCard
                            title={curPost.title}
                            image={curPost.image}
                            content={curPost.content}
                            tags={curPost.tags}
                            published={curPost.published}
                        />
                        </>
                    )
            
                })
            }
        </main>
    )

}

export default AppMain;