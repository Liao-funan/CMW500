# CONFigureWCDMaSIGNiCARRiercBAND

Module: WCDMA Measurements
Source: 4de5616fb9c84d62.htm

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
CONFigure:WCDMa:SIGN<i>:CARRier<c>:BAND
CONFigure:WCDMa:SIGN<i>:CARRier<c>:BAND 
<OperationBand>
Selects the operating band (OB).
In single-band scenarios, all carriers use the same band. If you change it for one carrier, it is also changed for the other carriers.
Suffix: 
<c>
1..*
Downlink carrier - only relevant for dual band scenarios
Parameters:
<OperationBand>
OB1 |
 
 ... |
 
 OB14 |
 
 OB19 |
 
 ... |
 
 OB22 |
 
 OB25 |
 
 OB26 |
 
 OB32 |
 
 OBS1 |
 
 ... |
 
 OBS3 |
 
 OBL1 |
 
 UDEFined
OB1
, ..., 
OB14
: operating band I to XIV
OB19
, ..., 
OB22
: operating band XIX to XXII
OB25, OB26
: operating band XXV, XXVI
OB32
: operating band XXXII (restricted to dual band scenarios)
OBS1
: operating band S
OBS2
: operating band S 170 MHz
OBS3
: operating band S 190 MHz
OBL1
: operating band L
UDEFined
: user defined
*RST:
OB1
Firmware/Software: 
V2.1.30
V3.2.70: added OB25
V3.2.80: added OB22
V3.5.30: added OB26, OB32
V3.5.50: added UDEFined
Options: 
R&S CMW-KS425 for S, L and other user defined operating bands
R&S CMW-KS405 for dual band multi-carrier HSDPA
Manual operation: 
See 
"Band / Channel / Frequency"
Top