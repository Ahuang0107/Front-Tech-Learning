const elementList = [
    {
        primaryKey: 1,
        content: '111',
        subItem: [
            {
                primaryKey: 2,
                content: '222'
            },
            {
                primaryKey: 3,
                content: '333',
                subItem: [
                    {
                        primaryKey: 4,
                        content: '444'
                    },
                ]
            },
        ]
    },
    {
        primaryKey: 5,
        content: '555'
    },
]

function main() {
    // updateElementNode({
    //     primaryKey: 5,
    //     content: '10'
    // })
    // console.log(elementList)

    const list = [{
        id: 1,
        value: 1
    }, {
        id: 2,
        value: 2
    }, {
        id: 3, value: 3
    }]
    for (let x of list) {
        if (x.id === 3) {
            console.log(x)
            x.value = 7
        }
    }
    console.log(list)
}

function updateElementNode(data) {
    const findElementById = function (_treeData) {
        if (_treeData.primaryKey === data.primaryKey) {
            // for (const key in data) {
            //     if (_treeData.hasOwnProperty(key) && data.hasOwnProperty(key)) {
            //         _treeData[key] = data[key]
            //     }
            // }
            _treeData = data
        } else {
            if (_treeData.subItem && _treeData.subItem.length > 0) {
                for (let j = 0; j < _treeData.subItem.length; j++) {
                    findElementById(_treeData.subItem[j])
                }
            }
        }
    }
    for (let i = 0; i < elementList.length; i++) {
        findElementById(elementList[i])
    }
}

main()
