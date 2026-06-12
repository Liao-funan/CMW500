# CALCulateNIOTMEASiPRAChMODulationEXTReme

Module: NBIoT Measurements
Source: 2abf8f8d539f49f4.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
"TX Measurement" Results (Single Values)
 > 
CALCulate:NIOT:MEAS<i>:PRACh:MODulation:EXTReme?
CALCulate:NIOT:MEAS<i>:PRACh:MODulation:EXTReme? 
FETCh:NIOT:MEAS<i>:PRACh:MODulation:EXTReme? 
READ:NIOT:MEAS<i>:PRACh:MODulation:EXTReme? 
Returns the extreme single value results.
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
<2_OutOfTol>
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count (
CONFigure:
​
NIOT:
​
MEAS<i>:
​
PRACh:
​
SCOunt:
​
MODulation
) exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
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
-100 % to 100 %
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
-180 deg to 180 deg
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
<17_TXpowerMin> <18_TXpowerMax>
Minimum and maximum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<19_PeakPowMin> <20_PeakPowMax>
Minimum and maximum user equipment peak power
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