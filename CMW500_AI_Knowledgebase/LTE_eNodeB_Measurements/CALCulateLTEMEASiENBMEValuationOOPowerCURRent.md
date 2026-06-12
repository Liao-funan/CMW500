# CALCulateLTEMEASiENBMEValuationOOPowerCURRent

Module: LTE eNodeB Measurements
Source: e0416ecc85ff49ea.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
ON/OFF Power Results (Single Values)
 > 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:OOPower:CURRent?
CALCulate:LTE:MEAS<i>:ENB:MEValuation:OOPower:CURRent? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:OOPower:AVERage? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:OOPower:MINimum? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:OOPower:MAXimum? 
CALCulate:LTE:MEAS<i>:ENB:MEValuation:OOPower:SDEViation? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:OOPower:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:OOPower:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:OOPower:MINimum? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:OOPower:MAXimum? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:OOPower:SDEViation? 
READ:LTE:MEAS<i>:ENB:MEValuation:OOPower:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:OOPower:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:OOPower:MINimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:OOPower:MAXimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:OOPower:SDEViation? 
Return the single value results for the ON/OFF power measurement. See also 
"View ON/OFF Power"
.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
Return values: 
<Reliability>
"Reliability Indicator"
<OutOfTolerance>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for ON/OFF power measurements, exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<TXpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<PeakPower>
User equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<OffPower>
OFF power for UL parts
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.30
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top