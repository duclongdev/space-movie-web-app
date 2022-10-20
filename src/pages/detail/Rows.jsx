
const Rows = ({ animeList }) => {
    return (
        <>
            {
                animeList ? (
                    animeList.map((anime, index) => {
                        return (
                            <div key={index}>
                                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                            </div>
                        )
                    })
                ) : "Not Found"
            }
        </>
    )
}

export default Rows