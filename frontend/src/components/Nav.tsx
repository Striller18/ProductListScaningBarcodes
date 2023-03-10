
type navData = {
    actualPage: string;
    lastPage: string;
}

function Nav(props: navData){
    return <h1>Esta en la pagina {props.actualPage}</h1>
    
}

export default Nav;