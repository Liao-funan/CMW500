# FETChWCDMaMEASiMEValuationCARRiercRCDerrorOCINfo

Module: WCDMA Measurements
Source: b6c61e8875f74751.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
RCDE vs. Slot Results (Single Values)
 > 
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:OCINfo?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:OCINfo? 
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:RCDerror:OCINfo? 
Returns the overall channel information for the RCDE measurement. This information is determined from all measured slots.
The parameters <State>, <SpreadFactor> and <Modulation> are returned for the individual channels:
Values 2 to 4: DPCCH
Values 5 to 7: DPDCH
Values 8 to 10: HSDPCCH
Values 11 to 13: EDPCCH
Values 14 to 16: EDPDCH1
Values 17 to 19: EDPDCH2
Values 20 to 22: EDPDCH3
Values 23 to 25: EDPDCH4
Suffix: 
<c>
1..2
Selects the carrier to be queried - only relevant for dual carrier HSUPA
Return values: 
<Reliability>
"Reliability Indicator"
<State>
OFF |
 
 VAR |
 
 ON
State of the channel
OFF
: Channel off since start of measurement
VAR
: Channel has been on and off
ON
: Channel on since start of measurement
<SpreadFactor>
V2 |
 
 2 |
 
 V4 |
 
 4 |
 
 V8 |
 
 8 |
 
 V16 |
 
 16 |
 
 V32 |
 
 32 |
 
 V64 |
 
 64 |
 
 V128 |
 
 128 |
 
 V256 |
 
 256
Spreading factor of the channel
2 | 4 | 8 | 16 | 32 | 64 | 128 | 256
: constant spreading factor
V2 | V4 | V8 | V16 | V32 | V64 | V128 | V256
: varying spreading factor, indicates smallest occurred value
<Modulation>
BPSK |
 
 4PAM |
 
 4PVar
Modulation type of the channel
BPSK
: Constantly BPSK modulated
4PAM
: Constantly 4PAM modulated
4PVar
: BPSK and 4PAM occurred
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
V3.2.60: command renamed (
CARRier<c>
 added).
Options: 
R&S CMW-KM405 for dual carrier HSUPA
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top