# TRIGgerWLANSIGNiRXMACFrameRATE

Module: WLAN Signaling
Source: abc4b81af0a748fb.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Trigger Settings
 > 
TRIGger:WLAN:SIGN<i>:RX:MACFrame:RATE
TRIGger:WLAN:SIGN<i>:RX:MACFrame:RATE 
<TriggerRate>
Defines for which rate of received bursts a trigger pulse is generated for the RX frame trigger signal.
Parameters:
<TriggerRate>
BR12 |
 
 QR12 |
 
 QR34 |
 
 Q1M12 |
 
 Q1M34 |
 
 Q6M23 |
 
 Q6M34 |
 
 BR34 |
 
 MCS0 |
 
 MCS1 |
 
 MCS2 |
 
 MCS3 |
 
 MCS4 |
 
 MCS5 |
 
 MCS6 |
 
 MCS7 |
 
 D1MBit |
 
 D2MBits |
 
 C55Mbits |
 
 C11Mbits |
 
 MCS8 |
 
 MCS9 |
 
 MCS10 |
 
 MCS11 |
 
 MCS12 |
 
 MCS13 |
 
 MCS14 |
 
 MCS15 |
 
 ALL |
 
 ON |
 
 OFF
D1MBit
: DSSS, 1 Mbit/s
D2MBits
: DSSS, 2 Mbit/s
C55Mbits
: CCK, 5.5 Mbit/s
C11Mbits
: CCK, 11 Mbit/s
BR12
: BPSK, 1/2, 6 Mbit/s
BR34
: BPSK, 3/4, 9 Mbit/s
QR12
: QPSK, 1/2, 12 Mbit/s
QR34
: QPSK, 3/4, 18 Mbit/s
Q1M12
: 16-QAM, 1/2, 24 Mbit/s
Q1M34
: 16-QAM, 3/4, 36 Mbit/s
Q6M23
: 64-QAM, 2/3, 48 Mbit/s
Q6M34
: 64-QAM, 3/4, 54 Mbit/s
MCS, MCS1,...,MCS15
: MCS 0 to MCS 15
ALL
: RX frame trigger signal generated for all rates
ON
: RX frame trigger signal switched on
OFF
: RX frame trigger signal switched off
*RST:
ALL
Default unit: 
s
Example: 
See 
"Configuring Trigger Signals"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Trigger Rate"
Top