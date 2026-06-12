# FETChWLANMEASiMEValuationTRACeSFLatness[OFDM]CURRent

Module: WLAN Measurements
Source: 155731bdd7054a0c.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness[:OFDM]:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the spectrum flatness traces for OFDM SISO signals according to standard 802.11a, g, n, ac, ax, or p. The results of the current, average, minimum and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of 2n+1 power values, for subcarrier -n to subcarrier +n (including data, pilot and unused subcarriers)
n depends on the WLAN standard, channel bandwidth and mode, see 
Table "OFDM subcarriers"
.
Range: 
-20 dB  to  20 dB
Default unit: 
dB
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20, V3.2.11 subarrays
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top