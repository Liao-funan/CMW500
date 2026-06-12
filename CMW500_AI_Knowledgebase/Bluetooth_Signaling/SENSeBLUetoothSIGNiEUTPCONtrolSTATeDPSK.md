# SENSeBLUetoothSIGNiEUTPCONtrolSTATeDPSK

Module: Bluetooth Signaling
Source: 47e56fe5a8024893.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:BLUetooth:SIGN<i>:EUT:PCONtrol:STATe:DPSK?
SENSe:BLUetooth:SIGN<i>:EUT:PCONtrol:STATe:DPSK? 
SENSe:BLUetooth:SIGN<i>:EUT:PCONtrol:STATe:DQPSk? 
SENSe:BLUetooth:SIGN<i>:EUT:PCONtrol:STATe:GFSK? 
Displays the EUT responses to the enhanced power control state commands for GFSK-modulated BR and π/4 DQPSK or 8DPSK-modulated EDR packets. The modulation is indicated by the last mnemonic.
Return values: 
<PowerChange>
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
<PowerMinMax>
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
Example: 
See 
"Retrieve EUT Information and Capabilities"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Power Control, Power State"
Top