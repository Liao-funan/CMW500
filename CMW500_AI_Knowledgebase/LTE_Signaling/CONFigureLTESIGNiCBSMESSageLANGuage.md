# CONFigureLTESIGNiCBSMESSageLANGuage

Module: LTE Signaling
Source: c8c4917be74e4c0f.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (CBS)
 > 
CONFigure:LTE:SIGN<i>:CBS:MESSage:LANGuage
CONFigure:LTE:SIGN<i>:CBS:MESSage:LANGuage 
<Language>, <LngIndication>
Specifies the language of the message.
Setting a language is only possible for the internal data source. For a file data source, the value is fixed (1,"UCS-2").
The mapping of language codes to language indication strings is listed in the table below. If you specify a value pair that does not match, the specified code is used and the correct string is set automatically.
Parameters:
<Language>
Range: 
0  to  15
*RST:
1
<LngIndication>
Language indication as string
*RST:
English
Example: 
See 
"Configuring the Cell Broadcast Service"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS170
Manual operation: 
See 
"Data Coding Scheme"
<Language>
<LngIndication>
0
"German"
1
"English"
2
"Italian"
3
"French"
4
"Spanish"
5
"Dutch"
6
"Swedish"
7
"Danish"
8
"Portuguese"
9
"Finnish"
10
"Norwegian"
11
"Greek"
12
"Turkish"
13
"Hungarian"
14
"Polish"
15
"Language unspecified"
Top