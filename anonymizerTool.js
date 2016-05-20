function urlencode(str){str=(str+'').toString();return encodeURIComponent(str).replace(/!/g,'%21').replace(/'/g,'%27').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/\*/g,'%2A').replace(/%20/g,'+');}
function go()
{x=document.theform.nick.value;if(x.length<11)
{return 0;}
var displayURL=x.replace("http://","");var encodeURL=urlencode(x);y=document.location.search.substring(1,11);y="";document.theform.thelink1.value="http://lupakan.hol.es/?"+ encodeURL+""+ y;document.theform.thelink2.value="<a href=\"http://lupakan.hol.es/?"+ encodeURL+""+ y+"\">"+ displayURL+"</a>";document.theform.thelink3.value="[url=http://lupakan.hol.es/?"+ encodeURL+""+ y+"]"+ displayURL+"[/url]";return false;}
function generateCode(formName,displayIn)
{var script_path="http://lupakan.hol.es/js/anonymize.js";var keywords=document.forms[formName].elements["keywords"].value;keywords=keywords.replace(" ","");var keywords_array=new Array();var the_code="";keyword_array=keywords.split(",");the_code+="<script src=\""+ script_path+"\" type=\"text/javascript\"></script>\n";the_code+="<script type=\"text/javascript\">\n";the_code+="protected_links = \""+ keyword_array.join(", ")+"\";\n";the_code+="auto_anonymize();\n";the_code+="</script>\n";displayCode(displayIn,the_code);}
function displayCode(displayIn,the_code)
{var the_element=document.getElementById(displayIn);the_element.value="";the_element.value=the_code;}