# CONFigureWCDMaMEASiTPCMODE

Module: WCDMA Measurements
Source: a0a9ee4f56e74c33.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Measurement Control Settings
 > 
CONFigure:WCDMa:MEAS<i>:TPC:MODE?
CONFigure:WCDMa:MEAS<i>:TPC:MODE? 
Queries the active measurement mode resulting from the currently selected TPC setup.
Return values: 
<MeasMode>
MONitor |
 
 ILPControl |
 
 MPEDch |
 
 CTFC |
 
 ULCM |
 
 DHIB
MONitor
: "Monitor"
ILPControl
: "Inner Loop Power Contro"l
MPEDch
: "Max. Power E-DCH"
CTFC
: "Change of TFC"
ULCM
: "UL Commpressed Mode"
DHIB
: "DC HSPA In-Band Emission"
*RST:
MON
Example: 
See 
"Configuring  Measurement-Specific Settings"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.0.30: added MPEDch and CTFC
V3.2.60: added ULCM
V3.2.80: added DHIB
Options: 
R&S CMW-KM405 for DHIB
Manual operation: 
See 
"Mode"
Top