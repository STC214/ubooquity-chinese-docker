# Ubooquity 代码对照文档

本文按文件记录 `Ubooquity.jar.bak` 与 `Ubooquity.jar` 的详细对照。
每个文件都先展示原代码，再展示修改后代码，并补充必要说明。

## 文件列表
- `admin/about.txt`
- `admin/admin.css`
- `admin/admin.html`
- `admin/admin.js`
- `admin/help/bypassSingleRootFolder.html`
- `admin/help/exclusionPattern.html`
- `admin/help/folderMetadata.html`
- `admin/help/isDebugModeEnabled.html`
- `admin/help/isLogDuplicates.html`
- `admin/help/isRemoteScanTriggerAllowed.html`
- `admin/help/isRemoteShutdownAllowed.html`
- `admin/help/keepUnreachableFolders.html`
- `admin/help/opds.html`
- `admin/help/revProxy.html`
- `admin/help/theme.html`
- `admin/help/titleInsteadOfFilename.html`
- `admin/login.html`
- `admin/login.js`
- `admin/password.html`
- `admin/password.js`
- `themes/default/common/themeScript.js`
- `themes/default/home/homepage.css`
- `themes/default/home/page-home.html`
- `themes/default/library/inc-library-popups.html`
- `themes/default/library/inc-library-topbar-search.html`
- `themes/default/library/inc-library-topbar.html`
- `themes/default/library/library.css`
- `themes/default/library/page-library-category-root-dirs.html`
- `themes/default/library/page-library-details.html`
- `themes/default/library/page-library.html`
- `themes/default/login/login.css`
- `themes/default/login/page-login.html`
- `themes/default/rawfiles.css`

## `admin/about.txt`

<details>
<summary>原代码</summary>

~~~~text
License
-------
Ubooquity is free for non-commercial use.
Please contact the author for any other usage.

Disclaimer of Warranty
----------------------
Ubooquity is provided "as-is" and without warranty of any kind, express, implied or otherwise, including without limitation, any warranty of merchantability or fitness for a particular purpose.
In no event shall the author of this software be held liable for data loss, damages, loss of profits or any other kind of loss while using or misusing this software. 

Redistribution
--------------
Redistribution of the Ubooquity software is not allowed without explicit authorization from its author (users must download it from the Ubooquity website: http://vaemendis.net/ubooquity).

Modification
------------
Modification of the Ubooquity software is not allowed.

Restrictions on Use
-------------------
This software must not be decompiled, disassembled, reverse engineered or otherwise modified. The software is free for use but source code is not free (except, of course, the libraries listed below).

Third-party resources
---------------------
Ubooquity uses the following third-party libraries (many thanks to their authors):

	Apache Commons Compress
	http://commons.apache.org/compress
	
	Apache Commons IO
	http://commons.apache.org/io
	
	H2 Database Engine
	http://www.h2database.com/html/main.html
	
	SLF4J
	http://www.slf4j.org
	
	Logback
	http://logback.qos.ch

	JUnrar
	https://github.com/junrar/junrar

	JSHash
	http://pajhome.org.uk/crypt/md5/index.html
	
	Apache PDFBox
	http://pdfbox.apache.org

	JAI ImageIO modified by IDR solutions
    https://blog.idrsolutions.com/2011/03/java-jai-image-io-jpeg2000-memory-leak-fix/

	TwelveMonkeys ImageIO
	https://github.com/haraldk/TwelveMonkeys
	
	Imgscalr
	http://www.thebuzzmedia.com/software/imgscalr-java-image-scaling-library/
	
	Java-Mobi-Metadata-Editor
	https://github.com/gluggy/Java-Mobi-Metadata-Editor

	The Java DjVu Viewer Project
	http://javadjvu.foxtrottechnologies.com/

	JarClassLoader
	http://www.jdotsoft.com/JarClassLoader.php

	Jsoup
	http://jsoup.org/

	Jetty
	http://www.eclipse.org/jetty/

    Jackson
    https://github.com/FasterXML/jackson

    Angular JS
    https://angularjs.org/

    Angular Material
    https://material.angularjs.org/latest/

    UI Bootstrap
    https://angular-ui.github.io/bootstrap/

    Mig Layout
    https://www.miglayout.com/

    JMustache
    https://github.com/samskivert/jmustache

    Kotlin Logging
    https://github.com/oshai/kotlin-logging

    jopt-simple
    http://jopt-simple.github.io/jopt-simple/

Ubooquity also uses icons from the following sets :

	BeOS Icon Pack by Matthew McClintock 
	http://findicons.com/icon/258242/library

	Google Icons
	https://fonts.google.com/

The following fonts are used :

	Tex Gyre Pagella
	Fira Sans
	Charis SIL

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~text
许可证
-------
Ubooquity 仅供非商业用途免费使用。
For non-commercial use, Ubooquity is free.

如需其他用途，请联系作者。
Please contact the author for any other usage.

免责声明
--------
Ubooquity 以“原样”提供，不附带任何形式的保证，包括但不限于适销性或特定用途适用性的保证。
Ubooquity is provided "as-is" and without warranty of any kind, express, implied or otherwise, including without limitation, any warranty of merchantability or fitness for a particular purpose.

在使用或误用本软件期间，如发生数据丢失、损坏、利润损失或任何其他损失，作者不承担责任。
In no event shall the author of this software be held liable for data loss, damages, loss of profits or any other kind of loss while using or misusing this software.

再分发
------
未经作者明确授权，不得再分发 Ubooquity 软件（用户必须从 Ubooquity 网站下载：http://vaemendis.net/ubooquity）。
Redistribution of the Ubooquity software is not allowed without explicit authorization from its author (users must download it from the Ubooquity website: http://vaemendis.net/ubooquity).

修改
----
不允许修改 Ubooquity 软件。
Modification of the Ubooquity software is not allowed.

使用限制
--------
本软件不得反编译、反汇编、逆向工程或以其他方式修改。
This software must not be decompiled, disassembled, reverse engineered or otherwise modified.
本软件可免费使用，但源代码并非自由软件（下列库除外）。
The software is free for use but source code is not free (except, of course, the libraries listed below).

第三方资源
----------
Ubooquity 使用以下第三方库（感谢其作者）：
Ubooquity uses the following third-party libraries (many thanks to their authors):

	Apache Commons Compress
	http://commons.apache.org/compress
	Apache Commons IO
	http://commons.apache.org/io
	H2 Database Engine
	http://www.h2database.com/html/main.html
	SLF4J
	http://www.slf4j.org
	Logback
	http://logback.qos.ch
	JUnrar
	https://github.com/junrar/junrar
	JSHash
	http://pajhome.org.uk/crypt/md5/index.html
	Apache PDFBox
	http://pdfbox.apache.org
	JAI ImageIO modified by IDR solutions
	https://blog.idrsolutions.com/2011/03/java-jai-image-io-jpeg2000-memory-leak-fix/
	TwelveMonkeys ImageIO
	https://github.com/haraldk/TwelveMonkeys
	Imgscalr
	http://www.thebuzzmedia.com/software/imgscalr-java-image-scaling-library/
	Java-Mobi-Metadata-Editor
	https://github.com/gluggy/Java-Mobi-Metadata-Editor
	The Java DjVu Viewer Project
	http://javadjvu.foxtrottechnologies.com/
	JarClassLoader
	http://www.jdotsoft.com/JarClassLoader.php
	Jsoup
	http://jsoup.org/
	Jetty
	http://www.eclipse.org/jetty/
	Jackson
	https://github.com/FasterXML/jackson
	Angular JS
	https://angularjs.org/
	Angular Material
	https://material.angularjs.org/latest/
	UI Bootstrap
	https://angular-ui.github.io/bootstrap/
	Mig Layout
	https://www.miglayout.com/
	JMustache
	https://github.com/samskivert/jmustache
	Kotlin Logging
	https://github.com/oshai/kotlin-logging
	jopt-simple
	http://jopt-simple.github.io/jopt-simple/

Ubooquity 也使用了以下图标集：
Ubooquity also uses icons from the following sets:

	由 Matthew McClintock 制作的 BeOS Icon Pack
	http://findicons.com/icon/258242/library
	Google 图标
	https://fonts.google.com/

以下字体被使用：
The following fonts are used:

	Tex Gyre Pagella
	Fira Sans
	Charis SIL
~~~~
</details>

## `admin/admin.css`

<details>
<summary>原代码</summary>

~~~~css

html {
    overflow-y:scroll;
}

body {
	
}

#topbar{    
    top: 0px;
    left: 0px;
    height: 50px;           
    margin:20px;
}

#toplinkgroup{
    margin-right:350px;
}

.toplink{
    position: relative;
    top: 10px;
    margin-left: 0px;
    float: right;      
}

.topbutton{
    position: relative;
    top: 10px;
    margin: 5px;
    float: right;      
}


#bannerlogo{
    margin-left: 20px;
    margin-top:-10px;
}

#globalcontent{
    backgroundcolor: red;
}

#corecontent{
    backgroundcolor: blue;
    width:960px;
    margin: auto;
}

#version{    
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
        
}

#licensearea{    
    white-space: pre-line;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Courier New";
    background: transparent;
    border:1px solid black;     
    width: 80%;
    height: 500px;
}

#statstable{
    width:400px;
}

table {    
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 4px;
}

tr:nth-child(even) {
    background-color: #eeeeee;
}

.indent{
    margin-left: 10%;   
}

.tabsection{
    margin-left: 15%;   
    margin-bottom:20px;      
}

#unreachableserver{
    position: absolute;
    margin: auto;    
    top: 0; left: 0; bottom: 0; right: 0;
    text-align: center;    
    z-index: 100;
    width: 500px;
    height: 80px;
    color: white;
    background-color: #3333ff;
    box-shadow: 10px 10px 5px #888888;    
}

#waitingforserver{
    position: absolute;    
    z-index: 95;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-color: whitesmoke;        
}

#waitingforserver md-progress-circular{    
    margin: auto;    
    top: 200px; left: 0; bottom: 0; right: 0;    
}

.select160{
    width: 160px;
}

.leftlabel{    
    margin-right: 20px;
    width: 200px;
}

.pathtable{
    margin-left: 30px;
}

.usertable{
    margin-left: 30px;
    width: 400px;
}

.slider{
    width: 500px;
}

#folderselect{
    width: 600px;   
}

#folderselectlist{
    height: 400px;   
}

#folderdetails{
    padding: 20px;
    width: 400px;
    height: 240px;
}

#authorizationlist{
    height: 400px;
}

.help{
    font-size:20px;
}

#helpdialog{
    width: 700px;   
    height: 500px;   
}

#helpdialogcontent{
    padding: 10px;
}

#newuserdialogcontent{
    padding: 20px;
    width: 300px;   
    height: 260px;  
}

#newpassworddialogcontent{
    padding: 20px;
    width: 300px;   
    height: 160;  
}

.advancedsetting{
    width:500px;
}

#newversionlabel{
    border: solid 5px #7bdd4d;
    background-color: #7bdd4d;
    border-radius: 20px;
    margin: auto;
    margin-bottom: 15px;
      text-align: center;
    width: 40%;
}

#newversionlabel a{
    text-decoration: none;
    color: white;
    font-size: 20px;
}

#loginbanner{
    top: 0px;
    left: 0px;
    height: 50px;
    margin:20px;
    background-image: url('banner.png');
    background-repeat: no-repeat;
    background-position: 20px;
}

#loginform{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    width: 500px;
    border: solid lightgrey 1px;
}

#passwordform{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    width: 500px;
    border: solid lightgrey 1px;
}

.highlighteditem{
    font-weight: bold;
    color: red;
}
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~css

html {
    overflow-y:scroll;
}

body {
	
}

#topbar{    
    top: 0px;
    left: 0px;
    height: 50px;           
    margin:20px;
}

#toplinkgroup{
    margin-right:350px;
}

.toplink{
    position: relative;
    top: 10px;
    margin-left: 0px;
    float: right;      
}

.topbutton{
    position: relative;
    top: 10px;
    margin: 5px;
    float: right;      
}


#bannerlogo{
    margin-left: 20px;
    margin-top:-10px;
}

#globalcontent{
    background-color: #1e1e1e;
    color: #d4d4d4;
}



#corecontent{
    background-color: #252526;
    color: #d4d4d4;
    width:960px;
    margin: auto;
}



#version{    
    text-align: center;
    margin-top: 10px;
    margin-bottom: 20px;
        
}

#licensearea{
    white-space: pre-line;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Courier New";
    background: #252526;
    border:1px solid #3c3c3c;     
    width: 80%;
    height: 500px;
    color: #d4d4d4;
}



#statstable{
    width:400px;
}

table {    
    border-collapse: collapse;
    width: 100%;
}

td, th {
    border: 1px solid #3c3c3c;
    text-align: left;
    padding: 4px;
    color: #d4d4d4;
}



tr:nth-child(even) {
    background-color: #2d2d30;
}



.indent{
    margin-left: 10%;   
}

.tabsection{
    margin-left: 15%;   
    margin-bottom:20px;      
}

#unreachableserver{
    position: absolute;
    margin: auto;    
    top: 0; left: 0; bottom: 0; right: 0;
    text-align: center;    
    z-index: 100;
    width: 500px;
    height: 80px;
    color: #d4d4d4;
    background-color: #0e639c;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.45);    
}


#waitingforserver{
    position: absolute;    
    z-index: 95;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-color: rgba(30,30,30,0.94);        
}


#waitingforserver md-progress-circular{    
    margin: auto;    
    top: 200px; left: 0; bottom: 0; right: 0;    
}

.select160{
    width: 160px;
}

.leftlabel{    
    margin-right: 20px;
    width: 200px;
}

.pathtable{
    margin-left: 30px;
}

.usertable{
    margin-left: 30px;
    width: 400px;
}

.slider{
    width: 500px;
}

#folderselect{
    width: 600px;   
}

#folderselectlist{
    height: 400px;   
}

#folderdetails{
    padding: 20px;
    width: 400px;
    height: 240px;
}

#authorizationlist{
    height: 400px;
}

.help{
    font-size:20px;
}

#helpdialog{
    width: 700px;   
    height: 500px;   
}

#helpdialogcontent{
    padding: 10px;
}

#newuserdialogcontent{
    padding: 20px;
    width: 300px;   
    height: 260px;  
}

#newpassworddialogcontent{
    padding: 20px;
    width: 300px;   
    height: 160;  
}

.advancedsetting{
    width:500px;
}

#newversionlabel{
    border: solid 5px #007acc;
    background-color: #007acc;
    border-radius: 20px;
    margin: auto;
    margin-bottom: 15px;
      text-align: center;
    width: 40%;
}



#newversionlabel a{
    text-decoration: none;
    color: #d4d4d4;
    font-size: 20px;
}



#loginbanner{
    top: 0px;
    left: 0px;
    height: 50px;
    margin:20px;
    background-image: url('banner.png');
    background-repeat: no-repeat;
    background-position: 20px;
}

#loginform{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    width: 500px;
    border: solid #3c3c3c 1px;
    background-color: #252526;
    color: #d4d4d4;
}



#passwordform{
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 50px;
    width: 500px;
    border: solid #3c3c3c 1px;
    background-color: #252526;
    color: #d4d4d4;
}



.highlighteditem{
    font-weight: bold;
    color: #f48771;
}
html, body {
    background-color: #1e1e1e;
    color: #d4d4d4;
}

md-content,
md-tabs,
md-toolbar,
md-card,
md-select-menu md-content,
.md-select-menu-container md-content,
.md-dialog-container,
.md-dialog-content {
    background-color: #252526 !important;
    color: #d4d4d4 !important;
}

md-tabs md-tabs-wrapper,
md-tabs md-pagination-wrapper,
md-tabs md-ink-bar {
    background-color: #252526 !important;
}

md-input-container label,
md-input-container input,
md-input-container textarea,
md-select-value,
md-option,
md-list-item,
md-checkbox,
md-radio-button {
    color: #d4d4d4 !important;
}

md-input-container .md-input,
md-input-container textarea,
md-select-value,
md-select-menu md-content md-option {
    border-color: #3c3c3c !important;
}

md-divider {
    border-top-color: #3c3c3c !important;
}

/* Stronger VS Code dark theme overrides for tab labels and checkboxes */
md-tabs .md-tab,
md-tabs .md-tab md-icon,
md-tabs .md-tab span {
    color: #d4d4d4 !important;
    opacity: 1 !important;
}

md-tabs .md-tab.md-active,
md-tabs .md-tab.md-focused,
md-tabs .md-tab.md-active md-icon,
md-tabs .md-tab.md-focused md-icon {
    color: #ffffff !important;
}

md-tabs md-ink-bar {
    background: #007acc !important;
}

md-checkbox .md-container .md-icon,
md-checkbox .md-icon {
    border-color: #9da7b3 !important;
    background-color: transparent !important;
}

md-checkbox.md-checked .md-container .md-icon,
md-checkbox.md-checked .md-icon {
    background-color: #007acc !important;
    border-color: #007acc !important;
}

md-checkbox.md-checked .md-icon:after,
md-checkbox.md-checked .md-container .md-icon:after {
    border-color: #1e1e1e !important;
}

md-checkbox .md-label {
    color: #d4d4d4 !important;
}
/* Keep top buttons and library-related section text readable */
#topbar .topbutton,
#topbar .toplink {
    color: #d4d4d4 !important;
    background-color: transparent !important;
    opacity: 1 !important;
}

#topbar .md-button.md-primary,
#topbar .md-button.md-warn,
#topbar .md-button {
    color: #d4d4d4 !important;
}

md-tabs .md-tab,
md-tabs .md-tab md-icon,
md-tabs .md-tab span,
md-tabs .md-tab .md-ripple-container,
md-tabs .md-tab .md-button,
md-tabs .md-tab label {
    color: #d4d4d4 !important;
    opacity: 1 !important;
}

md-tabs .md-tab.md-active,
md-tabs .md-tab.md-focused,
md-tabs .md-tab.md-active md-icon,
md-tabs .md-tab.md-focused md-icon {
    color: #ffffff !important;
}

md-checkbox .md-label,
md-checkbox .md-container,
md-checkbox .md-container .md-icon,
md-checkbox .md-icon {
    color: #d4d4d4 !important;
    border-color: #9da7b3 !important;
}

md-checkbox.md-checked .md-container .md-icon,
md-checkbox.md-checked .md-icon {
    background-color: #007acc !important;
    border-color: #007acc !important;
}

md-checkbox.md-checked .md-icon:after,
md-checkbox.md-checked .md-container .md-icon:after {
    border-color: #1e1e1e !important;
}

#corecontent md-input-container label,
#corecontent md-select-value,
#corecontent md-option,
#corecontent .md-list-item-text,
#corecontent .md-list-item-text h3,
#corecontent .md-list-item-text p,
#corecontent .leftlabel,
#corecontent .help,
#corecontent .advancedsetting {
    color: #d4d4d4 !important;
}
~~~~
</details>

## `admin/admin.html`

<details>
<summary>原代码</summary>

~~~~html
<!DOCTYPE html>
<html ng-app="adminApp" ng-controller="adminController">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="/admin-res/angular-material.min.css">
    <link rel="stylesheet" href="/admin-res/roboto.css">
    <link rel="stylesheet" type="text/css" href="/admin-res/admin.css">
    <title>Ubooquity configuration</title>
    <link rel="icon" href="/admin-res/favicon.ico">
</head>

<body>
    <div id="unreachableserver" ng-show="showUnreachableServer">
        <h1>Not connected to the server</h1>
    </div>
    <div id="waitingforserver" ng-show="showServerProgress">
        <md-progress-circular md-diameter="120"></md-progress-circular>
    </div>
    <md-content ng-hide="showUnreachableServer" id="globalcontent">
        <div id="topbar">
            <md-button class="md-raised md-warn topbutton" ng-click="discardChanges($event)" ng-disabled="!configModified">Discard changes</md-button>
            <md-button class="md-raised md-primary topbutton" ng-click="saveConfig()" ng-disabled="!configModified">Save and restart</md-button>
            <div id="toplinkgroup">
                <md-button href="http://vaemendis.net/ubooquity/service/godonatepage.php" class="md-primary toplink">Donate</md-button>
                <md-button href="http://vaemendis.net/ubooquity/static13/forum" class="md-primary toplink">Forum</md-button>
                <md-button href="http://vaemendis.net/ubooquity/static6/f-a-q" class="md-primary toplink">Help</md-button>
                <md-button href="admin?logout=true" class="toplink">Sign out</md-button>
            </div>
            <a ng-href="{{libraryUrl}}"><img id="bannerlogo" src="/admin-res/banner.png"></a>
        </div>
        <div id="newversionlabel" ng-show="newVersionAvailable">
            <a href="http://vaemendis.net/ubooquity/" target="_blank">A new version of <u>Ubooquity</u> is available !</a>
        </div>
        <md-divider></md-divider>
        <md-tabs md-dynamic-height md-border-bottom md-stretch-tabs="always" id="corecontent">
            <md-tab label="General">
                <md-content class="md-padding">
                    <h1 class="md-title indent">Status</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <span class="leftlabel">Last scan:</span> {{status.lastScan}}
                        </div>
                        <div> {{status.currentOperation}}</div>
                        <br>
                        <div>
                            <table id="statstable">
                                <tr>
                                    <th></th>
                                    <th>Entries</th>
                                </tr>
                                <tr>
                                    <td><b>Added/updated </b></td>
                                    <td>{{status.updatedOpus}}</td>
                                </tr>
                                <tr>
                                    <td><b>Removed </b></td>
                                    <td>{{status.removedOpus}}</td>
                                </tr>
                                <tr>
                                    <td><b>Total </b></td>
                                    <td>
                                        <md-progress-circular ng-disabled="!status.scanInProgress" ng-show="status.scanInProgress" class="md-hue-2" md-diameter="16px"></md-progress-circular>{{status.totalOpus}}</td>                                    
                                </tr>
                            </table>
                        </div>
                        <div layout="row" layout-align="start space-around">
                            <md-button href="admin-api/logs" target="_blank" class="md-primary toplink">View logs</md-button>
                            <md-button href="admin-api/info" target="_blank" class="md-primary toplink">View system info</md-button>
                        </div>

                    </div>
                    <h1 class="md-title indent">Content scan</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <span class="leftlabel">Automatic scan period:</span>
                            <md-select class="select160" ng-model="config.autoscanPeriod" aria-label="period" ng-selected="config.autoscanPeriod">
                                <md-option ng-value="0">Disabled</md-option>
                                <md-option ng-value="15">15 minutes</md-option>
                                <md-option ng-value="60">1 hour</md-option>
                                <md-option ng-value="180">3 hours</md-option>
                                <md-option ng-value="720">12 hours</md-option>
                                <md-option ng-value="1440">1 days</md-option>
                                <md-option ng-value="4320">3 days</md-option>
                                <md-option ng-value="10080">1 week</md-option>
                            </md-select>
                        </div>
                        <div>
                            <md-checkbox ng-model="config.autoScanAtLaunch" aria-label="autoscan">
                                Scan collection at launch
                            </md-checkbox>
                        </div>
                        <div>
                            <md-button class="md-raised md-primary" ng-click="launchScan()">Launch new scan</md-button>
                        </div>
                    </div>

                    <h1 class="md-title indent">Theme</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <span class="leftlabel">Current theme:</span>
                            <md-select ng-model="config.theme" class="select160" ng-selected="config.theme" aria-label="themes">
                                <md-option ng-value="theme" ng-repeat="theme in themes.themeList">{{theme}}</md-option>
                            </md-select>
                        </div>
                        <div>
                            <md-button class="md-raised md-primary" ng-click="createTheme($event)">Create new theme...</md-button>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'theme')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                    </div>

                </md-content>
            </md-tab>
            <md-tab label="Library">
                <md-content class="md-padding">
                    <h1 class="md-title indent">Shared folders</h1>
                    <div class="tabsection">
                        <div class="pathtable">
                            <md-list flex>
                                <md-list-item class="md-2-line" ng-repeat="item in config.opusPaths">
                                    <div class="md-list-item-text" layout="column">
                                        <h3>{{item.pathString}}</h3>
                                        <p><b>Access:</b> <span ng-class="getUserListClass(item.userName)">{{formatUserList(item.userName)}}</span></p>
                                        <p><b>Category:</b> <span>{{formatFolderInfo(item)}}</span></p>
                                        <md-icon ng-click="displayOpusAuthorizationDialog($event, item)" aria-label="users" class="md-secondary" md-svg-src="/admin-res/users.svg"></md-icon>
                                        <md-icon ng-click="removeOpusPath($event, item.pathString)" aria-label="delete" class="md-secondary" md-svg-src="/admin-res/delete.svg"></md-icon>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                        <md-button class="md-raised" ng-click="displayOpusFolderDialog($event)">Add folder...</md-button>
                    </div>
                    <h1 class="md-title indent">Display</h1>
                    <div class="tabsection">
                        <span class="leftlabel">Thumbnail size:</span> {{config.opusWidth}} x {{config.opusHeight}}
                        <div layout class="slider">
                            <md-slider-container>
                                <md-slider flex="none" min="50" max="300" ng-model="config.opusWidth" aria-label="opusWidth" class="slider">
                                </md-slider>
                            </md-slider-container>
                            <md-button class="md-raised" ng-click="defaultOpusWidth()">Default</md-button>
                        </div>
                        <span class="leftlabel">Items per page:</span> {{config.opusPaginationNumber}}
                        <div layout class="slider">
                            <md-slider-container>
                                <md-slider flex="none" min="1" max="300" ng-model="config.opusPaginationNumber" aria-label="opusPagination" class="slider">
                                </md-slider>
                            </md-slider-container>
                            <md-button class="md-raised" ng-click="defaultOpusPagination()">Default</md-button>
                        </div>
                    </div>
                    <h1 class="md-title indent">Database</h1>
                    <div class="tabsection">
                        <md-button class="md-raised md-primary" ng-click="clearOpusDatabase($event)">Clear library database...</md-button>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="Raw files">
                <md-content class="md-padding">
                    <div class="indent">
                        <md-checkbox ng-model="config.isFilesProviderEnabled" aria-label="filesModule">
                            Activate raw files sharing module (any type of file)
                        </md-checkbox>
                    </div>
                    <h1 class="md-title indent">Shared folders</h1>
                    <div class="tabsection">
                        <div class="pathtable">
                            <md-list flex>
                                <md-list-item class="md-2-line" ng-repeat="item in config.filesPaths">
                                    <div class="md-list-item-text" layout="column">
                                        <h3>{{item.pathString}}</h3>
                                        <p><b>Access:</b> <span ng-class="getUserListClass(item.userName)">{{formatUserList(item.userName)}}</span></p>
                                        <md-icon ng-click="displayFilesAuthorizationDialog($event, item)" aria-label="users" class="md-secondary" md-svg-src="/admin-res/users.svg"></md-icon>
                                        <md-icon ng-click="removeFilesPath($event, item.pathString)" aria-label="delete" class="md-secondary" md-svg-src="/admin-res/delete.svg"></md-icon>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                        <md-button class="md-raised" ng-click="displayFilesFolderDialog($event)">Add folder...</md-button>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="Security">
                <md-content class="md-padding">
                    <div class="indent">
                        <md-checkbox ng-model="config.isUserManagementEnabled" aria-label="userManagement">
                            Protect shared content with user accounts
                        </md-checkbox>
                    </div>
                    <h1 class="md-title indent">Users</h1>
                    <div class="tabsection">
                        <div class="usertable">
                            <md-list flex>
                                <md-list-item ng-repeat="item in config.users">
                                    <div class="md-list-item-text" layout="column">
                                        {{item.name}}
                                        <md-icon ng-click="openPasswordDialog($event, item.name)" aria-label="users" class="md-secondary" md-svg-src="/admin-res/edit.svg"></md-icon>
                                        <md-icon ng-click="deleteUser($event, item.name)" aria-label="delete" class="md-secondary" md-svg-src="/admin-res/delete.svg"></md-icon>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                        <md-button class="md-raised" ng-click="openNewUserDialog($event)">Add user...</md-button>
                    </div>
                    <h1 class="md-title indent">KeyStore</h1>
                    <div class="tabsection">
                        <div layout="column">
                            <md-input-container>
                                <label>KeyStore file path</label>
                                <input ng-model="config.keystorePath">
                            </md-input-container>
                            <md-input-container>
                                <label>KeyStore password</label>
                                <input ng-model="config.keystorePassword" type="password">
                            </md-input-container>
                        </div>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="Advanced">
                <md-content class="md-padding">
                    <h1 class="md-title indent">Advanced settings</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isOpdsProviderEnabled" aria-label="opds">
                                    Enable OPDS feed
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'opds')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.bypassSingleRootFolder" aria-label="bypassSingleRootFolder">
                                    Bypass single root folder
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'bypassSingleRootFolder')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.enableFolderMetadataDisplay" aria-label="enableFolderMetadataDisplay">
                                    Enable folder metadata display
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'folderMetadata')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.displayTitleInsteadOfFileName" aria-label="displayTitleInsteadOfFileName">
                                    Display title from metadata instead of file name
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'titleInsteadOfFilename')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.keepUnreachableSharedFolders" aria-label="keepUnreachableSharedFolders">
                                    Do not remove data from unreachable folders
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'keepUnreachableFolders')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isLogDuplicates" aria-label="isLogDuplicates">
                                    Identify and log duplicate files after scan
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'isLogDuplicates')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/warning.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isDebugModeEnabled" aria-label="isDebugModeEnabled">
                                    Activate debug mode
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'isDebugModeEnabled')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isRemoteScanTriggerAllowed" aria-label="isRemoteScanTriggerAllowed">
                                    Allow remote scan triggering using secret API key
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'isRemoteScanTriggerAllowed')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isRemoteShutdownAllowed" aria-label="isRemoteShutdownAllowed">
                                    Allow remote shutdown using secret API key
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'isRemoteShutdownAllowed')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="md-caption">Secret API key:&nbsp;&nbsp; {{config.secretApiKey}}</span>
                            &nbsp;&nbsp;&nbsp;<md-button class="md-raised" ng-click="regenerateSecretApiKey()" ng-disabled="!config.isRemoteScanTriggerAllowed && !config.isRemoteShutdownAllowed">Regenerate key</md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <md-input-container class="advancedsetting">
                                <label>Scan exclusion pattern</label>
                                <input ng-model="config.folderExclusionPattern">
                            </md-input-container>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'exclusionPattern')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <md-input-container class="advancedsetting">
                                <label>Reverse proxy prefix</label>
                                <input ng-model="config.reverseProxyPrefix">
                            </md-input-container>
                            <md-button class="md-icon-button" aria-label="help" ng-click="showHelp($event, 'revProxy')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        
                        <span class="leftlabel">Thumbnail compression quality:</span> {{config.thumbnailCompressionQuality}}
                        <div layout class="slider">
                            <md-slider-container>
                                <md-slider flex="none" min="0.1" max="1" step="0.05" ng-model="config.thumbnailCompressionQuality" aria-label="thumbnailCompressionQuality" class="slider">
                                </md-slider>
                            </md-slider-container>
                            <md-button class="md-raised" ng-click="defaultThumbnailCompressionQuality()">Default</md-button>
                        </div>
                        
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="About">
                <md-content class="md-padding">
                    <div id="version">
                        <b>Ubooquity {{versionInfo.version}}</b>
                        <br> built on {{versionInfo.buildDate}}
                        <br>
                        <a href="http://vaemendis.net/ubooquity">Visit website</a>
                        <br>
                        <br> If you find Ubooquity useful and want to support its development, visit the <a href="http://vaemendis.net/ubooquity/service/godonatepage.php">donation page</a>.
                    </div>

                    <textarea id="licensearea" readonly>
                        {{license}}
                    </textarea>
                </md-content>
            </md-tab>
        </md-tabs>
    </md-content>

    <!-- add folder dialog -->
    <script type="text/ng-template" id="addfolder.tmpl.html">
        <md-dialog id="folderselect" aria-label="folder selection">
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h2>Choose a folder to share</h2>
                </div>
            </md-toolbar>
            <md-dialog-content>
                <div id="folderselectlist">
                    <md-progress-linear md-mode="indeterminate" ng-disabled="!explorerLoading" ng-show="explorerLoading"></md-progress-linear>
                    <md-list>
                        <md-list-item class="secondary-button-padding" ng-repeat="item in folderListing" ng-click="explore(item.path)">
                            <p>{{item.name}}</p>
                            <md-button ng-if="item.selectable" ng-click="addPath(item.path)" class="md-raised">share...</md-button>
                        </md-list-item>
                    </md-list>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">
                    Done
                </md-button>
            </md-dialog-actions>
        </md-dialog>
    </script>

    <!-- folder details dialog -->
    <script type="text/ng-template" id="folderdetails.tmpl.html">
        <md-dialog id="folderdetails" aria-label="folder details">
            <md-dialog-content>
                <div id="folderdetailsdialogcontent">
                    <h3 class="md-title">{{newFolderName}}</h3>
                    <div layout="row" layout-align="start center">
                        Folder category &nbsp; &nbsp; &nbsp;
                        <md-select class="select160" ng-model="category" placeholder="Category">
                            <md-option ng-value="'comics'">Comics</md-option>
                            <md-option ng-value="'books'">Books</md-option>
                            <md-option ng-value="'magazines'">Magazines</md-option>
                            <md-option ng-value="'documents'">Documents</md-option>
                            <md-option ng-value="'others'">Others</md-option>
                        </md-select>
                    </div>
                    <md-checkbox class="md-secondary" ng-model="isCalibreLibrary">Folder is a Calibre library</md-checkbox>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">Cancel</md-button>
                <md-button class="md-raised" ng-click="addFolderWithDetailsAndHide()">Share folder</md-button>
            </md-dialog-actions>
        </md-dialog>
    </script>

    <!-- authorizations dialog -->
    <script type="text/ng-template" id="authorization.tmpl.html">
        <md-dialog id="authorization" aria-label="folder access rights">
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h2>Choose authorized users</h2>
                </div>
            </md-toolbar>
            <md-dialog-content>
                <div id="authorizationlist">
                    <md-list>
                        <md-list-item class="secondary-button-padding" ng-repeat="item in authorizationList">
                            <p>{{item.name}}</p>
                            <md-checkbox class="md-secondary" ng-model="item.hasAccess"></md-checkbox>
                        </md-list-item>
                    </md-list>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">
                    Done
                </md-button>
            </md-dialog-actions>
        </md-dialog>
    </script>

    <!-- online help dialog -->
    <script type="text/ng-template" id="help.tmpl.html">
        <md-dialog id="helpdialog" aria-label="online help">
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h3>Ubooquity Help</h3>
                    <span flex></span>
                    <md-button aria-label="close" ng-click="cancel()">
                        Close
                    </md-button>
                </div>
            </md-toolbar>
            <md-dialog-content>
                <div ng-bind-html="currentHelpContent" id="helpdialogcontent"></div>
            </md-dialog-content>
        </md-dialog>
    </script>

    <!-- new user dialog -->
    <script type="text/ng-template" id="newuser.tmpl.html">
        <md-dialog id="newuserdialog" aria-label="new user">
            <md-dialog-content>
                <div id="newuserdialogcontent">
                    <h3>User creation</h3>
                    <div layout="column">
                        <md-input-container>
                            <label>User name</label>
                            <input ng-model="editedUser.name">
                        </md-input-container>
                        <md-input-container>
                            <label>Password</label>
                            <input ng-model="editedUser.password" type="password">
                        </md-input-container>
                    </div>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">Cancel</md-button>
                <md-button class="md-raised" ng-click="addUserToConfig()">Create user</md-button>
            </md-dialog-actions>

        </md-dialog>
    </script>

    <!-- change password dialog -->
    <script type="text/ng-template" id="newpassword.tmpl.html">
        <md-dialog id="newpassworddialog" aria-label="new password">
            <md-dialog-content>
                <div id="newpassworddialogcontent">
                    <h3>Change password</h3>
                    <div layout="column">
                        <label>User: {{editedUser.name}}</label>
                        <md-input-container>
                            <label>New password</label>
                            <input ng-model="editedUser.password" type="password">
                        </md-input-container>
                    </div>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">Cancel</md-button>
                <md-button class="md-raised" ng-click="changeUserPassword()">Update password</md-button>
            </md-dialog-actions>

        </md-dialog>
    </script>


    <script src="/admin-res/sha256-min.js"></script>
    <script src="/admin-res/angular.min.js"></script>
    <script src="/admin-res/angular-sanitize.min.js"></script>
    <script src="/admin-res/angular-animate.min.js"></script>
    <script src="/admin-res/angular-aria.min.js"></script>
    <script src="/admin-res/angular-messages.min.js"></script>
    <script src="/admin-res/angular-material.min.js"></script>

    <script src="/admin-res/admin.js"></script>
</body>

</html>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<!DOCTYPE html>
<html ng-app="adminApp" ng-controller="adminController">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="/admin-res/angular-material.min.css">
    <link rel="stylesheet" href="/admin-res/roboto.css">
    <link rel="stylesheet" type="text/css" href="/admin-res/admin.css">
    <title>Ubooquity configuration</title>
    <link rel="icon" href="/admin-res/favicon.ico">
</head>

<body>
    <div id="unreachableserver" ng-show="showUnreachableServer">
        <h1>未连接到服务器</h1>
    </div>
    <div id="waitingforserver" ng-show="showServerProgress">
        <md-progress-circular md-diameter="120"></md-progress-circular>
    </div>
    <md-content ng-hide="showUnreachableServer" id="globalcontent">
        <div id="topbar">
            <md-button class="md-raised md-warn topbutton" ng-click="discardChanges($event)" ng-disabled="!configModified">放弃更改</md-button>
            <md-button class="md-raised md-primary topbutton" ng-click="saveConfig()" ng-disabled="!configModified">保存并重启</md-button>
            <div id="toplinkgroup">
                <md-button href="http://vaemendis.net/ubooquity/service/godonatepage.php" class="md-primary toplink">捐赠</md-button>
                <md-button href="http://vaemendis.net/ubooquity/static13/forum" class="md-primary toplink">论坛</md-button>
                <md-button href="http://vaemendis.net/ubooquity/static6/f-a-q" class="md-primary toplink">帮助</md-button>
                <md-button href="admin?logout=true" class="toplink">退出登录</md-button>
            </div>
            <a ng-href="{{libraryUrl}}"><img id="bannerlogo" src="/admin-res/banner.png"></a>
        </div>
        <div id="newversionlabel" ng-show="newVersionAvailable">
            <a href="http://vaemendis.net/ubooquity/" target="_blank">发现 <u>Ubooquity</u> 新版本！</a>
        </div>
        <md-divider></md-divider>
        <md-tabs md-dynamic-height md-border-bottom md-stretch-tabs="always" id="corecontent">
            <md-tab label="常规">
                <md-content class="md-padding">
                    <h1 class="md-title indent">状态</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <span class="leftlabel">上次扫描：</span> {{status.lastScan}}
                        </div>
                        <div> {{status.currentOperation}}</div>
                        <br>
                        <div>
                            <table id="statstable">
                                <tr>
                                    <th></th>
                                    <th>条目数</th>
                                </tr>
                                <tr>
                                    <td><b>新增/更新</b></td>
                                    <td>{{status.updatedOpus}}</td>
                                </tr>
                                <tr>
                                    <td><b>移除</b></td>
                                    <td>{{status.removedOpus}}</td>
                                </tr>
                                <tr>
                                    <td><b>总计</b></td>
                                    <td>
                                        <md-progress-circular ng-disabled="!status.scanInProgress" ng-show="status.scanInProgress" class="md-hue-2" md-diameter="16px"></md-progress-circular>{{status.totalOpus}}</td>                                    
                                </tr>
                            </table>
                        </div>
                        <div layout="row" layout-align="start space-around">
                            <md-button href="admin-api/logs" target="_blank" class="md-primary toplink">查看日志</md-button>
                            <md-button href="admin-api/info" target="_blank" class="md-primary toplink">查看系统信息</md-button>
                        </div>

                    </div>
                    <h1 class="md-title indent">内容扫描</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <span class="leftlabel">自动扫描周期：</span>
                            <md-select class="select160" ng-model="config.autoscanPeriod" aria-label="period" ng-selected="config.autoscanPeriod">
                                <md-option ng-value="0">禁用</md-option>
                                <md-option ng-value="15">15 分钟</md-option>
                                <md-option ng-value="60">1 小时</md-option>
                                <md-option ng-value="180">3 小时</md-option>
                                <md-option ng-value="720">12 小时</md-option>
                                <md-option ng-value="1440">1 天</md-option>
                                <md-option ng-value="4320">3 天</md-option>
                                <md-option ng-value="10080">1 周</md-option>
                            </md-select>
                        </div>
                        <div>
                            <md-checkbox ng-model="config.autoScanAtLaunch" aria-label="autoscan">
                                启动时扫描书库
                            </md-checkbox>
                        </div>
                        <div>
                            <md-button class="md-raised md-primary" ng-click="launchScan()">立即开始新扫描</md-button>
                        </div>
                    </div>

                    <h1 class="md-title indent">主题</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <span class="leftlabel">当前主题：</span>
                            <md-select ng-model="config.theme" class="select160" ng-selected="config.theme" aria-label="主题列表">
                                <md-option ng-value="theme" ng-repeat="theme in themes.themeList">{{theme}}</md-option>
                            </md-select>
                        </div>
                        <div>
                            <md-button class="md-raised md-primary" ng-click="createTheme($event)">创建主题...</md-button>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'theme')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                    </div>

                </md-content>
            </md-tab>
            <md-tab label="书库">
                <md-content class="md-padding">
                    <h1 class="md-title indent">共享文件夹</h1>
                    <div class="tabsection">
                        <div class="pathtable">
                            <md-list flex>
                                <md-list-item class="md-2-line" ng-repeat="item in config.opusPaths">
                                    <div class="md-list-item-text" layout="column">
                                        <h3>{{item.pathString}}</h3>
                                        <p><b>访问：</b> <span ng-class="getUserListClass(item.userName)">{{formatUserList(item.userName)}}</span></p>
                                        <p><b>分类：</b> <span>{{formatFolderInfo(item)}}</span></p>
                                        <md-icon ng-click="displayOpusAuthorizationDialog($event, item)" aria-label="用户" class="md-secondary" md-svg-src="/admin-res/users.svg"></md-icon>
                                        <md-icon ng-click="removeOpusPath($event, item.pathString)" aria-label="删除" class="md-secondary" md-svg-src="/admin-res/delete.svg"></md-icon>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                        <md-button class="md-raised" ng-click="displayOpusFolderDialog($event)">添加文件夹...</md-button>
                    </div>
                    <h1 class="md-title indent">显示</h1>
                    <div class="tabsection">
                        <span class="leftlabel">缩略图大小：</span> {{config.opusWidth}} x {{config.opusHeight}}
                        <div layout class="slider">
                            <md-slider-container>
                                <md-slider flex="none" min="50" max="300" ng-model="config.opusWidth" aria-label="opusWidth" class="slider">
                                </md-slider>
                            </md-slider-container>
                            <md-button class="md-raised" ng-click="defaultOpusWidth()">默认值</md-button>
                        </div>
                        <span class="leftlabel">每页项目数：</span> {{config.opusPaginationNumber}}
                        <div layout class="slider">
                            <md-slider-container>
                                <md-slider flex="none" min="1" max="300" ng-model="config.opusPaginationNumber" aria-label="opusPagination" class="slider">
                                </md-slider>
                            </md-slider-container>
                            <md-button class="md-raised" ng-click="defaultOpusPagination()">默认值</md-button>
                        </div>
                    </div>
                    <h1 class="md-title indent">数据库</h1>
                    <div class="tabsection">
                        <md-button class="md-raised md-primary" ng-click="clearOpusDatabase($event)">清空书库数据库...</md-button>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="原始文件">
                <md-content class="md-padding">
                    <div class="indent">
                        <md-checkbox ng-model="config.isFilesProviderEnabled" aria-label="filesModule">
                            启用原始文件共享模块（支持任意文件类型）
                        </md-checkbox>
                    </div>
                    <h1 class="md-title indent">共享文件夹</h1>
                    <div class="tabsection">
                        <div class="pathtable">
                            <md-list flex>
                                <md-list-item class="md-2-line" ng-repeat="item in config.filesPaths">
                                    <div class="md-list-item-text" layout="column">
                                        <h3>{{item.pathString}}</h3>
                                        <p><b>访问：</b> <span ng-class="getUserListClass(item.userName)">{{formatUserList(item.userName)}}</span></p>
                                        <md-icon ng-click="displayFilesAuthorizationDialog($event, item)" aria-label="用户" class="md-secondary" md-svg-src="/admin-res/users.svg"></md-icon>
                                        <md-icon ng-click="removeFilesPath($event, item.pathString)" aria-label="删除" class="md-secondary" md-svg-src="/admin-res/delete.svg"></md-icon>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                        <md-button class="md-raised" ng-click="displayFilesFolderDialog($event)">添加文件夹...</md-button>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="安全">
                <md-content class="md-padding">
                    <div class="indent">
                        <md-checkbox ng-model="config.isUserManagementEnabled" aria-label="userManagement">
                            使用用户账号保护共享内容
                        </md-checkbox>
                    </div>
                    <h1 class="md-title indent">用户</h1>
                    <div class="tabsection">
                        <div class="usertable">
                            <md-list flex>
                                <md-list-item ng-repeat="item in config.users">
                                    <div class="md-list-item-text" layout="column">
                                        {{item.name}}
                                        <md-icon ng-click="openPasswordDialog($event, item.name)" aria-label="用户" class="md-secondary" md-svg-src="/admin-res/edit.svg"></md-icon>
                                        <md-icon ng-click="deleteUser($event, item.name)" aria-label="删除" class="md-secondary" md-svg-src="/admin-res/delete.svg"></md-icon>
                                    </div>
                                </md-list-item>
                            </md-list>
                        </div>
                        <md-button class="md-raised" ng-click="openNewUserDialog($event)">添加用户...</md-button>
                    </div>
                    <h1 class="md-title indent">密钥库</h1>
                    <div class="tabsection">
                        <div layout="column">
                            <md-input-container>
                                <label>密钥库文件路径</label>
                                <input ng-model="config.keystorePath">
                            </md-input-container>
                            <md-input-container>
                                <label>密钥库密码</label>
                                <input ng-model="config.keystorePassword" type="password">
                            </md-input-container>
                        </div>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="高级">
                <md-content class="md-padding">
                    <h1 class="md-title indent">高级设置</h1>
                    <div class="tabsection">
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isOpdsProviderEnabled" aria-label="opds">
                                    启用 OPDS 订阅源
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'opds')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.bypassSingleRootFolder" aria-label="bypassSingleRootFolder">
                                    绕过单一根文件夹
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'bypassSingleRootFolder')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.enableFolderMetadata" aria-label="enableFolderMetadata">
                                    启用文件夹元数据
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'folderMetadata')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.displayTitleInsteadOfFileName" aria-label="displayTitleInsteadOfFileName">
                                    使用元数据标题代替文件名
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'titleInsteadOfFilename')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.keepUnreachableSharedFolders" aria-label="keepUnreachableSharedFolders">
                                    不要移除不可达文件夹中的数据
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'keepUnreachableFolders')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isLogDuplicates" aria-label="isLogDuplicates">
                                    扫描后记录重复文件
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'isLogDuplicates')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/warning.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isDebugModeEnabled" aria-label="isDebugModeEnabled">
                                    启用调试模式
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'isDebugModeEnabled')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isRemoteScanTriggerAllowed" aria-label="isRemoteScanTriggerAllowed">
                                    允许使用密钥远程触发扫描
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'isRemoteScanTriggerAllowed')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <div class="advancedsetting">
                                <md-checkbox ng-model="config.isRemoteShutdownAllowed" aria-label="isRemoteShutdownAllowed">
                                    允许使用密钥远程关机
                                </md-checkbox>
                            </div>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'isRemoteShutdownAllowed')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            &nbsp;&nbsp;&nbsp;&nbsp;<span class="md-caption">密钥 API：&nbsp;&nbsp; {{config.secretApiKey}}</span>
                            &nbsp;&nbsp;&nbsp;<md-button class="md-raised" ng-click="regenerateSecretApiKey()" ng-disabled="!config.isRemoteScanTriggerAllowed && !config.isRemoteShutdownAllowed">重新生成密钥</md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <md-input-container class="advancedsetting">
                                <label>扫描排除模式</label>
                                <input ng-model="config.folderExclusionPattern">
                            </md-input-container>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'exclusionPattern')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <div layout="row" layout-align="start center">
                            <md-input-container class="advancedsetting">
                                <label>反向代理前缀</label>
                                <input ng-model="config.reverseProxyPrefix">
                            </md-input-container>
                            <md-button class="md-icon-button" aria-label="帮助" ng-click="showHelp($event, 'revProxy')">
                                <md-icon class="md-secondary" md-svg-src="/admin-res/help.svg"></md-icon>
                            </md-button>
                        </div>
                        <span class="leftlabel">缩略图压缩质量：</span> {{config.thumbnailCompressionQuality}}
                        <div layout class="slider">
                            <md-slider-container>
                                <md-slider flex="none" min="0.1" max="1" step="0.05" ng-model="config.thumbnailCompressionQuality" aria-label="thumbnailCompressionQuality" class="slider"></md-slider>
                            </md-slider-container>
                            <md-button class="md-raised" ng-click="defaultThumbnailCompressionQuality()">默认值</md-button>
                        </div>
                    </div>
                </md-content>
            </md-tab>
            <md-tab label="关于">
                <md-content class="md-padding">
                    <div id="version">
                        <b>Ubooquity {{versionInfo.version}}</b>
                        <br>构建日期：{{versionInfo.buildDate}}<br/>
                        <br>Built on: {{versionInfo.buildDate}}
                        <br>
                        <br>访问官网 / Visit website: <a href="http://vaemendis.net/ubooquity">http://vaemendis.net/ubooquity</a>
                        <br>
                        <br>如果你觉得 Ubooquity 很有用并愿意支持它的发展，请访问：<a href="http://vaemendis.net/ubooquity/service/godonatepage.php">捐赠页面 / donation page</a>。
                        <br>If you find Ubooquity useful and want to support its development, visit: <a href="http://vaemendis.net/ubooquity/service/godonatepage.php">donation page</a>.
                    </div>

                    <textarea id="licensearea" readonly>
                        {{license}}
                    </textarea>
                </md-content>
            </md-tab>
        </md-tabs>
    </md-content>

    <!-- add folder dialog -->
    <script type="text/ng-template" id="addfolder.tmpl.html">
        <md-dialog id="folderselect" aria-label="folder selection">
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h2>选择要共享的文件夹</h2>
                </div>
            </md-toolbar>
            <md-dialog-content>
                <div id="folderselectlist">
                    <md-progress-linear md-mode="indeterminate" ng-disabled="!explorerLoading" ng-show="explorerLoading"></md-progress-linear>
                    <md-list>
                        <md-list-item class="secondary-button-padding" ng-repeat="item in folderListing" ng-click="explore(item.path)">
                            <p>{{item.name}}</p>
                            <md-button ng-if="item.selectable" ng-click="addPath(item.path)" class="md-raised">共享...</md-button>
                        </md-list-item>
                    </md-list>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">
                    完成
                </md-button>
            </md-dialog-actions>
        </md-dialog>
    </script>

    <!-- folder details dialog -->
    <script type="text/ng-template" id="folderdetails.tmpl.html">
        <md-dialog id="folderdetails" aria-label="文件夹详情">
            <md-dialog-content>
                <div id="folderdetailsdialogcontent">
                    <h3 class="md-title">{{newFolderName}}</h3>
                    <div layout="row" layout-align="start center">
                        文件夹分类 &nbsp; &nbsp; &nbsp;
                        <md-select class="select160" ng-model="category" placeholder="分类">
                            <md-option ng-value="'comics'">漫画</md-option>
                            <md-option ng-value="'books'">书籍</md-option>
                            <md-option ng-value="'magazines'">杂志</md-option>
                            <md-option ng-value="'documents'">文档</md-option>
                            <md-option ng-value="'others'">其他</md-option>
                        </md-select>
                    </div>
                    <md-checkbox class="md-secondary" ng-model="isCalibreLibrary">该文件夹是 Calibre 书库</md-checkbox>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">取消</md-button>
                <md-button class="md-raised" ng-click="addFolderWithDetailsAndHide()">共享文件夹</md-button>
            </md-dialog-actions>
        </md-dialog>
    </script>

    <!-- authorizations dialog -->
    <script type="text/ng-template" id="authorization.tmpl.html">
        <md-dialog id="authorization" aria-label="文件夹访问权限">
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h2>选择允许访问的用户</h2>
                </div>
            </md-toolbar>
            <md-dialog-content>
                <div id="authorizationlist">
                    <md-list>
                        <md-list-item class="secondary-button-padding" ng-repeat="item in authorizationList">
                            <p>{{item.name}}</p>
                            <md-checkbox class="md-secondary" ng-model="item.hasAccess"></md-checkbox>
                        </md-list-item>
                    </md-list>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">
                    完成
                </md-button>
            </md-dialog-actions>
        </md-dialog>
    </script>

    <!-- online help dialog -->
    <script type="text/ng-template" id="help.tmpl.html">
        <md-dialog id="helpdialog" aria-label="在线帮助">
            <md-toolbar>
                <div class="md-toolbar-tools">
                    <h3>Ubooquity 帮助</h3>
                    <span flex></span>
                    <md-button aria-label="close" ng-click="cancel()">
                        关闭
                    </md-button>
                </div>
            </md-toolbar>
            <md-dialog-content>
                <div ng-bind-html="currentHelpContent" id="helpdialogcontent"></div>
            </md-dialog-content>
        </md-dialog>
    </script>

    <!-- new user dialog -->
    <script type="text/ng-template" id="newuser.tmpl.html">
        <md-dialog id="newuserdialog" aria-label="新用户">
            <md-dialog-content>
                <div id="newuserdialogcontent">
                    <h3>创建用户</h3>
                    <div layout="column">
                        <md-input-container>
                            <label>用户名</label>
                            <input ng-model="editedUser.name">
                        </md-input-container>
                        <md-input-container>
                            <label>密码</label>
                            <input ng-model="editedUser.password" type="password">
                        </md-input-container>
                    </div>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">取消</md-button>
                <md-button class="md-raised" ng-click="addUserToConfig()">创建用户</md-button>
            </md-dialog-actions>

        </md-dialog>
    </script>

    <!-- change password dialog -->
    <script type="text/ng-template" id="newpassword.tmpl.html">
        <md-dialog id="newpassworddialog" aria-label="新密码">
            <md-dialog-content>
                <div id="newpassworddialogcontent">
                    <h3>修改密码</h3>
                    <div layout="column">
                        <label>用户：{{editedUser.name}}</label>
                        <md-input-container>
                            <label>新密码</label>
                            <input ng-model="editedUser.password" type="password">
                        </md-input-container>
                    </div>
                </div>
            </md-dialog-content>
            <md-dialog-actions layout="row">
                <md-button class="md-raised" ng-click="cancel()">取消</md-button>
                <md-button class="md-raised" ng-click="changeUserPassword()">更新密码</md-button>
            </md-dialog-actions>

        </md-dialog>
    </script>


    <script src="/admin-res/sha256-min.js"></script>
    <script src="/admin-res/angular.min.js"></script>
    <script src="/admin-res/angular-sanitize.min.js"></script>
    <script src="/admin-res/angular-animate.min.js"></script>
    <script src="/admin-res/angular-aria.min.js"></script>
    <script src="/admin-res/angular-messages.min.js"></script>
    <script src="/admin-res/angular-material.min.js"></script>

    <script src="/admin-res/admin.js"></script>
</body>

</html>


~~~~
</details>

## `admin/admin.js`

<details>
<summary>原代码</summary>

~~~~javascript
/*global angular*/
/*jslint node: true */
/*jslint plusplus: true*/

'use strict';

var app = angular.module('adminApp', ['ngMaterial', 'ngSanitize']);

app.controller('adminController', function ($scope, $http, $interval, $mdToast, $mdDialog, $filter, $q, $sce, $window) {

    $scope.loadConfig = function () {
        $scope.showServerProgress = true;
        $http.get("admin-api/config").then(function (response) {
            $scope.config = response.data;
            $scope.originalConfig = angular.copy($scope.config);
            $scope.configModified = false;
            $scope.showServerProgress = false;
            $scope.buildLibraryUrl();
        });
    };

    $scope.saveConfig = function () {
        $scope.showServerProgress = true;
        $http.put("admin-api/config", $scope.config).then(function (response) {
            // if reverse proxy has changed, reload with new URL
            if ($scope.originalConfig.reverseProxyPrefix !== $scope.config.reverseProxyPrefix) {
                var prefix = $scope.config.reverseProxyPrefix,
                    adminUrl,
                    timer;
                adminUrl = prefix ? "/" + prefix + "/admin " : "/admin ";
                timer = $interval(function () {
                    $window.location.href = adminUrl;
                }, 2000, 1);
            } else {
                $scope.originalConfig = angular.copy($scope.config);
                $scope.configModified = false;
                $scope.showServerProgress = false;
                $scope.globalToast(response.data);
                $scope.buildLibraryUrl();
            }
        }, function (response) {
            $scope.globalToast("Failed to save configuration.");
        });
    };

    $scope.discardChanges = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('Confirm discard')
            .textContent('Discard changes and reload configuration from server ?')
            .ariaLabel('discard changes')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function () {
            $scope.loadConfig();
        });
    };

    $scope.loadServerSalt = function () {
        $http.get("admin-res/cryptoparams").then(function (response) {
            $scope.serverSalt = response.data.salt;
        });
    };

    $scope.buildLibraryUrl = function () {
        var url;
        if($scope.config){
            url = $window.location.protocol + "//" + $window.location.hostname + ':' + $scope.config.libraryPortNumber;
            if ($scope.config.reverseProxyPrefix && $scope.config.reverseProxyPrefix !== "") {
                url = url + '/' + $scope.config.reverseProxyPrefix;
            }
        }
        $scope.libraryUrl = url;
    };

    ////////////////////
    /// TAB: GENERAL  //
    ////////////////////

    $scope.loadVersion = function () {
        $http.get("admin-api/version").then(function (response) {
            $scope.versionInfo = response.data;
        });
    };

    $scope.loadNewVersionAvailable = function () {
        $http.get("admin-api/newversionavailable").then(function (response) {
            $scope.newVersionAvailable = response.data === "true";
        });
    };

    $scope.loadStatus = function () {
        $http.get("admin-api/status", {
            timeout: 3000
        }).then(function (response) {
            $scope.status = response.data;
            $scope.showUnreachableServer = false;
        }, function (response) {
            if (response.status == 403) {
                $window.location.reload();
            } else {
                $scope.showServerProgress = false; // just in case
                $scope.showUnreachableServer = true;
            }
        });
    };

    $scope.launchScan = function () {
        $http.get("admin-api/scan").then(function (response) {
            $scope.globalToast(response.data);
        });
    };

    $scope.loadThemes = function () {
        $http.get("admin-api/themes").then(function (response) {
            $scope.themes = response.data;
        });
    };

    $scope.createTheme = function (ev) {
        var confirm = $mdDialog.prompt()
            .title('Choose the name of the new theme')
            .ariaLabel('Theme name')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('Create theme')
            .cancel('Cancel');
        $mdDialog.show(confirm).then(function (result) {
            if (result && result !== "") {
                $scope.showServerProgress = true;
                $http.post("admin-api/newtheme", result).then(function (response) {
                    $scope.loadThemes();
                    $scope.showServerProgress = false;
                    $scope.globalToast(response.data);
                });
            } else {
                $scope.globalToast("Cannot create theme with empty name");
            }
        });
    };

    //////////////////////////
    /// TAB: BOOKS (OPUS)   //
    //////////////////////////


    $scope.updateOpusHeight = function () {
        if ($scope.config) {
            $scope.config.opusHeight = Math.round($scope.config.opusWidth / 0.695);
        }
    };

    $scope.defaultOpusWidth = function () {
        $scope.config.OpusWidth = 160;
    };

    $scope.defaultOpusPagination = function () {
        $scope.config.opusPaginationNumber = 30;
    };

    $scope.clearOpusDatabase = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('Database clearing confirmation')
            .htmlContent('Books data stored by Ubooquity will be cleared (without affecting your files).<br>A full rescan of your books will be done.<br> Do you want to continue ?')
            .ariaLabel('clear books')
            .targetEvent(ev)
            .ok('Yes, clear database')
            .cancel('Cancel');
        $mdDialog.show(confirm).then(function () {
            $http.get("admin-api/clearopus").then(function (response) {
                $scope.globalToast(response.data);
            });
        });
    };

    $scope.removeOpusPath = function (ev, path) {
        $scope.removePath($scope.config.opusPaths, path, ev);
    };

    $scope.displayOpusFolderDialog = function (ev) {
        $scope.currentlyEditedPathList = $scope.config.opusPaths;
        $scope.currentlyDisplayedDialog = "#folderselect";
        $scope.displayAddFolderDialog(ev);
    };

    $scope.displayOpusAuthorizationDialog = function (ev, contentPath) {
        $scope.displayAuthorizationDialog(ev, contentPath);
    };


    ////////////////////////
    /// TAB: RAW FILES    //
    ////////////////////////

    $scope.removeFilesPath = function (ev, path) {
        $scope.removePath($scope.config.filesPaths, path, ev);
    };

    $scope.displayFilesFolderDialog = function (ev) {
        $scope.currentlyEditedPathList = $scope.config.filesPaths;
        $scope.currentlyDisplayedDialog = "#folderselect";
        $scope.displayAddFolderDialog(ev);
    };

    $scope.displayFilesAuthorizationDialog = function (ev, contentPath) {
        $scope.displayAuthorizationDialog(ev, contentPath);
    };

    ////////////////////////
    /// TAB: SECURITY     //
    ////////////////////////

    function NewPasswordDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        $scope.changeUserPassword = function () {
            var i, user, userList;
            userList = $scope.config.users;
            for (i = 0; i < userList.length; i++) {
                user = userList[i];
                if (user.name === $scope.editedUser.name) {
                    user.passwordHash = hex_hmac_sha256($scope.editedUser.password, $scope.serverSalt);
                    break;
                }
            }
            $mdDialog.cancel();
        };
    }

    $scope.openPasswordDialog = function (ev, userName) {
        $scope.editedUser = {
            "name": userName,
            "password": ""
        };

        $mdDialog.show({
            controller: NewPasswordDialogController,
            templateUrl: 'newpassword.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    $scope.deleteUser = function (ev, userName) {
        var i, user, userList, confirm = $mdDialog.confirm()
            .title('Confirm user deletion')
            .textContent('Do you want to delete user ' + userName + ' ?')
            .ariaLabel('delete user')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function () {
            // remove user from user list
            userList = $scope.config.users;
            for (i = 0; i < userList.length; i++) {
                user = userList[i];
                if (user.name === userName) {
                    userList.splice(i, 1);
                    break;
                }
            }
            // remove user from all content paths
            $scope.removeUserFromPathList(userName, $scope.config.opusPaths);
            $scope.removeUserFromPathList(userName, $scope.config.filesPaths);
        });
    };

    $scope.removeUserFromPathList = function (name, pathList) {
        var i;
        for (i = 0; i < pathList.length; i++) {
            $scope.removeUSerFromContentPath(name, pathList[i]);
        }
    };

    $scope.removeUSerFromContentPath = function (name, contentPath) {
        var i, currentUser, userList;
        for (i = 0; i < contentPath.userName.length; i++) {
            currentUser = contentPath.userName[i];
            if (currentUser === name) {
                contentPath.userName.splice(i, 1);
                break;
            }
        }
    };

    function NewUserDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        $scope.addUserToConfig = function () {
            if ($scope.editedUser.name === "" || $scope.editedUser.password === "") {
                $scope.globalToast('User name and password cannot be empty');
            } else {
                // check the new user does not exist yet
                var i, userList, user, hash, found = false;
                userList = $scope.config.users;
                for (i = 0; i < userList.length; i++) {
                    user = userList[i];
                    if (user.name === $scope.editedUser.name) {
                        found = true;
                        break;
                    }
                }
                if (found === true) {
                    $scope.globalToast('User ' + $scope.editedUser.name + ' already exists');
                } else {
                    hash = hex_hmac_sha256($scope.editedUser.password, $scope.serverSalt);
                    $scope.config.users.push({
                        "name": $scope.editedUser.name,
                        "passwordHash": hash
                    });
                }
            }
            $mdDialog.cancel();
        };
    }

    $scope.openNewUserDialog = function (ev) {
        $scope.editedUser = {
            "name": "",
            "password": ""
        };
        $mdDialog.show({
            controller: NewUserDialogController,
            templateUrl: 'newuser.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    /////////////////////
    /// TAB: ADVANCED  //
    /////////////////////

    $scope.defaultThumbnailCompressionQuality = function () {
        $scope.config.thumbnailCompressionQuality = 0.75;
    };

    //////////////////
    /// TAB: ABOUT  //
    //////////////////

    $scope.loadLicense = function () {
        $http.get("admin-res/about.txt").then(function (response) {
            $scope.license = response.data;
        });
    };


    ///////////////////////
    /// PATH MANAGEMENT  //
    ///////////////////////

    function AddFolderDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $scope.currentlyEditedPathList = undefined;
            $scope.currentlyDisplayedDialog = undefined;
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.displayAddFolderDialog = function (ev) {
        $mdDialog.show({
            controller: AddFolderDialogController,
            templateUrl: 'addfolder.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
        $scope.explore("");
    };

    function FolderDetailsDialogController($scope, $mdDialog, newPath) {
        $scope.category = "comics"
        $scope.newFolderName = newPath.replace(/^.*[\\\/]/, '')
        if($scope.newFolderName === ""){
            $scope.newFolderName = newPath
        }

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        $scope.addFolderWithDetailsAndHide = function() {
            $scope.addFolderWithDetails(newPath);
            $mdDialog.hide();
        }
    }

    $scope.addFolderWithDetails = function(newPath) {
        var i, contentPath, found, path1, path2;
        for (i = 0; i < $scope.currentlyEditedPathList.length; i++) {
            contentPath = $scope.currentlyEditedPathList[i];

            path1 = contentPath.pathString.replace(/\\/g, "/") + "/"
            path2 = newPath.replace(/\\/g, "/") + "/"

            if (path1.includes(path2) || path2.includes(path1)) {
                found = true;
                $scope.dialogToast("ERROR: folder already shared or containing an already shared folder");
                break;
            }
        }
        if (!found) {
            $scope.currentlyEditedPathList.push({
                "pathString": newPath,
                "userName": [],
                "category": $scope.category,
                "isCalibreLibrary": $scope.isCalibreLibrary
            });
            $scope.dialogToast("Folder shared: " + newPath);
        }
    }

    $scope.addPath = function (pathString, ev) {
        if($scope.currentlyEditedPathList === $scope.config.filesPaths){
            $scope.category = "none";
            $scope.isCalibreLibrary = false;
            $scope.addFolderWithDetails(pathString);
        }else{
            $mdDialog.show({
                        controller: FolderDetailsDialogController,
                        templateUrl: 'folderdetails.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        scope: $scope,
                        preserveScope: true,
                        skipHide: true,
                        locals: {newPath: pathString}
                    });
        }
    };

    $scope.removePath = function (pathList, path, ev) {
        var confirm = $mdDialog.confirm()
            .title('Stop sharing this folder ?')
            .textContent(path)
            .ariaLabel('stop sharing')
            .targetEvent(ev)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function () {
            var i, contentPath;
            for (i = 0; i < pathList.length; i++) {
                contentPath = pathList[i];
                if (contentPath.pathString === path) {
                    pathList.splice(i, 1);
                    break;
                }
            }
        });
    };

    ////////////////////////////////
    /// AUTHORIZATION MANAGEMENT  //
    ////////////////////////////////

    function AuthorizationDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $scope.currentlyEditedContentPath.userName = $scope.getUsersFromAuthList($scope.authorizationList);
            $scope.currentlyEditedContentPath = undefined;
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.displayAuthorizationDialog = function (ev, contentPath) {
        $scope.authorizationList = $scope.buildAuthList(contentPath.userName);
        $scope.currentlyEditedContentPath = contentPath;
        $mdDialog.show({
            controller: AuthorizationDialogController,
            templateUrl: 'authorization.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    ////////////////////
    //    ADVANCED    //
    ////////////////////

    $scope.regenerateSecretApiKey = function () {
        $scope.config.secretApiKey = Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
    };

    ////////////////////
    //     COMMON     //
    ////////////////////

    $scope.explore = function (path) {
        $scope.folderListing = [];
        $scope.explorerLoading = true;

        // cancel any previous request
        if ($scope.exploreCanceler !== undefined) {
            $scope.exploreCanceler.resolve();
        }
        $scope.exploreCanceler = $q.defer();

        $http.post("admin-api/explore", path, {
            timeout: $scope.exploreCanceler.promise
        }).then(function (response) {
            $scope.folderListing = response.data;
            $scope.explorerLoading = false;
        });
    };

    $scope.dialogToast = function (text) {
        var toast = $mdToast.simple()
            .parent($scope.currentlyDisplayedDialog)
            .position("bottom left")
            .textContent(text);
        $mdToast.show(toast);
    };

    $scope.globalToast = function (text) {
        var toast = $mdToast.simple()
            .position("bottom left")
            .textContent(text);
        $mdToast.show(toast);
    };

    $scope.buildAuthList = function (authUsers) {
        var i, userName, authList = [];
        for (i = 0; i < $scope.config.users.length; i++) {
            userName = $scope.config.users[i].name;
            authList.push({
                "name": userName,
                "hasAccess": authUsers.indexOf(userName) >= 0
            });
        }
        return authList;
    };

    $scope.formatUserList = function (userList) {
        var formattedString;
        if ($scope.config.isUserManagementEnabled === true) {
            if (userList.length === 0) {
                formattedString = "Nobody";
            } else {
                formattedString = userList.join(", ");
            }
        } else {
            formattedString = "Everyone";
        }
        return formattedString;
    };

    $scope.formatFolderInfo = function (folder) {
        var formattedString = folder.category;
        if (folder.isCalibreLibrary === true) {
            formattedString += " (Calibre library)";
        }
        return formattedString;
    };

    $scope.getUserListClass = function (userList) {
        if ($scope.config.isUserManagementEnabled === true && userList.length === 0) {
            return "highlighteditem";
        } else {
            return "";
        }
    };

    $scope.getUsersFromAuthList = function (authList) {
        var i, entry, nameList = [];
        for (i = 0; i < authList.length; i++) {
            entry = authList[i];
            if (entry.hasAccess === true) {
                nameList.push(entry.name);
            }
        }
        return nameList;
    };

    //////////////////////
    //   ONLINE HELP    //
    //////////////////////

    function HelpDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $scope.currentHelpContent = undefined;
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.showHelp = function (ev, id) {
        $http.get("admin-res/help/" + id + ".html").then(function (response) {
            $scope.currentHelpContent = $sce.trustAsHtml(response.data);
        });

        $mdDialog.show({
            controller: HelpDialogController,
            templateUrl: 'help.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    ////////////////////
    // INITIALIZATION //
    ////////////////////

    $scope.showUnreachableServer = false;
    $scope.status = {
        "lastScan": "...",
        "currentOperation": "..."
    };
    $scope.libraryUrl = "";

    // let's go
    $scope.loadConfig();
    $scope.loadLicense();
    $scope.loadVersion();
    $scope.loadNewVersionAvailable();
    $scope.loadStatus();
    $scope.loadThemes();
    $scope.loadServerSalt();

    $scope.$watch('config.opusWidth', $scope.updateOpusHeight);
    $scope.$watch('config', function () {
        var previous = $scope.configModified;
        $scope.configModified = !angular.equals($scope.config, $scope.originalConfig);
    }, true);


    $interval($scope.loadStatus, 3000);

    // END INITIALIZATION


});

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~javascript
/*global angular*/
/*jslint node: true */
/*jslint plusplus: true*/

'use strict';

var app = angular.module('adminApp', ['ngMaterial', 'ngSanitize']);

app.controller('adminController', function ($scope, $http, $interval, $mdToast, $mdDialog, $filter, $q, $sce, $window) {

    $scope.loadConfig = function () {
        $scope.showServerProgress = true;
        $http.get("admin-api/config").then(function (response) {
            $scope.config = response.data;
            $scope.originalConfig = angular.copy($scope.config);
            $scope.configModified = false;
            $scope.showServerProgress = false;
            $scope.buildLibraryUrl();
        });
    };

    $scope.saveConfig = function () {
        $scope.showServerProgress = true;
        $http.put("admin-api/config", $scope.config).then(function (response) {
            // if reverse proxy has changed, reload with new URL
            if ($scope.originalConfig.reverseProxyPrefix !== $scope.config.reverseProxyPrefix) {
                var prefix = $scope.config.reverseProxyPrefix,
                    adminUrl,
                    timer;
                adminUrl = prefix ? "/" + prefix + "/admin " : "/admin ";
                timer = $interval(function () {
                    $window.location.href = adminUrl;
                }, 2000, 1);
            } else {
                $scope.originalConfig = angular.copy($scope.config);
                $scope.configModified = false;
                $scope.showServerProgress = false;
                $scope.globalToast(response.data);
                $scope.buildLibraryUrl();
            }
        }, function (response) {
            $scope.globalToast("保存配置失败。");
        });
    };

    $scope.discardChanges = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('确认放弃更改')
            .textContent('放弃更改并从服务器重新加载配置？')
            .ariaLabel('放弃更改')
            .targetEvent(ev)
            .ok('是')
            .cancel('取消');
        $mdDialog.show(confirm).then(function () {
            $scope.loadConfig();
        });
    };

    $scope.loadServerSalt = function () {
        $http.get("admin-res/cryptoparams").then(function (response) {
            $scope.serverSalt = response.data.salt;
        });
    };

    $scope.buildLibraryUrl = function () {
        var url;
        if($scope.config){
            url = $window.location.protocol + "//" + $window.location.hostname + ':' + $scope.config.libraryPortNumber;
            if ($scope.config.reverseProxyPrefix && $scope.config.reverseProxyPrefix !== "") {
                url = url + '/' + $scope.config.reverseProxyPrefix;
            }
        }
        $scope.libraryUrl = url;
    };

    function translateStatusText(text) {
        if (!text) {
            return text;
        }
        return String(text).replace(/no scan since last restart\.?/ig, '自上次重启后尚未扫描');
    }

    ////////////////////
    /// TAB: GENERAL  //
    ////////////////////

    $scope.loadVersion = function () {
        $http.get("admin-api/version").then(function (response) {
            $scope.versionInfo = response.data;
        });
    };

    $scope.loadNewVersionAvailable = function () {
        $http.get("admin-api/newversionavailable").then(function (response) {
            $scope.newVersionAvailable = response.data === "true";
        });
    };

    $scope.loadStatus = function () {
        $http.get("admin-api/status", {
            timeout: 3000
        }).then(function (response) {
            response.data.currentOperation = translateStatusText(response.data.currentOperation);
            $scope.status = response.data;
            $scope.showUnreachableServer = false;
        }, function (response) {
            if (response.status == 403) {
                $window.location.reload();
            } else {
                $scope.showServerProgress = false; // just in case
                $scope.showUnreachableServer = true;
            }
        });
    };

    $scope.launchScan = function () {
        $http.get("admin-api/scan").then(function (response) {
            $scope.globalToast(response.data);
        });
    };

    $scope.loadThemes = function () {
        $http.get("admin-api/themes").then(function (response) {
            $scope.themes = response.data;
        });
    };

    $scope.createTheme = function (ev) {
        var confirm = $mdDialog.prompt()
            .title('输入新主题名称')
            .ariaLabel('主题名称')
            .targetEvent(ev)
            .clickOutsideToClose(true)
            .ok('创建主题')
            .cancel('取消');
        $mdDialog.show(confirm).then(function (result) {
            if (result && result !== "") {
                $scope.showServerProgress = true;
                $http.post("admin-api/newtheme", result).then(function (response) {
                    $scope.loadThemes();
                    $scope.showServerProgress = false;
                    $scope.globalToast(response.data);
                });
            } else {
                $scope.globalToast("主题名称不能为空");
            }
        });
    };

    //////////////////////////
    /// TAB: BOOKS (OPUS)   //
    //////////////////////////


    $scope.updateOpusHeight = function () {
        if ($scope.config) {
            $scope.config.opusHeight = Math.round($scope.config.opusWidth / 0.695);
        }
    };

    $scope.defaultOpusWidth = function () {
        $scope.config.OpusWidth = 160;
    };

    $scope.defaultOpusPagination = function () {
        $scope.config.opusPaginationNumber = 30;
    };

    $scope.clearOpusDatabase = function (ev) {
        var confirm = $mdDialog.confirm()
            .title('清空数据库确认')
            .htmlContent('Ubooquity 存储的书籍数据将被清空，但不会影响你的文件。<br>系统会重新完整扫描书库。<br>是否继续？')
            .ariaLabel('清空书库数据库')
            .targetEvent(ev)
            .ok('是，清空数据库')
            .cancel('取消');
        $mdDialog.show(confirm).then(function () {
            $http.get("admin-api/clearopus").then(function (response) {
                $scope.globalToast(response.data);
            });
        });
    };

    $scope.removeOpusPath = function (ev, path) {
        $scope.removePath($scope.config.opusPaths, path, ev);
    };

    $scope.displayOpusFolderDialog = function (ev) {
        $scope.currentlyEditedPathList = $scope.config.opusPaths;
        $scope.currentlyDisplayedDialog = "#folderselect";
        $scope.displayAddFolderDialog(ev);
    };

    $scope.displayOpusAuthorizationDialog = function (ev, contentPath) {
        $scope.displayAuthorizationDialog(ev, contentPath);
    };


    ////////////////////////
    /// TAB: RAW FILES    //
    ////////////////////////

    $scope.removeFilesPath = function (ev, path) {
        $scope.removePath($scope.config.filesPaths, path, ev);
    };

    $scope.displayFilesFolderDialog = function (ev) {
        $scope.currentlyEditedPathList = $scope.config.filesPaths;
        $scope.currentlyDisplayedDialog = "#folderselect";
        $scope.displayAddFolderDialog(ev);
    };

    $scope.displayFilesAuthorizationDialog = function (ev, contentPath) {
        $scope.displayAuthorizationDialog(ev, contentPath);
    };

    ////////////////////////
    /// TAB: SECURITY     //
    ////////////////////////

    function NewPasswordDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        $scope.changeUserPassword = function () {
            var i, user, userList;
            userList = $scope.config.users;
            for (i = 0; i < userList.length; i++) {
                user = userList[i];
                if (user.name === $scope.editedUser.name) {
                    user.passwordHash = hex_hmac_sha256($scope.editedUser.password, $scope.serverSalt);
                    break;
                }
            }
            $mdDialog.cancel();
        };
    }

    $scope.openPasswordDialog = function (ev, userName) {
        $scope.editedUser = {
            "name": userName,
            "password": ""
        };

        $mdDialog.show({
            controller: NewPasswordDialogController,
            templateUrl: 'newpassword.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    $scope.deleteUser = function (ev, userName) {
        var i, user, userList, confirm = $mdDialog.confirm()
            .title('确认删除用户')
            .textContent('是否删除用户 ' + userName + ' ?')
            .ariaLabel('删除用户')
            .targetEvent(ev)
            .ok('是')
            .cancel('取消');
        $mdDialog.show(confirm).then(function () {
            // remove user from user list
            userList = $scope.config.users;
            for (i = 0; i < userList.length; i++) {
                user = userList[i];
                if (user.name === userName) {
                    userList.splice(i, 1);
                    break;
                }
            }
            // remove user from all content paths
            $scope.removeUserFromPathList(userName, $scope.config.opusPaths);
            $scope.removeUserFromPathList(userName, $scope.config.filesPaths);
        });
    };

    $scope.removeUserFromPathList = function (name, pathList) {
        var i;
        for (i = 0; i < pathList.length; i++) {
            $scope.removeUSerFromContentPath(name, pathList[i]);
        }
    };

    $scope.removeUSerFromContentPath = function (name, contentPath) {
        var i, currentUser, userList;
        for (i = 0; i < contentPath.userName.length; i++) {
            currentUser = contentPath.userName[i];
            if (currentUser === name) {
                contentPath.userName.splice(i, 1);
                break;
            }
        }
    };

    function NewUserDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        $scope.addUserToConfig = function () {
            if ($scope.editedUser.name === "" || $scope.editedUser.password === "") {
                $scope.globalToast('用户名和密码不能为空');
            } else {
                // check the new user does not exist yet
                var i, userList, user, hash, found = false;
                userList = $scope.config.users;
                for (i = 0; i < userList.length; i++) {
                    user = userList[i];
                    if (user.name === $scope.editedUser.name) {
                        found = true;
                        break;
                    }
                }
                if (found === true) {
                    $scope.globalToast('User ' + $scope.editedUser.name + ' 已存在');
                } else {
                    hash = hex_hmac_sha256($scope.editedUser.password, $scope.serverSalt);
                    $scope.config.users.push({
                        "name": $scope.editedUser.name,
                        "passwordHash": hash
                    });
                }
            }
            $mdDialog.cancel();
        };
    }

    $scope.openNewUserDialog = function (ev) {
        $scope.editedUser = {
            "name": "",
            "password": ""
        };
        $mdDialog.show({
            controller: NewUserDialogController,
            templateUrl: 'newuser.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    /////////////////////
    /// TAB: ADVANCED  //
    /////////////////////

    $scope.defaultThumbnailCompressionQuality = function () {
        $scope.config.thumbnailCompressionQuality = 0.75;
    };

    //////////////////
    /// TAB: ABOUT  //
    //////////////////

    $scope.loadLicense = function () {
        $http.get("admin-res/about.txt").then(function (response) {
            $scope.license = response.data;
        });
    };


    ///////////////////////
    /// PATH MANAGEMENT  //
    ///////////////////////

    function AddFolderDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $scope.currentlyEditedPathList = undefined;
            $scope.currentlyDisplayedDialog = undefined;
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.displayAddFolderDialog = function (ev) {
        $mdDialog.show({
            controller: AddFolderDialogController,
            templateUrl: 'addfolder.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
        $scope.explore("");
    };

    function FolderDetailsDialogController($scope, $mdDialog, newPath) {
        $scope.category = "comics"
        $scope.newFolderName = newPath.replace(/^.*[\\\/]/, '')
        if($scope.newFolderName === ""){
            $scope.newFolderName = newPath
        }

        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };

        $scope.addFolderWithDetailsAndHide = function() {
            $scope.addFolderWithDetails(newPath);
            $mdDialog.hide();
        }
    }

    $scope.addFolderWithDetails = function(newPath) {
        var i, contentPath, found, path1, path2;
        for (i = 0; i < $scope.currentlyEditedPathList.length; i++) {
            contentPath = $scope.currentlyEditedPathList[i];

            path1 = contentPath.pathString.replace(/\\/g, "/") + "/"
            path2 = newPath.replace(/\\/g, "/") + "/"

            if (path1.includes(path2) || path2.includes(path1)) {
                found = true;
                $scope.dialogToast("错误：该文件夹已共享，或包含已共享的文件夹");
                break;
            }
        }
        if (!found) {
            $scope.currentlyEditedPathList.push({
                "pathString": newPath,
                "userName": [],
                "category": $scope.category,
                "isCalibreLibrary": $scope.isCalibreLibrary
            });
            $scope.dialogToast("已共享文件夹：" + newPath);
        }
    }

    $scope.addPath = function (pathString, ev) {
        if($scope.currentlyEditedPathList === $scope.config.filesPaths){
            $scope.category = "none";
            $scope.isCalibreLibrary = false;
            $scope.addFolderWithDetails(pathString);
        }else{
            $mdDialog.show({
                        controller: FolderDetailsDialogController,
                        templateUrl: 'folderdetails.tmpl.html',
                        parent: angular.element(document.body),
                        targetEvent: ev,
                        clickOutsideToClose: false,
                        scope: $scope,
                        preserveScope: true,
                        skipHide: true,
                        locals: {newPath: pathString}
                    });
        }
    };

    $scope.removePath = function (pathList, path, ev) {
        var confirm = $mdDialog.confirm()
            .title('停止共享这个文件夹？')
            .textContent(path)
            .ariaLabel('停止共享')
            .targetEvent(ev)
            .ok('是')
            .cancel('取消');
        $mdDialog.show(confirm).then(function () {
            var i, contentPath;
            for (i = 0; i < pathList.length; i++) {
                contentPath = pathList[i];
                if (contentPath.pathString === path) {
                    pathList.splice(i, 1);
                    break;
                }
            }
        });
    };

    ////////////////////////////////
    /// AUTHORIZATION MANAGEMENT  //
    ////////////////////////////////

    function AuthorizationDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $scope.currentlyEditedContentPath.userName = $scope.getUsersFromAuthList($scope.authorizationList);
            $scope.currentlyEditedContentPath = undefined;
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.displayAuthorizationDialog = function (ev, contentPath) {
        $scope.authorizationList = $scope.buildAuthList(contentPath.userName);
        $scope.currentlyEditedContentPath = contentPath;
        $mdDialog.show({
            controller: AuthorizationDialogController,
            templateUrl: 'authorization.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    ////////////////////
    //    ADVANCED    //
    ////////////////////

    $scope.regenerateSecretApiKey = function () {
        $scope.config.secretApiKey = Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
    };

    ////////////////////
    //     COMMON     //
    ////////////////////

    $scope.explore = function (path) {
        $scope.folderListing = [];
        $scope.explorerLoading = true;

        // cancel any previous request
        if ($scope.exploreCanceler !== undefined) {
            $scope.exploreCanceler.resolve();
        }
        $scope.exploreCanceler = $q.defer();

        $http.post("admin-api/explore", path, {
            timeout: $scope.exploreCanceler.promise
        }).then(function (response) {
            $scope.folderListing = response.data;
            $scope.explorerLoading = false;
        });
    };

    $scope.dialogToast = function (text) {
        var toast = $mdToast.simple()
            .parent($scope.currentlyDisplayedDialog)
            .position("bottom left")
            .textContent(text);
        $mdToast.show(toast);
    };

    $scope.globalToast = function (text) {
        var toast = $mdToast.simple()
            .position("bottom left")
            .textContent(text);
        $mdToast.show(toast);
    };

    $scope.buildAuthList = function (authUsers) {
        var i, userName, authList = [];
        for (i = 0; i < $scope.config.users.length; i++) {
            userName = $scope.config.users[i].name;
            authList.push({
                "name": userName,
                "hasAccess": authUsers.indexOf(userName) >= 0
            });
        }
        return authList;
    };

    $scope.formatUserList = function (userList) {
        var formattedString;
        if ($scope.config.isUserManagementEnabled === true) {
            if (userList.length === 0) {
                formattedString = "否body";
            } else {
                formattedString = userList.join(", ");
            }
        } else {
            formattedString = "Everyone";
        }
        return formattedString;
    };

    $scope.formatFolderInfo = function (folder) {
        var formattedString = folder.category;
        if (folder.isCalibreLibrary === true) {
            formattedString += " (Calibre library)";
        }
        return formattedString;
    };

    $scope.getUserListClass = function (userList) {
        if ($scope.config.isUserManagementEnabled === true && userList.length === 0) {
            return "highlighteditem";
        } else {
            return "";
        }
    };

    $scope.getUsersFromAuthList = function (authList) {
        var i, entry, nameList = [];
        for (i = 0; i < authList.length; i++) {
            entry = authList[i];
            if (entry.hasAccess === true) {
                nameList.push(entry.name);
            }
        }
        return nameList;
    };

    //////////////////////
    //   ONLINE HELP    //
    //////////////////////

    function HelpDialogController($scope, $mdDialog) {
        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $scope.currentHelpContent = undefined;
            $mdDialog.cancel();
        };

        $scope.answer = function (answer) {
            $mdDialog.hide(answer);
        };
    }

    $scope.showHelp = function (ev, id) {
        $http.get("admin-res/help/" + id + ".html").then(function (response) {
            $scope.currentHelpContent = $sce.trustAsHtml(response.data);
        });

        $mdDialog.show({
            controller: HelpDialogController,
            templateUrl: 'help.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    };

    ////////////////////
    // INITIALIZATION //
    ////////////////////

    $scope.showUnreachableServer = false;
    $scope.status = {
        "lastScan": "...",
        "currentOperation": "..."
    };
    $scope.libraryUrl = "";

    // let's go
    $scope.loadConfig();
    $scope.loadLicense();
    $scope.loadVersion();
    $scope.loadNewVersionAvailable();
    $scope.loadStatus();
    $scope.loadThemes();
    $scope.loadServerSalt();

    $scope.$watch('config.opusWidth', $scope.updateOpusHeight);
    $scope.$watch('config', function () {
        var previous = $scope.configModified;
        $scope.configModified = !angular.equals($scope.config, $scope.originalConfig);
    }, true);


    $interval($scope.loadStatus, 3000);

    // END INITIALIZATION


});


~~~~
</details>

## `admin/help/bypassSingleRootFolder.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Bypass single root folder</h2>

<p>When displaying comics or books by folder, this option allows you to go directly into the first root folder when there is only one.<p>

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>绕过单一根文件夹</h2>

<p>如果你的某个分类只有一个根文件夹，可以启用这个选项，让 Ubooquity 直接显示该文件夹中的内容，而不是再额外套一层目录结构。</p>

~~~~
</details>

## `admin/help/exclusionPattern.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Scan exclusion pattern</h2>

<p>When scanning your collection, Ubooquity will include in its database all the comics and ebook files it will find in the folders you chose to share.<br>If you want to ignore some specific files, files types or folders, you can use an exclusion pattern that Ubooquity will test against each file to know if it has to be scanned or ignored.<p>
<p>One important thing to keep in mind is that the regexp you write will be matched against the <b>full path</b> of each file Ubooquity encounters (all the folders of the path and the file name).</p>

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>扫描排除模式</h2>

<p>扫描书库时，Ubooquity 会把你选择共享的文件夹中找到的漫画和电子书文件加入数据库。<br>如果你想忽略某些文件、文件类型或文件夹，可以使用排除模式，让 Ubooquity 对每个文件进行匹配，决定是否扫描或忽略。</p>
<p>需要注意的是，你写的正则表达式会和每个文件的<b>完整路径</b>进行匹配，也就是路径中的所有文件夹和文件名都会参与判断。</p>

~~~~
</details>

## `admin/help/folderMetadata.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Enable folder metadata display</h2>

<p>Displays content of "folder-info.html" files in folders and use "folder.jpg/png/gif" as folder image.<p>

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>启用文件夹元数据显示</h2>

<p>显示文件夹中的 "folder-info.html" 内容，并使用 "folder.jpg/png/gif" 作为文件夹封面图。</p>

~~~~
</details>

## `admin/help/isDebugModeEnabled.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Activate debug mode</h2>

<p>When the debug mode is activated, Ubooquity logs additional information (e.g. about errors, theme data...).<p>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>启用调试模式</h2>

<p>调试模式会输出更详细的日志信息，适合排查问题。一般情况下不需要开启。</p>

~~~~
</details>

## `admin/help/isLogDuplicates.html`

<details>
<summary>原代码</summary>

~~~~html
<h2> Identify and log duplicate files after scan</h2>

<span style="color:red;"><b>Warning:</b></span> On big collection, this operation can take a very long time or even crash the scan.

<p>At the end of the scan, Ubooquity will look for duplicates (file with the same name and size) and print the list of found duplicates in the log file.</p>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>记录重复文件</h2>

<p>开启后，扫描结束时会识别并记录重复文件，方便你后续清理重复内容。</p>

~~~~
</details>

## `admin/help/isRemoteScanTriggerAllowed.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Allow remote scan triggering through URL call</h2>

<p>When this option is activated, a collection scan can be triggered by sending a POST request to the "/public-api/scan" Ubooquity endpoint.</p>
<p>The POST body must contain the secret API key. E.g (using your own key):</p>
<b>curl --request POST --url http://localhost:2202/public-api/scan --data kkc9eox2fwtkl68bt943ldcf7oijlw</b>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>允许远程触发扫描</h2>

<p>启用后，可以通过带密钥的 API 远程触发书库扫描，适合自动化脚本或外部工具调用。</p>

~~~~
</details>

## `admin/help/isRemoteShutdownAllowed.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Allow remote shutdown through URL call</h2>

<p>When this option is activated, Ubooquity server can be shut down by sending a POST request to the "/public-api/shutdown" endpoint.</p>
<p>The POST body must contain the secret API key. E.g (using your own key):</p>
<b>curl --request POST --url http://localhost:2202/public-api/shutdown --data kkc9eox2fwtkl68bt943ldcf7oijlw</b>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>允许远程关机</h2>

<p>启用后，可以通过带密钥的 API 远程关闭 Ubooquity 服务。仅在你确认安全的情况下使用。</p>

~~~~
</details>

## `admin/help/keepUnreachableFolders.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Do not remove data from unreachable folders</h2>

<p>During a scan, if a folder is no longer reachable, Ubooquity will remove its content from its internal database.<br/>Activate this option to prevent this from happening and keep comics/books even if the shared folder is not reachable during the scan.</p>
<p>This option can be useful when shared folders are located on a network drive that might be unavailable during the scan.</p>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>保留不可达文件夹的数据</h2>

<p>如果某些已共享的文件夹暂时无法访问，启用此选项后，Ubooquity 不会把其中的内容数据从数据库里删除。</p>

~~~~
</details>

## `admin/help/opds.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>OPDS feed</h2>

<p>If enabled, OPDS feeds will be available at "yourip:yourport<b>/opds</b>".<p>
<p>Warning: user authentication for OPDS is not as secure as for the rest of Ubooquity, use of HTTPS is strongly recommended.</p>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>OPDS 订阅源</h2>

<p>启用后，OPDS 订阅源会出现在 "yourip:yourport<b>/opds</b>"。</p>
<p>警告：OPDS 的用户认证安全性不如 Ubooquity 的其他部分，强烈建议使用 HTTPS。</p>

~~~~
</details>

## `admin/help/revProxy.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Reverse proxy</h2>

<p>If you are using a reverse proxy to access your Ubooquity server, you can define here the URL prefix that the server should expect.</p>
<p>For instance, if you put "<b>collection</b>" in this field, your Ubooquity server will be available at "http://myserver.net/<b>collection</b>/" instead of "http://myserver.net/".</p>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>反向代理</h2>

<p>如果你通过反向代理访问 Ubooquity 服务器，可以在这里定义服务器应识别的 URL 前缀。</p>
<p>例如，如果你在这个字段里填入 "<b>collection</b>", 那么你的 Ubooquity 服务就会通过 "http://myserver.net/<b>collection</b>/" 访问，而不是直接使用 "http://myserver.net/"。</p>

~~~~
</details>

## `admin/help/theme.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>New theme creation</h2>

<p>Once you have chosen the theme name, a directory with the same name will be created in the "theme" directory of your Ubooquity <i>working directory</i>.<br>
It contains all the default theme files. Your theme is now ready to be edited. Modify these files as you like to change the way Ubooquity pages look.</p>

<p>To see your modifications, select your new theme in the "General" settings section and restart the server.<br>
Don't forget to force the refresh of the page after each modification to bypass the cache of your browser (<b>Shift + F5</b> in most browsers).</p>

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>新主题创建</h2>

<p>当你输入主题名称后，会在 Ubooquity 工作目录中的 "theme" 目录里创建一个同名文件夹。<br>
其中会包含默认主题的全部文件。现在你可以开始编辑这些文件，按自己的喜好修改 Ubooquity 页面外观。</p>

<p>要查看修改效果，请在 "常规" 设置中选择新主题并重启服务器。<br>
别忘了每次修改后强制刷新页面，以绕过浏览器缓存（大多数浏览器中是 <b>Shift + F5</b>）。</p>

~~~~
</details>

## `admin/help/titleInsteadOfFilename.html`

<details>
<summary>原代码</summary>

~~~~html
<h2>Display title from metadata instead of file name</h2>

<p>With this option activated, instead of display the name of the file under its cover, Ubooquity will display the title found in the metadata of the file.</p>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<h2>使用元数据标题替代文件名</h2>

<p>启用后，Ubooquity 会优先显示书籍元数据中的标题，而不是文件名本身。</p>

~~~~
</details>

## `admin/login.html`

<details>
<summary>原代码</summary>

~~~~html
<!DOCTYPE html>
<html ng-app="loginApp" ng-controller="loginController">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="/admin-res/angular-material.min.css">
    <link rel="stylesheet" href="/admin-res/roboto.css">
    <link rel="stylesheet" type="text/css" href="/admin-res/admin.css">
    <title>Ubooquity admin login</title>
    <link rel="icon" href="/admin-res/favicon.ico">
</head>


<body>
    <div id="loginbanner"></div>
    <div id="waitingforserver" ng-show="showServerProgress">
        <md-progress-circular md-diameter="120"></md-progress-circular>
    </div>
    <md-content>
        <md-divider></md-divider>
        <form name="loginForm" id="loginform" ng-submit="submitForm()">
            <div layout="column" layout-align="start center">
                <div>
                    Administrator authentication
                </div>
                <md-input-container>
                    <label>Password</label>
                    <input ng-model="password" type="password">
                </md-input-container>
                <md-checkbox ng-model="remember" aria-label="remember">
                    Remember me
                </md-checkbox>
                <div>
                    <md-button ng-click="submitForm()" class="md-raised md-primary">Log in</md-button>
                </div>
                <input type="hidden" id="hash" name="hash">
                <input type="hidden" id="remember" name="remember">
                <input type="hidden" id="servertime" name="servertime">
                </input>
            </div>
        </form>
    </md-content>


    <script src="/admin-res/sha256-min.js"></script>
    <script src="/admin-res/angular.min.js"></script>
    <script src="/admin-res/angular-animate.min.js"></script>
    <script src="/admin-res/angular-aria.min.js"></script>
    <script src="/admin-res/angular-messages.min.js"></script>
    <script src="/admin-res/angular-material.min.js"></script>

    <script src="/admin-res/login.js"></script>
</body>

</html>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<!doctype html>
<html ng-app="loginApp" ng-controller="loginController">
<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/admin-res/roboto.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/admin-res/angular-material.min.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/admin-res/admin.css"/>
    <title>Ubooquity 管理后台登录</title>
    <link rel="icon" href="/admin-res/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    {{loginScripts}}
    <div id="loginbanner"></div>
    <div id="waitingforserver" ng-show="showServerProgress">
        <md-progress-circular md-mode="indeterminate"></md-progress-circular>
    </div>
    <div id="logincontent">
        <form name="loginForm" id="loginform" ng-submit="submitForm()">
            <div layout="column" layout-align="start center">
                <div id="loginmessage">请先登录</div>
                <md-input-container>
                    <label>用户名</label>
                    <input ng-model="login" type="text" autofocus>
                </md-input-container>
                <md-input-container>
                    <label>密码</label>
                    <input ng-model="password" type="password">
                </md-input-container>
                <md-checkbox ng-model="remember" aria-label="remember">
                    记住我
                </md-checkbox>
                <div>
                    <md-button ng-click="submitForm()" class="md-raised md-primary">登录</md-button>
                </div>
            </div>
        </form>
    </div>
    <script src="/admin-res/angular.min.js"></script>
    <script src="/admin-res/angular-animate.min.js"></script>
    <script src="/admin-res/angular-aria.min.js"></script>
    <script src="/admin-res/angular-messages.min.js"></script>
    <script src="/admin-res/angular-sanitize.min.js"></script>
    <script src="/admin-res/angular-material.min.js"></script>
    <script src="/admin-res/sha256-min.js"></script>
    <script src="/admin-res/login.js"></script>
</body>
</html>

~~~~
</details>

## `admin/login.js`

<details>
<summary>原代码</summary>

~~~~javascript
/*global angular*/
/*jslint node: true */
/*jslint plusplus: true*/

'use strict';

var app = angular.module('loginApp', ['ngMaterial']);

app.controller('loginController', function ($scope, $http, $mdToast, $location, $window) {

    $scope.submitForm = function () {

        if ($scope.password !== undefined && $scope.password !== "") {
            $scope.showServerProgress = true;
            $http.get("admin-res/cryptoparams").then(function (response) {
                var serverSalt = response.data.salt,
                    serverTime = response.data.time;
                document.getElementById('servertime').value = serverTime;
                document.getElementById('remember').value = $scope.remember;
                document.getElementById('hash').value = hex_hmac_sha256(hex_hmac_sha256($scope.password, serverSalt), serverTime);
                $scope.password = "";
                document.forms['loginform'].submit();

            }, function () {
                $scope.showServerProgress = false; // just in case
                $scope.globalToast("Login failed due to a technical error on server side");
            });
        }
    };


    $scope.globalToast = function (text) {
        var toast = $mdToast.simple()
            .position("bottom left")
            .textContent(text);
        $mdToast.show(toast);
    };

    ////////////////////
    // INITIALIZATION //
    ////////////////////

    // remove trailing slash in URL as it prevents login from working
    var init = function () {
        var path, hasTrailingSlash, newPath;
        path = $location.absUrl();
        hasTrailingSlash = path[path.length - 1] === '/';
        if (hasTrailingSlash) {
            newPath = path.substr(0, path.length - 1);
            $window.location.href = newPath;
        }
    };
    init();
});

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~javascript
﻿var app = angular.module('loginApp', ['ngMaterial']);

app.controller('loginController', function ($scope, $window, $mdToast) {
    $scope.submitForm = function () {
        if ($scope.password !== undefined && $scope.password !== "") {
            document.getElementById('hash').value = hex_hmac_sha256($scope.password, $scope.serverSalt);
            $scope.password = "";
            document.forms['loginform'].submit();
        } else {
            $scope.globalToast("登录失败，请检查用户名和密码。");
        }
    };

    $scope.globalToast = function (text) {
        var toast = $mdToast.simple()
            .textContent(text)
            .position('bottom right')
            .hideDelay(3000);
        $mdToast.show(toast);
    };

    // remove trailing slash in URL as it prevents proper login
    $scope.fixUrl = function () {
        var path, hasTrailingSlash, newPath;
        path = $window.location.href;
        hasTrailingSlash = path.substr(-1) === '/';
        if (hasTrailingSlash) {
            newPath = path.substr(0, path.length - 1);
            $window.location.href = newPath;
        }
    };
});

~~~~
</details>

## `admin/password.html`

<details>
<summary>原代码</summary>

~~~~html
<!DOCTYPE html>
<html ng-app="passwordApp" ng-controller="passwordController">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="/admin-res/angular-material.min.css">
    <link rel="stylesheet" href="/admin-res/roboto.css">
    <link rel="stylesheet" type="text/css" href="/admin-res/admin.css">
    <title>Ubooquity admin password setting</title>
    <link rel="icon" href="/admin-res/favicon.ico">
</head>


<body>
    <div id="loginbanner"></div>
    <div id="waitingforserver" ng-show="showServerProgress">
        <md-progress-circular md-diameter="120"></md-progress-circular>
    </div>
    <md-content>
        </div>
        <md-divider></md-divider>
        <form name="passwordForm" id="passwordform" action="admin" method="post">
            <div layout="column" layout-align="start center">
                <div>
                    Choose administrator password
                </div>
                <md-input-container>
                    <label>Password</label>
                    <input ng-model="password" type="password">
                </md-input-container>
                <md-input-container>
                    <label>Repeat password</label>
                    <input ng-model="repeatedpassword" type="password">
                </md-input-container>
                <div>
                    <md-button ng-click="submitForm()" class="md-raised md-primary">Submit</md-button>
                </div>
                <input type="hidden" id="hash" name="hash">
                </input>
            </div>
        </form>
    </md-content>


    <script src="/admin-res/sha256-min.js"></script>
    <script src="/admin-res/angular.min.js"></script>
    <script src="/admin-res/angular-animate.min.js"></script>
    <script src="/admin-res/angular-aria.min.js"></script>
    <script src="/admin-res/angular-messages.min.js"></script>
    <script src="/admin-res/angular-material.min.js"></script>

    <script src="/admin-res/password.js"></script>
</body>

</html>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
﻿<!doctype html>
<html ng-app="passwordApp" ng-controller="passwordController">
<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/admin-res/roboto.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/admin-res/angular-material.min.css"/>
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/admin-res/admin.css"/>
    <title>Ubooquity 管理员密码设置</title>
    <link rel="icon" href="/admin-res/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    {{loginScripts}}
    <div id="loginbanner"></div>
    <div id="waitingforserver" ng-show="showServerProgress">
        <md-progress-circular md-mode="indeterminate"></md-progress-circular>
    </div>
    <div id="logincontent">
        <form name="passwordForm" id="passwordform" action="admin" method="post" ng-submit="submitForm()">
            <div layout="column" layout-align="start center">
                <div id="loginmessage">设置管理员密码</div>
                <md-input-container>
                    <label>密码</label>
                    <input ng-model="password" type="password">
                </md-input-container>
                <md-input-container>
                    <label>重复密码</label>
                    <input ng-model="repeatedpassword" type="password">
                </md-input-container>
                <div>
                    <md-button ng-click="submitForm()" class="md-raised md-primary">提交</md-button>
                </div>
            </div>
        </form>
    </div>
    <script src="/admin-res/angular.min.js"></script>
    <script src="/admin-res/angular-animate.min.js"></script>
    <script src="/admin-res/angular-aria.min.js"></script>
    <script src="/admin-res/angular-messages.min.js"></script>
    <script src="/admin-res/angular-sanitize.min.js"></script>
    <script src="/admin-res/angular-material.min.js"></script>
    <script src="/admin-res/sha256-min.js"></script>
    <script src="/admin-res/password.js"></script>
</body>
</html>

~~~~
</details>

## `admin/password.js`

<details>
<summary>原代码</summary>

~~~~javascript
/*global angular*/
/*jslint node: true */
/*jslint plusplus: true*/

'use strict';

var app = angular.module('passwordApp', ['ngMaterial']);

app.controller('passwordController', function ($scope, $http, $mdToast) {

    $scope.submitForm = function () {
        
        if ($scope.password !== undefined && $scope.password !== "" && $scope.password === $scope.repeatedpassword) {
            $scope.showServerProgress = true;
            $http.get("admin-res/cryptoparams").then(function (response) {
                var serverSalt = response.data.salt;

                document.getElementById('hash').value = hex_hmac_sha256($scope.password, serverSalt);
                $scope.password = "";
                $scope.repeatedpassword = "";
                document.forms['passwordform'].submit();

            }, function () {
                $scope.showServerProgress = false; // just in case
                $scope.globalToast("Failed to set password due to a technical error on server side");
            });
        } else {
            $scope.globalToast("You must enter the same password twice");
        }
    };


    $scope.globalToast = function (text) {
        var toast = $mdToast.simple()
            .position("bottom left")
            .textContent(text);
        $mdToast.show(toast);
    };

});
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~javascript
﻿var app = angular.module('passwordApp', ['ngMaterial']);

app.controller('passwordController', function ($scope, $window, $mdToast) {
    $scope.submitForm = function () {
        if ($scope.password !== undefined && $scope.password !== "") {
            if ($scope.password === $scope.repeatedpassword) {
                document.getElementById('hash').value = hex_hmac_sha256($scope.password, $scope.serverSalt);
                $scope.password = "";
                $scope.repeatedpassword = "";
                document.forms['passwordform'].submit();
            } else {
                $scope.globalToast("两次输入的密码不一致。");
            }
        } else {
            $scope.globalToast("你必须输入密码。");
        }
    };

    $scope.globalToast = function (text) {
        var toast = $mdToast.simple()
            .textContent(text)
            .position('bottom right')
            .hideDelay(3000);
        $mdToast.show(toast);
    };

    // remove trailing slash in URL as it prevents proper login
    $scope.fixUrl = function () {
        var path, hasTrailingSlash, newPath;
        path = $window.location.href;
        hasTrailingSlash = path.substr(-1) === '/';
        if (hasTrailingSlash) {
            newPath = path.substr(0, path.length - 1);
            $window.location.href = newPath;
        }
    };
});

~~~~
</details>

## `themes/default/common/themeScript.js`

<details>
<summary>原代码</summary>

~~~~javascript
// Put any javascript needed by your theme here
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~javascript
// Put any javascript needed by your theme here
(function () {
    function translateTopLabel() {
        var label = document.getElementById('pagelabel');
        if (!label) {
            return false;
        }

        var html = label.innerHTML || '';
        var changed = false;

        if (/Latest\s+additions/i.test(html)) {
            html = html.replace(/Latest\s+additions/ig, '最新添加');
            changed = true;
        }
        if (/Random\s+selection/i.test(html)) {
            html = html.replace(/Random\s+selection/ig, '随机选择');
            changed = true;
        }

        if (changed) {
            label.innerHTML = html;
            return true;
        }

        var text = label.textContent || '';
        if (/Latest\s+additions/i.test(text) || /Random\s+selection/i.test(text)) {
            text = text.replace(/Latest\s+additions/ig, '最新添加');
            text = text.replace(/Random\s+selection/ig, '随机选择');
            label.textContent = text;
            return true;
        }

        return false;
    }

    function tick() {
        translateTopLabel();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tick);
    } else {
        tick();
    }

    var tries = 0;
    var timer = setInterval(function () {
        if (translateTopLabel() || ++tries >= 16) {
            clearInterval(timer);
        }
    }, 250);
})();
~~~~
</details>

## `themes/default/home/homepage.css`

<details>
<summary>原代码</summary>

~~~~css
﻿body {
	background-color: red;
	margin: 0px;
	padding: 0px;
	background-color: white;
	font-family: "Arial";
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

a {
	color: #444444;
	text-decoration: none;
	outline: none;
}

a img {
	border: none;
}

#userinfo {
	position: absolute;
	right: 5px;
	top: 76px;
	font-family: "Arial";
	font-weight: normal;
	font-size: 16px;
	color: #888888;
}

#message {
	color: #444444;
	font-family: "Arial";
	font-size: 16px;
}

#poweredby {
	display: inline-block;
	width: 100%;
	padding-top: 20px;
	margin-top: 80px;
	border-top: 1px #CCCCCC solid;
	;
	color: grey;
	font-family: "Arial";
	font-size: 13px;
	text-decoration: none;
}

#logoutlink {
	color: #888888;
	text-decoration: underline;
}

#group {
	display: inline-block;
	margin-top: 30px;
}

.cell {
	float: left;
	width: 200px;
	height: 220px;
}

.category-title {
	position:relative;
	display: inline-block;
	color: grey;
	font-size: 24px;
	font-weight:bold;
	text-align: center;
	margin-bottom: 10px;
}

.category-title .tooltip {
  visibility: hidden;
  width: 140px;
  background-color: grey;
  color: #fff;
  font-size: 16px;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;

  opacity: 0;
  transition: opacity 0.3s;
}

.category-title .tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: grey transparent transparent transparent;
}

.category-title:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.category {
	display: inline-block;
	background-color: #EEEEEE;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 90px 90px;
}

.category-latest {
	box-shadow: inset 0 0 0 6px white;
	position:relative;
	display: inline-block;
	background-color: #EEEEEE;
	width: 84px;
	height: 84px;
	top: -50px;
	left: 50px;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 60px 60px;
}

#comics {
	background-image: url('{{rootPath}}/theme/home/comics.png');
}

#latest-comics {
	background-image: url('{{rootPath}}/theme/home/comics-new.png');
}

#books {
	background-image: url('{{rootPath}}/theme/home/books.png');
}

#latest-books {
	background-image: url('{{rootPath}}/theme/home/books-new.png');
}

#magazines {
	background-image: url('{{rootPath}}/theme/home/magazines.png');
}

#latest-magazines {
	background-image: url('{{rootPath}}/theme/home/magazines-new.png');
}

#documents {
	background-image: url('{{rootPath}}/theme/home/documents.png');
}

#latest-documents {
	background-image: url('{{rootPath}}/theme/home/documents-new.png');
}

#others {
	background-image: url('{{rootPath}}/theme/home/others.png');
}

#latest-others {
	background-image: url('{{rootPath}}/theme/home/others-new.png');
}

#files {
	background-image: url('{{rootPath}}/theme/home/files.png');
}

#banner {
	top: 0px;
	left: 0px;
	height: 100px;
	width: 100%;
	margin-bottom: 60px;
	border-bottom: 1px #CCCCCC solid;
	background-image: url('{{rootPath}}/theme/common/banner.png');
	background-repeat: no-repeat;
	background-position: 20px;
}
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~css
body {
	background-color: #1e1e1e;
	margin: 0px;
	padding: 0px;
	background-color: #1e1e1e;
	font-family: "Arial";
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

a {
	color: #d4d4d4;
	text-decoration: none;
	outline: none;
}

a img {
	border: none;
}

#userinfo {
	position: absolute;
	right: 5px;
	top: 76px;
	font-family: \"Arial\";
	font-weight: normal;
	font-size: 16px;
	color: #d4d4d4;
	background: rgba(37,37,38,0.92);
	padding: 4px 10px;
	border-radius: 8px;
	max-width: calc(100% - 20px);
	line-height: 1.4;
}

#message {
	color: #d4d4d4;
	font-family: \"Arial\";
	font-size: 16px;
	line-height: 1.7;
	max-width: 760px;
	margin: 0 auto;
}

#poweredby {
	display: inline-block;
	width: 100%;
	padding-top: 20px;
	margin-top: 80px;
	border-top: 1px #3c3c3c solid;
	;
	color: #9da7b3;
	font-family: \"Arial\";
	font-size: 13px;
	text-decoration: none;
}

#logoutlink {
	color: #007acc;
	text-decoration: underline;
}

#group {
	display: inline-block;
	margin-top: 30px;
	max-width: 1200px;
}

.cell {
	float: left;
	width: 200px;
	height: 220px;
	position: relative;
}

.category-title {
	position:relative;
	display: inline-block;
	color: #d4d4d4;
	font-size: 24px;
	font-weight:bold;
	text-align: center;
	margin-bottom: 10px;
	max-width: 180px;
	line-height: 1.2;
	word-break: break-word;
}

.category-title .tooltip {
  visibility: hidden;
  width: 140px;
  background-color: #252526;
  color: #d4d4d4;
  font-size: 16px;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;

  opacity: 0;
  transition: opacity 0.3s;
}

.category-title .tooltip::after {
  content: \"\";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #252526 transparent transparent transparent;
}

.category-title:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.category {
	display: inline-block;
	background-color: #252526;
	width: 140px;
	height: 140px;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 90px 90px;
}

.category-latest {
	box-shadow: inset 0 0 0 6px #1e1e1e;
	position:relative;
	display: inline-block;
	background-color: #252526;
	width: 84px;
	height: 84px;
	top: -50px;
	left: 50px;
	border-radius: 50%;
	background-repeat: no-repeat;
	background-position: center;
	background-size: 60px 60px;
}

#comics {
	background-image: url('{{rootPath}}/theme/home/comics.png');
}

#latest-comics {
	background-image: url('{{rootPath}}/theme/home/comics-new.png');
}

#books {
	background-image: url('{{rootPath}}/theme/home/books.png');
}

#latest-books {
	background-image: url('{{rootPath}}/theme/home/books-new.png');
}

#magazines {
	background-image: url('{{rootPath}}/theme/home/magazines.png');
}

#latest-magazines {
	background-image: url('{{rootPath}}/theme/home/magazines-new.png');
}

#documents {
	background-image: url('{{rootPath}}/theme/home/documents.png');
}

#latest-documents {
	background-image: url('{{rootPath}}/theme/home/documents-new.png');
}

#others {
	background-image: url('{{rootPath}}/theme/home/others.png');
}

#latest-others {
	background-image: url('{{rootPath}}/theme/home/others-new.png');
}

#files {
	background-image: url('{{rootPath}}/theme/home/files.png');
}

#banner {
	top: 0px;
	left: 0px;
	height: 100px;
	width: 100%;
	margin-bottom: 60px;
	border-bottom: 1px #3c3c3c solid;
	background-image: url('{{rootPath}}/theme/common/banner.png');
	background-repeat: no-repeat;
	background-position: 20px;
}}/theme/common/banner.png');
	background-repeat: no-repeat;
	background-position: 20px;
}
~~~~
</details>

## `themes/default/home/page-home.html`

<details>
<summary>原代码</summary>

~~~~html
<!doctype html>
<html>

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/home/homepage.css"/>
</head>

<body>
<div id="banner"></div>

{{#userName}}
<div id="userinfo">
    Connected as {{userName}} - <a href="{{rootPath}}/?logout=true" id="logoutlink">Log out</a>
</div>
{{/userName}}

<div id="group">

    {{#categories}}
    <div class="cell">
        <div class="category-title">
            {{categoryName}}
            <div class="tooltip">
                {{categoryItemCount}} entries
            </div>
            <i></i>
        </div>
        <a href="{{categoryUrl}}" id="{{categoryId}}" class="category"></a>
        <div class="category-latest-gap">
            <a href="{{categoryLatestUrl}}" id="{{categoryLatestId}}" class="category-latest"></a>
        </div>
    </div>
    {{/categories}}

    {{#displayRawFiles}}
    <div class="cell">
        <div class="category-title">
            Raw files
        </div>
        <a href="{{rawFilesUrl}}" id="files" class="category"></a>
    </div>
    {{/displayRawFiles}}

    {{#displayNoFileMessage}}
    <div id="message">
        No file to display.
        <br><br>
        If you just installed Ubooquity, you need to configure it by choosing the folders you want to include in your
        collection.
        <br>
        If user access management is activated, check that you configured authorizations for each folder included in
        your collection.
    </div>
    {{/displayNoFileMessage}}

</div>
<br/>
<br/>
<a href="http://vaemendis.net/ubooquity" id="poweredby">Powered by Ubooquity</a>
</body>

</html>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<!doctype html>
<html>

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/home/homepage.css"/>
</head>

<body>
<div id="banner"></div>

{{#userName}}
<div id="userinfo">
    已连接为 {{userName}} - <a href="{{rootPath}}/?logout=true" id="logoutlink">退出登录</a>
</div>
{{/userName}}

<div id="group">

    {{#categories}}
    <div class="cell">
        <div class="category-title">
            {{categoryName}}
            <div class="tooltip">
                {{categoryItemCount}} 项
            </div>
            <i></i>
        </div>
        <a href="{{categoryUrl}}" id="{{categoryId}}" class="category"></a>
        <div class="category-latest-gap">
            <a href="{{categoryLatestUrl}}" id="{{categoryLatestId}}" class="category-latest"></a>
        </div>
    </div>
    {{/categories}}

    {{#displayRawFiles}}
    <div class="cell">
        <div class="category-title">
            原始文件
        </div>
        <a href="{{rawFilesUrl}}" id="files" class="category"></a>
    </div>
    {{/displayRawFiles}}

    {{#displayNoFileMessage}}
    <div id="message">
        没有可显示的文件。
        <br><br>
        如果你刚安装 Ubooquity，需要先选择想加入书库的文件夹进行配置。
        <br>
        如果启用了用户访问管理，请确认已为书库中的每个文件夹配置访问权限。
    </div>
    {{/displayNoFileMessage}}

</div>
<br/>
<br/>
<a href="http://vaemendis.net/ubooquity" id="poweredby">由 Ubooquity 驱动</a>
</body>

</html>

~~~~
</details>

## `themes/default/library/inc-library-popups.html`

<details>
<summary>原代码</summary>

~~~~html
<div id="dimoverlay"></div>
<div class="popupmenu" id="pageselector">
    <div class="popuptitle">Go to page</div>
    {{pageSelectorLinks}}
</div>
<div class="popupmenu" id="searchbox">
    <div class="popuptitle">Find book</div>
    <form id="searchform" method="POST" action="?search=simple">
        <input class="textbox" type="text" name="searchstring"/>
        <input class="actionbutton" type="submit" value="Search"/>
    </form>
    <br/>
</div>
<div class="popupmenu" id="bookdetails"></div>
<div class="popupmenu" id="settingsbox">
    <div class="popuptitle"><span class="categorytitle">{{category}}</span> display settings</div>
    <form id="settingsform" method="POST" action="{{rootPath}}/{{category}}?settings=true">
        <div class="sectiontitle">Grouping</div>
        <!-- ⚠ values must be consistent with grouping enum -->
        <label class="radiolabel">
            <input type="radio" name="grouping" value="FOLDER" {{checkedGroupByFolder}}/>Folder</label>
        <label class="radiolabel">
            <input type="radio" name="grouping" value="FLAT" {{checkedNoGrouping}}/>Flat</label>
        <br/>
        <div class="sectiontitle">Sorting criterion</div>
        <!-- ⚠ values must be consistent with field enum -->
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="FILE_PATH" {{checkedSortByFilePath}}/>File path</label>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="FILE_NAME" {{checkedSortByFileName}}/>File name</label>
        <br/>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="WRITERS" {{checkedSortByWriters}}/>Authors</label>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="TITLE" {{checkedSortByTitle}}/>Title</label>
        <br/>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="DATE_UPDATED" {{checkedSortByDate}}/>Date added</label>
        <br/>
        <div class="sectiontitle">Sorting order</div>
        <!-- ⚠ values must be consistent with sorting order enum -->
        <label class="radiolabel">
            <input type="radio" name="sortingOrder" value="ASC" {{checkedSortAsc}}/>Ascending</label>
        <label class="radiolabel">
            <input type="radio" name="sortingOrder" value="DESC" {{checkedSortDesc}}/>Descending</label>
        <br/>
        <br/>
        <input class="actionbutton" type="submit" value="Apply"/>
    </form>
    <br/>
</div>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<div id="dimoverlay"></div>
<div class="popupmenu" id="pageselector">
    <div class="popuptitle">跳转到页面</div>
    {{pageSelectorLinks}}
</div>
<div class="popupmenu" id="searchbox">
    <div class="popuptitle">查找书籍</div>
    <form id="searchform" method="POST" action="?search=simple">
        <input class="textbox" type="text" name="searchstring"/>
        <input class="actionbutton" type="submit" value="搜索"/>
    </form>
    <br/>
</div>
<div class="popupmenu" id="bookdetails"></div>
<div class="popupmenu" id="settingsbox">
    <div class="popuptitle"><span class="categorytitle">{{category}}</span> 显示设置</div>
    <form id="settingsform" method="POST" action="{{rootPath}}/{{category}}?settings=true">
        <div class="sectiontitle">分组</div>
        <!-- ⚠ values must be consistent with grouping enum -->
        <label class="radiolabel">
            <input type="radio" name="grouping" value="FOLDER" {{checkedGroupByFolder}}/>按文件夹</label>
        <label class="radiolabel">
            <input type="radio" name="grouping" value="FLAT" {{checkedNoGrouping}}/>平铺</label>
        <br/>
        <div class="sectiontitle">排序条件</div>
        <!-- ⚠ values must be consistent with field enum -->
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="FILE_PATH" {{checkedSortByFilePath}}/>文件路径</label>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="FILE_NAME" {{checkedSortByFileName}}/>文件名</label>
        <br/>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="WRITERS" {{checkedSortByWriters}}/>作者</label>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="TITLE" {{checkedSortByTitle}}/>标题</label>
        <br/>
        <label class="radiolabel">
            <input type="radio" name="sortingCriterion" value="DATE_UPDATED" {{checkedSortByDate}}/>添加日期</label>
        <br/>
        <div class="sectiontitle">排序顺序</div>
        <!-- ⚠ values must be consistent with sorting order enum -->
        <label class="radiolabel">
            <input type="radio" name="sortingOrder" value="ASC" {{checkedSortAsc}}/>升序</label>
        <label class="radiolabel">
            <input type="radio" name="sortingOrder" value="DESC" {{checkedSortDesc}}/>降序</label>
        <br/>
        <br/>
        <input class="actionbutton" type="submit" value="应用"/>
    </form>
    <br/>
</div>

~~~~
</details>

## `themes/default/library/inc-library-topbar-search.html`

<details>
<summary>原代码</summary>

~~~~html
<div id="topbarleft">
    <form class="{{prev10pageClass}} searcharrowform" method="POST" action="{{prev10pageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchleft10" class="topbutton"></button>
    </form>
    <form class="{{prevPageClass}} searcharrowform" method="POST" action="{{prevPageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchleft" class="topbutton"></button>
    </form>
</div>
<div id="topbarcenter">
    <a href="#" id="settings" class="topbutton" onclick="togglePopup('settingsbox');return false;"></a>
    <a href="{{parentUrl}}" id="arrowup" class="topbutton"></a>
    <div id="pagelabel">Search results</div>
    <a href="#" id="search" class="topbutton" onclick="togglePopup('searchbox');document.forms.searchform.searchstring.focus();return false;"></a>
    <a href="?random=true" id="random" class="topbutton"></a>
</div>
<div id="topbarright">
    <form class="{{nextPageClass}} searcharrowform" method="POST" action="{{nextPageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchright" class="topbutton"></button>
    </form>
    <form class="{{next10pageClass}} searcharrowform" method="POST" action="{{next10pageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchright10" class="topbutton"></button>
    </form>
</div>

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<div id="topbarleft">
    <form class="{{prev10pageClass}} searcharrowform" method="POST" action="{{prev10pageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchleft10" class="topbutton"></button>
    </form>
    <form class="{{prevPageClass}} searcharrowform" method="POST" action="{{prevPageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchleft" class="topbutton"></button>
    </form>
</div>
<div id="topbarcenter">
    <a href="#" id="settings" class="topbutton" onclick="togglePopup('settingsbox');return false;"></a>
    <a href="{{parentUrl}}" id="arrowup" class="topbutton"></a>
    <div id="pagelabel">搜索结果</div>
    <a href="#" id="search" class="topbutton" onclick="togglePopup('searchbox');document.forms.searchform.searchstring.focus();return false;"></a>
    <a href="?random=true" id="random" class="topbutton"></a>
</div>
<div id="topbarright">
    <form class="{{nextPageClass}} searcharrowform" method="POST" action="{{nextPageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchright" class="topbutton"></button>
    </form>
    <form class="{{next10pageClass}} searcharrowform" method="POST" action="{{next10pageUrl}}">
        <input type="hidden" name="searchstring" value="{{searchString}}"/>
        <button type="submit" id="searchright10" class="topbutton"></button>
    </form>
</div>

~~~~
</details>

## `themes/default/library/inc-library-topbar.html`

<details>
<summary>原代码</summary>

~~~~html
<div id="topbarleft">
    <a href="{{prev10pageUrl}}" id="arrowleft10" class="{{prev10pageClass}} topbutton"></a>
    <a href="{{prevPageUrl}}" id="arrowleft" class="{{prevPageClass}} topbutton"></a>
</div>
<div id="topbarcenter">
    <a href="#" id="settings" class="topbutton" onclick="togglePopup('settingsbox');return false;"></a>
    <a href="{{parentUrl}}" id="arrowup" class="topbutton"></a>       
    <div id="pagelabel">
        {{#displayPageSelector}}
            <a href="#" onclick="togglePopup('pageselector');return false;">Page {{pageNumber}}</a><br/>
            <a href="#" id="pagelabeltotal" onclick="togglePopup('pageselector');return false;"> of {{totalPages}}</a>
        {{/displayPageSelector}}
        {{^displayPageSelector}}
            {{pageLabel}}
        {{/displayPageSelector}}
    </div>      
    <a href="#" id="search" class="topbutton" onclick="togglePopup('searchbox');document.forms.searchform.searchstring.focus();return false;"></a>
    <a href="?random=true" id="random" class="topbutton"></a>
</div>
<div id="topbarright">
    <a href="{{nextPageUrl}}" id="arrowright" class="{{nextPageClass}} topbutton"></a>
    <a href="{{next10pageUrl}}" id="arrowright10" class="{{next10pageClass}} topbutton"></a>
</div>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<div id="topbarleft">
    <a href="{{prev10pageUrl}}" id="arrowleft10" class="{{prev10pageClass}} topbutton"></a>
    <a href="{{prevPageUrl}}" id="arrowleft" class="{{prevPageClass}} topbutton"></a>
</div>
<div id="topbarcenter">
    <a href="#" id="settings" class="topbutton" onclick="togglePopup('settingsbox');return false;"></a>
    <a href="{{parentUrl}}" id="arrowup" class="topbutton"></a>
    <div id="pagelabel">
        {{#displayPageSelector}}
            <a href="#" onclick="togglePopup('pageselector');return false;">第 {{pageNumber}} 页</a><br/>
            <a href="#" id="pagelabeltotal" onclick="togglePopup('pageselector');return false;">共 {{totalPages}} 页</a>
        {{/displayPageSelector}}
        {{^displayPageSelector}}
            {{pageLabel}}
        {{/displayPageSelector}}
    </div>
    <a href="#" id="search" class="topbutton" onclick="togglePopup('searchbox');document.forms.searchform.searchstring.focus();return false;"></a>
    <a href="?random=true" id="random" class="topbutton"></a>
</div>
<div id="topbarright">
    <a href="{{nextPageUrl}}" id="arrowright" class="{{nextPageClass}} topbutton"></a>
    <a href="{{next10pageUrl}}" id="arrowright10" class="{{next10pageClass}} topbutton"></a>
</div>

~~~~
</details>

## `themes/default/library/library.css`

<details>
<summary>原代码</summary>

~~~~css
﻿:root {
  --cover-width: {{coverWidth}}px;
  --cover-height: {{coverHeight}}px;
}

body {
    margin:0px;
	padding:0px;
    background-color: white;
    color: #444444;
    text-align:center;
} 

a {
    color: #444444;
	text-decoration: none;
	outline: none;
}

a img {
    border: 1px solid #AAAAAA;
	box-shadow: 10px 10px 5px #888888;
}

.hidden {
    visibility:hidden;
}

.rootlink {
    font-family:"Arial";
    font-size:30px;
    font-weight:bold;    
    
    display : inline-block;
	padding : 5px;    
	background-color:#EEEEEE;
    width : 500px;
	
	border-radius: 10px;	
	-webkit-border-radius: 10px;
}

@media (max-width: 810px) {
    
    #toppagebar
    {
	   position:fixed;
	   z-index:5;	
	   top:0px;
	   left:0px;	   
       height:140px;
	   width:100%;	
	   background-color:white;	
	   -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
       -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
    
    #group
    {	
    	margin-top:150px;
    	margin-left:10px;
    	margin-right:10px;	
    }

	#topbarleft
	{    
		position:absolute;
        top:70px;
        left:0px;
	}
	
	#topbarright
	{ 
		position:absolute;
        top:70px;
        right:0px;
        
	}
}

@media (min-width: 811px) {
    
    #toppagebar
    {   
    	position:fixed;
    	z-index:5;    	
    	top:0px;
    	left:0px;    	
        height:70px;
    	width:100%;	
    	background-color:white;	
    	-webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
    
    #group
    {	
    	margin-top:100px;
    	margin-left:10px;
    	margin-right:10px;	
    }
	
	#topbarleft
	{
		float: left;
	}
	
	#topbarright
	{
		float: right;
	}
}

#topbarcenter {
	margin-left:auto;
	margin-right:auto;
	width:500px	
}

#pagelabel {	
	float:left;
	
	width:120px;
	margin-top:10px;
		
	font-weight:bold;	
	font-family:"Arial";
    font-size:22px;
	color:#CCC;	
}

#pagelabeltotal {
	font-size:16px;
	color:#888;
}

.topbutton {
	float:left;
	width:52px;
	height:52px;
	margin: 10px 18px 10px 18px;
	opacity: 0.5;
}

#arrowup {	
	background-image:url('{{rootPath}}/theme/library/arrowup.svg');
	background-repeat:no-repeat;
}

#arrowleft {
	background-image:url('{{rootPath}}/theme/library/arrowleft.svg');
	background-repeat:no-repeat;	
}

#arrowleft10 {		
	background-image:url('{{rootPath}}/theme/library/arrowleft10.svg');
	background-repeat:no-repeat;	
}

#arrowright {	
	background-image:url('{{rootPath}}/theme/library/arrowright.svg');
	background-repeat:no-repeat;
}

#arrowright10 {	
	background-image:url('{{rootPath}}/theme/library/arrowright10.svg');
	background-repeat:no-repeat;
}

#random {		
	background-image:url('{{rootPath}}/theme/library/random.svg');
	background-repeat:no-repeat;
}

#search {	
	background-image:url('{{rootPath}}/theme/library/search.svg');
	background-repeat:no-repeat;
}

#settings {		
	background-image:url('{{rootPath}}/theme/library/settings.svg');
	background-repeat:no-repeat;
}

#banner {
    position: absolute;
	top:0px;
	left:0px;
	height: 100px;
	width:100%;    

	background-image:url('{{rootPath}}/theme/common/banner.png');
	background-color:white;
	background-repeat:no-repeat;
	background-position:20px center; 
}

.cell {
    float: left;
    width: var(--cover-width);
    height: calc(var(--cover-height) + 44px);
    margin: 0 15px 15px 0;
    padding: 5px;
}

.cellcontainer {
	display: inline-block;
}

.thumb {
    width: var(--cover-width);
    height: var(--cover-height);
    text-align:center;
}

.thumb img
{
    max-width: var(--cover-width);
	max-height: var(--cover-height);
}

.label {
    margin: 12px 0 0 0;
    font-family:"Arial";
    font-size:14px;
    height:50px;
    overflow:hidden;
    font-family:"Arial";
	color:#444444;
}

.author {
	color:#888;
}

.title {
	color:#444;
}

.numberblock{
    position:relative;
    float:right;
    top: calc(0px - var(--cover-height) - 54px + var(--cover-height)/10);
    right:-22px;
}

.number {
	background: transparent url('{{rootPath}}/theme/library/sliding-right.png') no-repeat scroll top right;
    display: block;
    float: left;
    height: 39px;
    margin-right: 7px;
    padding-right: 16px;
    
    text-decoration: none;
    color: #FFFFFF;
    font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    font-weight:bold;
}

.number span
{
    background: transparent url('{{rootPath}}/theme/library/sliding-left.png') no-repeat;     display: block;
    height: 39px;
    padding: 10px 0 5px 8px;
}

#dimoverlay {
	visibility:hidden;
	z-index:6;
  	position: fixed;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;  
  	width: 100%;
  	text-align: center;
  	background-image:url('{{rootPath}}/theme/library/dimoverlay.png');
	
  	display: block;	
}

#pageselector {
    display:none;
    width:420px;
    font-family:"Arial";
    font-size:30px;
    font-weight:bold;  
}

#searchbox {
    display:none;
    width:420px;
    font-family:"Arial";
    font-size:30px;
    font-weight:bold;  
}

#settingsbox
{
    display:none;
    width:420px;
    font-family:"Arial";
    font-size:30px;
    font-weight:bold; 
}

.popupmenu {
	display:none;
	position:fixed;
	
  	top:0px;
  	left:0px;
  	right:0px;
	
	z-index:9;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;   
    margin-top: 3%;

    padding:10px;
    background-color: white;

    border: 1px solid #AAAAAA;
	box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
	overflow:auto;
	max-height: 80%
}

.popuptitle {
	clear:both;
	padding-bottom:20px;
	margin-top:10px;
	margin-bottom:20px;
	border-bottom: 1px #CCCCCC solid;
}

.categorytitle{
    text-transform: capitalize;
    color: #888888;
}

.pagenumber {
	border-radius: 25px;	
	-webkit-border-radius: 25px;
    float:left;
    background-color: #777;

    width: 50px;
    height: 38px;
    padding-top:10px;
	margin:5px;
	font-size: 24px;
}

.currentpagenumber {
    color:black;
    background-color: white;
}

.actionbutton {
    cursor: pointer;
	font-size:16px;
	font-weight:bold;
	background: #CCCCCC;
    color: #FFF;
	border-radius: 15px;
	height:32px;
	width:75px;	
	margin-left:30px;
	margin-right:30px;
	-webkit-border-radius: 15px;
    -moz-border-radius: 15px;	
	padding: 1px 0px 1px 0px;		
    border: solid 1px #CCCCCC;     
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
}

.actionbutton:hover {
  filter: brightness(90%);
}

.textbox{ 
	height:25px; 
	width: 200px; 
	border: 1px solid #B9BDC1; 
	color: #797979; 
	-moz-box-shadow: 0 2px 4px #bbb inset; 
	-webkit-box-shadow: 0 2px 4px #BBB inset; 
	box-shadow: 0 2px 4px #BBB inset; 
	-moz-border-radius: 3px; 
	-webkit-border-radius: 3px; 
	border-radius: 3px; 
} 

#searchright { 
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowright.svg');
	cursor: pointer;  
}

#searchright10 { 
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowright10.svg');
	cursor: pointer;  
}

#searchleft {
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowleft.svg');
	cursor: pointer;  
}

#searchleft10 {
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowleft10.svg');
	cursor: pointer;  
}

.searcharrowform {
	display : inline;	
}

.sectiontitle {
	font-size:24px;
    margin-top: 20px;
}

.radiolabel {
    display: inline-block;
	font-size: 18px;
	margin: 15px 25px 5px 5px;	
	padding: 5px;
	width: 150px;
	border-radius: 10px;	
	background-color:#EEEEEE;
}

#folderinfo{
   font-family:"Arial";
   font-size:16px;
   text-align: justify;
   padding:10px;
}

/*****************************************/
/*           BOOK DETAILS                */
/*****************************************/

#bookdetails {
    display:none;
    width:580px;
}

#progressbar{
	position:relative;
	top:131px;
	border: 0;
	background: url('{{rootPath}}/theme/library/progressbar.gif');
	background-repeat:no-repeat;
	margin:auto;
	width:48px;
	height:48px;
}

#details {
	font-family:"Arial";
	display: flex;
	flex-direction: column;
}

#details_upper_row {
    display: flex;
    flex-direction: row;
}

#details_cover_progress{
    display: flex;
    flex-direction: column;
    margin: 5px;
}

#details_info_panel{
    display: flex;
    flex-direction: column;
    margin: 5px 10px 5px 10px;
}

#details_button_row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f8f8f8;
    padding: 2px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

#details_right_col{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-right: 2px;
    overflow-wrap: anywhere;
}

#details_close {
    position: absolute;
    top:5px;
	right: 5px;
	width:24px;
	height:24px;
	background-image:url('{{rootPath}}/theme/library/close.svg');
	background-repeat:no-repeat;
	opacity:0.5;
}

#details_cover {
	width: var(--cover-width);
    height: var(--cover-height) + 34px;
}

#details_progress {
    float:left;
    width: var(--cover-width);
    height: 34px;
}

#details_cover img{
	border: 1px solid #AAAAAA;
}

#details_title{
	font-size:18px;
    font-weight:bold;
    text-align:left;
}

#details_authors{
	margin-top:0.3rem;
	font-size:16px;
    font-weight:bold;
    text-align:left;
    color:#888;
}

#details_series{
	margin-top:0.3rem;
	font-size:16px;
    text-align:left;
}

#details_series::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/series.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
		opacity: 0.5;
}

#details_tags{
		margin-top: 1rem;
	font-size:16px;
    text-align:left;
    font-style:italic
}

#details_tags::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/tag.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
		opacity: 0.5;
}

#details_language{
	margin-top:0.2rem;
	font-size:16px;
    text-align:left;
}

#details_language::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/language.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
		opacity: 0.5;
}

#details_file{
	margin-top:0.2rem;
	font-size:16px;
    text-align:left;
}

#details_file::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/file.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
	opacity: 0.5;
}

#details_publication{
	margin-top:0.2rem;
	font-size:16px;
    text-align:left;
    font-style: italic;
}

.details_rating {
	float:left;
	margin-top:0.2rem;
    text-align:left;
	font-size:22px;
}

#details_description {
	clear: both;
	text-align:left;
	overflow-y:auto;
	color:#444444;
	padding:15px;
}

#details_description a {
	text-decoration: underline;
}

.details_button{
    font-size: 12px;
    align: left;
    width: 80px;
}

#details_download {
	width:42px;
	height:42px;
	background-image:url('{{rootPath}}/theme/library/download.svg');
    display: inline-block;
    vertical-align: middle;
    opacity: 0.7;
}

#details_read{
	width:42px;
	height:42px;
    background-image:url('{{rootPath}}/theme/library/read.svg');
	display: inline-block;
	vertical-align: middle;
	opacity: 0.7;
}

#details_mark_unread {
	width:42px;
	height:42px;
	background-image:url('{{rootPath}}/theme/library/mark-unread.svg');
    display: inline-block;
    vertical-align: middle;
    opacity: 0.7;
}

#details_mark_finished {
	width:42px;
	height:42px;
	background-image:url('{{rootPath}}/theme/library/mark-finished.svg');
    display: inline-block;
    vertical-align: middle;
    opacity: 0.7;
}

.cover_progress_bar {
    --prog_fg: #e0e0e0;
	position: relative;
	bottom: 1.2rem;
	margin-left: auto;
	margin-right: auto;
    width: 80%;
	background-color: var(--prog_fg);
	padding: 1px;
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
}

.cover_progress_bar_fill {
	--prog_bg: #A61F22;
    display: block;
    height: 3px;
    background-color: var(--prog_bg);
    width: var(--value);
}

.details_progress_bar {
    --prog_fg: #e0e0e0;
    width: 80%;
    background-color: var(--prog_fg);
	padding: 3px;
	border-radius: 3px;
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
	margin-left:auto;
	margin-right: auto;
}

.details_progress_bar_fill {
	--prog_bg: #A61F22;
    display: block;
    height: 6px;
    border-radius: 3px;
    background-color: var(--prog_bg);
    width: var(--value);
}

.status_unread {
    visibility: hidden;
}

.status_finished .cover_progress_bar {
    --prog_fg: #555;
    border: 1px solid #e0e0e0;
}

.status_finished .cover_progress_bar_fill {
    --prog_bg: #555;
}


.status_finished .details_progress_bar {
    --prog_fg: #555;
    border: 1px solid #e0e0e0;
}

.status_finished .details_progress_bar_fill {
    --prog_bg: #555;
}


~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~css
:root {
  --cover-width: {{coverWidth}}px;
  --cover-height: {{coverHeight}}px;
}

body {
    margin:0px;
	padding:0px;
    background-color: #1e1e1e;
    color: #d4d4d4;
    text-align:center;
} 

a {
    color: #d4d4d4;
	text-decoration: none;
	outline: none;
}

a img {
    border: 1px solid #3c3c3c;
	box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.65);
}

.hidden {
    visibility:hidden;
}

.rootlink {
    font-family:"Arial";
    font-size:30px;
    font-weight:bold;    
    
    display : inline-block;
	padding : 5px;    
	background-color:#252526;
    width : 500px;
	
	border-radius: 10px;	
	-webkit-border-radius: 10px;
}

@media (max-width: 810px) {
    
    #toppagebar
    {   
    	position:fixed;
    	z-index:5;    
    	top:0px;
    	left:0px;    	
        height:70px;
    	width:100%;	
    	background-color:#252526;	
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }
    
    #group
    {	
    	margin-top:150px;
    	margin-left:10px;
    	margin-right:10px;	
    }

	#topbarleft
	{    
		position:absolute;
        top:70px;
        left:0px;
	}
	
	#topbarright
	{ 
		position:absolute;
        top:70px;
        right:0px;
        
	}
}

@media (min-width: 811px) {
    
    #toppagebar
    {   
    	position:fixed;
    	z-index:5;    
    	top:0px;
    	left:0px;    	
        height:70px;
    	width:100%;	
    	background-color:#252526;	
        -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }
    
    #group
    {	
    	margin-top:100px;
    	margin-left:10px;
    	margin-right:10px;	
    }
	
	#topbarleft
	{
		float: left;
	}
	
	#topbarright
	{
		float: right;
	}
}

#topbarcenter {
    position:absolute;
    left:50%;
    top:9px;
    transform:translateX(-50%);
    width:fit-content;
    max-width: calc(100% - 260px);
    height:52px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:12px;
    white-space:nowrap;
}

#topbarcenter .topbutton {
    float:none;
    flex:0 0 52px;
    width:52px;
    height:52px;
    margin:0;
}

#pagelabel {
    flex:0 1 auto;
    min-width:140px;
    margin:0;
    font-weight:bold;
    font-family:"Arial";
    font-size:22px;
    color:#d4d4d4;
    line-height:1.0;
    height:52px;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    padding:0;
}

#pagelabeltotal {
    font-size:16px;
    color:#9da7b3;
}
.topbutton {
	float:left;
	width:52px;
	height:52px;
	margin: 10px 18px 10px 18px;
	opacity: 0.5;
}

#arrowup {	
	background-image:url('{{rootPath}}/theme/library/arrowup.svg');
	background-repeat:no-repeat;
}

#arrowleft {
	background-image:url('{{rootPath}}/theme/library/arrowleft.svg');
	background-repeat:no-repeat;	
}

#arrowleft10 {		
	background-image:url('{{rootPath}}/theme/library/arrowleft10.svg');
	background-repeat:no-repeat;	
}

#arrowright {	
	background-image:url('{{rootPath}}/theme/library/arrowright.svg');
	background-repeat:no-repeat;
}

#arrowright10 {	
	background-image:url('{{rootPath}}/theme/library/arrowright10.svg');
	background-repeat:no-repeat;
}

#random {		
	background-image:url('{{rootPath}}/theme/library/random.svg');
	background-repeat:no-repeat;
}

#search {	
	background-image:url('{{rootPath}}/theme/library/search.svg');
	background-repeat:no-repeat;
}

#settings {		
	background-image:url('{{rootPath}}/theme/library/settings.svg');
	background-repeat:no-repeat;
}

#banner {
    position: absolute;
    top:0px;
    left:0px;
    height: 100px;
    width:100%;    

    background-image:url('{{rootPath}}/theme/common/banner.png');
    background-color:#1e1e1e;
    background-repeat:no-repeat;
    background-position:20px center; 
}

.cell {
    float: left;
    width: var(--cover-width);
    height: calc(var(--cover-height) + 44px);
    margin: 0 15px 15px 0;
    padding: 5px;
}

.cellcontainer {
	display: inline-block;
}

.thumb {
    width: var(--cover-width);
    height: var(--cover-height);
    text-align:center;
}

.thumb a {
    display:block;
    width:100%;
    height:100%;
}

.thumb img
{
    display:block;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center center;
    box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.65);
}

.label {
    margin: 12px 0 0 0;
    font-family:"Arial";
    font-size:14px;
    height:50px;
    overflow:hidden;
    font-family:"Arial";
	color:#d4d4d4;
}

.author {
	color:#9da7b3;
}

.title {
	color: #d4d4d4;
}

.numberblock{
    position:relative;
    float:right;
    top: calc(0px - var(--cover-height) - 54px + var(--cover-height)/10);
    right:-22px;
}

.number {
	background: transparent url('{{rootPath}}/theme/library/sliding-right.png') no-repeat scroll top right;
    display: block;
    float: left;
    height: 39px;
    margin-right: 7px;
    padding-right: 16px;
    
    text-decoration: none;
    color: #d4d4d4;
    font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    font-weight:bold;
}

.number span
{
    background: transparent url('{{rootPath}}/theme/library/sliding-left.png') no-repeat;     display: block;
    height: 39px;
    padding: 10px 0 5px 8px;
}

#dimoverlay {
	visibility:hidden;
	z-index:6;
  	position: fixed;
  	top: 0;
  	left: 0;
  	right: 0;
  	bottom: 0;  
  	width: 100%;
  	text-align: center;
  	background-image:url('{{rootPath}}/theme/library/dimoverlay.png');
	
  	display: block;	
}

#pageselector {
    display:none;
    width:420px;
    font-family:"Arial";
    font-size:30px;
    font-weight:bold;  
}

#searchbox {
    display:none;
    width:420px;
    font-family:"Arial";
    font-size:30px;
    font-weight:bold;  
}

#settingsbox
{
    display:none;
    width:420px;
    font-family:"Arial";
    font-size:30px;
    font-weight:bold; 
}

.popupmenu {
	display:none;
	position:fixed;
	
  	top:0px;
  	left:0px;
  	right:0px;
	
	z-index:9;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;   
    margin-top: 3%;

    padding:10px;
    background-color: #252526;

    border: 1px solid #3c3c3c;
	box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.65);
	overflow:auto;
	max-height: 80%
}

.popuptitle {
	clear:both;
	padding-bottom:20px;
	margin-top:10px;
	margin-bottom:20px;
	border-bottom: 1px #3c3c3c solid;
}

.categorytitle{
    text-transform: capitalize;
    color: #9da7b3;
}

.pagenumber {
	border-radius: 25px;	
	-webkit-border-radius: 25px;
    float:left;
    background-color: #2d2d30;

    width: 50px;
    height: 38px;
    padding-top:10px;
	margin:5px;
	font-size: 24px;
}

.currentpagenumber {
    color:#d4d4d4;
    background-color: #2d2d30;
}

.actionbutton {
    cursor: pointer;
	font-size:16px;
	font-weight:bold;
	background: #0e639c;
    color: #d4d4d4;
	border-radius: 15px;
	height:32px;
	width:75px;	
	margin-left:30px;
	margin-right:30px;
	-webkit-border-radius: 15px;
    -moz-border-radius: 15px;	
	padding: 1px 0px 1px 0px;		
    border: solid 1px #007acc;
    -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 1px 1px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 1px 1px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08), 0 1px 1px rgba(0, 0, 0, 0.3);
}

.actionbutton:hover {
  filter: brightness(90%);
}

.textbox{ 
	height:25px; 
	width: 200px; 
	border: 1px solid #3c3c3c; 
	color: #d4d4d4; 
	background-color: #2d2d30;
	-moz-box-shadow: 0 2px 4px rgba(0,0,0,0.35) inset; 
	-webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.35) inset; 
	box-shadow: 0 2px 4px rgba(0,0,0,0.35) inset; 
	-moz-border-radius: 3px; 
	-webkit-border-radius: 3px; 
	border-radius: 3px; 
} 

#searchright { 
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowright.svg');
	cursor: pointer;  
}

#searchright10 { 
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowright10.svg');
	cursor: pointer;  
}

#searchleft {
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowleft.svg');
	cursor: pointer;  
}

#searchleft10 {
	border: 0;
	background: url('{{rootPath}}/theme/library/arrowleft10.svg');
	cursor: pointer;  
}

.searcharrowform {
	display : inline;	
}

.sectiontitle {
	font-size:24px;
    margin-top: 20px;
}

.radiolabel {
    display: inline-block;
	font-size: 18px;
	margin: 15px 25px 5px 5px;	
	padding: 5px;
	width: 150px;
	border-radius: 10px;	
	background-color:#252526;
}

#folderinfo{
   font-family:"Arial";
   font-size:16px;
   text-align: justify;
   padding:10px;
}

/*****************************************/
/*           BOOK DETAILS                */
/*****************************************/

#bookdetails {
    display:none;
    width:580px;
}

#progressbar{
	position:relative;
	top:131px;
	border: 0;
	background: url('{{rootPath}}/theme/library/progressbar.gif');
	background-repeat:no-repeat;
	margin:auto;
	width:48px;
	height:48px;
}

#details {
	font-family:"Arial";
	display: flex;
	flex-direction: column;
}

#details_upper_row {
    display: flex;
    flex-direction: row;
}

#details_cover_progress{
    display: flex;
    flex-direction: column;
    margin: 5px;
}

#details_info_panel{
    display: flex;
    flex-direction: column;
    margin: 5px 10px 5px 10px;
}

#details_button_row{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #2d2d30;
    padding: 2px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

#details_right_col{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding-right: 2px;
    overflow-wrap: anywhere;
}

#details_close {
    position: absolute;
    top:5px;
	right: 5px;
	width:24px;
	height:24px;
	background-image:url('{{rootPath}}/theme/library/close.svg');
	background-repeat:no-repeat;
	opacity:0.5;
}

#details_cover {
	width: var(--cover-width);
    height: var(--cover-height) + 34px;
}

#details_progress {
    float:left;
    width: var(--cover-width);
    height: 34px;
}

#details_cover img{
    display:block;
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center center;
    border: 1px solid #3c3c3c;
}

#details_title{
	font-size:18px;
    font-weight:bold;
    text-align:left;
}

#details_authors{
	margin-top:0.3rem;
	font-size:16px;
    font-weight:bold;
    text-align:left;
    color:#9da7b3;
}

#details_series{
	margin-top:0.3rem;
	font-size:16px;
    text-align:left;
}

#details_series::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/series.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
		opacity: 0.5;
}

#details_tags{
		margin-top: 1rem;
	font-size:16px;
    text-align:left;
    font-style:italic
}

#details_tags::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/tag.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
		opacity: 0.5;
}

#details_language{
	margin-top:0.2rem;
	font-size:16px;
    text-align:left;
}

#details_language::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/language.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
		opacity: 0.5;
}

#details_file{
	margin-top:0.2rem;
	font-size:16px;
    text-align:left;
}

#details_file::before{
    width: 1rem;
    height: 1rem;
    content:url('{{rootPath}}/theme/library/file.svg');
	display: inline-block;
	margin-right: 10px;
	vertical-align: text-bottom;
	opacity: 0.5;
}

#details_publication{
	margin-top:0.2rem;
	font-size:16px;
    text-align:left;
    font-style: italic;
}

.details_rating {
	float:left;
	margin-top:0.2rem;
    text-align:left;
	font-size:22px;
}

#details_description {
	clear: both;
	text-align:left;
	overflow-y:auto;
	color:#d4d4d4;
	padding:15px;
}

#details_description a {
	text-decoration: underline;
}

.details_button{
    width: 68px;
    height: 84px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 8px 0 6px 0;
    font-size: 12px;
    line-height: 1.1;
    text-align: center;
    vertical-align: middle;
    gap: 6px;
    opacity: 0.7;
}

.details_button::before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    flex: 0 0 20px;
}

#details_download::before {
    background-image:url('{{rootPath}}/theme/library/download.svg');
}

#details_read::before {
    background-image:url('{{rootPath}}/theme/library/read.svg');
}

#details_mark_unread::before {
    background-image:url('{{rootPath}}/theme/library/mark-unread.svg');
}

#details_mark_finished::before {
    background-image:url('{{rootPath}}/theme/library/mark-finished.svg');
}

.cover_progress_bar {
    --prog_fg: #e0e0e0;
	position: relative;
	bottom: 1.2rem;
	margin-left: auto;
	margin-right: auto;
    width: 80%;
	background-color: #3c3c3c;
	padding: 1px;
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
}

.cover_progress_bar_fill {
	--prog_bg: #007acc;
    display: block;
    height: 3px;
    background-color: #007acc;
    width: var(--value);
}

.details_progress_bar {
    --prog_fg: #e0e0e0;
    width: 80%;
    background-color: #3c3c3c;
	padding: 3px;
	border-radius: 3px;
	box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
	margin-left:auto;
	margin-right: auto;
}

.details_progress_bar_fill {
	--prog_bg: #007acc;
    display: block;
    height: 6px;
    border-radius: 3px;
    background-color: #007acc;
    width: var(--value);
}

.status_unread {
    visibility: hidden;
}

.status_finished .cover_progress_bar {
    --prog_fg: #555;
    border: 1px solid #3c3c3c;
}

.status_finished .cover_progress_bar_fill {
    --prog_bg: #555;
}


.status_finished .details_progress_bar {
    --prog_fg: #555;
    border: 1px solid #3c3c3c;
}

.status_finished .details_progress_bar_fill {
    --prog_bg: #555;
}


~~~~
</details>

## `themes/default/library/page-library-category-root-dirs.html`

<details>
<summary>原代码</summary>

~~~~html
<!doctype html>
<html>

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/library/library.css"/>
</head>

<body>
    <div id="toppagebar">
        {{>library/inc-library-topbar.html}}
    </div>
    <div id="group">            
        <br/><br/><br/>
        {{#rootFolders}}
            <a href="{{folderUrl}}" class="rootlink">{{folderName}}</a>
            <br/><br/>
        {{/rootFolders}}        
    </div>
    {{>library/inc-library-popups.html}}
</body>

</html>

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<!doctype html>
<html>

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/library/library.css"/>
</head>

<body>
    <div id="toppagebar">
        {{>library/inc-library-topbar.html}}
    </div>
    <div id="group">
        <br/><br/><br/>
        {{#rootFolders}}
            <a href="{{folderUrl}}" class="rootlink">{{folderName}}</a>
            <br/><br/>
        {{/rootFolders}}
    </div>
    {{>library/inc-library-popups.html}}
</body>

</html>

~~~~
</details>

## `themes/default/library/page-library-details.html`

<details>
<summary>原代码</summary>

~~~~html
<div id="details">
    <a id="details_close" href="#" onclick="togglePopup('bookdetails');location.reload();return false;"></a>
    <div id="details_upper_row">
        <div id="details_cover_progress">
            <div id="details_cover">
                <img src="{{coverUrl}}" />
            </div>
            <div id="details_progress_wrapper" class="{{readingStatusClass}}">
                <div class="details_progress_bar">
                    <span class="details_progress_bar_fill" style="--value: {{progress}}%;"></span>
                </div>
            </div>
        </div>
        <div id="details_right_col">
            <div id="details_info_panel">
                <div id="details_title">{{title}}</div>
                <div id="details_authors">{{writers}}</div>
                {{#seriesName}}
                <div id="details_series">{{seriesName}} - {{seriesIndex}}</div>
                {{/seriesName}}
                {{#tags}}
                <div id="details_tags">{{tags}}</div>
                {{/tags}}
                {{#language}}
                <div id="details_language">{{language}}</div>
                {{/language}}
                <div id="details_file">{{fileExtension}} ({{fileSize}})</div>
                {{#publicationDate}}
                <div id="details_publication">Published on {{publicationDate}}</div>
                {{/publicationDate}}

                <div class="details_rating">{{rating}}</div>
            </div>
            <div id="details_button_row">
                <a id="details_download" class="details_button" href="{{downloadUrl}}"></a>
                {{#readerUrl}}
                <a id="details_read" class="details_button" href="#" onclick="openBook('{{readerUrl}}');return false;"></a>
                <a id="details_mark_unread" class="details_button" href="#" onclick="markAsUnread('{{ItemId}}','{{rootPath}}');return false;"></a>
                <a id="details_mark_finished" class="details_button" href="#" onclick="markAsFinished('{{ItemId}}','{{rootPath}}');return false;"></a>
                {{/readerUrl}}
            </div>
        </div>
    </div>
</div>
<div id="details_description">{{description}}</div>
</div>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<div id="details">
    <a id="details_close" href="#" onclick="togglePopup('bookdetails');location.reload();return false;"></a>
    <div id="details_upper_row">
        <div id="details_cover_progress">
            <div id="details_cover">
                <img src="{{coverUrl}}" />
            </div>
            <div id="details_progress_wrapper" class="{{readingStatusClass}}">
                <div class="details_progress_bar">
                    <span class="details_progress_bar_fill" style="--value: {{progress}}%;"></span>
                </div>
            </div>
        </div>
        <div id="details_right_col">
            <div id="details_info_panel">
                <div id="details_title">{{title}}</div>
                <div id="details_authors">{{writers}}</div>
                {{#seriesName}}
                <div id="details_series">{{seriesName}} - {{seriesIndex}}</div>
                {{/seriesName}}
                {{#tags}}
                <div id="details_tags">{{tags}}</div>
                {{/tags}}
                {{#language}}
                <div id="details_language">{{language}}</div>
                {{/language}}
                <div id="details_file">{{fileExtension}} ({{fileSize}})</div>
                {{#publicationDate}}
                <div id="details_publication">发表于 {{publicationDate}}</div>
                {{/publicationDate}}

                <div class="details_rating">{{rating}}</div>
            </div>
            <div id="details_button_row">
                <a id="details_download" class="details_button" href="{{downloadUrl}}">下载</a>
                {{#readerUrl}}
                <a id="details_read" class="details_button" href="#" onclick="openBook('{{readerUrl}}');return false;">阅读</a>
                <a id="details_mark_unread" class="details_button" href="#" onclick="markAsUnread('{{ItemId}}','{{rootPath}}');return false;">标记未读</a>
                <a id="details_mark_finished" class="details_button" href="#" onclick="markAsFinished('{{ItemId}}','{{rootPath}}');return false;">标记已读</a>
                {{/readerUrl}}
            </div>
        </div>
    </div>
</div>
<div id="details_description">{{description}}</div>
</div>

~~~~
</details>

## `themes/default/library/page-library.html`

<details>
<summary>原代码</summary>

~~~~html
<!doctype html>
<html lang="en">

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/library/library.css"/>
</head>

<body>
    <div id="toppagebar">
        {{#isSearchResult}}
            {{>library/inc-library-topbar-search.html}}
        {{/isSearchResult}}
        {{^isSearchResult}} 
            {{>library/inc-library-topbar.html}}
        {{/isSearchResult}}
    </div>
    <div id="group">
        {{folderMetadata}}
        {{#items}}
        <div class="cellcontainer">
            {{#isFolder}}          
            <div class="cell">
                <div class="thumb">
                    <a href="{{itemFolderUrl}}">
                        <img src="{{itemCoverUrl}}"/>
                    </a>
                </div>
                <div class="label">{{itemTitle}}</div>
                <div class="numberblock">
                    <div class="number">
                        <span>{{itemChildrenCount}}</span>
                    </div>
                </div>
            </div>
            {{/isFolder}}             
            {{^isFolder}} 
            <div class="cell">
                <div class="thumb">
                    <a href="#" onclick="togglePopup('bookdetails');loadBookDetails({{itemId}},'{{rootPath}}');return false;">
                        <img src="{{itemCoverUrl}}"/>
                        <div class="{{readingStatusClass}}">
                            <div class="cover_progress_bar"><span class="cover_progress_bar_fill" style="--value: {{progress}}%;"></span></div>
                        </div>
                    </a>
                </div>
                <div class="label">
                    <div class="title">{{itemTitle}}</div>
                </div>
            </div>
            {{/isFolder}}
        </div>
        {{/items}}
    </div>
    {{>library/inc-library-popups.html}}
</body>

</html>
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<!doctype html>
<html lang="en">

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/library/library.css"/>
</head>

<body>
    <div id="toppagebar">
        {{>library/inc-library-topbar.html}}
    </div>
    <div id="group">
        {{folderMetadata}}
        {{#items}}
        <div class="cellcontainer">
            {{#isFolder}}
            <div class="cell">
                <div class="thumb">
                    <a href="{{itemFolderUrl}}">
                        <img src="{{itemCoverUrl}}"/>
                    </a>
                </div>
                <div class="label">{{itemTitle}}</div>
                <div class="numberblock">
                    <div class="number">
                        <span>{{itemChildrenCount}}</span>
                    </div>
                </div>
            </div>
            {{/isFolder}}
            {{^isFolder}}
            <div class="cell">
                <div class="thumb">
                    <a href="#" onclick="togglePopup('bookdetails');loadBookDetails({{itemId}},'{{rootPath}}');return false;">
                        <img src="{{itemCoverUrl}}"/>
                        <div class="{{readingStatusClass}}">
                            <div class="cover_progress_bar"><span class="cover_progress_bar_fill" style="--value: {{progress}}%;"></span></div>
                        </div>
                    </a>
                </div>
                <div class="label">
                    <div class="title">{{itemTitle}}</div>
                </div>
            </div>
            {{/isFolder}}
        </div>
        {{/items}}
    </div>
    {{>library/inc-library-popups.html}}
</body>

</html>

~~~~
</details>

## `themes/default/login/login.css`

<details>
<summary>原代码</summary>

~~~~css
body {
	background-color: red;
	margin: 0px;
	padding: 0px;
	background-color: white;
	font-family: "Arial";
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

a {
	color: #444444;
	text-decoration: none;
	outline: none;
}

a img {
	border: none;
}

input {
	width: 120px;
}

#loginform {
	color: #444444;
	position: relative;
	font-family: "Arial";
	font-size: 16px;
}

#loginfield, #passwordfield {
	margin-left: 15px;
	height: 25px;
	width: 200px;
	border: 1px solid #B9BDC1;
	color: #797979;
	-moz-box-shadow: 0 2px 4px #bbb inset;
	-webkit-box-shadow: 0 2px 4px #BBB inset;
	box-shadow: 0 2px 4px #BBB inset;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
}

#loginfield:focus, #passwordfield:focus {
	border: 1px solid #777777;
}

#loginbutton {
	font-size: 16px;
	background: #CCCCCC;
	color: #FFF;
	border-radius: 15px;
	height: 26px;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	padding: 1px 0px 1px 0px;
	margin-left: 10px;
	border: solid 1px #CCCCCC;
	-webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 1px 1px rgba(0, 0, 0, 0.2);
}

#banner {
	top: 0px;
	left: 0px;
	height: 100px;
	width: 100%;
	margin-bottom: 60px;
	border-bottom: 1px #CCCCCC solid;
	background-image: url('{{rootPath}}/theme/common/banner.png');
	background-repeat: no-repeat;
	background-position: 20px;
}

~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~css
body {
	background-color: #1e1e1e;
	margin: 0px;
	padding: 0px;
	background-color: #1e1e1e;
	font-family: "Arial";
	font-size: 20px;
	font-weight: bold;
	text-align: center;
}

a {
	color: #d4d4d4;
	text-decoration: none;
	outline: none;
}

a img {
	border: none;
}

input {
	width: 120px;
}

#loginform {
	color: #d4d4d4;
	position: relative;
	font-family: "Arial";
	font-size: 16px;
}

#loginfield, #passwordfield {
	margin-left: 15px;
	height: 25px;
	width: 200px;
	border: 1px solid #3c3c3c;
	color: #d4d4d4;
	-moz-box-shadow: 0 2px 4px rgba(0,0,0,0.35) inset;
	-webkit-box-shadow: 0 2px 4px rgba(0,0,0,0.35) inset;
	box-shadow: 0 2px 4px rgba(0,0,0,0.35) inset;
	-moz-border-radius: 3px;
	-webkit-border-radius: 3px;
	border-radius: 3px;
}

#loginfield:focus, #passwordfield:focus {
	border: 1px solid #007acc;
}

#loginbutton {
	font-size: 16px;
	background: #0e639c;
	color: #d4d4d4;
	border-radius: 15px;
	height: 26px;
	-webkit-border-radius: 15px;
	-moz-border-radius: 15px;
	padding: 1px 0px 1px 0px;
	margin-left: 10px;
	border: solid 1px #007acc;
	-webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 1px rgba(0,0,0,0.35);
	-moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 1px rgba(0,0,0,0.35);
	box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 1px rgba(0,0,0,0.35);
}

#banner {
	top: 0px;
	left: 0px;
	height: 100px;
	width: 100%;
	margin-bottom: 60px;
	border-bottom: 1px #3c3c3c solid;
	background-image: url('{{rootPath}}/theme/common/banner.png');
	background-repeat: no-repeat;
	background-position: 20px;
}

body, html {
	background-color: #1e1e1e;
	color: #d4d4d4;
}

#loginform, #passwordform {
	background-color: #252526;
	border: 1px solid #3c3c3c;
	box-shadow: 0 0 0 1px rgba(0,0,0,0.25);
}

#loginfield, #passwordfield {
	background-color: #2d2d30;
	color: #d4d4d4;
}

#loginbutton {
	border-color: #007acc;
}
~~~~
</details>

## `themes/default/login/page-login.html`

<details>
<summary>原代码</summary>

~~~~html
<!doctype html>
<html>

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/login/login.css"/>
</head>
<body>
{{loginScripts}}

<div id="banner"></div>
<form id="{{formId}}" method="POST" action="{{rootPath}}/">
    Please identify yourself
    <br/><br/><br/><br/>
    {{hiddenInputs}}
    Username
    <input type="text" id="loginfield" name="{{loginFieldName}}" value=""/>
    <br/><br/>
    Password
    <input type="password" id="{{passwordFieldId}}" value=""/>
    <br/><br/>
    <br/><br/>
    <input type="submit" id="loginbutton" onclick="{{onLoginClick}}" value="log in"/>
</form>
</body>
</html>


~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~html
<!doctype html>
<html>

<head>
    {{>common/inc-header.html}}
    <link rel="stylesheet" type="text/css" href="{{rootPath}}/theme/login/login.css"/>
</head>
<body>
{{loginScripts}}

<div id="banner"></div>
<form id="{{formId}}" method="POST" action="{{rootPath}}/">
    请先登录
    <br/><br/><br/><br/>
    {{hiddenInputs}}
    用户名
    <input type="text" id="loginfield" name="{{loginFieldName}}" value=""/>
    <br/><br/>
    密码
    <input type="password" id="{{passwordFieldId}}" value=""/>
    <br/><br/>
    <br/><br/>
    <input type="submit" id="loginbutton" onclick="{{onLoginClick}}" value="登录"/>
</form>
</body>

</html>

~~~~
</details>

## `themes/default/rawfiles.css`

<details>
<summary>原代码</summary>

~~~~css
﻿body {    
	padding:20px;
    background-color: white;
    color: black;
	font-family:"Arial";
    font-size:16px;
    line-height:140%
} 

a:link {
	color:#000000;
	text-decoration: none;
}

a:visited {
	color:#666666;
	text-decoration: none;
}

a:hover {
	color:#CBCBCB;
}

a:active {
	color:#CBCBCB;
	text-decoration: none;
}

table td:first-child {
    text-align: left;
    padding-right: 15px;
}

table td {
    text-align: right;
}
~~~~
</details>

<details>
<summary>修改后代码</summary>

~~~~css
body {    
	padding:20px;
    background-color: #1e1e1e;
    color: #d4d4d4;
	font-family:"Arial";
    font-size:16px;
    line-height:140%
} 

a:link {
	color: #d4d4d4;
	text-decoration: none;
}

a:visited {
	color: #9da7b3;
	text-decoration: none;
}

a:hover {
	color: #007acc;
}

a:active {
	color: #007acc;
	text-decoration: none;
}

table td:first-child {
    text-align: left;
    padding-right: 15px;
}

table td {
    text-align: right;
}
~~~~
</details>
