# FETChWCDMaMEASiMEValuationCARRiercTRACePERRor[RMS]CURRent

Module: WCDMA Measurements
Source: b098829e12864dc0.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:CARRier<c>:PERRor[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:PERRor[:RMS]:SDEViation? 
Returns the values of the RMS phase error traces for up to 120 slots.
Each current value is averaged over a half-slot or a full-slot, depending on the measurement period (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MPERiod:
​
MODulation
). The number of results depends on the measurement length (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MSCount
).
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation trace cannot be displayed at the GUI.
See also 
"Detailed Views: Modulation, CDP and CDE"
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseErr_1> ... <PhaseErr_n>
RMS phase error trace results, one result per measured slot or half-slot
Range: 
0 deg to 180 deg (SDEViation: 0 deg to 90 deg)
Default unit: 
deg
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top