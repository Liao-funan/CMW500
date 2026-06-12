# FETChBLUetoothMEASiMEValuationLISTSEGMentnoSOBWMAXimum

Module: Bluetooth Measurements
Source: 63bb48b1dc73446d.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SOBW:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:LIST:SEGMent<no>:SOBW:MAXimum? 
Returns spectrum occupied bandwidth (20 dB bandwidth) single value results for segment<no> in list mode. The 20 dB bandwidth measurement is available for BR bursts only.
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
<3_BurstOutOfTol>
Percentage of measured bursts with failed limit check
Range: 
0 %  to  100 %
Default unit: 
%
<4_NominalPower>
Average power during the carrier-on state
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<5_PeakEmission>
Peak power within the maximum spectral trace
Range: 
-99.99 dBm  to  99.99 dBm
Default unit: 
dBm
<6_fL>
The smallest frequency at which the transmit power drops 20 dB below the peak power
Range: 
-0.99999E+6 MHz  to  0.99999E+6 MHz
Default unit: 
Hz
<7_fH>
The highest frequency at which the transmit power drops 20 dB below the peak power
Range: 
-0.99999E+6 MHz  to  0.99999E+6 MHz
Default unit: 
Hz
<8_fH_–_fL>
Difference between the 
<7_fH>
 and 
<6_fL>
Range: 
-0.99999E+6 MHz  to  0.99999E+6 MHz
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