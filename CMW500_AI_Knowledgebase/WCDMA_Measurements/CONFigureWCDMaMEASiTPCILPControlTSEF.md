# CONFigureWCDMaMEASiTPCILPControlTSEF

Module: WCDMA Measurements
Source: 6b80a1937aa4477a.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:ILPControl:TSEF
CONFigure:WCDMa:MEAS<i>:TPC:ILPControl:TSEF 
<Length>, <Statistics>
Configures the inner loop power control test steps E and F.
For the combined signal path scenario, use 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
UL:
​
TPCSet:
​
PCONfig:
​
TSEF
.
Parameters:
<Length>
Number of TPC bits per test step
Range: 
100  to  170
*RST:
120
<Statistics>
Number of slots at the end of test step E (F), where the minimum (maximum) output power results are measured.
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