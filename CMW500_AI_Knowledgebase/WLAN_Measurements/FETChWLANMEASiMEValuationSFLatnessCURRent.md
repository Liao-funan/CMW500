# FETChWLANMEASiMEValuationSFLatnessCURRent

Module: WLAN Measurements
Source: af7502e543654683.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Spectrum Flatness Margin Values
 > 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:SFLatness:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:SFLatness:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:SFLatness:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:SFLatness:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:SFLatness:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:SFLatness:MAXimum? 
Returns the margin values of the spectrum flatness measurement for the current, average, minimum and maximum traces.
A positive margin indicates a violation of the spectrum flatness limit. The respective trace value is located above the upper or below the lower limit line.
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
<UpperMargin>
The margin to the (global) upper spectrum flatness limit
Range: 
-22 dB  to  40 dB
Default unit: 
dB
<LowerMargins>
Comma-separated list of margins to the lower spectrum flatness limits, one value per subcarrier range (from left to right)
Range: 
-22 dB  to  40 dB
Default unit: 
dB
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