# CONFigureWCDMaSIGNiTHRoughputWINDow

Module: WCDMA Signaling
Source: 10a242c80bae45d9.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:THRoughput:WINDow
CONFigure:WCDMa:SIGN<i>:THRoughput:WINDow 
<Size>
Specifies the duration of a single-shot measurement, i.e. the time interval covered by a throughput result trace.
The value is internally rounded up to the next integer multiple of the time interval used to calculate a single result (see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
THRoughput:
​
UPDate
).
Parameters:
<Size>
Range: 
9.6 s / 48000 subframes  to  240 s / 120000 subframes
Increment: 
0.96 s / 480 subframes
*RST:
48000 subframes
Default unit: 
subframe
Example: 
See 
"Configuring the RLC Throughput Measurement"
Firmware/Software: 
V3.0.20
V3.2.70: added unit subframes
Manual operation: 
See 
"Window Size"
Top