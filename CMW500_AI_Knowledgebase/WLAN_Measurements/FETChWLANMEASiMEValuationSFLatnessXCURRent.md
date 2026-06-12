# FETChWLANMEASiMEValuationSFLatnessXCURRent

Module: WLAN Measurements
Source: 5ab86f8b40804794.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Margin Positions
 > 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:X:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:X:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:X:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:X:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:X:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:X:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:X:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:X:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:X:MAXimum? 
Return the subcarrier indices for the current, average, minimum and maximum margin values.
Return values: 
<Reliability>
"Reliability Indicator"
<UpperMargin>
Subcarrier index of the trace margin to the (global) upper spectrum flatness limit
Range: 
Depends on used standard and channel bandwidth
<LowerMargins>
Comma-separated list of subcarrier indices, for the trace margin to the lower spectrum flatness limit
There is one index per subcarrier range (from left to right).
Range: 
Depends on used standard and channel bandwidth
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V2.1.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top