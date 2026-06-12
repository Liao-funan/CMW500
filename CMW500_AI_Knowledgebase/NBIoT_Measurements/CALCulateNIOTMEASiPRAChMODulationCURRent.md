# CALCulateNIOTMEASiPRAChMODulationCURRent

Module: NBIoT Measurements
Source: 37fb06bb386f4033.htm

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
CALCulate:NIOT:MEAS<i>:PRACh:MODulation:CURRent?
CALCulate:NIOT:MEAS<i>:PRACh:MODulation:CURRent? 
CALCulate:NIOT:MEAS<i>:PRACh:MODulation:AVERage? 
FETCh:NIOT:MEAS<i>:PRACh:MODulation:CURRent? 
FETCh:NIOT:MEAS<i>:PRACh:MODulation:AVERage? 
FETCh:NIOT:MEAS<i>:PRACh:MODulation:SDEViation? 
READ:NIOT:MEAS<i>:PRACh:MODulation:CURRent? 
READ:NIOT:MEAS<i>:PRACh:MODulation:AVERage? 
READ:NIOT:MEAS<i>:PRACh:MODulation:SDEViation? 
Return the current, average and standard deviation single value results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
The ranges indicated below apply to all results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
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
-100 % to 100 % (AVERage: 0 % to 100 %, SDEViation: 0 % to 50 %)
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
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
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