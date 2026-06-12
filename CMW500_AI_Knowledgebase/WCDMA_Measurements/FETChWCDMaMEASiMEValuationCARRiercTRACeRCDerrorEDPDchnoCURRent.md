# FETChWCDMaMEASiMEValuationCARRiercTRACeRCDerrorEDPDchnoCURRent

Module: WCDMA Measurements
Source: 06a1c450998046b1.htm

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
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:CURRent? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:AVERage? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:MAXimum? 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:SDEViation? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:AVERage? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:MAXimum? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:SDEViation? 
Returns the values of the relative CDE vs. slot traces for the E-DPDCH 1 to 4.
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
"Detailed Views: Relative CDE"
Suffix: 
<no>
1..4
Selects the E-DPDCH for which the results are retrieved
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
 added)
Options: 
R&S CMW-KM401
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top