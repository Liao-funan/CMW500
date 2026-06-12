# FETChAUDioMEASiANALogMULTitoneCURRent

Module: Audio Measurements
Source: c37ce9e197fb403d.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Multitone Measurement Results
 > 
FETCh:AUDio:MEAS<i>:ANALog:MULTitone:CURRent?
FETCh:AUDio:MEAS<i>:ANALog:MULTitone:CURRent? 
FETCh:AUDio:MEAS<i>:ANALog:MULTitone:AVERage? 
FETCh:AUDio:MEAS<i>:ANALog:MULTitone:MAXimum? 
FETCh:AUDio:MEAS<i>:ANALog:MULTitone:SDEViation? 
READ:AUDio:MEAS<i>:ANALog:MULTitone:CURRent? 
READ:AUDio:MEAS<i>:ANALog:MULTitone:AVERage? 
READ:AUDio:MEAS<i>:ANALog:MULTitone:MAXimum? 
READ:AUDio:MEAS<i>:ANALog:MULTitone:SDEViation? 
Returns the current, average, maximum and standard deviation results of an analog multitone measurement.
The measured levels are either returned as relative dB values or as absolute dBV values, depending on the configured result mode, see 
CONFigure:
​
AUDio:
​
MEAS<i>:
​
ANALog:
​
MULTitone:
​
RMODe
.
If the signal comprises fewer than 20 tones, NAV is returned for each "missing" tone.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<Reliability>
"Reliability Indicator"
<Level_0> ... <Level_19>
Audio levels measured at the frequencies of the test tones
Range: 
-150 dB to 150 dB or -150 dBV to 36 dBV
Default unit: 
dB or dBV
Example: 
See 
"Multitone Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Top