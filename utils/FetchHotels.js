const url = 'http://localhost:8080/guliver-dbe/api';

/*
{
    "cidade": "Sao Paulo",
    "idHotel": 1,
    "nmHotel": "IBIS Styles Sao Paulo Anhembi",
    "nrEstrelas": 5,
    "nrTelefone": "11645471069",
    "urlImagem": "https://thumbcdn-1.hotelurbano.net/xpUqJXTKYudv41TJF1CuL4O6cgo=/trim:bottom-right:80/fit-in/625x0/bottom/filters:quality(30)/https%3A//novo-hu.s3.amazonaws.com/reservas/ota/prod/hotel/524865/001-fachada-ibis-styles-sao-paulo-anhembi-hotel-001_201912161710",
    "vlQuarto": 252.9
},
*/
/*
{
    id: 0,
    name: "IBIS Styles São Paulo Anhembi",
    cheapestPrice: 170,
    address: "Av República, Nova Sapucaia, Sapucaia do Sul, RS",
    telephone: "(85) 69890-9528",
    stars: 3,
    imgUrl: "https://exp.cdn-hotels.com/hotels/2000000/1400000/1397800/1397721/3ea9dad5_z.jpg"
},
*/

const fetchHotels = async () => {
    let response = await fetch(`${url}/hoteis`);
    let json = await response.json();
    json = json.map(el => {
        return {
            id: el.idHotel,
            name: el.nmHotel,
            cheapestPrice: el.vlQuarto,
            address: el.cidade,
            telephone: el.nrTelefone,
            stars: el.nrEstrelas,
            imgUrl: el.urlImagem
        }
    });
    return json;
}

