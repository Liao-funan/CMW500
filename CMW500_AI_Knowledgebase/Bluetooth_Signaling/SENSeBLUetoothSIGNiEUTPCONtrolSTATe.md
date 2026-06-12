# SENSeBLUetoothSIGNiEUTPCONtrolSTATe

Module: Bluetooth Signaling
Source: afc9baf3577d4cf1.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:BLUetooth:SIGN<i>:EUT:PCONtrol:STATe?
SENSe:BLUetooth:SIGN<i>:EUT:PCONtrol:STATe? 
Displays the EUT responses to the enhanced power control state commands for GFSK-modulated BR and π/4 DQPSK and 8DPSK-modulated EDR packets.
Return values: 
<PowChangeGFSK>
NNE |
 
 UP |
 
 DOWN |
 
 MAX
NNE
: none
UP
: power up command accepted
DOWN
: power down command accepted
MAX
: maximum power command accepted
<PowMinMaxGFSK>
NOTS |
 
 CHANged |
 
 MAX |
 
 MIN |
 
 NNM
NOTS
: not supported (command not accepted by the EUT)
CHANged
: changed one step
MAX
: max power reached
MIN
: min power reached
NNM
: no new message
<PowChangeDQPSK>
NNE |
 
 UP |
 
 DOWN |
 
 MAX
<PowMinMaxDQPSK>
NOTS |
 
 CHANged |
 
 MAX |
 
 MIN |
 
 NNM
<PowChangeDPSK>
NNE |
 
 UP |
 
 DOWN |
 
 MAX
<PowMinMaxDPSK>
NOTS |
 
 CHANged |
 
 MAX |
 
 MIN |
 
 NNM
Example: 
See 
"Retrieve EUT Information and Capabilities"
Usage: 
Query only
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"Power Control, Power State"
Top