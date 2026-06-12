# FETChGPRFMEASiPOWerCCDFPOWer

Module: GPRF Measurements
Source: 26d93781f56f4fb6.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for Single-Step Statistic Evaluation
 > 
FETCh:GPRF:MEAS<i>:POWer:CCDF:POWer?
FETCh:GPRF:MEAS<i>:POWer:CCDF:POWer? 
Returns the power results in statistic evaluation mode (see 
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
The statistic evaluation mode is only available for single-step measurements (list mode OFF).
Return values: 
<Reliability>
See 
"Reliability Indicator"
<AVG>
Average power
Range: 
-150 dBm  to  50 dBm
<MAX>
Maximum power
Range: 
-150 dBm  to  50 dBm
<PAR>
Peak to average ratio
Range: 
0 dB  to  50 dB
<IndexAVGPower>
Index of the average power "bin" in the CCDF result (see 
FETCh:
​
GPRF:
​
MEAS<i>:
​
POWer:
​
CCDF?
)
Range: 
0  to  n
Usage: 
Query only
Firmware/Software: 
V3.0.10
Top