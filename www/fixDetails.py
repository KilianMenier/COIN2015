#! /usr/bin/env python3
# -*- coding: utf8 -*-


"""Fix """


# Get needed modules
import sys
from xml.dom import minidom


# Load events
print("Loading modules")
xmldoc = minidom.parse('planning.xml')
all_events = xmldoc.getElementsByTagName('event')


# Loop through all events
for eventNode in all_events:
    print("loops")
    event = eventNode.childNodes
    
    # Get event name    
    for i in event:
        if i.nodeName == "title":
            title = i.childNodes[0].nodeValue
            break
    
    # Get event id
    for i in event:
        if i.nodeName == "modalID":
            modalID = i.childNodes[0].nodeValue
            break
    
    # Get event time and place
    for i in event:
        if i.nodeName == "WhenWhere":
            WhenWhere = i.childNodes[0].nodeValue
            break
        
        
    # Get event details
    for i in event:
        if i.nodeName == "details":
            details = i.childNodes[0].nodeValue
            break        
        
        
    # Look and get if secondary time and place/info    
    for i in event:
        if i.nodeName == "WhenWhereSecondary":
            WhenWhereSecondary = i.childNodes[0].nodeValue
            otherdetails = True
            break        
        
    # If yes, get informations too
    if otherdetails:            
        for i in event:
            if i.nodeName == "detailsSecondary":
                detailsSecondary = i.childNodes[0].nodeValue
                break        
        
    # Logging is important
    print("Got " + title + " on " + modalID)
          
    # Create needed file
    print("creating file")
    path = "data/"
    name = path + modalID + ".html"
    file = open(name, 'w')   
    
    towrite = """<!DOCTYPE html>
<html>
<head>
        <meta charset="utf-8">
        <title>COnvention INoubliable 2015 ! :)</title>
        <meta name="viewport"
        content="width=device-width, initial-scale=1.0,
        user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
        <!-- Note : Contenu autogénéré-->
</head>
<body>


<!-- Header bar -->
<header class="bar bar-nav">
    <a class="icon icon-left-nav pull-left" href="index.html" data-transition="slide-out" ></a>
    <h1 class="title">""" + title + """</h1>
</header>

<!-- Content -->
<div class="content">
    <div class="card">
        <ul class="table-view">
            <li class="table-view-cell table-view-divider">""" + WhenWhere + """</li>
            <li class="table-view-cell">""" + details + """</li>
            
            """
            
            
            
    if otherdetails:
         towrite = towrite + '<li class="table-view-cell table-view-divider">' + WhenWhereSecondary + """</li>
            <li class="table-view-cell">""" + detailsSecondary + """</li>"""
            
            
    towrite = towrite + """
        </ul>
    </div>
</div>


</body>
</html>"""       
            
     
    # writing
    print(towrite)
    file.write(towrite)
     
         
    # Close file
    file.close()
    print("finished !")
        
        