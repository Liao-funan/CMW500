# CONFigureWCDMaMEASiTPCILPControlTSGH

Module: WCDMA Measurements
Source: ce4dece844444b5c.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:ILPControl:TSGH
CONFigure:WCDMa:MEAS<i>:TPC:ILPControl:TSGH 
<Length>, <Statistics>
Configures the inner loop power control test steps G and H.
For the combined signal path scenario, use 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
TPC:
​
ILPControl:
​
TSGH
.
Parameters:
<Length>
Number of TPC bits per test step
Range: 
60  to  170
*RST:
80
<Statistics>
Number of slots at the end of test step G (H), where the minimum (maximum) output power results are measured.
Range: 
1 slot  to  20 slots
*RST:
20 slots
Default unit: 
slots
Example: 
See 
"Configuring  Measurement-Specific Settings"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"TPC Test Step Settings"
Top