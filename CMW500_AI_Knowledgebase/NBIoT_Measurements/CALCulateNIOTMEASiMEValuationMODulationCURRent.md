# CALCulateNIOTMEASiMEValuationMODulationCURRent

Module: NBIoT Measurements
Source: 3d7902978f20421e.htm

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
CALCulate:NIOT:MEAS<i>:MEValuation:MODulation:CURRent?
CALCulate:NIOT:MEAS<i>:MEValuation:MODulation:CURRent? 
CALCulate:NIOT:MEAS<i>:MEValuation:MODulation:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:MODulation:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:MODulation:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:MODulation:SDEViation? 
READ:NIOT:MEAS<i>:MEValuation:MODulation:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:MODulation:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:MODulation:SDEViation? 
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
-100 % to 100 % (AVERage: 0 % to 100 %, SDEViation: 0 % to 50 %)
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
-180 deg to 180 deg (AVERage: 0 deg to 180 deg, SDEViation: 0 deg to 90 deg)
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
<12_TXpower>
User equipment power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<13_PeakPower>
User equipment peak power
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<14_SCPower>
Power in allocated subcarriers
Range: 
-100 dBm  to  55 dBm
Default unit: 
dBm
<15_EVM_DMRS>
Error vector magnitude DMRS values
Range: 
0 %  to  100 %
Default unit: 
%
<16_MagErrDMRS>
Magnitude error DMRS values
Range: 
0 %  to  100 %
Default unit: 
%
<17_PhErrorDMRS>
Phase error DMRS values
Range: 
0 deg  to  180 deg
Default unit: 
deg
<18_GainImbal>
Gain imbalance
Range: 
-256 dB  to  256 dB
Default unit: 
dB
<19_QuadError>
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