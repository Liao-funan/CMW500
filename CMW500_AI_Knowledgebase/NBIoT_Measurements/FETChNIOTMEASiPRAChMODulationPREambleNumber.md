# FETChNIOTMEASiPRAChMODulationPREambleNumber

Module: NBIoT Measurements
Source: 15bd38570fb34267.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
EVM / Power vs. Preamble Results (Single Values)
 > 
FETCh:NIOT:MEAS<i>:PRACh:MODulation:PREamble<Number>?
FETCh:NIOT:MEAS<i>:PRACh:MODulation:PREamble<Number>? 
READ:NIOT:MEAS<i>:PRACh:MODulation:PREamble<Number>? 
Return the single value results of the "EVM vs Preamble" and "Power vs Preamble" views, for a selected preamble.
See also 
"Views EVM vs Preamble, Power vs Preamble"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<Number>
1..32
Number of the preamble for which the results are queried
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_PreambleRel>
Reliability indicator for the preamble. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_EVM_RMSlow> <4_EVM_RMShigh> <5_EVMpeakLow> <6_EVMpeakHigh>
Error vector magnitude RMS and peak values for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<7_MErr_RMSlow> <8_MErr_RMShigh>
Magnitude error RMS value for low and high EVM window position
Range: 
0 %  to  100 %
Default unit: 
%
<9_MErrPeakLow> <10_MErrPeakHigh>
Magnitude error peak value for low and high EVM window position
Range: 
-100 %  to  100 %
Default unit: 
%
<11_PErr_RMSlow> <12_PErr_RMSh>
Phase error RMS value for low and high EVM window position
Range: 
0 deg  to  180 deg
Default unit: 
deg
<13_PErrPeakLow> <14_PErrPeakHigh>
Phase error peak value for low and high EVM window position
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<15_FreqError>
Carrier frequency error
Range: 
-80000 Hz  to  80000 Hz
Default unit: 
Hz
<16_TimingError>
Transmit time error
Range: 
-32000 Ts  to  32000 Ts
Default unit: 
Ts (basic time unit)
<17_TXpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<18_PeakPower>
User equipment peak power
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
V3.7.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top