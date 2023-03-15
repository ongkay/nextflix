type Movies = {
    page: number,
    results: MoviesResults[]
    total_pages: number,
    total_results: number
}

type MoviesResults = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: [],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}


type MoviesById = {
    adult: false,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: [
        { id: number, name: string },
    ],
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    revenue: number,
    runtime: number,
    status: string,
    tagline: string,
    title: string,
    video: false,
    videos: {
        results: VideoKeyTrailer[]
    }
    vote_average: number,
    vote_count: number
}

type VideoTrailer = {
    results: VideoKeyTrailer[]
}

type VideoKeyTrailer = {
    id: string,
    iso_639_1: string,
    iso_3166_1: string,
    key: string,
    name: string,
    official: boolean,
    published_at: string,
    site: string,
    size: number,
    type: string,
}