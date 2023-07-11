import { MainStyled } from "./MainStyled";

const Main = (): React.ReactElement => {
  return (
    <MainStyled>
      <h1>
        IN DEVELOPMENT
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </h1>
    </MainStyled>
  );
};

export default Main;
