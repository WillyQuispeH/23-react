
export default function Login(){
    return(
        <>
        <div className='content_img'>
        <img src="https://i.ibb.co/jMFKLbS/Logo.png" alt="" />
      </div>
      <form action="acceso.html" >
        <div className='cont_input'>
          <p>Correo electrónico</p>
          <input type="text"  placeholder="claudio@matus.cl" />
        </div>
        <div className='cont_input'>
          <p>Contraseña</p>
          <input type="password" placeholder='*********' />
        </div>
        <input type="submit" value="Ingresar" />
      </form>
      <a className='elemt_a' href="#">Olvidé mi contraseña </a>
      </>
    );
}