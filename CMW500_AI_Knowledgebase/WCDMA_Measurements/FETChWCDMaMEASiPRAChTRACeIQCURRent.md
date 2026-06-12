# FETChWCDMaMEASiPRAChTRACeIQCURRent

Module: WCDMA Measurements
Source: 0f883494b15e4f36.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Results (Traces)
 > 
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:IQ:CURRent?
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:IQ:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:IQ:CURRent? 
Returns the results in the I/Q constellation diagram, see also 
"Detailed Views: I/Q Constellation Diagram"
.
The constellation points are returned as pairs of I and Q values:
<Reliability>, <Iphase>
1
, <Qphase>
1
, ..., <Iphase>
3904
, <Qphase>
3904
Return values: 
<Reliability>
"Reliability Indicator"
<Iphase>
I amplitude of a constellation point
Range: 
-5  to  5
<Qphase>
Q amplitude of a constellation point
Range: 
-5  to  5
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top