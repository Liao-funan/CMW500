# CALCulateBLUetoothMEASiMEValuationSACPLENergy[LE1M]

Module: Bluetooth Measurements
Source: 9ed67d669d714ee2.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Spectrum Measurement Results (LE)
 > 
CALCulate:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy[:LE1M]?
CALCulate:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy[:LE1M]? 
FETCh:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy[:LE1M]? 
READ:BLUetooth:MEAS<i>:MEValuation:SACP:LENergy[:LE1M]? 
Returns the "Spectrum ACP" results for LE1M, see 
"Spectrum ACP Results (LE)"
.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<Reliability>
"Reliability Indicator"
<Nominal Pow>
Average power during the carrier-on state
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<No of Except>
Number of exceptions (channels 
±
3, 
±
4 ... with an ACP above the "Exception PTx" threshold )
Range: 
0  to  99
Usage: 
Query only
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KM611
Top