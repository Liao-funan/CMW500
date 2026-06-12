# CONFigureWCDMaMEASiTPCILPControlMLENgth

Module: WCDMA Measurements
Source: d5028154e51365.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:ILPControl:MLENgth?
CONFigure:WCDMa:MEAS<i>:TPC:ILPControl:MLENgth? 
Query the number of slots measured in "Inner Loop Power Control" mode. The value depends on the selected TPC setup and the test step settings.
It can only be determined while the "Inner Loop Power Control" mode is active. In other modes INV is returned.
Return values: 
<MeasLength>
Range: 
101 slots  to  341 slots
*RST:
INV
Default unit: 
slots
Example: 
See 
"Configuring  Measurement-Specific Settings"
Usage: 
Query only
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Measurement Length"
Top