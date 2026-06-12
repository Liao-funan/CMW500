# CONFigureWCDMaMEASiTPCCTFCMLENgth

Module: WCDMA Measurements
Source: f887497b84ce4e8a.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:CTFC:MLENgth
CONFigure:WCDMa:MEAS<i>:TPC:CTFC:MLENgth 
<NrSteps>
Specifies the number of power steps to be measured per step direction (n up steps + n down steps). A query returns the configured number of steps and the resulting measurement length.
Parameters:
<NrSteps>
Number of steps to be measured per direction
Range: 
1  to  5
*RST:
5
Return values: 
<MeasLength>
Number of slots to be measured
Range: 
1 slot to 301 slot
*RST:
301 slots
Default unit: 
slot
Example: 
See 
"Specifying Basic Measurement Settings"
Firmware/Software: 
V3.0.30
Manual operation: 
See 
"Measurement Length"
Top