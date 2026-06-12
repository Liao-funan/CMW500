# FETChDATAMEASiADELayTRACeTAULink[CURRent]

Module: Data Application Unit
Source: 7e51f7bf805944fe.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Audio Delay Measurement
 > 
FETCh:DATA:MEAS<i>:ADELay:TRACe:TAULink[:CURRent]?
FETCh:DATA:MEAS<i>:ADELay:TRACe:TAULink[:CURRent]? 
FETCh:DATA:MEAS<i>:ADELay:TRACe:TALoopback[:CURRent]? 
READ:DATA:MEAS<i>:ADELay:TRACe:TAULink[:CURRent]? 
READ:DATA:MEAS<i>:ADELay:TRACe:TALoopback[:CURRent]? 
Query the values of the time of arrival traces "Uplink" and "Loopback".
The trace values are returned from left to right, from sample number -N to sample number 0. N equals the configured maximum number of samples minus one, see 
CONFigure:
​
DATA:
​
MEAS<i>:
​
ADELay:
​
MSAMples
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Results>
Comma-separated list of time error values, one result per sample
Default unit: 
s
Example: 
See 
"Performing an Audio Delay Measurement"
Usage: 
Query only
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Time of Arrival result diagram"
Top