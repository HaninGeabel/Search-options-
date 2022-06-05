

//var y=document.getElementById("searchByLname");
//var z=document.getElementById("searchByPhone");
var accidents;
var	xhr = new XMLHttpRequest();
var parsedrecord= parsedrecord || [];
//window.onload =adddata;

function adddata() {
    document.getElementById("vehicle_license_number").addEventListener("keyup", function(){SearchLicen(this.value);},false);
    document.getElementById("searchByLname").addEventListener("keyup", function(){SearchLname(this.value);},false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.cityofnewyork.us/resource/8wbx-tsch.json", true);
  xhr.send();
}

function SearchLicen(vehicle_license_number){
    document.getElementById("searchvalue").innerHTML = "Search by license numbe<br>";
    var SearchbyLicen;
    //var exist= "false";
    var i;
    var table="<tr><th>license Number</th><th>Full Name</th><th>license type</th><th>permit license number</th><th>Phone</th><th>Year</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
        var obj = parsedrecord[i];
        SearchbyLicen=obj.vehicle_license_number;
       
        if (SearchbyLicen && SearchbyLicen.startsWith(vehicle_license_number.toUpperCase()))
        {

             //exist= "true";
            table+="<tr><td>";
            table+=obj.vehicle_license_number;
            table+="</td><td>";
            table+=obj.name;
            table+="</td><td>";
            table+=obj.license_type;
            table+="</td><td>";
            table+=obj.permit_license_number;
            table+="</td><td>";
            table+=obj.base_telephone_number;
            table+="</td><td>";
            table+=obj.vehicle_year;
            table+="</td></tr>";
            
        }
        
    }
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}

function SearchLname(searchByLname){
    document.getElementById("searchvalue").innerHTML = "Search by license numbe<br>";
    var searchName;
    //var exist= "false";
    var i;
    var table="<tr><th>license Number</th><th>Full Name</th><th>license type</th><th>permit license number</th><th>Phone</th><th>Year</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
        var obj = parsedrecord[i];
        searchName=obj.name;
       
        if (searchName && searchName.startsWith(searchByLname.toUpperCase()))
        {

             //exist= "true";
            table+="<tr><td>";
            table+=obj.vehicle_license_number;
            table+="</td><td>";
            table+=obj.name;
            table+="</td><td>";
            table+=obj.license_type;
            table+="</td><td>";
            table+=obj.permit_license_number;
            table+="</td><td>";
            table+=obj.base_telephone_number;
            table+="</td><td>";
            table+=obj.vehicle_year;
            table+="</td></tr>";
            
        }
        
    }
   /* if (exist=="true"){*/
    document.getElementById("searchresults").innerHTML=table;
/*}else{
    document.getElementById("searchresults").innerHTML="Id is not found";
}*/
}


function adddataSecond() {
    document.getElementById("searchByYear").addEventListener("keyup", function(){SearchYear(this.value);},false);
    document.getElementById("searchGender").addEventListener("keyup", function(){SearchByGender(this.value);},false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.cityofnewyork.us/resource/jb7j-dtam.json", true);
  xhr.send();
}

function SearchYear(searchByYear){
    document.getElementById("searchvalue").innerHTML = "Search by Year<br>";
    var searchYear;
    //var exist= "false";
    var i;
    var table="<tr><th>Year</th><th>leading cause</th><th>Gender</th><th>deaths</th><th>death rate</th><th>age adjusted death rate</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
        var obj = parsedrecord[i];
        searchYear=obj.year;
       
        if (searchYear && searchYear.startsWith(searchByYear))
        {

             //exist= "true";
            table+="<tr><td>";
            table+=obj.year;
            table+="</td><td>";
            table+=obj.leading_cause;
            table+="</td><td>";
            table+=obj.sex;
            table+="</td><td>";
            table+=obj.deaths;
            table+="</td><td>";
            table+=obj.death_rate;
            table+="</td><td>";
            table+=obj.age_adjusted_death_rate;
            table+="</td></tr>";
            
        }
        
    }
  // if (exist=="true"){
    document.getElementById("searchresults").innerHTML=table;
//}else{
 //   document.getElementById("searchresults").innerHTML="Id is not found";

}


function SearchByGender(searchGender){
    document.getElementById("searchvalue").innerHTML = "Search by Gender<br>";
    var searchGenders;
    //var exist= "false";
    var i;
    var table="<tr><th>Year</th><th>leading cause</th><th>Gender</th><th>deaths</th><th>death rate</th><th>age adjusted death rate</th></tr>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
        var obj = parsedrecord[i];
        searchGenders=obj.sex;
       
        if (searchGenders && searchGenders.startsWith(searchGender.toUpperCase()))
        {

             //exist= "true";
             table+="<tr><td>";
             table+=obj.year;
             table+="</td><td>";
             table+=obj.leading_cause;
             table+="</td><td>";
             table+=obj.sex;
             table+="</td><td>";
             table+=obj.deaths;
             table+="</td><td>";
             table+=obj.death_rate;
             table+="</td><td>";
             table+=obj.age_adjusted_death_rate;
             table+="</td></tr>";
            }
        
        }
       //if (exist=="true"){
        document.getElementById("searchresults").innerHTML=table;
    //}else{
      //  document.getElementById("searchresults").innerHTML="Id is not found";
    //}
}



function adddataThird() {
    document.getElementById("searchByCity").addEventListener("keyup", function(){SearchCity(this.value);},false);
    document.getElementById("searchBuildingId").addEventListener("keyup", function(){SearchByBuilding(this.value);},false);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
         parsedrecord = JSON.parse(xhr.responseText);
      
    }
  };
  xhr.open("GET","https://data.cityofnewyork.us/resource/8586-3zfm.json", true);
  xhr.send();
}

function SearchCity(searchByCity){
    document.getElementById("searchvalue").innerHTML = "Search by City<br>";
    var seaCity;
    //var exist= "false";
    var i;
    var table="<tr><th>Building Address</th><th>Building Id</th><th>const type</th><th>city</th>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
        var obj = parsedrecord[i];
        seaCity=obj.city;
       
        if (seaCity && seaCity.startsWith(searchByCity.toUpperCase()))
        {

             //exist= "true";
            table+="<tr><td>";
            table+=obj.building_address;
            table+="</td><td>";
            table+=obj.buildingid;
            table+="</td><td>";
            table+=obj.consttype;
            table+="</td><td>";
            table+=obj.city;
            table+="</td></tr>";
            
        }
        
    }
  // if (exist=="true"){
    document.getElementById("searchresults").innerHTML=table;
//}else{
 //   document.getElementById("searchresults").innerHTML="Id is not found";

}


function SearchByBuilding(searchBuildingId){
    document.getElementById("searchvalue").innerHTML = "Search by City<br>";
    var searchBuilding;
    //var exist= "false";
    var i;
    var table="<tr><th>Building Address</th><th>Building Id</th><th>const type</th><th>city</th>";
  
    for(i=0; i<parsedrecord.length; i++)
    {
        var obj = parsedrecord[i];
        searchBuilding=obj.buildingid;
       
        if (searchBuilding && searchBuilding.startsWith(searchBuildingId))
        {

             //exist= "true";
            table+="<tr><td>";
            table+=obj.building_address;
            table+="</td><td>";
            table+=obj.buildingid;
            table+="</td><td>";
            table+=obj.consttype;
            table+="</td><td>";
            table+=obj.city;
            table+="</td></tr>";
            
        }
        
    }
  // if (exist=="true"){
    document.getElementById("searchresults").innerHTML=table;
//}else{
 //   document.getElementById("searchresults").innerHTML="Id is not found";

}

