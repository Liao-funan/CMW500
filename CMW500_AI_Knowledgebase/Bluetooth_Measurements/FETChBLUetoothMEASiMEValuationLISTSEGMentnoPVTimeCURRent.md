# FETChBLUetoothMEASiMEValuationLISTSEGMentnoPVTimeCURRent

Module: Bluetooth Measurements
Source: deee6a3f653f4fa3.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
List Mode Results (One Segment)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent?
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:CURRent? 
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:AVERage? 
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:MAXimum? 
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:PVTime:MINimum? 
Returns statistical power vs. time single value results for segment<no> in list mode.
The command returns all parameters listed below, independent of the selected list mode setup. However, only for some of the parameters measured values are available. For the other parameters, only an indicator is returned (e.g. NAV).
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..48
Segment number
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_OutOfTol>
Percentage of measured bursts with failed limit check
Range: 
0 % to 100 %
Default unit: 
%
<4_NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<5_PeakPower>
Peak power
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<6_LeakagePower>
Leakage power (BR, LE)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<7_GFSKPower>
Average power within the GFSK modulated part of the burst (EDR)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<8_DPSKPower>
Average power within the DPSK modulated part of the burst (EDR)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<9_DPSK_–_GFSK>
Difference between the 
<8_DPSKPower>
 and 
<7_GFSKPower>
 (EDR)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<10_GuardPeriod>
Length of the guard band between the packet header and the EDR synchronization sequence (EDR)
Range: 
0 µs  to  9.99 µs
Default unit: 
s
<11_Peak_–_Avg>
Difference between the peak power and the average power in the burst (LE)
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.50
V3.5.60: results <5_PeakPower> available also for EDR
Options: 
R&S CMW-KM012
Top