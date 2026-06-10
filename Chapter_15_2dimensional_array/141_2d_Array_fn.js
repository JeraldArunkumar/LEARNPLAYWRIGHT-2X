let scores=[
    [85,90,78],
    [60,45,70],
    [95,88,92]
    ];
    //let rowsums=scores.map(row=>row.reduce((a,b)=>a+b,0));

    let rowsum=scores.map(s=>s.reduce((a,b)=>a+b,0))

    console.log(rowsum)

    let result=[
        ["login-pass","Register-Pass","Logout-pass"],
        ["search-pass","Filter-Fail","sort-pass"],
        ["checkout-Fail","payment-Fail","confirm-pass"]
    ]
    // find those fail ones
    for (let i=0;i<result.length;i++){
        for(let j=0;j<result[i].length;j++)
            if (result[i][j].includes('Fail')){
                console.log(result[i][j])
            }
    }
