
async function getData(dataName) {
    // let cityData = [];
    // $.ajax({
    //     url: `http://localhost:3000/${dataName}`,
    //     method: 'GET',
    //     dataType: 'json',
    //     async: false
    // }).done((data) => {
    //     cityData = data;
    // }).fail(() => {console.log('err')})

    // return cityData
    var rows = await $.ajax({
        url: `http://localhost:3000/${dataName}`,
        method: 'GET',
        dataType: 'json',    
    })
    
    return rows;
}

async function categoryData(categoryName) {
    var rows = await getData('cityData');    
    return rows.filter(c => c.category === categoryName);    
}

export default {
    categoryData,
    getData
}