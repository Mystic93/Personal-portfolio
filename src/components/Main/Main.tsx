import { MainStyled } from "./MainStyled";

const Main = (): React.ReactElement => {
  return (
    <MainStyled>
      <section className="hero">
        <div className="hero-headings">
          <h2 className="hero-headings__presentation">Hi, I am</h2>
          <h1 className="hero-headings__name">Pol Gil Usieto</h1>
        </div>
      </section>
      <section className="bio">
        <img
          className="bio-profile-picture"
          src="./images/pol.webp"
          alt="Pol profile"
          height={200}
        />
      </section>
    </MainStyled>
  );
};

export default Main;
