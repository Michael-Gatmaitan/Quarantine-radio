// Object Formatter
const log = console.log;
var durations = {
    z: "",
    y: "",
    x: "",
};

var artists = {
    c: "",
    b: "",
    a: ""
};


const sortObj=o=>{t=[];l=0;for(i in o){t[l]=i;l+=1;}t=t.sort();p={};for(i of t){p[i]=o[i];}o=p;return o;}

durations = sortObj(durations);
artists = sortObj(artists);

log(durations, artists);