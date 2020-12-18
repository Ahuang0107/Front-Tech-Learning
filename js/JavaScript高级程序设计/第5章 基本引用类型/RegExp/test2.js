let pattern=/[-+][0-9]+/;
if('-423abcsAS'.match(pattern)){
    console.log('-423abcsAS'.match(pattern));
    console.log('cs-423abcsAS'.match(pattern));
    console.log(pattern.exec('-423abcsAS'));
}else{
    console.log('null')
}
