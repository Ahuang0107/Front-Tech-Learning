var DataFrame = require('dataframe-js').DataFrame;

// From a collection (easier)
const df = new DataFrame([
    {c1: 1, c2: 6}, // <------- A row
    {c4: 1, c3: 2}
], ['c1', 'c2', 'c3', 'c4']);

// df.show();
/*
| c1        | c2        | c3        | c4        |
------------------------------------------------
| 1         | 6         | undefined | undefined |
| undefined | undefined | 2         | 1         |
*/

// df.dim();
// df.select('c1', 'c3').show();
// df.cast('c1', String).show();
// df.distinct('c2').show();
// df.innerJoin(df, ['c2', 'c3']).show();
// df.push([1, 2, 3], [4, 5, 6]).show();
// df.map(row => row.set('c2', row.get('c1') * 2)).show();
// df.filter(row => row.get('c2') !== 6).show();

// Register a tmp table
DataFrame.sql.registerTable(df, 'tmp2');
// Request on Table
DataFrame.sql.request('SELECT * FROM tmp2 WHERE c2 = 6').show();
