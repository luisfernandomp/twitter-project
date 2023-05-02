import "./styles.css";

export default function HeaderPostComponent({ name, user, checked }) {
  return (
    <header className="header-post">
      <div className="container-perfil">
        <div className="container-account">
          <div>
            <img
              className="image-perfil"
              src="../../assets/images/ellon-musk.jpg"
              alt="Ellon Musk"
            />
          </div>
          <div className="info-account">
            <div>
              <div className="strong">{name}</div>
              <div className="gray">{user}</div>
            </div>
            {(() => {
              if (checked) {
                return (
                  <img
                    className="icon-verified"
                    src="../../assets/images/twitter-verified.png"
                    alt="Ícone verificado"
                  />
                );
              }
            })()}
          </div>
        </div>
      </div>
      <aside>
        <img
          className="react-logo"
          src="../../assets/images/twitter-logo.png"
          alt="Logo Twitter"
        />
      </aside>
    </header>
  );
}
