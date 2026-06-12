# CALCulateWLANMEASiMEValuationMODulationMIMOnSEGMentsCURRent

Module: WLAN Measurements
Source: b8798ce7def84f37.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, OFDM
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:SDEViation? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:MIMO<n>:SEGMents:SDEViation? 
Return the segment-specific single value results for switched MIMO measurements, antenna/stream number <n>. There are current, average, minimum, maximum and standard deviation results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Suffix: 
<n>
1..8
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_EVMAllCarrS1>
EVM for all carriers, stream <n>, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<3_EVMAllCarrS2>
EVM for all carriers, stream <n>, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<4_EVMDataCarrS1>
EVM for data carriers, stream <n>, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<5_EVMDataCarrS2>
EVM for data carriers, stream <n>, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<6_EVMPilotCarrS1>
EVM for pilot carriers, stream <n>, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<7_EVMPilotCarrS2>
EVM for pilot carriers, stream <n>, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<8_PowerBackoffS1>
Power backoff, antenna <n>, segment 1
Minimum distance of signal power to reference level since the start of the measurement
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<9_PowerBackoffS2>
Power backoff, antenna <n>, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<10_BurstPowerS1>
Burst power, antenna <n>, segment 1
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<11_BurstPowerS2>
Burst power, antenna <n>, segment 2
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<12_PeakPowerS1>
Peak power, antenna <n>, segment 1
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<13_PeakPowerS2>
Peak power, antenna <n>, segment 2
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<14_CrestFactorS1>
Crest factor, antenna <n>, segment 1
Range: 
0 dB  to  60 dB
Default unit: 
dB
<15_CrestFactorS2>
Crest factor, antenna <n>, segment 2
Range: 
0 dB  to  60 dB
Default unit: 
dB
<16_IQOffsetS1>
I/Q offset, antenna <n>, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<17_IQOffsetS2>
I/Q offset, antenna <n>, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<18_DCPowerS1>
Power of the DC subcarriers, antenna <n>, segment 1
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<19_DCPowerS2>
Power of the DC subcarriers, antenna <n>, segment 2
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)"
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top