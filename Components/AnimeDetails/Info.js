import { Card } from "primereact/card";
const Info = (data) => {
  const animeStudio = [];
  return (
    <>
      <Card style={{ width: "100%", marginBottom: "2em" }}>
        <div className="anime-info-table mt-1">
          <div className="anime-info-list grid">
            <div className="xl:col-3 md:col-6 sm:col-12">
              <div className="anime-info">
                <span className="font-semibold">Format: </span>
                {data.data.data.type}
              </div>
            </div>
            <div className="xl:col-3 md:col-6 sm:col-12">
              <div className="anime-info">
                <span className="font-semibold">Source: </span>
                {data.data.data.source}
              </div>
            </div>
            <div className="xl:col-3 md:col-6 sm:col-12">
              <div className="anime-info">
                <span className="font-semibold">Episodes: </span>
                {data.data.data.episodes ? data.data.data.episodes : "--"}
              </div>
            </div>
            <div className="xl:col-3 md:col-6 sm:col-12">
              <div className="anime-info">
                <span className="font-semibold">Runtime: </span>
                {data.data.data.duration}
              </div>
            </div>
            <div className="xl:col-6">
              <div className="anime-info">
                <span className="font-semibold">Studio: </span>

                {data.data.data.studios.map((item) => item.name).join(" ")}
              </div>
            </div>
            <div className="xl:col-6">
              <div className="anime-info">
                <span className="font-semibold">Tags: </span>
                {data.data.data.genres.map((item) => item.name).join(" ")}
              </div>
            </div>
          </div>
          <div className="xl:col-12 anime-desc">
            <div className="anime-info">{data.data.data.synopsis}</div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Info;
