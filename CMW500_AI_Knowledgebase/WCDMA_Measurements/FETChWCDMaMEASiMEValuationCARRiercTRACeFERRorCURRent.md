# FETChWCDMaMEASiMEValuationCARRiercTRACeFERRorCURRent

Module: WCDMA Measurements
Source: 60c4f5aa48234f10.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Frequency Error Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:FERRor:SDEViation? 
Returns the values of the carrier frequency error traces for up to 120 slots.
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
<FreqErr_1> ... <FreqErr_n>
Carrier frequency error trace results, one result per measured slot or half-slot
Range: 
-60000 Hz to 60000 Hz (SDEViation: 0 Hz to 60000 Hz)
Default unit: 
Hz
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