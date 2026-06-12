# CONFigureWCDMaSIGNiRFSettingsCARRiercFREQuencyUL

Module: WCDMA Signaling
Source: 2861ca7f0f654b04.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:FREQuency:UL
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:FREQuency:UL 
<Frequency>
Selects the UL carrier center frequency. The frequency must correspond to a channel valid for the current operating band.
For dependencies, see 
"Operating Bands"
.
The related DL frequency is calculated and set automatically.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Frequency>
Range: 
depends on operating band
*RST:
1.9226E+9 Hz
Default unit: 
Hz
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.0.10
V3.2.10: command renamed (
CARRier<c>
 added)
Manual operation: 
See 
"Operating Band, Channel, Frequency, Offset, UL/DL Separation"
Top