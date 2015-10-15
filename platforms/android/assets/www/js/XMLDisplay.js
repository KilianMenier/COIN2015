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





/* Write day planning */
function WriteDay(given_day) {
    
    // Get all stuff from given_day
    var d = given_day.childNodes

    // For each element
    for (ii=0;ii<d.length;ii++)
    {
        
        // Initialise stuff
        var what = d[ii].nodeName
        var towrite = ""
        
        
        // If the element is a divider
        if (what == "divider") {
            towrite = '<li class="table-view-cell table-view-divider">' + d[ii].childNodes[0].nodeValue + "</li>"
            document.write(towrite); // Write to doc
        }
        // Else if it's an event
        else if (what == "event") {
            
            // Create string : Start element + title + button w/ link to modal + End button + label + end element
            towrite = '<li class="table-view-cell"><a>' + 
            d[ii].getElementsByTagName("title")[0].childNodes[0].nodeValue + '</a><a class="btn btn-positive" href="Auto-' + d[ii].getElementsByTagName("modalID")[0].childNodes[0].nodeValue + '.html" data-transition="slide-in"><span class="icon icon-search">Détails</span></a></li>'
             // Write to doc
            document.write(towrite);
        }
        //else { alert("Err, got " + what.nodeName)}
    }  
}


/* Write content of page */
function WritePlanning() {
    
    // Load XML, get relevant elements
    xmlDoc = loadxml("planning.xml")
    x=xmlDoc.getElementsByTagName("day");

    
    // Loop through nodes to write each day
    for(i=0; i<x.length; i++) // For each day
    {
        // init
        var write = ""
        
        // Start day block
        write = '<div id="' + x.item(i).attributes.getNamedItem('id').value + '" class="control-content active"><ul class="table-view flip">' + '<li class="table-view-cell table-view-divider thisisaday">' + x.item(i).attributes.getNamedItem('name').value
        
        // Start day block and write divider
        document.write(write);
        
        // Write whole day
        WriteDay(x[i]);
        
        // End day block
        document.write('</ul></div>');
        
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
    document.write('</nav>    <div class="content" id="content card">');
    
    // And planning
    WritePlanning()
    document.write('</div>');        
}

