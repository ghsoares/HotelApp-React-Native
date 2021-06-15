const url = 'http://localhost:8080/guliver-dbe/api';

const fetchHotels = () => {
    return new Promise(async (resolve, reject) => {
        const urlStr = `${url}/hoteis`;
        const str = await fetch(urlStr);
        let json = await str.json();

        json = json.map((el, idx) => {
            return {
                id: el.idHotel,
                listId: idx,
                name: el.nmHotel,
                cheapestPrice: el.vlQuarto,
                address: el.cidade,
                telephone: el.nrTelefone,
                stars: el.nrEstrelas,
                imgUrl: el.urlImagem
            }
        });

        resolve(json);
    });
}

export default fetchHotels;
