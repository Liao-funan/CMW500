# FETChBLUetoothSIGNiCONNectionSTATe

Module: Bluetooth Signaling
Source: e860c3abead34dd8.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
FETCh:BLUetooth:SIGN<i>:CONNection:STATe?
FETCh:BLUetooth:SIGN<i>:CONNection:STATe? 
Returns the signaling state of the R&S
 
CMW for BR/EDR. State changes are initiated using the 
CALL:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
ACTion
 command.
Return values: 
<State>
OFF |
 
 SBY |
 
 INQuiring |
 
 SINQuiry |
 
 CNNecting |
 
 SCONnecting |
 
 CONNected |
 
 DETaching |
 
 TCNNecting |
 
 TCONected |
 
 ECRunning |
 
 ECNNecting |
 
 ECONected |
 
 EXEMode |
 
 ENEMode |
 
 HFCNnecting |
 
 HFConnected |
 
 EXHFp |
 
 ENHFp |
 
 AGCNnecting |
 
 AGConnected |
 
 EXAGmode |
 
 ENAGmode |
 
 ENHSmode |
 
 EXHSmode |
 
 CNASmode |
 
 CHASmode |
 
 DHASmode |
 
 EHASmode |
 
 XHASmode |
 
 SMIDle |
 
 SMCNnecting |
 
 SMConnected |
 
 SMDetaching |
 
 HSCNnecting |
 
 HSConnected |
 
 HSDetaching |
 
 A2CNnecting |
 
 A2Connected |
 
 A2Detaching |
 
 A2SNnecting |
 
 A2SCnnected |
 
 A2SDetaching
OFF
: not connected
SBY
: standby
INQuiring
: inquiring
SINQuiry
: stopping inquiry
CNNecting
: connecting
SCONnecting
: stop connecting
CONNected
: connected
DETaching
: detaching
TCNNecting
: test mode - connecting
TCONnected
: test mode - connected
ECRunning
: EUT controller running
ECNNecting
: audio echo mode - connecting
ECONected
: audio echo mode - connected
EXEMode
: audio echo mode - exiting
ENEMode
: audio echo mode - entering
HFCNnecting
: hands-free profile - connecting
HFConnected
: hands-free profile - connected
EXHFp
: hands-free profile - exiting
ENHFp
: hands-free profile - entering
AGCNnecting
: hands-free audio gateway profile - connecting
AGConnected
: hands-free audio gateway profile - connected
EXAGmode
: hands-free audio gateway profile - exiting
ENAGmode
: hands-free audio gateway profile - entering
CNASmode
: hands-free audio gateway (slave mode) - connecting
CHASmode
: hands-free audio gateway (slave mode) - connected
DHASmode
: hands-free audio gateway (slave mode) - detaching
EHASmode
: hands-free audio gateway (slave mode) - entering
XHASmode
: hands-free audio gateway (slave mode) - exiting
SMIDle
: slave mode - idle
SMCNnecting
: slave mode - connecting
SMConnected
: slave mode - connected
SMDetaching
: slave mode - detaching
HSCNnecting
: hands-free profile (slave mode) - connecting
HSConnected
: hands-free profile (slave mode) - connected
ENHSmode
: hands-free profile (slave mode) - entering
EXHSmode
: hands-free profile (slave mode) - exiting
HSDetaching
: hands-free profile (slave mode) - detaching
A2CNnecting
: A2DP - connecting
A2Connected
: A2DP - connected
A2Detaching
: A2DP - detaching
A2SNnecting
: A2DP (slave mode) - connecting
A2SCnnected
: A2DP (slave mode) - connected
A2SDetaching
: A2DP (slave mode) - detaching
For a detailed description of the available states and state transitions, see 
"Signaling States"
.
Example: 
See 
"Signaling Application"
Usage: 
Query only
Firmware/Software: 
V3.0.12
V3.2.30: added test mode states (TCNN, TCON)
V3.5.30: added ECR
V3.5.40: added states for audio echo mode and audio profiles (ECNN, ECON, EXEM, ENEM, HFCN, HFC, EXHF, ENHF, AGCN, AGC, EXAG, ENAG)
V3.5.50: added states for slave mode (ENHS, EXHS, CNAS, CHAS, DHAS, EHAS, XHAS, SMIDl, SMCN, SMC, SMD, HSCN, HSC, HSD)
V3.5.70: added states for A2DP (A2CN, A2C, A2D, A2SN, A2SC, A2SD)
Options: 
R&S CMW-KS610 required for test mode
R&S CMW-KS602 required for audio profiles
R&S CMW-KS603 required for A2DP
Manual operation: 
See 
"Signaling (BR/EDR)"
Top