import style from "./AppHeader.module.css"

function AppHeader() {

    return(
        <header>
            <h1 className={style.title}>Il mio blog</h1>
        </header>
    )
}

export default AppHeader;