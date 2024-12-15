import http from '@/services/ConfigAxios'

// Read All Genres
const getAllGenres = async () => {
    const response = await http.get('/genres')
    return response.data
}

// Read All Movies
const getAllMovies = async () => {
    const response = await http.get('/admin/movies')
    return response.data
}

// Read a Single Movie by ID พร้อม Genres
const getMovieByIdWithGenres = async (id: number) => {
    const response = await http.get(`/admin/movies/${id}`)
    return response.data
}

// Create a New Movie
const createMovie = async (movieData: {
    title: string
    release_date: string
    runtime: number
    mpaa_rating: string
    description: string
    image: string
    genres_array: number[]
}) => {
    const response = await http.post('/admin/movies', movieData)
    return response.data
}

// Update an Existing Movie by ID
const updateMovie = async (id: number, movieData: {
    title: string
    release_date: string
    runtime: number
    mpaa_rating: string
    description: string
    image: string
    genres_array: number[]
}) => {
    const response = await http.put(`/admin/movies/${id}`, movieData)
    return response.data
}

// Delete a Movie by ID
const deleteMovie = async (id: number) => {
    const response = await http.delete(`/admin/movies/${id}`)
    return response.data
}


export { getAllGenres, getAllMovies, createMovie, getMovieByIdWithGenres, updateMovie, deleteMovie }