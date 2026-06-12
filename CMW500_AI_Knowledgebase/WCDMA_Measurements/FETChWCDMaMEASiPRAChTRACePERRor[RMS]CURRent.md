# FETChWCDMaMEASiPRAChTRACePERRor[RMS]CURRent

Module: WCDMA Measurements
Source: aaf7d768da754c58.htm

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
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:PERRor[:RMS]:CURRent?
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:PERRor[:RMS]:CURRent? 
FETCh:WCDMa:MEAS<i>:PRACh:TRACe:PERRor:PEAK:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:PERRor[:RMS]:CURRent? 
READ:WCDMa:MEAS<i>:PRACh:TRACe:PERRor:PEAK:CURRent? 
Return the phase error RMS and peak values for each measured preamble.
Return values: 
<Reliability>
"Reliability Indicator"
<PhaseError>
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
PEAK: -180 deg to 180 deg, RMS: 0 deg to 180 deg
Default unit: 
deg
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top