# CONFigureSCSToolsVARiableRESet

Module: SCST
Source: fc06872d703d4d23.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Variables
 > 
Command Reference
 > 
CONFigure:SCSTools:VARiable:RESet
CONFigure:SCSTools:VARiable:RESet 
[<name>]
Resets a variable to its start value, defined via 
CONFigure:
​
SCSTools:
​
VARiable:
​
DEFine
.
To reset a specific variable, specify its <Name>.
You can even reset the variable "SinceLastBoot".
To reset all user-defined variables, omit the parameter <Name>.
User-defined variables are all variables except "SinceLastBoot".
Query parameters: 
<Name>
String with the name of the variable to be reset
Usage: 
Event
Firmware/Software: 
V3.7.10
Top