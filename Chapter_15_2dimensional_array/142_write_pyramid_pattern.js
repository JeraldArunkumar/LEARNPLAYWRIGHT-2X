//n=3
//draw pyramid pattern like this
//*
//**
//***

let n=3
for (let i=1;i<=n;i++)
    {
        let row=" "
        for(j=1;j<=i;j++){
            row+='*'
    }


    console.log(row.trim())

}