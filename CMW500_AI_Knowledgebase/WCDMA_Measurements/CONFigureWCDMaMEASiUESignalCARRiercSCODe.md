# CONFigureWCDMaMEASiUESignalCARRiercSCODe

Module: WCDMA Measurements
Source: 48506a429e244619.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
UE Signal Info
 > 
CONFigure:WCDMa:MEAS<i>:UESignal:CARRier<c>:SCODe
CONFigure:WCDMa:MEAS<i>:UESignal:CARRier<c>:SCODe 
<Code>
Selects the number of the long code that is used to scramble the received uplink WCDMA signal.
For the combined signal path scenario, use 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
UL:
​
CARRier<c>:
​
SCODe
.
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Parameters:
<Code>
Range: 
#H0  to  #HFFFFFF
*RST:
#H0
Example: 
See 
"Specifying Required Settings"
Firmware/Software: 
V1.0.0.4
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KM405 for dual carrier HSUPA
Manual operation: 
See 
"Scrambling Code"
Top