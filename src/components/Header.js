import '../styles/Header.module.css';

export default function Header() {
    return(
        <nav>
            <img className="logo" src={require ('../assets/Multiverso.png')} alt="Multiverso" />
        </nav>
    )
}
