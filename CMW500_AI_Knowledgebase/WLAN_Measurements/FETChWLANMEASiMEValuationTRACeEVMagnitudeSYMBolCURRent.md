# FETChWLANMEASiMEValuationTRACeEVMagnitudeSYMBolCURRent

Module: WLAN Measurements
Source: 487d76ee80ef45fd.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Versus Symbol Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:SYMBol:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the EVM vs. symbol traces for OFDM signals according to standard IEEE 802.11a, g, n, ac, ax, or p. The results of the current, average and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM>
Comma-separated list of EVM values, one per OFDM symbol. The maximum number of values is 1366.
Range: 
-100 dB  to  0 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V3.7.30
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top