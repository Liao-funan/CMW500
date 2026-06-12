# CONFigureWCDMaSIGNiDLCARRiercHSSCchnoIDDummy

Module: WCDMA Signaling
Source: 37b013bd5be34f56.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
HS-SCCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:HSSCch<no>:IDDummy
CONFigure:WCDMa:SIGN<i>:DL:CARRier<c>:HSSCch<no>:IDDummy 
<DummyUEID>
Sets the dummy UE identity to be sent in subframes which are not allocated to the UE. Individual values can be set per HS-SCCH.
Suffix: 
<no>
1..4
Selects the HS-SCCH to be configured
<c>
1..*
Downlink carrier
Parameters:
<DummyUEID>
Range: 
0 (#H0)  to  65535 (#HFFFF)
*RST:
Channel 1 to 4: #H5555, #12AA, #H1AAA, #H1FAA
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V2.1.30
Options: 
R&S CMW-KS411
Manual operation: 
See 
"UE ID Dummy"
Top