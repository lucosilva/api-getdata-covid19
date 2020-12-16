

// method for geting data of the API
async function respConvidAPI() {
    const URL_API = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const METHOD = 'GET';
    
    try {
        const response = await fetch(URL_API, {
            METHOD
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
};


// method for printing data of respConvidAPI()

async function printDataCovid() {
    const { data } = await respConvidAPI();

    const dataAll = {
        mortes: data.deaths,
        recuperados: data.recovered,
        casos: data.cases,
        ultima_atualizacao: data.updated_at
    }

    console.log(dataAll);
};


function init() {
    printDataCovid();
};


init();