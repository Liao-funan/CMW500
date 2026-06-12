# FETChNIOTMEASiMEValuationSEMaskMARGinALL

Module: NBIoT Measurements
Source: 41262d8d603c4280.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:ALL?
FETCh:NIOT:MEAS<i>:MEValuation:SEMask:MARGin:ALL? 
Returns spectrum emission mask margin results. A negative margin indicates that the trace is located above the limit line, i.e. the limit is exceeded.
Results are provided for the current, average and maximum traces. For inactive areas, NCAP is returned.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for spectrum emission measurements exceeding the specified spectrum emission mask limits.
Range: 
0 %  to  100 %
Default unit: 
%
<MarginCurrNeg>
Comma-separated list of 12 margin results
For the current trace, area 1 to 12, negative frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginCurrPos>
Comma-separated list of 12 margin results
For the current trace, area 1 to 12, positive frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginAvgNeg>
Comma-separated list of 12 margin results
For the average trace, area 1 to 12, negative frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginAvgPos>
Comma-separated list of 12 margin results
For the average trace, area 1 to 12, positive frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginMinNeg>
Comma-separated list of 12 margin results
For the maximum trace, area 1 to 12, negative frequency offsets
Range: 
-160 dB  to  160 dB
Default unit: 
dB
<MarginMinPos>
Comma-separated list of 12 margin results
For the maximum trace, area 1 to 12, positive frequency offsets
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