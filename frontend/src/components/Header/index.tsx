 import logo from '../../assets/img/logo.png'
 import './styles.css'

function Header() {
return (
<>
    <header>
      <div className="sikautilidades-logo-container">
        <img src= {logo} alt="DSMeta"/>
         <h1>Sika Utilidades</h1>

         <p>Desenvolvido por 
            <a href="https://www.instagram.com/sikautilidades.araci/">@sikautilidades.araci</a>
         </p>
     </div>
    </header>
</>
)
}

export default Header
