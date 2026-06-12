# FETChGSMMEASiMEValuationBER

Module: GSM Measurements
Source: 4705c1bef54b40ed.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
BER Results
 > 
FETCh:GSM:MEAS<i>:MEValuation:BER?
FETCh:GSM:MEAS<i>:MEValuation:BER? 
READ:GSM:MEAS<i>:MEValuation:BER? 
Returns the measured bit error rate. The BER measurement must be enabled using 
CONFigure:
​
GSM:
​
MEAS<i>:
​
MEValuation:
​
RESult:
​
BER
.
Return values: 
<Reliability>
"Reliability Indicator"
<BER>
% bit error rate
Range: 
0 %  to  100 %
Default unit: 
%
<BERabsolute>
Total number of detected bit errors
The BER measurement evaluates 114 data bits per GMSK-modulated normal burst, 306 data bits per 8PSK-modulated burst.
Range: 
0  to  <no. of measured bits>
<BERcount>
Total number of evaluated bits
Range: 
0  to  <no. of measured bits>
Example: 
See 
"BER Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.5.3
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top