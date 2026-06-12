# FETChWCDMaMEASiMEValuationTRACePHDCURRent

Module: WCDMA Measurements
Source: b99c0769396547a5.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Phase Discontinuity Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:PHD:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:PHD:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:PHD:CURRent? 
Returns the values of the phase discontinuity traces for up to 120 slots. One value per measured slot is returned (see 
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
The meaning of the value depends on the measurement period (see 
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
):
For full-slot measurements, each value indicates the phase discontinuity at the boundary between a slot and the previous slot. As there is no previous slot for slot 0, the first returned phase discontinuity value equals NCAP.
For half-slot measurements, each value indicates the phase discontinuity at the boundary between the first and second half-slot of a slot. This value can be measured for all slots, including slot 0.
See also 
"Detailed Views: Phase Discontinuity"
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseDisc_1> ... <PhaseDisc_n>
One value per measured slot
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top