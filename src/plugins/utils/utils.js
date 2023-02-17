import dummy from '@/assets/dummy'

const totalData = [
    dummy.singapore,
    dummy.jeju,
    dummy.lasVegas,
    dummy.paris,
    dummy.osaka,
    dummy.taipei,
]

function categoryData(categoryName) {
    let categoryDatalist = []

    totalData.forEach((city => categoryDatalist.push(
        ...city.filter(c => c.category === categoryName)
    )))
    return categoryDatalist
}

function cityKey(cityName) {
    if ( cityName === "싱가포르" ) {
        return dummy.singapore
    } else if ( cityName === "제주도" ) {
        return dummy.jeju
    } else if ( cityName === "라스베가스" ) {
        return dummy.lasVegas
    } else if ( cityName === "파리" ) {
        return dummy.paris
    } else if ( cityName === "오사카" ) {
        return dummy.osaka
    } else if ( cityName === "타이베이" ) {
        return dummy.taipei
    }
}

export default {
    categoryData,
    cityKey
}