# CONFigureWCDMaSIGNiCELLHSUPaISGRant

Module: WCDMA Signaling
Source: 9840e2f960044af7.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:ISGRant
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:ISGRant 
<Grant>[, <Type>]
Specifies initial serving grant parameters signaled to the UE. If you only want to modify the <Grant>, you can omit the <Type> parameter.
Parameters:
<Grant>
Serving grant value information element
Range: 
0  to  38
*RST:
13 (OFF)
Additional parameters: OFF | ON (disable | enable transmission of the initial serving grant parameters)
<Type>
PRIMary |
 
 SECondary
Primary/secondary grant selector information element
*RST:
PRIM
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Initial Serving Grant"
Top