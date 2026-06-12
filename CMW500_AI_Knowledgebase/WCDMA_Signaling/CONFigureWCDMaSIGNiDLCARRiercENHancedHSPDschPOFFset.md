# CONFigureWCDMaSIGNiDLCARRiercENHancedHSPDschPOFFset

Module: WCDMA Signaling
Source: b4a71a78cef04421.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-PDSCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:ENHanced:HSPDsch:POFFset
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:ENHanced:HSPDsch:POFFset 
<Control>[, <PwrOffsetManual>]
Selects whether the measurement power offset 
Γ
 is set manually or calculated automatically. Optionally a second parameter can be sent to modify the manual power offset value. It is not relevant for automatic calculation.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Control>
AUTO |
 
 MANual
AUTO
: The correct value 
Γ
 is calculated automatically.
MANual
: The value 
Γ
 is set manually via the parameter 
<PwrOffsetManual>
.
*RST:
AUTO
<PwrOffsetManual>
Range: 
-6 dB  to  13 dB
*RST:
13 dB
Default unit: 
dB
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS411
Manual operation: 
See 
"Meas. Power Offset Control, Meas. Power Offset"
Top