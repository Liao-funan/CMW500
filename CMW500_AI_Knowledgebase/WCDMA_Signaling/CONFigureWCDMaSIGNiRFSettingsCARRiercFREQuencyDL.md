# CONFigureWCDMaSIGNiRFSettingsCARRiercFREQuencyDL

Module: WCDMA Signaling
Source: 9bfe3d5e03e74aaa.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:FREQuency:DL
CONFigure:WCDMa:SIGN<i>:RFSettings:CARRier<c>:FREQuency:DL 
<Frequency>
Selects the DL carrier center frequency. The frequency must correspond to a channel valid for the current operating band, for dependencies see 
"Operating Bands"
.
The related UL frequency is calculated and set automatically. For dual carrier, the frequency of the other carrier is calculated and set as well.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Frequency>
Range: 
depends on operating band
*RST:
carrier 1: 2112.6E+6 Hz, carrier 2: 2117.6E+6 Hz
Default unit: 
Hz
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Operating Band, Channel, Frequency, Offset, UL/DL Separation"
Top