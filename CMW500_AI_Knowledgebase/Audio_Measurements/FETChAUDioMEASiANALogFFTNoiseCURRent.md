# FETChAUDioMEASiANALogFFTNoiseCURRent

Module: Audio Measurements
Source: 3c0eb52456894494.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
FFT Noise Measurement Results
 > 
FETCh:AUDio:MEAS<i>:ANALog:FFTNoise:CURRent?
FETCh:AUDio:MEAS<i>:ANALog:FFTNoise:CURRent? 
FETCh:AUDio:MEAS<i>:ANALog:FFTNoise:AVERage? 
FETCh:AUDio:MEAS<i>:ANALog:FFTNoise:MAXimum? 
READ:AUDio:MEAS<i>:ANALog:FFTNoise:CURRent? 
READ:AUDio:MEAS<i>:ANALog:FFTNoise:AVERage? 
READ:AUDio:MEAS<i>:ANALog:FFTNoise:MAXimum? 
Returns the current, average and maximum traces of an analog FFT noise measurement.
The Y-values of the traces are returned. To query the X-values of the traces, see 
READ:
​
AUDio:
​
MEAS<i>:
​
ANALog:
​
FFTNoise:
​
FREQuency?
.
Return values: 
<Reliability>
"Reliability Indicator"
<Level>
Comma-separated list of values, one level value (Y-value) for each trace point
Range: 
-150 dBV to 36 dBV
Default unit: 
dBV
Example: 
See 
"FFT Noise Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Top