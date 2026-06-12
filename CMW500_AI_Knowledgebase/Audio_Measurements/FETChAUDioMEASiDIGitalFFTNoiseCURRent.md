# FETChAUDioMEASiDIGitalFFTNoiseCURRent

Module: Audio Measurements
Source: 698daa793a60480e.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
FFT Noise Measurement Results
 > 
FETCh:AUDio:MEAS<i>:DIGital:FFTNoise:CURRent?
FETCh:AUDio:MEAS<i>:DIGital:FFTNoise:CURRent? 
FETCh:AUDio:MEAS<i>:DIGital:FFTNoise:AVERage? 
FETCh:AUDio:MEAS<i>:DIGital:FFTNoise:MAXimum? 
READ:AUDio:MEAS<i>:DIGital:FFTNoise:CURRent? 
READ:AUDio:MEAS<i>:DIGital:FFTNoise:AVERage? 
READ:AUDio:MEAS<i>:DIGital:FFTNoise:MAXimum? 
Returns the current, average and maximum traces of a digital FFT noise measurement.
The Y-values of the traces are returned. To query the X-values of the traces, see 
READ:
​
AUDio:
​
MEAS<i>:
​
DIGital:
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
-150 dBFS to 0 dBFS
Default unit: 
dBFS
Example: 
See 
"FFT Noise Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Top