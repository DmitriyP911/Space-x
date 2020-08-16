const arr = [7, 2, 1, 5]; // 12
const arr2 = [4, 10, 3, 1, 5]; // 15
const arr3 = [4, 4, 4, 4, 4, 4]; // 12
const arr4 = [3, 1, 1, 2, 5, 7, 3, 3, 6, 1, 1, 2, 11, 11, 22, 11, 11, 11]; //63
const arr5 = [1, 1, 1, 2, 3, 4, 6, 7]; //14
const arr6 = [7, 7, 7, 7, 7, 6, 1, 1, 1, 2, 2, 3, 4, 4, 8, 8, 10] //47
const arr7 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2] //8
const arr8 = [29, 17, 11, 22, 12, 22, 20, 4] // 77

const fn1 = ( array ) => {
    const resOneFn = ( arr ) => {
        let res = 0;
        for( let i = 0; i < arr.length; i += 1 ) {
            const fn = ( one, two, three, four, five ) => {
                const sum1 = one + three + five;
                const sum2 = one + four;
                const sum3 = two + four;
                const sum4 = two + five;
                if( sum1 >= sum2 && sum1 >= sum3 && sum1 >= sum4 || sum2 >= sum1 && sum2 >= sum3 && sum2 >= sum4 ) {
                    res += one;
                    return i += 1;
                } else if( sum3 >= sum1 && sum3 >= sum2 && sum3 >= sum4 || sum4 >= sum1 && sum4 >= sum3 && sum4 >= sum2 ) {
                    res += two;
                    return i += 2;
                }
            }
            fn( arr[i], arr[i + 1] === undefined ? 0 : arr[i + 1], arr[i + 2] === undefined ? 0 : arr[i + 2], arr[i + 3] === undefined ? 0 : arr[i + 3], arr[i + 4] === undefined ? 0 : arr[i + 4] )
        }
        return res;
    }
    const res2 = resOneFn( array )
    const res1 = resOneFn( array.reverse() );
    const resArr = [res2, res1].sort( ( a, b ) => b - a )
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