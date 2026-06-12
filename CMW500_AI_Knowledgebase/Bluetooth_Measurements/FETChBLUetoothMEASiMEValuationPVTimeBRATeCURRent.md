# FETChBLUetoothMEASiMEValuationPVTimeBRATeCURRent

Module: Bluetooth Measurements
Source: faed1dec7f9e4055.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Results
 > 
Power Measurement Results (BR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:MAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:BRATe:MAXimum? 
Returns the power results for BR packets.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_Out of Tol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
MEValuation:
​
SCOunt:
​
PVTime
) exceeding the specified limits, see 
"Power Limits"
.
Range: 
0 %  to  100 %
Default unit: 
%
<3_Nominal Pow>
Average power during the carrier-on state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<4_Peak Pow>
Peak power during the carrier-on state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<5_Leakage Pow>
Average power during the carrier-off state
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
<6_PacketTiming>
Time between the expected and actual start of the first symbol of the Bluetooth burst
Range: 
-20.00 µs to 20.00 µs
Default unit: 
s
<7_GFSK_Pow>
Average power within the access code and header portion of the BR burst (first 126 symbols).
Range: 
-128 dBm to 30 dBm
Default unit: 
dBm
Example: 
See 
"Continuous, BR and LE Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
V3.2.30: <PacketTiming> added
V3.2.60: <GFSK_Power> added
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top