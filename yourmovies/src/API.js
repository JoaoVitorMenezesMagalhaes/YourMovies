const API_KEY = '0d5b30b577a8448e44f7d928932834a5';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async(endpoint) => {
    const requisition = await fetch(`${API_BASE}${endpoint}`);
    const json = await requisition.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/movie/week?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'horror',
                title: 'Terrror',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    }
}