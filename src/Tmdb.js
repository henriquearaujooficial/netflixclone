//const API_KEY = '7badcf60860575a6e452565fe45d1372';
//const API_BASE = 'https://api.themoviedb.org/3';
// const API_KEY = 'sua-chave-de-api';
// const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch('${API_BASE}${endpoint}');
    const json = await req.json();
    return json;
  }
  
    
export default{
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do NetFlix',
                items: await basicFetch('/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}')
            },
    
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch('/trending/all/week?language=pt-BR&api_key=${API_KEY}')
            },
    
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch('/movie/top_rated?language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch('/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}')
            },
            {
                slug: 'document',
                title: 'Documentários',
                items: await basicFetch('/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}')
            },
        ];
    }
}

  
  