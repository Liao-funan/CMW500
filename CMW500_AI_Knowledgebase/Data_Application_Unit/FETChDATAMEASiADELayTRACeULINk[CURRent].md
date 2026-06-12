# FETChDATAMEASiADELayTRACeULINk[CURRent]

Module: Data Application Unit
Source: d96fd58e47ac4ce9.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Audio Delay Measurement
 > 
FETCh:DATA:MEAS<i>:ADELay:TRACe:ULINk[:CURRent]?
FETCh:DATA:MEAS<i>:ADELay:TRACe:ULINk[:CURRent]? 
FETCh:DATA:MEAS<i>:ADELay:TRACe:DLINk[:CURRent]? 
FETCh:DATA:MEAS<i>:ADELay:TRACe:LOOPback[:CURRent]? 
READ:DATA:MEAS<i>:ADELay:TRACe:ULINk[:CURRent]? 
READ:DATA:MEAS<i>:ADELay:TRACe:DLINk[:CURRent]? 
READ:DATA:MEAS<i>:ADELay:TRACe:LOOPback[:CURRent]? 
Query the values of the audio delay traces "Uplink", "Downlink" and "Loopback".
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
Comma-separated list of delay values, one result per sample
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
"Delay result diagram"
Top