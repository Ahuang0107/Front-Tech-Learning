/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let length1=nums1.length;
    let length2=nums2.length;
    let totalLength=length1+length2;
    let k=0,i=0,j=0;
    let stop=(totalLength/2).toFixed(0);
    console.log(stop)
    let a=0,b=0;
    let flag=false;
    while(k<=stop){
        while(nums1[i]<=nums2[j]&&i<length1){
            k++;
            i++;
            flag=false;
        }
        while(nums1[i]>=nums2[j]&&j<length2){
            k++;
            j++;
            flag=true;
        }
        if(i===length1){
            j++;
            k++;
            flag=true;
        }else if(j===length2){
            i++;
            k++;
            flag=false;
        }
        if(k===stop-1){
            if(flag===false){
                a=nums1[i-1];
            }else{
                a=nums2[j-1];
            }
        }else if(k===stop){
            if(flag===false){
                b=nums1[i-1];
            }else{
                b=nums2[j-1];
            }
        }
    }
    if(totalLength%2===0){
        return ((a+b)/2).toFixed(5);
    }else{
        return b.toFixed(5);
    }
};

let test = [];
test.push([[1,3,5,7,8,10,11],[2,4,6,9]]);
test.push([[1,3],[2]]);
test.push([[1,2],[3,4]]);
test.push([[0,0],[0,0]]);
test.push([[],[1]]);
test.push([[2],[]]);
test.push([[1,3],[2,7]]);
test.push([[1,2],[1,2,3]]);

for(const value of test){
    console.log(findMedianSortedArrays(value[0],value[1]));
}

