# CONFigureWCDMaSIGNiULCARRiercPOFFset

Module: WCDMA Signaling
Source: acebb5f7ad074262.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Uplink Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:UL:CARRier<c>:POFFset
CONFigure:WCDMa:SIGN<i>:UL:CARRier<c>:POFFset 
<PowerOffset>
Sets the DPCCH power offset, used by the UE to calculate the initial DPCCH power for random access.
The power offset of the carrier two is defined as the power offset between the initial DPCCH power level on UL2 and the current DPCCH power level of UL1.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<PowerOffset>
Range: 
-164 dB to -6 dB for carrier one; 0 dB to 7 dB for carrier two
*RST:
-80 dB for carrier one; 0 dB for carrier two
Default unit: 
dB
Example: 
See 
"Configuring Physical Channel UL Settings"
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added)
Manual operation: 
See 
"DPCCH Power Offset"
Top