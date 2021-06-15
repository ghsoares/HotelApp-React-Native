const url = 'http://localhost:8080/guliver-dbe/api';

const fetchHotels = () => {
    return new Promise(async (resolve, reject) => {
        fetch(`${url}/hoteis`).then(str => {
            str.json().then(json => {
                /*json = json.map(el => {
                    return {
                        id: el.idHotel,
                        name: el.nmHotel,
                        cheapestPrice: el.vlQuarto,
                        address: el.cidade,
                        telephone: el.nrTelefone,
                        stars: el.nrEstrelas,
                        imgUrl: el.urlImagem
                    }
                });*/
                resolve(json);
            }).catch(err => {
                reject(err);
            });
        }).catch(err => {
            reject(err);
        });
    });
}

export default fetchHotels;