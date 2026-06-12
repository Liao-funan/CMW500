# CONFigureWCDMaSIGNiRFSettingsENPMode

Module: WCDMA Measurements
Source: 4b2d270b81a24b64.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:ENPMode
CONFigure:WCDMa:SIGN<i>:RFSettings:ENPMode 
<Mode>
Selects the expected nominal power mode. The expected nominal power of the UL signal can be defined manually or calculated automatically, according to the UL power control settings.
For manual configuration, see:
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
ENPower
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
MARGin
Parameters:
<Mode>
MANual |
 
 ULPC
MANual
: The expected nominal power and margin are specified manually.
ULPC
: The expected nominal power is calculated according to the UL power control settings.
*RST:
ULPC
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Expected Nominal Power"
Top