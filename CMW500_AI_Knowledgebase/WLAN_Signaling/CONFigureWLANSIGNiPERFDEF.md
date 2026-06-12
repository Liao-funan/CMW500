# CONFigureWLANSIGNiPERFDEF

Module: WLAN Signaling
Source: e72186a5ed744ea0.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
PER Measurement
 > 
Measurement Settings
 > 
CONFigure:WLAN:SIGN<i>:PER:FDEF
CONFigure:WLAN:SIGN<i>:PER:FDEF 
<Format>, <Bandwidth>, <CodeRate>[, <GuardInterval>, <LTFType>, <PEDuration>, <CTYPe>]
Configures the downlink data frames, especially the coding rate.
Parameters:
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
<Bandwidth>
BW20 |
 
 BW40 |
 
 BW80 |
 
 BW160
Channel bandwidth
The value must not exceed the operating channel bandwidth, see 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
RFSettings:
​
OCWidth
.
*RST:
BW20
<CodeRate>
BR12 |
 
 QR12 |
 
 QR34 |
 
 Q1M12 |
 
 Q1M34 |
 
 Q6M23 |
 
 Q6M34 |
 
 BR34 |
 
 MCS |
 
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
 
 MCS15
See rate list in 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
CONNection:
​
MFDef
*RST:
BR12
<GuardInterval>
LONG |
 
 SHORt |
 
 GI08 |
 
 GI16 |
 
 GI32
SHORt, LONG
: short or long guard interval (up to IEEE 802.11ac)
GI08, GI16, GI32
: 0.8 μs, 1.6 μs, and 3.2 μs guard interval durations (for IEEE 802.11ax)
<LTFType>
X1 |
 
 X2 |
 
 X4
1x LTF, 2x LTF, 4x LTF for 802.11ax
<PEDuration>
PE0 |
 
 PE4 |
 
 PE8 |
 
 PE12 |
 
 PE16 |
 
 AUTO
PEx
: additional receive processing time of x μs signaled in packet extension (PE) field (only for IEEE 802.11ax)
AUTO
: automatic setting based on the reported DUTs capabilities
<CTYPe>
LDPC |
 
 BCC
Coding type (only for IEEE 802.11ax)
Example: 
See 
"Configuring a PER Measurement"
Firmware/Software: 
V3.5.120, V3.7.30: added 
<Format>
 for HE, 
<ChanBW>
 BW160, 
<GuardInterval>
 GI08, GI16, GI32, 
<LTFType>, <PEDuration>, <CTYPe>
Options: 
R&S CMW-KS657 for IEEE 802.11ax
Manual operation: 
See 
"Frame Format"
Top