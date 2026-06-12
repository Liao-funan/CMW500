# CALCulateWLANMEASiMEValuationMODulationSEGMentsCURRent

Module: WLAN Measurements
Source: 35c4edd884264a8f.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, OFDM
 > 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent?
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:SDEViation? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:SEGMents:SDEViation? 
Return the segment-specific single value results for 80+80 MHz SISO measurements. For switched MIMO measurements, the stream/antenna-independent values are returned. There are current, average, minimum, maximum and standard deviation results.
The values described below are returned by 
FETCh
 and 
READ
 commands. 
CALCulate
 commands return limit check results instead, one value for each result listed below.
Return values: 
<1_Reliability>
"Reliability Indicator"
<2_EVMAllCarrS1>
EVM for all carriers, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<3_EVMAllCarrS2>
EVM for all carriers, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<4_EVMDataCarrS1>
EVM for data carriers, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<5_EVMDataCarrS2>
EVM for data carriers, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<6_EVMPilotCarrS1>
EVM for pilot carriers, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<7_EVMPilotCarrS2>
EVM for pilot carriers, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<8_PowerBackoffS1>
Power backoff, segment 1
Minimum distance of signal power to reference level since the start of the measurement
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<9_PowerBackoffS2>
Power backoff, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<10_BurstPowerS1>
RMS power of the measured burst, segment 1
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<11_BurstPowerS2>
RMS power of the measured burst, segment 2
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<12_PeakPowerS1>
Peak power of the measured burst, segment 1
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<13_PeakPowerS2>
Peak power of the measured burst, segment 2
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<14_CrestFactorS1>
Crest factor, segment 1
Range: 
0 dB  to  60 dB
Default unit: 
dB
<15_CrestFactorS2>
Crest factor, segment 2
Range: 
0 dB  to  60 dB
Default unit: 
dB
<16_IQOffsetS1>
I/Q origin offset, segment 1
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<17_IQOffsetS2>
I/Q origin offset, segment 2
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<18_DCPowerS1>
Power of the DC subcarriers, segment 1
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<19_DCPowerS2>
Power of the DC subcarriers, segment 2
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
Usage: 
Query only
Firmware/Software: 
V3.5.121
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top