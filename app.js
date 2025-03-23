 var ourarray=["John",23];
 var myarray=["Quincy",1];
 console.log(ourarray);
 console.log(myarray);

 var ourarray=[["the universe",42],["everything",101010]];
 var myarray=[["bulls",23],["white sox",45]];
 console.log(ourarray);
 console.log(myarray);

 var ourarray=[50,60,70];
 var ourdata=ourarray[0]    //equals 50
 console.log(ourdata);    //50   

 var ourarray=[18,64,99];
 ourarray[1]=45;                                        
    console.log(ourarray);    //[18,45,99]

    var ourarray=[[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
    var mydata=ourarray[3][0][1];
    console.log(mydata);    //11 
    var ourarray=["Stimpson","J","cat"];
      ourarray.push(["happy","joy"]);
      console.log(ourarray);    //["Stimpson","J","cat",["happy","joy"]]

      var ourarray=[1,2,3];
      var removedfromourarray=ourarray.pop();
      console.log(ourarray);    //[1,2]
      console.log(removedfromourarray);    //3

      var ourarray=["Stimpson","J","cat"];
      var removedfromourarray=ourarray.shift();
      console.log(ourarray);    //["J","cat"]
      console.log(removedfromourarray);    //Stimpson