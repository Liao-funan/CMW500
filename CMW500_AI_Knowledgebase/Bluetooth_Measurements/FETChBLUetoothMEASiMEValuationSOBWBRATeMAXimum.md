# FETChBLUetoothMEASiMEValuationSOBWBRATeMAXimum

Module: Bluetooth Measurements
Source: ba816747badd478c.htm

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
Spectrum Measurement Results (BR)
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:SOBW:BRATe:MAXimum?
FETCh:BLUetooth:MEAS<i>:MEValuation:SOBW:BRATe:MAXimum? 
READ:BLUetooth:MEAS<i>:MEValuation:SOBW:BRATe:MAXimum? 
CALCulate:BLUetooth:MEAS<i>:MEValuation:SOBW:BRATe:MAXimum? 
Returns the "Spectrum 20 dB Bandwidth" results.
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
LIMit:
​
SOBW
) exceeding the specified limits, see 
"Spectrum Limits"
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
<4_Peak Emission>
Peak power in the measured spectral range
Range: 
-128.0 dBm  to  +30.0 dBm
Default unit: 
dBm
<5_fL>
Lower frequency where the transmit power drops 20 dB below the peak emission
Range: 
-1.000 MHz  to  +1.000 MHz
Default unit: 
Hz
<6_fH>
Higher frequency where the transmit power drops 20 dB below the peak emission
Range: 
-1.000 MHz  to  +1.000 MHz
Default unit: 
Hz
<7_fH - fL>
20 dB bandwidth; difference between f
H
 
–
 f
L
.
Range: 
0.000 MHz  to  +2.000 MHz
Default unit: 
Hz
Example: 
See 
"Spectrum Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top