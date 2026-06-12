# FETChGPRFMEASiPOWerCCDFPROBability

Module: GPRF Measurements
Source: a370e19d311949fe.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for Single-Step Statistic Evaluation
 > 
FETCh:GPRF:MEAS<i>:POWer:CCDF:PROBability?
FETCh:GPRF:MEAS<i>:POWer:CCDF:PROBability? 
Returns percentiles of the complementary cumulative distribution function (CCDF).
This result is only available in statistic evaluation mode (see 
CONFigure:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
MODE
).
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Probability>
Comma-separated list of percentiles: 10%, 1%, 0.1%, 0.01%, 0.001% and 0.0001% percentiles of the CCDF (6 values)
That means, the power limits L
p
 (in dB) such that 10%, 1%, ... of the samples have a power value > average power + L
p
.
The average power can be retrieved via 
FETCh:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
CCDF:
​
POWer?
.
Range: 
-80 dB  to  50 dB
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V3.0.10
Top