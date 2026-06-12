# FETChWPANMEASiMEValuationTRACeIQABsolute

Module: LRWPAN Measurements
Source: 9b84e0b3f7744a65.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Trace Results
 > 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:IQABsolute?
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:IQABsolute? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:IQOFfset? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:IQABsolute? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:IQOFfset? 
Returns the I/Q constellation diagram. With the absolute trace, I/Q points at each chip interval within the PSDU is returned. In the offset trace, I/Q points per two chip intervals within the PSDU are returned.
Return values: 
<Reliability>
"Reliability Indicator"
<I_1> <Q_1> ... <I_10240> <Q_10240>
Pairs of normalized I and Q amplitudes
Range: 
-2.0  to  2.0
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top