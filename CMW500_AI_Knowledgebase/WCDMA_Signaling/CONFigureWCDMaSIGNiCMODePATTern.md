# CONFigureWCDMaSIGNiCMODePATTern

Module: WCDMA Signaling
Source: 9935593b7ae548f8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Compressed Mode Settings
 > 
CONFigure:WCDMa:SIGN<i>:CMODe:PATTern
CONFigure:WCDMa:SIGN<i>:CMODe:PATTern 
<Selection>
Selects the transmission gap patterns for compressed mode.
Parameters:
<Selection>
NONE |
 
 UEReport |
 
 SINGle |
 
 ULCM
NONE
: compressed mode disabled
UEReport
: several patterns for different measurement purposes used in parallel
See 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CMODe:
​
UEReport:
​
ENABle
SINGle
: selectable pattern for a definite measurement purpose
See 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CMODe:
​
SINGle:
​
TYPE
ULCM
: selectable pattern for the UL compressed mode TX test
See 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CMODe:
​
ULCM:
​
TYPE
*RST:
UER
Example: 
See 
"Performing a Neighbor Cell Measurement with CM"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS410
Manual operation: 
See 
"Pattern Selection"
Top