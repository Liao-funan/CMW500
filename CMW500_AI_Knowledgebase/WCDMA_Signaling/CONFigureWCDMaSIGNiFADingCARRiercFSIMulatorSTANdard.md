# CONFigureWCDMaSIGNiFADingCARRiercFSIMulatorSTANdard

Module: WCDMA Signaling
Source: 3ea828f1cfcd4eaa.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:FSIMulator:STANdard
CONFigure:WCDMa:SIGN<i>:FADing:CARRier<c>:FSIMulator:STANdard 
<Standard>
Selects one of the propagation conditions defined in the annex B.2 of 3GPP TS 25.101.
Suffix: 
<c>
1..*
Downlink carrier
Parameters:
<Standard>
C1 |
 
 C2 |
 
 C3 |
 
 C4 |
 
 C5 |
 
 C6 |
 
 C8 |
 
 PA3 |
 
 PB3 |
 
 VA3 |
 
 VA30 |
 
 VA12 |
 
 MPRopagation |
 
 BDEath |
 
 HST
C1
 to 
C6
: case 1 to case 6 (multipath fading profile)
C8
: case 8 (for CQI test in multipath fading and HS-SCCH-less demodulation of HS-DSCH)
PA3 | PB3
: ITU PA3 / PB3 (multipath fading profile)
VA3 | VA30 | VA12
: ITU VA3 / VA30 / VA120 (multipath fading profile)
MPRopagation
: moving propagation
BDEath
: birth-death propagation
HST
: high-speed train
*RST:
C1
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.0.30
V3.2.10: added MPRopagation, HST
V3.2.60: added BDEath
V3.5.20: added 
CARRier<c>
, C8
Options: 
R&S CMW-KS410, R&S CMW-KE100 and R&S CMW-KE400
Manual operation: 
See 
"Profile"
Top