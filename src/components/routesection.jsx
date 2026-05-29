export default function RouteSection({
  dossier,
  title,
  subtitle,
  leftCards,
  rightCards,
  images,
  ticker
}) {

  return (
    <section className="routeSection">

      <div className="routeTop">

        <div className="routeTitleWrap">
          <div className="routeEyebrow">
            {dossier}
          </div>

          <div className="routeTitle">
            {title}
          </div>

          <div className="routeSubtitle">
            {subtitle}
          </div>
        </div>

      </div>

      <div className="routeContent">

        <div className="routeCards">

          {[...leftCards, ...rightCards].map((card, i) => (

            <div className="routeCard" key={i}>

              <div className="routeCardLabel">
                {card.label}
              </div>

              <div className="routeCardTitle">
                {card.title}
              </div>

              <div className="routeCardText">
                {card.text}
              </div>

            </div>

          ))}

        </div>

        <div className="routeGallery">

          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
            />
          ))}

        </div>

      </div>

      <div className="routeTicker">
        {ticker}
      </div>

    </section>
  )
}