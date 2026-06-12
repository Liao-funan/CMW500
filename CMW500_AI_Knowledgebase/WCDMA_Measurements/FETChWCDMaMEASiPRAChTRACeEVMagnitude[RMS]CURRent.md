# FETChWCDMaMEASiPRAChTRACeEVMagnitude[RMS]CURRent

Module: WCDMA Measurements
Source: f17a42fb2b0d4b2a.htm

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
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:EVMagnitude[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:EVMagnitude[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:EVMagnitude:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:EVMagnitude[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:EVMagnitude:PEAK:CURRent? 
Return the EVM RMS and peak values for each measured preamble.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM>
Comma-separated list of values, one result per measured preamble (see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
PRACh:
​
MPReamble
)
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top