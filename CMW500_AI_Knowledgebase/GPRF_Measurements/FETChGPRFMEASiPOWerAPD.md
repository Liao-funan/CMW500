# FETChGPRFMEASiPOWerAPD

Module: GPRF Measurements
Source: 3530ca09be294247.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Results for Single-Step Statistic Evaluation
 > 
FETCh:GPRF:MEAS<i>:POWer:APD?
FETCh:GPRF:MEAS<i>:POWer:APD? 
Returns the trace points of the amplitude probability density (APD).
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
<Results>
4096 results, each representing a 0.047dB interval ("bin"). The position of the average power "bin" can be retrieved via 
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
10E-9 %  to  100 %
Usage: 
Query only
Firmware/Software: 
V3.0.10
Top