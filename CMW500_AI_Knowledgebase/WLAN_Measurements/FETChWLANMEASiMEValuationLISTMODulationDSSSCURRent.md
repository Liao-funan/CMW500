# FETChWLANMEASiMEValuationLISTMODulationDSSSCURRent

Module: WLAN Measurements
Source: b4e100d49ba54721.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments)
 > 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:MODulation:DSSS:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:LIST:MODulation:DSSS:CURRent? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:MODulation:DSSS:AVERage? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:MODulation:DSSS:MAXimum? 
FETCh:WLAN:MEAS<i>:MEValuation:LIST:MODulation:DSSS:SDEViation? 
Return the modulation results for DSSS signals in list mode.
The values listed below in curly brackets {} are returned for each active segment: {...}
seg 1
, {...}
seg 2
, ..., {...}
seg n
. The number of active segments n is determined by 
CONFigure:
​
WLAN:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
COUNt
.
Return values: 
<1_Reliability>
"Reliability Indicator"
In list mode, a zero reliability indicator indicates that the results in all measured segments are valid. A non-zero value indicates that an error occurred in at least one of the measured segments.
{<2_SegReliability>
Reliability indicator for the segment. The meaning of the returned values is the same as for the common reliability indicator, see previous parameter.
<3_StatExpired>
Reached statistical length in bursts
Range: 
0  to  1000
<4_ModType>
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
<5_PLCPType>
SHORtplcp |
 
 LONGplcp
Short or long PLCP
<6_PayloadLength>
Range: 
1 byte  to  4095 bytes
Default unit: 
byte
<7_BurstPower>
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
<8_EVMPeak> <9_EVMRMS>
Error vector magnitude peak and RMS value
Range: 
0 %  to  100 %
Default unit: 
%
<10_FreqError>
Center frequency error
Range: 
-150E+6 Hz  to  150E+6 Hz
Default unit: 
Hz
<11_ClockError>
Chip clock error
Range: 
-125 ppm  to  125 ppm
Default unit: 
ppm
<12_IQOffset>
Range: 
-100 dB  to  0 dB
Default unit: 
dB
<13_GainImbal>
Range: 
-100 dB  to  100 dB
Default unit: 
dB
<14_QuadError>
Quadrature error
Range: 
-180 deg  to  180 deg
Default unit: 
deg
<15_OutOfTol>}
Out of tolerance result
Range: 
0 %  to  100 %
Default unit: 
%
Usage: 
Query only
Firmware/Software: 
V1.0.10.50
Options: 
R&S CMW-KM012
Top