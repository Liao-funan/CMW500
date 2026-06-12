# CONFigureWCDMaSIGNiDLCARRiercHSSCchnoUEID

Module: WCDMA Signaling
Source: 8a1b20fbf5064490.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-SCCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:HSSCch<no>:UEID
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:HSSCch<no>:UEID 
<UEID>
Sets the UE identity for an HS-SCCH channel.
In the current software version, only one UE ID is configured for the HS-SCCH set of one carrier. Changing the value for one channel changes also the values of the other channels.
Suffix: 
<no>
1..4
Selects the HS-SCCH to be configured
<c>
1..*
Downlink carrier
Parameters:
<UEID>
Range: 
0 (#H0)  to  65535 (#HFFFF)
*RST:
#HAAAA
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS411
Manual operation: 
See 
"UE ID"
Top