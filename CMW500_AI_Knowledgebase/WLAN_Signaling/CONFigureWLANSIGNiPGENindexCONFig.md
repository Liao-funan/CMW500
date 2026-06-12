# CONFigureWLANSIGNiPGENindexCONFig

Module: WLAN Signaling
Source: 4dbb4bca33fe400a.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Packet Generator
 > 
CONFigure:WLAN:SIGN<i>:PGEN<index>:CONFig
CONFigure:WLAN:SIGN<i>:PGEN<index>:CONFig 
<State>, <Interval>, <PayloadSize>, <PayloadType>[, <TID>]
Configures the packet generator.
Suffix: 
<index>
1..3
Parameters:
<State>
OFF |
 
 ON
Disables/enables the packet generator
*RST:
OFF
<Interval>
Time interval between packet transmissions in units of 1024 μs
Range: 
1 to 10E+3, for SUA: 0 to 10E+3
*RST:
100
<PayloadSize>
Payload size of generated packets in bytes
Range: 
0  to  1472
*RST:
500
<PayloadType>
DEFault |
 
 AZERoes |
 
 AONes |
 
 BP01 |
 
 BP10 |
 
 PRANdom
Bit sequence to be transmitted as payload
DEFault
: an implementation-specific default pattern
AZERoes
: all zeroes
AONes
: all ones
BP01
: bit pattern 010101...
BP10
: bit pattern 101010...
PRANdom
: a pseudo-random bit sequence
*RST:
DEF
<TID>
TID0 |
 
 TID1 |
 
 TID2 |
 
 TID3 |
 
 TID4 |
 
 TID5 |
 
 TID6 |
 
 TID7
TID signaled by the packet generator (only with SUA)
*RST:
TID0
Example: 
See 
"Configuring the Packet Generator"
Firmware/Software: 
V3.0.10, V3.2.40: added AONes, BP01, BP10, PRANdom
V3.7.20: interval extended for SUA, V3.7.30: added 
<index>, <TID>
Manual operation: 
See 
"QoS Data TID"
Top