# FETChWCDMaMEASiMEValuationTRACeIQCURRent

Module: WCDMA Measurements
Source: 11e60eef62f646a8.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
I/Q Constellation Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:IQ:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:TRACe:IQ:CURRent? 
READ:WCDMa:MEAS<i>:MEValuation:TRACe:IQ:CURRent? 
Returns the results in the I/Q constellation diagram. Every fourth value corresponds to a constellation point. The other values are located on the path between two constellation points.
Return values: 
<Reliability>
"Reliability Indicator"
<I_1> <Q_1> ... <I_10240> <Q_10240>
10240 pairs of normalized I and Q amplitudes, four values per symbol period
Range: 
-2.0  to  2.0
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