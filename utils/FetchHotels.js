const url = 'https://something.com/data.json';

const fetchHotels = async () => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
}

