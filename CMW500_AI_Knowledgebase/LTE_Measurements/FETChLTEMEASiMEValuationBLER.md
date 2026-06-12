# FETChLTEMEASiMEValuationBLER

Module: LTE Measurements
Source: 1a719cfd7e7f4a98.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
BLER Results
 > 
FETCh:LTE:MEAS<i>:MEValuation:BLER?
FETCh:LTE:MEAS<i>:MEValuation:BLER? 
READ:LTE:MEAS<i>:MEValuation:BLER? 
Returns the block error ratio results determined from all captured subframes. To configure which subframes are measured, see 
CONFigure:
​
LTE:
​
MEAS<i>:
​
MEValuation:
​
MSUBframes
.
Return values: 
<Reliability>
"Reliability Indicator"
<ACK>
Received acknowledgments (percentage of sent scheduled subframes)
Range: 
0 %  to  100 %
Default unit: 
%
<NACK>
Received negative acknowledgments (percentage of sent scheduled subframes)
Range: 
0 %  to  100 %
Default unit: 
%
<BLER>
Block error ratio (percentage of sent scheduled subframes for which no ACK has been received)
Range: 
0 %  to  100 %
Default unit: 
%
<DTX>
Percentage of sent scheduled subframes for which no ACK and no NACK has been received
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.15.21
V3.0.10: added <DTX>
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top