# FETChAUDioMEASiDIGitalMULTitoneCURRent

Module: Audio Measurements
Source: 8cee37e249844745.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Multitone Measurement Results
 > 
FETCh:AUDio:MEAS<i>:DIGital:MULTitone:CURRent?
FETCh:AUDio:MEAS<i>:DIGital:MULTitone:CURRent? 
FETCh:AUDio:MEAS<i>:DIGital:MULTitone:AVERage? 
FETCh:AUDio:MEAS<i>:DIGital:MULTitone:MAXimum? 
FETCh:AUDio:MEAS<i>:DIGital:MULTitone:SDEViation? 
READ:AUDio:MEAS<i>:DIGital:MULTitone:CURRent? 
READ:AUDio:MEAS<i>:DIGital:MULTitone:AVERage? 
READ:AUDio:MEAS<i>:DIGital:MULTitone:MAXimum? 
READ:AUDio:MEAS<i>:DIGital:MULTitone:SDEViation? 
Returns the current, average, maximum and standard deviation results of a digital multitone measurement.
The measured levels are either returned as relative dB values or as absolute dBFS values, depending on the configured result mode, see 
CONFigure:
​
AUDio:
​
MEAS<i>:
​
DIGital:
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
-150 dB to 150 dB or -150 dBFS to 0 dBFS
Default unit: 
dB or dBFS
Example: 
See 
"Multitone Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Top