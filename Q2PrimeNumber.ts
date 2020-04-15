//Q2: Create a sample application in Typescript to find the prime numbers from 1 to 100.

var i;
var j;
for(i=2;i<=100;i++)
{
    var flag = true;
    for (j=2;j<i;j++)
    {
        if(i%j==0)
        {
            flag=false;
            break;
        }
    }
    if(flag)
    {
        console.log(i)
    }
}