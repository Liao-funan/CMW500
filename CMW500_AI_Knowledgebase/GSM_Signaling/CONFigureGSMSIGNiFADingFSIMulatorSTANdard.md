# CONFigureGSMSIGNiFADingFSIMulatorSTANdard

Module: GSM Signaling
Source: cf3e053a4be948f2.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:GSM:SIGN<i>:FADing:FSIMulator:STANdard
CONFigure:GSM:SIGN<i>:FADing:FSIMulator:STANdard 
<Standard>
Selects one of the multipath propagation condition profiles defined in annex C.3 of 3GPP TS 45.005.
Parameters:
<Standard>
TI5 |
 
 T1P5 |
 
 T3 |
 
 T3P6 |
 
 T6 |
 
 T50 |
 
 T60 |
 
 T100 |
 
 H100 |
 
 H120 |
 
 H200 |
 
 R130 |
 
 R250 |
 
 R300 |
 
 R500 |
 
 E50 |
 
 E60 |
 
 E100 |
 
 T25 |
 
 TU1P5 |
 
 TU3 |
 
 TU25 |
 
 TU50 |
 
 HT100
The letter indicates the type of the model as follows:
TI
: TI (2 path)
T
: TUx (6 path)
H
: HTx (6 path)
R
: RAx (6 path)
E
: EQx (6 path)
TU
: TUx (12 path)
HT
: HTx (12 path)
The number indicates the speed of the mobile in km/h.
Example: HT100 means 100 km/h, T1P5 means 1.5 km/h.
*RST:
T3
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.0.20
V3.2.10: T25, TU1.5, TU3, TU25, TU50, HT10 added
V3.2.20: parameter HT10 changed to HT100
Options: 
R&S CMW-KS210, R&S CMW-KE100 and R&S CMW-KE200
Manual operation: 
See 
"Profile"
Top