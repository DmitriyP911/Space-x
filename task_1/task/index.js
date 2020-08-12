const arr = [7, 2, 1, 5];
const arr2 = [4, 10, 3, 1, 5];
const arr3 = [2, 4, 4, 3, 3];
const arr4 = [3, 1, 1, 2, 5, 7, 3, 3, 6, 1, 1, 2, 11, 11, 22, 11, 11, 11];

const fn1 = ( array ) => {
    let sum1 = 0;
    for( let i = 0; i < array.length; i++ ) {
        sum1 += array[i++];
    }
    let sum2 = 0;
    for( let i = 1; i < array.length; i++ ) {
        sum2 += array[i++]
    }
    let sum3 = 0;
    for( let i = 0; i < array.length; i++ ) {
        if( array[i] >= array[i + 1] ) {
            if( array[i] + array[i + 1] > array[i + 2] ) {
                sum3 += array[i];
            } else {
                sum3 += array[i + 2];
                i = i + 2;
            }
        }
        if( array[i] < array[i + 1] && array[i] + array[i + 1] <= array[i + 2] ) {
            sum3 += array[i + 2]
            i = i + 2;
        }
    }
    const newArr = [sum1, sum2, sum3].sort( ( a, b ) => b - a )
    console.log( newArr[0] );
}

fn1( arr );
fn1( arr2 );
fn1( arr3 );
fn1( arr4 );
