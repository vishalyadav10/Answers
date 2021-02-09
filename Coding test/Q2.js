const count=(nums)=> {
    let d = 0;
    let res = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] ==0) {
            res = 0;
        } else {
            res++;
        };
        if (res>d) d=res;
    };
    return d;
};

console.log(count([0,0,1,1,0,0,0,1,0,0,1,1,1,0]))
