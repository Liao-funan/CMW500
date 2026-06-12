# FETChWLANMEASiMEValuationMODulationDSSSCURRent

Module: WLAN Measurements
Source: f8e1a54cc09144d9.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Single Values, DSSS
 > 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:MINimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:SDEViation? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:CURRent? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:AVERage? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:MINimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:MAXimum? 
READ:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:SDEViation? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:CURRent? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:AVERage? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:MINimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:MAXimum? 
CALCulate:WLAN:MEAS<i>:MEValuation:MODulation:DSSS:SDEViation? 
Return the current, average, minimum, maximum and standard deviation single value results for DSSS signals.
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
<2_ModType>
DBPSk1 |
 
 DQPSk2 |
 
 CCK5 |
 
 CCK11
DBPSk1
: 1 Mbps DBPSK
DQPSk2
: 2 Mbps DQPSK
CCK5
: 5.5 Mbps CCK
CCK11
: 11 Mbps CCK
<3_PLCPType>
SHORtplcp |
 
 LONGplcp
Short or long PLCP
<4_PayloadLength>
Range: 
1 byte  to  4095 bytes
Default unit: 
byte
<5_BurstPower>
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<6_EVMPeak>
Error vector magnitude peak value
Range: 
0 %  to  100 %
Default unit: 
%
<7_EVMRMS>
Error vector magnitude RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<8_FreqError>
Center frequency error
Range: 
-150E+6 Hz  to  150E+6 Hz
Default unit: 
Hz
<9_ClockError>
Chip clock error
Range: 
-125 ppm  to  125 ppm
Default unit: 
ppm
<10_IQOffset>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<11_GainImbal>
Gain imbalance
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<12_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<13_OutOfTol>
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
<14_BurstRate>
If a modulation filter is used (see 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
ISIGnal:
​
MODFilter
), the burst rate indicates the share of bursts of the selected modulation type in the bursts received. Otherwise, it returns 
1
.
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1, V3.5.10 burst rate, V3.5.121 MINimum commands
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top