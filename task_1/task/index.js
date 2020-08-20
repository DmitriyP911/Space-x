const arr = [2, 6, 7, 7, 7, 19, 14]; // 32
const arr2 = [4, 10, 3, 1, 5]; // 15
const arr3 = [4, 4, 4, 4, 4, 4]; // 12
const arr4 = [3, 1, 1, 2, 5, 7, 3, 3, 6, 1, 1, 2, 11, 11, 22, 11, 11, 11]; //63
const arr5 = [1, 1, 1, 2, 3, 4, 6, 7]; //14
const arr6 = [7, 7, 7, 7, 7, 6, 1, 1, 1, 2, 2, 3, 4, 4, 8, 8, 10] //47
const arr7 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2] //8
const arr8 = [29, 17, 11, 22, 12, 22, 20, 4] // 77
const arr9 = [5, 4, 4, 4, 4, 4, 3, 5, 4, 4] // 22

const fn1 = ( array ) => {
    const resOneFn = ( arr ) => {
        let res = 0;
        for( let i = 0; i < arr.length; i += 1 ) {
            const fn = ( one, two, three, four, five ) => {
                const max = Math.max( one + three + five, one + four );
                const max1 = Math.max( two + four, two + five );
                if( max > max1 ) {
                    res += one;
                    return i += 1;
                } else {
                    res += two;
                    return i += 2;
                }
            }
            fn( arr[i], arr[i + 1] === undefined ? 0 : arr[i + 1], arr[i + 2] === undefined ? 0 : arr[i + 2], arr[i + 3] === undefined ? 0 : arr[i + 3], arr[i + 4] === undefined ? 0 : arr[i + 4] )
        }
        return res;
    }
    let res3 = 0;
    for(let i=1; i<array.length; i+=1) {
        res3+=array[i];
        i+=1;
    }
    let res4=0;
    for(let i=0; i<array.length; i+=1) {
        res4+=array[i];
        i+=1;
    }
    const res2 = resOneFn( array );
    const res1 = resOneFn( array.reverse() );
    const resArr = [res2, res1, res3, res4].sort( ( a, b ) => b - a );
    console.log( "max value", resArr[0] )
}

fn1( arr );
fn1( arr2 );
fn1( arr3 );
fn1( arr4 );
fn1( arr5 );
fn1( arr6 );
fn1( arr7 );
fn1( arr8 );
fn1( arr9 );
