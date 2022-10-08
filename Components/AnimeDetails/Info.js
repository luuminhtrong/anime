const Info = (data) => {
    const animeStudio = []
    return ( 
        <div className="anime-info-table grid mt-1">
            <div className="xl:col-3 md:col-6">
                <div className="anime-info">
                    <span className="font-semibold">Format: </span>
                    {data.data.data.type}
                </div>
            </div>
            <div className="xl:col-3 md:col-6">
                <div className="anime-info">
                    <span className="font-semibold">Source: </span>
                    {data.data.data.source}
                    </div>
                </div>
            <div className="xl:col-3 md:col-6">
                <div className="anime-info">
                    <span className="font-semibold">Episodes: </span>
                    {data.data.data.episodes ? data.data.data.episodes : '--'}
                </div>
            </div>
            <div className="xl:col-3 md:col-6">
                <div className="anime-info">
                    <span className="font-semibold">Runtime: </span>
                    {data.data.data.duration}
                </div>
            </div>
            <div className="col-6">
                <div className="anime-info">
                    <span className="font-semibold">Studio: </span>

                    {data.data.data.studios.map(item => 
                        item.name
                    ).join(' ')
                    }
                    
                </div>
            </div>
            <div className="col-6">
                <div className="anime-info">
                    <span className="font-semibold">Tags: </span>
                    {data.data.data.genres.map((item) => 
                        item.name
                    ).join(' ')
                    
                        }
                </div>
            </div>
            <div className="col-12 anime-desc">
                <div className="anime-info">
                    {data.data.data.synopsis}
                </div>
            </div>
        </div>
    );
}
 
export default Info;