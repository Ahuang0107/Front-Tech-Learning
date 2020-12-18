async function baz() {
    const thenable = {
        then(callback) {
            callback('baz');
        }
    };
    console.log(await thenable);
}

baz();
