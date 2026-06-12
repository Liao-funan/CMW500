# FETChNIOTMEASiMEValuationSEMaskMARGinCURRentNEGativ

Module: NBIoT Measurements
Source: 87c1a6f3cf4b4785.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Emission Results
 > 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:CURRent:NEGativ?
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:CURRent:NEGativ? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:CURRent:POSitiv? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:AVERage:NEGativ? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:AVERage:POSitiv? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:MINimum:NEGativ? 
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:MINimum:POSitiv? 
Returns spectrum emission mask margin results. A negative margin indicates that the trace is located above the limit line, i.e. the limit is exceeded.
The individual commands provide results for the 
CURRent
, 
AVERage
 and maximum traces (resulting in 
MINimum
 margins), for 
NEGative
 and 
POSitive
 offset frequencies.
Each command returns pairs of X and Y values of the margins for emission mask areas 1 to 12. Result array structure:
<Reliability>, <OutOfTolerance>, {<MarginX>, <MarginY>}
area 1
, {...}
area 2
, ..., {...}
area 12
For inactive areas, NCAP is returned.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for spectrum emission measurements exceeding the specified spectrum emission mask limits.
Range: 
0 %  to  100 %
Default unit: 
%
<MarginX>
X-position of margin
Range: 
-35 MHz  to  35 MHz
Default unit: 
Hz
<MarginY>
Y-value of margin
Range: 
-160 dB  to  160 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top