import Nav from "react-bootsrap/Nav"

const {Item,Link} = Nav

const CustomNav = () => {

    return(
        <nav>
           <Item>
                <link className= "nav-link" to ="/cat1" />cat1 <link />
            </Item>
            <Item>
            <link className= "nav-link"  to ="/cat2" />cat2 <link />
            </Item>
        </nav>
    )
}