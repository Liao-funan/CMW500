# CONFigureWCDMaSIGNiRFSettingsDBDC

Module: WCDMA Measurements
Source: 436065e7bccc44cd.htm

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
CONFigure:WCDMa:SIGN<i>:RFSettings:DBDC
CONFigure:WCDMa:SIGN<i>:RFSettings:DBDC 
<Enable>[, <Config>]
Enables dual band dual carrier HSDPA operation and selects the operating bands for UL and DL.
Parameters:
<Enable>
OFF |
 
 ON
*RST:
Off
<Config>
UDEFined |
 
 C1 |
 
 C2 |
 
 C3 |
 
 C4 |
 
 C5 |
 
 C6
UDEFined
: User defined (custom) - free band selection
C1
: DL band A I, DL band B VIII
C2
: DL band A II, DL band B IV
C3
: DL band A I, DL band B V
C4
: DL band A I, DL band B XI
C5
: DL band A II, DL band B V
C6
: DL band A I, DL band B XXXII
UL applies the band of the DL carrier 1, where the assignment of band A or band B is possible. Exception: no UL for operating band XXXII.
*RST:
C1
Firmware/Software: 
V3.2.60
V3.5.30: added 
C6
Options: 
R&S CMW-KS405
Manual operation: 
See 
"Band / Channel / Frequency"
Top