# CALCulateWLANMEASiMEValuationPVTimeTERRorCURRent

Module: WLAN Measurements
Source: 51904d97f8744445.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Single Values
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:SDEViation? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:PVTime:TERRor:SDEViation? 
Return the current, average, minimum, maximum and standard deviation timing error single value results of the power vs. time measurement.
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
<TimingError>
Default unit: 
s
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SISO)"
Usage: 
Query only
Firmware/Software: 
V3.7.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top