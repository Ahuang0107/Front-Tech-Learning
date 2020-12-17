function double(value,success,failure) {
    setTimeout(() => {
        try{
            if(typeof value!=='number'){
                throw 'Must provide number as first argument';
            }
            success(value*2);
        }catch(e){
            failure(e);
        }
    }, 1000);
}

const successCallback=(x)=>console.log(`Success:${x}`);
const failureCallback=(e)=>console.log(`Failure:${e}`);

double(3,successCallback,failureCallback);
double('b',successCallback,failureCallback);
