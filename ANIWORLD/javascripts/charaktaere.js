$(document).ready(function(){
    //index der die Array Elemente durchläuft
    var i=0;

    //One Piece 1. Template befüllen mit Werten aus Array
    $("#name").text(templateInhalt[i].Name);
    $("#species").text(templateInhalt[i].Species);
    $("#age").text(templateInhalt[i].Age);
    $("#height").text(templateInhalt[i].Height);
    $("#bounty").text(templateInhalt[i].Bounty);
    $("#abillity").text(templateInhalt[i].Abillity);
    $("#voting").text(templateInhalt[i].Voting);
    $("#templateimage").attr("src", imgArray[i].src);

    //Dragonball 1. Template befüllen mit Werten aus Array
    $("#name1").text(templateInhalt1[i].Name);
    $("#species1").text(templateInhalt1[i].Species);
    $("#age1").text(templateInhalt1[i].Age);
    $("#height1").text(templateInhalt1[i].Height);
    $("#strenght1").text(templateInhalt1[i].Strength);
    $("#abillity1").text(templateInhalt1[i].Abillity);
    $("#voting1").text(templateInhalt1[i].Voting);
    $("#templateimage1").attr("src", imgArray1[i].src);

    //rechter Pfeilclick, Array Längenabfrage und One Piece Template befüllen
    $(".pfeil-rechts").click(function(){
        if(i==templateInhalt.length-1){
            i=0;
        }else{
            i++;
        }
        $("#name").text(templateInhalt[i].Name);
        $("#species").text(templateInhalt[i].Species);
        $("#age").text(templateInhalt[i].Age);
        $("#height").text(templateInhalt[i].Height);
        $("#bounty").text(templateInhalt[i].Bounty);
        $("#abillity").text(templateInhalt[i].Abillity);
        $("#voting").text(templateInhalt[i].Voting);
        $("#templateimage").attr("src", imgArray[i].src);
    });

    //linker Pfeilclick, Array Längenabfrage und One Piece Template befüllen
    $(".pfeil-links").click(function(){
        if(i==0){
            i=templateInhalt.length-1;
        }else{
            i--;
        }
        $("#name").text(templateInhalt[i].Name);
        $("#species").text(templateInhalt[i].Species);
        $("#age").text(templateInhalt[i].Age);
        $("#height").text(templateInhalt[i].Height);
        $("#bounty").text(templateInhalt[i].Bounty);
        $("#abillity").text(templateInhalt[i].Abillity);
        $("#voting").text(templateInhalt[i].Voting);
        $("#templateimage").attr("src", imgArray[i].src);
    });


    //rechter Pfeilclick, Array Längenabfrage und Dragonball Template befüllen
    $(".pfeil-rechts1").click(function(){
        if(i==templateInhalt1.length-1){
            i=0;
        }else{
            i++;
        }
        $("#name1").text(templateInhalt1[i].Name);
        $("#species1").text(templateInhalt1[i].Species);
        $("#age1").text(templateInhalt1[i].Age);
        $("#height1").text(templateInhalt1[i].Height);
        $("#strenght1").text(templateInhalt1[i].Strength);
        $("#abillity1").text(templateInhalt1[i].Abillity);
        $("#voting1").text(templateInhalt1[i].Voting);
        $("#templateimage1").attr("src", imgArray1[i].src);
    });


    //linker Pfeilclick, Array Längenabfrage und Dragonball Template befüllen
    $(".pfeil-links1").click(function(){
        if(i==0){
            i=templateInhalt1.length-1;
        }else{
            i--;
        }
        $("#name1").text(templateInhalt1[i].Name);
        $("#species1").text(templateInhalt1[i].Species);
        $("#age1").text(templateInhalt1[i].Age);
        $("#height1").text(templateInhalt1[i].Height);
        $("#strenght1").text(templateInhalt1[i].Strength);
        $("#abillity1").text(templateInhalt1[i].Abillity);
        $("#voting1").text(templateInhalt1[i].Voting);
        $("#templateimage1").attr("src", imgArray1[i].src);
    });
});

//Array mit One Piece Templatedaten
var templateInhalt =[
    {
        Name:"Monkey D. Luffy",Species:"Human",Age: 19,Height:"1.74m",Bounty:"$1.500.000",Abillity:"Gomu Gomu no Mi",Voting:"1.637.921 P"
    },
    {
        Name:"Roronoa Zoro",Species:"Human",Age: 21,Height:"1.81m",Bounty:"$320.000",Abillity:"Swordsman Style",Voting:"1.445.034 P"
    },
    {
        Name:"Nami",Species:"Human",Age: 20,Height:"1.70m",Bounty:"$66.000",Abillity:"Fighting Style",Voting:"1.085.141 P"
    },
    {
        Name:"Sanji",Species:"Human",Age: 21,Height:"1.80m",Bounty:"$330.000",Abillity:"Art of Weather",Voting:"970.289 P"
    },
    {
        Name:"Nico Robin",Species:"Human",Age: 30,Height:"1.88m",Bounty:"$130.000",Abillity:"Hana Hana no Mi",Voting:"599.835 P"
    },
    {
        Name:"Tony Tony Chopper",Species:"Reindeer",Age: 17,Height:"0.90m",Bounty:"$100",Abillity:"Hito Hito no Mi",Voting:"116.364 P"
    },
    {
        Name:"Franky",Species:"Roboter",Age: 36,Height:"2.40m",Bounty:"$94.000",Abillity:"Cyborg Body",Voting:"66.398 P"
    },
    {
        Name:"Jinbe",Species:"Fish",Age: 46,Height:"3.01m",Bounty:"$400.000",Abillity:"Fish-Man Karate",Voting:"102.354 P"
    },
    {
        Name:"Brooks",Species:"Skelett",Age: 90,Height:"2.77m",Bounty:"$83.000",Abillity:"Yomi Yomi no Mi",Voting:"75.741 P"
    },
    {
        Name:"Usopp",Species:"Human",Age: 19,Height:"1.76m",Bounty:"$200.000",Abillity:"Slingshot Skills",Voting:"131.090 P"
    }
]


//Array mit Dragonball Templatedaten
var templateInhalt1 =[
    {
        Name:"Son Goku",Species:"Saiyan",Age: 43,Height:"1.75m",Strength:"12.6 10^42",Abillity:"M.Ultra Instinct",Voting:"x"
    },
    {
        Name:"Vegeta",Species:"Saiyan",Age: 48,Height:"1.64m",Strength:"9.5 10^36",Abillity:"SSBE Vegeta",Voting:"x"
    },
    {
        Name:"Piccolo",Species:"Demonic Namekian",Age: 27,Height:"2.26m",Strength:"42 10^30",Abillity:"Strongest Techniques",Voting:"x"
    },
    {
        Name:"Gohan",Species:"Human / Saiyan",Age: 23,Height:"1.76m",Strength:"112.5 10^30",Abillity:"Ultimate Gohan",Voting:"x"
    },
    {
        Name:"Krillin",Species:"Human",Age: 44,Height:"1.53m",Strength:"75 10^6",Abillity:"Normal Form",Voting:"x"
    },
    {
        Name:"Master Roshi",Species:"Human",Age: 350,Height:"1.65",Strength:"139 10^6",Abillity:"Beyond Limits",Voting:"x"
    },
    {
        Name:"Tien Shinhan",Species:"Human / Triclops",Age:28 ,Height:"1.87m",Strength:"60 10^6",Abillity:"Normal Form",Voting:"x"
    },
    {
        Name:"Android 18",Species:"Human / Android",Age:30 ,Height:"1.68m",Strength:"300 10^18",Abillity:"Cyborg Form",Voting:"x"
    },
    {
        Name:"Android 17",Species:"Human / Android",Age:29 ,Height:"1.79m",Strength:"40 10^30",Abillity:"Cyborg Form",Voting:"x"
    },
    {
        Name:"Frieza",Species:"Mutant",Age:32 ,Height:"1.58m",Strength:"100 10^30",Abillity:"True Golden Frieza",Voting:"x"
    }
]

//Array für One Piece Images
var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'pictures1/templateluffy.jpeg';
imgArray[1] = new Image();
imgArray[1].src = 'pictures1/templatezoro.jpeg';
imgArray[2] = new Image();
imgArray[2].src = 'pictures1/templatenami.jpeg';
imgArray[3] = new Image();
imgArray[3].src = 'pictures1/templatesanji.jpeg';
imgArray[4] = new Image();
imgArray[4].src = 'pictures1/templaterobin.jpeg';
imgArray[5] = new Image();
imgArray[5].src = 'pictures1/templatechopper.jpg';
imgArray[6] = new Image();
imgArray[6].src = 'pictures1/templatefranky.png';
imgArray[7] = new Image();
imgArray[7].src = 'pictures1/templatejinbe.jpeg';
imgArray[8] = new Image();
imgArray[8].src = 'pictures1/templatebrook.png';
imgArray[9] = new Image();
imgArray[9].src = 'pictures1/templateusopp.webp';

//Array für Dragonball Images
var imgArray1 = new Array();

imgArray1[0] = new Image();
imgArray1[0].src = 'pictures1/templategoku.jpeg';
imgArray1[1] = new Image();
imgArray1[1].src = 'pictures1/templatevegeta.png';
imgArray1[2] = new Image();
imgArray1[2].src = 'pictures1/templatepiccolo.jpeg';
imgArray1[3] = new Image();
imgArray1[3].src = 'pictures1/templategohan.jpeg';
imgArray1[4] = new Image();
imgArray1[4].src = 'pictures1/templatekrillin.jpeg';
imgArray1[5] = new Image();
imgArray1[5].src = 'pictures1/templateroshi.png';
imgArray1[6] = new Image();
imgArray1[6].src = 'pictures1/templatetenshinhan.png';
imgArray1[7] = new Image();
imgArray1[7].src = 'pictures1/templateandroid18.jpeg';
imgArray1[8] = new Image();
imgArray1[8].src = 'pictures1/templateandroid17.jpeg';
imgArray1[9] = new Image();
imgArray1[9].src = 'pictures1/templatefreeza.jpeg';