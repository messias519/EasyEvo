import { Link} from 'react-router-dom';
import Header from '../../header/header';
import "../../../app.css"

const Home = () => {
    return (
     <div>
      <Link to="/">
      <Header />
      </Link>
      <div className="menu">
        <Link to="/calculadora">
          <img src="\img\botao-calculadoras.png" alt="Calculadora"/>
        </Link>
        <Link to="/editor">
          <img src="\img\botao-editordetexto.png" alt="Editor"/>
        </Link>
      </div>
     </div>
    );
  };
  
  export default Home