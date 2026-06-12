# CALCulateNIOTMEASiMEValuationMODulationEXTReme

Module: NBIoT Measurements
Source: 04e7b3f705f14d04.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Results (Single Values)
 > 
CALCulate:NIOT:MEAS<i>:MEValuation:MODulation:EXTReme?
CALCulate:NIOT:MEAS<i>:MEValuation:MODulation:EXTReme? 
FETCh:NIOT:MEAS<i>:MEValuation:MODulation:EXTReme? 
READ:NIOT:MEAS<i>:MEValuation:MODulation:EXTReme? 
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
Out of tolerance result, i.e. percentage of measurement intervals of the statistic count for modulation measurements exceeding the specified modulation limits.
Range: 
0 %  to  100 %
Default unit: 
%
<3_EVM_RMS>
Error vector magnitude RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<4_EVMpeak>
Error vector magnitude peak value
Range: 
0 %  to  100 %
Default unit: 
%
<5_MagErrorRMS>
Magnitude error RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<6_MagErrPeak>
Magnitude error peak value
Range: 
-100 %  to  100 %
Default unit: 
%
<7_PhErrorRMS>
Phase error RMS value
Range: 
0 deg  to  180 deg
Default unit: 
deg
<8_PhErrorPeak>
Phase error peak value
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<9_IQOffset>
I/Q origin offset
Range: 
-100 dBc  to  0 dBc
Default unit: 
dBc
<10_FreqError>
Carrier frequency error
Range: 
-80000 Hz  to  80000 Hz
Default unit: 
Hz
<11_TimingError>
Transmit time error
Range: 
-32000 Ts  to  32000 Ts
Default unit: 
Ts
<12_TXpowerMin>
Minimum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<13_TXpowerMax>
Maximum user equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<14_PeakPowerMin>
Minimum user equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<15_PeakPowerMax>
Maximum user equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<16_SCPowerMin>
Minimum SC power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<17_SCPowerMax>
Maximum SC power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<18_EVM_DMRS>
Error vector magnitude DMRS values
Range: 
0 %  to  100 %
Default unit: 
%
<19_MagErrDMRS>
Magnitude error DMRS values
Range: 
0 %  to  100 %
Default unit: 
%
<20_PhErrorDMRS>
Phase error DMRS values
Range: 
0 deg  to  180 deg
Default unit: 
deg
<21_GainImbal>
Gain imbalance
Range: 
-256 dB  to  256 dB
Default unit: 
dB
<22_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top