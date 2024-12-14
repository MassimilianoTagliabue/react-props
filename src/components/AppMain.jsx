import style from "./AppMain.module.css"
import AppCard from "./AppCard.jsx";
import posts from "../data/data.js";

function AppMain({ posts }) {


    return (
        <main className={style.container}>
            <div className="flex">
                {posts.map((curPost, index) => {
                    return (
                        <>
                            <div className={style.col}>
                                <AppCard
                                    title={curPost.title}
                                    image={curPost.image}
                                    content={curPost.content}
                                    tags={curPost.tags}
                                    published={curPost.published}
                                />
                            </div>
                        </>
                    )

                })
                }
            </div>
        </main>
    )

}

export default AppMain;