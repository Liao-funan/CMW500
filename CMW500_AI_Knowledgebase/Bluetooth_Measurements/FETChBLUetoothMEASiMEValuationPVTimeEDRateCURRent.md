# FETChBLUetoothMEASiMEValuationPVTimeEDRateCURRent

Module: Bluetooth Measurements
Source: e4d7c39d4d2a4d72.htm

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
Power Measurement Results (EDR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:MINimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:CURRent? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:AVERage? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:MINimum? 
READ:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:MAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:CURRent? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:AVERage? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:MINimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:PVTime:EDRate:MAXimum? 
Returns the power results for EDR packets.
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
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<4_GFSK Pow>
Average power in the GFSK portion of the burst
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<5_DPSK Pow>
Average power in the DPSK portion of the burst
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<6_DPSK - GFSK>
Difference between DPSK and GFSK power
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<7_Guard Period>
Length of the guard band between the packet header and the synchronization sequence
Range: 
0 µs  to  9.99 µs
Default unit: 
s
<8_PacketTiming>
Time between the expected and actual start of the first symbol of the Bluetooth burst
Range: 
-20.00 µs to 20.00 µs
Default unit: 
s
<9_PeakPower>
Maximum power within the whole burst. The result is only available via remote command.
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
V3.2.30: <8_PacketTiming> added
V3.5.60: <9_PeakPower> added
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top