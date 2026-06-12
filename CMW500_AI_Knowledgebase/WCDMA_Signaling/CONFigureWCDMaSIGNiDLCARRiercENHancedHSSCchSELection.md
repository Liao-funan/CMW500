# CONFigureWCDMaSIGNiDLCARRiercENHancedHSSCchSELection

Module: WCDMA Signaling
Source: ac7ee017f9bc4189.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-SCCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:ENHanced:HSSCch:SELection
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:ENHanced:HSSCch:SELection 
<Type>
Selects the HS-SCCH that carries the UE ID in scheduled subframes.
The number <n> used below is set via 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
DL:
​
CARRier<c>:
​
ENHanced:
​
HSSCch:
​
NUMBer
.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Type>
CH1 |
 
 CH2 |
 
 CH3 |
 
 CH4 |
 
 RANDom |
 
 AUTomatic
CH1
 to 
CH4
: The UE ID is transferred on the selected HS-SCCH.
RANDom
: The HS-SCCH for each transmission is selected at random among the channels 1 to <n>.
AUTomatic
: For a R5 connection, the UE ID is transferred on the HS-SCCH sequence 1, 2,…, <n>, 1, 2, and so on. For a R7/R8 connection, the UE ID is transferred on the appropriate HS-SCCH automatically selected depending on the used modulation scheme.
*RST:
AUT
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS411
Manual operation: 
See 
"Selection"
Top