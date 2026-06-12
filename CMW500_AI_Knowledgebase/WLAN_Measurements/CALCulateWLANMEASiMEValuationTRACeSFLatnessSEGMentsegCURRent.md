# CALCulateWLANMEASiMEValuationTRACeSFLatnessSEGMentsegCURRent

Module: WLAN Measurements
Source: 84174ea0e07a4eef.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Traces
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:CURRent? 
[<start>, <count>[, <decimation>]]
CALCulate:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:AVERage? 
[<start>, <count>[, <decimation>]]
CALCulate:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:MINimum? 
[<start>, <count>[, <decimation>]]
CALCulate:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:MAXimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:SFLatness:SEGMent<seg>:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the spectrum flatness traces for segment <seg>, for SISO measurements and bandwidths with two segments (80 + 80 MHz).
The results of the current, average, minimum and maximum traces can be retrieved.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Suffix: 
<seg>
1..2
Return values: 
<Reliability>
"Reliability Indicator"
<SpecFlatTrace>
Comma-separated list of 2n+1 power values, for subcarrier -n to subcarrier +n (including data, pilot and unused subcarriers)
n depends on the WLAN standard, channel bandwidth and mode, see 
Table "OFDM subcarriers"
.
Default unit: 
dB
Usage: 
Query only
Firmware/Software: 
V3.7.30
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top