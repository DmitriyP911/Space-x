const arr = [4, 3, 6, 8, 3, 6, 20];
const arr2 = [4, 7, 3]

const fn1 = ( array ) => {
    let prevDate = 0;

    array.map( date => {
        if( prevDate + date > 31 ) {
            console.log( `Choose next month` );
            return
        }
        console.log( `Aug ${prevDate + 1} to Aug ${prevDate + date}` );
        prevDate += date
        return prevDate;
    } )
}

fn1( arr );
fn1( arr2 );