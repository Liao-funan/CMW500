# CONFigureWLANSIGNiCONNectionMFDef

Module: WLAN Signaling
Source: 3eab1a31d5ae4b31.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Management and Data Frame Control Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:MFDef
CONFigure:WLAN:SIGN<i>:CONNection:MFDef 
<State>, <Format>, <Rate>
Enables and configures the user-defined frame rate control for management frames.
Parameters:
<State>
DISable |
 
 ENABle
Disables/enables the user-defined frame rate control
*RST:
DIS
<Format>
NHT |
 
 HTM |
 
 HTG |
 
 VHT |
 
 HES |
 
 HEM |
 
 HEES
Selects the frame format
NHT
: non-high throughput format (non-HT)
HTM
: HT mixed format (HT MF)
HTG
: HT greenfield format (HT GF)
VHT
: very high throughput format
HES
: high efficiency single-user format (HE SU)
HEM
: high efficiency multi-user format (HE MU)
HEES
: high efficiency extended range single-user format (HE ER SU)
<Rate>
D1MBit |
 
 D2MBits |
 
 C55Mbits |
 
 C11Mbits |
 
 BR12 |
 
 BR34 |
 
 QR12 |
 
 QR34 |
 
 Q1M12 |
 
 Q1M34 |
 
 Q6M23 |
 
 Q6M34 |
 
 MCS |
 
 MCS1 |
 
 MCS2 |
 
 MCS3 |
 
 MCS4 |
 
 MCS5 |
 
 MCS6 |
 
 MCS7 |
 
 MCS8 |
 
 MCS9 |
 
 MCS10 |
 
 MCS11 |
 
 MCS12 |
 
 MCS13 |
 
 MCS14 |
 
 MCS15
Sets the rate
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
*RST:
BR12
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.5.120, V3.7.30: added HE
Manual operation: 
See 
"Configuration"
Top