# FETChWLANMEASiMEValuationTRACeEVMagnitudeCARRierCURRent

Module: WLAN Measurements
Source: e19206c3749f4043.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Versus Carrier Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:CARRier:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the EVM vs. subcarrier traces. The results of the current, average, minimum and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM>
Comma-separated list of 2n+1 values, for subcarrier -n to subcarrier +n (including data, pilot and unused subcarriers)
n depends on the WLAN standard, channel bandwidth and mode, see 
Table "OFDM subcarriers"
.
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
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top