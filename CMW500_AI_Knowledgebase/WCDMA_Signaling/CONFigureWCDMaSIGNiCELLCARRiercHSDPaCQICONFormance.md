# CONFigureWCDMaSIGNiCELLCARRiercHSDPaCQICONFormance

Module: WCDMA Signaling
Source: bcaaf2c204ee4165.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA Settings
 > 
CQI Test Channel Configuration
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSDPa:CQI:CONFormance
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSDPa:CQI:CONFormance 
<Value>
Defines the CQI value used in the first stage of the test where the downlink transport format is fixed and the frequency distribution of the reported CQI values is calculated.
To use this value, configure 
CONFormance
 via 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
HSDPa:
​
CQI:
​
TINDex
.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Value>
Range: 
1  to  30
*RST:
16
Example: 
See 
"Configuring HSDPA Settings"
Firmware/Software: 
V2.1.20
V3.2.80: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Manual operation: 
See 
"CQI Table Index, CQI Tables"
Top