# FETChWCDMaMEASiMEValuationCARRiercTRACeRCDerrorDPCChCURRent

Module: WCDMA Measurements
Source: d5522e6cef0b4480.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
RCDE vs. Slot Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:SDEViation? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:SDEViation? 
Returns the values of the relative CDE vs. slot traces for the DPCCH and the DPDCH.
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
The results of the current, average, maximum and standard deviation traces can be retrieved. The standard deviation traces cannot be displayed at the GUI.
See also 
"Detailed Views: Relative CDE"
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<RCDE_1> ... <RCDE_n>
Relative CDE trace results, one result per measured slot or half-slot
Range: 
-100 dB to 0 dB (SDEViation: 0 dB to 50 dB)
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top