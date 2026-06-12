# FETChWPANMEASiMEValuationTRACePVTimeCURRent

Module: LRWPAN Measurements
Source: 00ce51ded24f4437.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Trace Results
 > 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:CURRent?
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
FETCh:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
READ:WPAN:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
Returns the power vs time traces. Eight values per chip, starting from 500 chips prior to the first chip in the burst to 500 chips after the last chip in the burst are returned. The current, average, maximum and minimum traces can be retrieved.
See also: 
"Detailed Views: Power vs Time"
.
Return values: 
<Reliability>
"Reliability Indicator"
<PvT>
Transmit power of the DUT
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top