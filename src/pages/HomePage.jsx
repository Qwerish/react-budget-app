const HomePage = () => {
    return ( <
        section >
        <
        div className = "container" >
        <
        header >
        <
        h1 > Общий баланс: 30 000 руб. < /h1> <
        /header>

        <
        div className = "form" >
        <
        h2 > Добавить операцию < /h2> <
        form >
        <
        input type = "text"
        name = "total"
        placeholder = "30 000 руб." / >
        <
        select name = "category" >
        <
        option value = "salary" > Заработная плата < /option> <
        /select> <
        button className = "button" >
        Добавить операцию <
        /button> <
        /form> <
        /div>

        <
        /div> <
        /section>
    )
}

export default HomePage