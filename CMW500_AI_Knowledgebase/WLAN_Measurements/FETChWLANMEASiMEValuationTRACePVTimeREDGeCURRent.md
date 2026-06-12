# FETChWLANMEASiMEValuationTRACePVTimeREDGeCURRent

Module: WLAN Measurements
Source: 01235114fcc24687.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Ramp Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:REDGe:MAXimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:FEDGe:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the power vs. time ramp traces, rising edge (
REDGe
) and falling edge (
FEDGe
). The results of the current, average, maximum and minimum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of power values
For DSSS signals, the values are returned in percent relative to the configured reference power.
For OFDM signals, the values are in dBm.
Range: 
0 % to 200 % (DSSS) / -100 dBm to 30 dBm (OFDM)
Default unit: 
% or dBm
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V2.1.10, V3.2.11 subarrays
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top