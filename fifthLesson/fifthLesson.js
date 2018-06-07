const infoAboutPersons = [{
    name: `Ivan`,
    sex: `M`,
    age: 21
},
    {
        name: `Olga`,
        sex: `W`,
        age: 19
    },
    {
        name: `Oleg`,
        sex: `M`,
        age: 27
    },
    {
        name: `Ann`,
        sex: `W`,
        age: 21
    },
    {
        name: `Alex`,
        sex: `M`,
        age: 30
    },
];

const middleAgeBySex = (infoArray, sex) => {
    var sum = 0, j = 0;
        infoArray.forEach(function (item, i, infoArray) {
            if (item.sex == sex) {
                sum += item.age;
                j++;
            }

        });
        return (sum / j);
}


middleAgeBySex(infoAboutPersons, `M`); // 26
middleAgeBySex(infoAboutPersons, `W`); // 20



