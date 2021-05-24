const data = [
    {
        year: 2020,
        data: {
            female: 688440000,
            male: 723340000,
            radio: 105.07,
            total: 1411780000,
        },
    },
    {
        year: 2010,
        data: {
            female: 650481765,
            male: 682329104,
            radio: 104.9,
            total: 1332810869,
        },
    },
    {
        year: 2000,
        data: {
            female: 602336257,
            male: 640275969,
            radio: 106.3,
            total: 1242612226,
        },
    },
    {
        year: 1990,
        data: {
            female: 548732579,
            male: 584949922,
            radio: 106.6,
            total: 1160017381,
        },
    },
]

const getData = data.map((item) => item.year)

console.log(getData)
