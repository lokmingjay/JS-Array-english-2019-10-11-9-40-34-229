// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// a is string
// b is a array object


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(i=0;i<a.length;i++){
a[i]=a[i]*2;
}


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var color =colors[0];
for(i=1;i<colors.length;i++){
color =color +  ' ' + colors[i];  //case 1
//color = color + '+' + colors[i];  //case 2
//color = color + ',' + colors[i]; // case 3
}



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var b  = [2,1,3];
alert(a.sort(function(a,b){return a - b}).reverse());

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var ff = 0;
var f = 1;
var max;
for (i=0;i<a.length;i++){
    for (j=1;j<a.length;j++){
        if(a[i]==a[j]){
            f++;
            if(f>ff)
            {ff=f;
            max = a[i];}
        }
           
    }
f=0;
}

alert(max);