# CALLBLUetoothSIGNiCONNectionACTion

Module: Bluetooth Signaling
Source: 3bd8280619694597.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
CALL:BLUetooth:SIGN<i>:CONNection:ACTion
CALL:BLUetooth:SIGN<i>:CONNection:ACTion 
<Action>
Requests the R&S
 
CMW to perform certain signaling actions for BR/EDR. It has no query form: the current signaling state can be retrieved using the 
FETCh:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
STATe?
 command.
Setting parameters: 
<Action>
INQuire |
 
 SINQuiry |
 
 SCONnecting |
 
 STMode |
 
 CONNect |
 
 TMConnect |
 
 DETach |
 
 REController |
 
 EMConnect |
 
 EXEMode |
 
 ENEMode |
 
 HFPConnect |
 
 EXHFp |
 
 ENHFp |
 
 AGConnect |
 
 ENAGate |
 
 EXAGate |
 
 ADConnect
INQuire
: Switch on master signal and start inquiry for Bluetooth devices within range
Inquiry stops after a configurable maximum duration (see 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
INQuiry:
​
ILENgth
) or after a configurable number of responses (see 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
INQuiry:
​
NOResponses
)
SINQuiry
: Stop inquiry, switch off master signal and return to standby state
SCONnecting
: Stop an ongoing connection setup, switch off the master signal and return to standby state
STMode
: Stop a test mode connection, switch off the master signal and return to standby state
CONNect
: Switch on master signal, start paging the selected Bluetooth device and establish an ACL connection
TMConnect
: Switch on master signal, start paging the selected Bluetooth device and establish a test mode connection
DETach
: Detach an established connection, switch off the master signal and return to standby state
REController
: Run EUT controller to reset and initialize the EUT via USB connection
EMConnect
: Connect audio echo mode
EXEMode
: Exit audio echo mode
ENEMode
: Enter audio echo mode
HFPConnect
: Connect hands-free profile
EXHFp
: Exit hands-free profile
ENHFp
: Enter hands-free profile
AGConnect
: Connect hands-free audio gateway profile
ENAGate
: Enter hands-free audio gateway profile
EXAGate
: Exit hands-free audio gateway profile
ADConnect
: Connect A2DP
Example: 
See 
"Inquire or Manually Specify EUT"
Usage: 
Event
Firmware/Software: 
V3.0.12
V3.2.30: added actions for test mode (STM, TMC)
V3.5.30: added REC
V3.5.40: added actions for audio echo mode and audio profiles (EMC, EXEM, ENEM, HFPC, EXHF, ENHF, AGC, ENAG, EXAG)
V3.5.70: added ADConnect
Options: 
R&S CMW-KS610 required for test mode
R&S CMW-KS602 required for audio profiles
R&S CMW-KS603 required for A2DP
Manual operation: 
See 
"Connect (hotkey)"
Top