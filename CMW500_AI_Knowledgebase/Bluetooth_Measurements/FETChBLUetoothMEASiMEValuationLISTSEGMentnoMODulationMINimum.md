# FETChBLUetoothMEASiMEValuationLISTSEGMentnoMODulationMINimum

Module: Bluetooth Measurements
Source: c24c71131ab24fd3.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:MINimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:MODulation:MINimum? 
Returns modulation single value results for segment<no> in list mode.
The command returns all parameters listed below, independent of the selected list mode setup. However, only for some of the parameters measured values are available. For the other parameters, only an indicator is returned (e.g. NAV).
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
1..48
Segment number
Return values: 
<01_Reliability>
"Reliability Indicator"
<02_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<03_Out of Tol>
Percentage of measured bursts with failed limit check
Range: 
0 % to 100 %
Default unit: 
%
<04_NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<05_Δf1 avg> <06_Δf1 min> <07_Δf1 max> <08_Δf2 avg> <09_Δf2 min> <10_Δf2 max>
Frequency deviation results (BR, LE)
Range: 
0 Hz  to  +250.0 kHz
Default unit: 
Hz
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Options: 
R&S CMW-KM012
Top