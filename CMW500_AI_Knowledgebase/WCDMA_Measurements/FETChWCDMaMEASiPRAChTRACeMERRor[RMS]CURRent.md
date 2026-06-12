# FETChWCDMaMEASiPRAChTRACeMERRor[RMS]CURRent

Module: WCDMA Measurements
Source: c46ef1b3e0164caf.htm

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
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:MERRor[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:MERRor[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:MERRor:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:MERRor[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:MERRor:PEAK:CURRent? 
Return the magnitude error RMS and peak values for each measured preamble.
Return values: 
<Reliability>
"Reliability Indicator"
<MagnitudeError>
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
PEAK: -100 % to 100 %, RMS: 0 % to 100 %
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