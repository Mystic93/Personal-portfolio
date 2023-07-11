import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="notFound-container">
      <div className="info-container">
        <h1 className="info-container__title">SORRY PAGE NOT FOUND</h1>
      </div>
      <img
        className="notFound-container__image"
        src="./images/notfoundpage.webp"
        alt="night"
        width={278}
        height={275}
      />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
