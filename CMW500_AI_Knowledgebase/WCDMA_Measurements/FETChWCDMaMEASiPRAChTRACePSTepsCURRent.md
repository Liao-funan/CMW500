# FETChWCDMaMEASiPRAChTRACePSTepsCURRent

Module: WCDMA Measurements
Source: 7fd156948a104cd6.htm

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
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:PSTeps:CURRent?
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:PSTeps:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:PSTeps:CURRent? 
Return the values of the power steps bar graph.
See also 
"Detailed Views: UE Power and Power Steps"
Return values: 
<Reliability>
"Reliability Indicator"
<PowerSteps>
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
For the first preamble NCAP is returned.
Range: 
-10 dB  to  50 dB
Default unit: 
dB
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top