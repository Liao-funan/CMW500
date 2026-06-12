# CONFigureGSMSIGNiTHRoughputWINDow

Module: GSM Signaling
Source: d35e41412.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Settings
 > 
CONFigure:GSM:SIGN<i>:THRoughput:WINDow
CONFigure:GSM:SIGN<i>:THRoughput:WINDow 
<Size>
Specifies the duration of a single-shot measurement, i.e. the time interval covered by a throughput result trace.
The value is internally rounded up to the next integer multiple of the time interval used to calculate a single result (240 ms).
Parameters:
<Size>
Range: 
10 s  to  240 s
*RST:
120 s
Default unit: 
s
Example: 
See 
"Configuring the RLC Throughput Measurement"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Window Size"
Top