/* ---------------------------------- XML Functions ---------------------------------- */

//alert('Librairie XMLDisplay chargée !');

/* Lol */
function loadxml(filedotxml) {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET",filedotxml,false);
    xmlhttp.send();
    return xmlhttp.responseXML;    
    
}


/* WriteNavbar */
function WriteNavbar() {
    // Load XML, get relevant elements
    xmlDoc = loadxml("planning.xml")
    x=xmlDoc.getElementsByTagName("day");
    
    // Write starting of the navbar
    document.write('<div class="segmented-control card">');
    
    // Loop through nodes to write each day
    for(i=0; i<x.length; i++)
    {
        document.write('<a class="control-item" href="#')
        att = x.item(i).attributes.getNamedItem('id');
        document.write(att.value + '">');   
        att = x.item(i).attributes.getNamedItem('name');
        document.write(att.value + '</a>');
    }
    
    // Finish navbar and voilà it's done
    document.write('</div>');
}





/* Create day */
function WriteDay(given_day) {
    d = given_day.childNodes
    
    for (ii=0;ii<d.length;ii++)
    {
        what = d[ii].nodeName
        if (what == "divider") {   
            document.write('<li class="table-view-cell table-view-divider">');
            document.write(d[ii].childNodes[0].nodeValue);
            document.write("</li>");
        }
        else if (what == "event") {
            document.write('<li class="table-view-cell"><a>');                                  //Create entry
            document.write(d[ii].getElementsByTagName("title")[0].childNodes[0].nodeValue);      //Display title
            document.write('</a><a class="btn btn-positive" href="#');                          //Add button
            document.write(d[ii].getElementsByTagName("modalID")[0].childNodes[0].nodeValue);    //Add link to modal
            document.write('"><span class="icon icon-search">Détails</span></a></li>'); //Finish entry         
        }
        //else { alert("Err, got " + what.nodeName)}
        //alert(i)
    }  
}


/* Write content of page */
function WritePlanning() {
    
    // Load XML, get relevant elements
    //xmlDoc = loadxml("planning.xml")
    //x=xmlDoc.getElementsByTagName("day");
        var ActiveContent=false
    
    // Loop through nodes to write each day
    for(i=0; i<x.length; i++) // For each day
    {
        // Start day block
        document.write('<div id="')
        att = x.item(i).attributes.getNamedItem('id');
        document.write(att.value);
        document.write('" class="control-content active"><ul class="table-view">')
        //alert("running: " + x[i].nodeName)
        
        
        // Display megadivider for the day
        document.write('<li class="table-view-cell table-view-divider thisisaday">');
        att = x.item(i).attributes.getNamedItem('name');
        document.write("Évènements " + att.value);
        document.write("</li>");
        
        // Write whole day
        WriteDay(x[i]);
        
        // End day block
        document.write('</ul></div>');


        //alert("itération: [" + i + "] running: [" + x[i].nodeName + "] att id: [" + att.value + "]")
        
    }
}




/* Get and write the modal dialogs who gives informations */
function WriteModal() {
    
    // Load XML, get relevant elements
    xmlDoc = loadxml("planning.xml")
    wholefile=xmlDoc.getElementsByTagName("event");
    
    
    for (m=0;m<wholefile.length;m++)
    {
        // modalID is used twice, store it to get quicker (not much)
        // Write a modal for each event
        lol=wholefile[m].getElementsByTagName("modalID")[0].childNodes[0].nodeValue
        document.write('<div id="');
        document.write(lol); 
        document.write('"class="modal"> <header class="bar bar-standard bar-nav bar-header"><h1 class="title">');
        document.write(wholefile[m].getElementsByTagName("title")[0].childNodes[0].nodeValue); 
        document.write('</h1><a class="icon icon-close pull-right" href="#');
        document.write(lol); 
        document.write('"></a></header><div class="content"><div class="card"><ul class="table-view"><li class="table-view-cell table-view-divider">');
        document.write(wholefile[m].getElementsByTagName("WhenWhere")[0].childNodes[0].nodeValue);
        document.write('</li><li class="table-view-cell">');
        document.write(wholefile[m].getElementsByTagName("details")[0].childNodes[0].nodeValue);
        document.write('</li></ul></div>');
        
        
        // If there is a secondary text (secondary WhenWhere and details), include it
        if ((wholefile[m].getElementsByTagName("WhenWhereSecondary")[0]) && (wholefile[m].getElementsByTagName("detailsSecondary")[0])) {
            document.write('<div class="card"><ul class="table-view"><li class="table-view-cell table-view-divider">');
            document.write(wholefile[m].getElementsByTagName("WhenWhereSecondary")[0].childNodes[0].nodeValue);
            document.write('</li><li class="table-view-cell">');
            document.write(wholefile[m].getElementsByTagName("detailsSecondary")[0].childNodes[0].nodeValue);
            document.write('</li></ul></div>');  
        }
        
        
        // With alarms working
        //document.write('<div class="card"><ul class="table-view"><li class="table-view-cell">Alarme évènement :<div class="toggle active"><div class="toggle-handle"></div></div></li></ul></div>');
        
        document.write('</div></div><br>');        
    }  
}





/* Generate page */
function GeneratePage() {
    
    // Load database
    xmlDoc = loadxml("planning.xml")
    x=xmlDoc.getElementsByTagName("day");
    
    
    // Navigation bar
    document.write('<nav class="bar bar-header-secondary">');
    WriteNavbar();
    document.write('</nav>    <div class="content">');
    
    // And planning
    WritePlanning()
    document.write('</div>');        
    
    // Modal dialogs
    WriteModal()
    /*  
    <!-- MEGADIV --> <!-- Everything is contained in the Megadiv. The Megadiv is the universe.
    Without Megadiv, nothing could scroll, everything would be chaos and despair -->
    */

}






