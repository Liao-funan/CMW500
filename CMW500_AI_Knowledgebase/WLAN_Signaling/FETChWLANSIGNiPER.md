# FETChWLANSIGNiPER

Module: WLAN Signaling
Source: fc26c17732d04d46.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
PER Measurement
 > 
Measurement Results
 > 
FETCh:WLAN:SIGN<i>:PER?
FETCh:WLAN:SIGN<i>:PER? 
READ:WLAN:SIGN<i>:PER? 
Returns all results of the PER measurement.
Return values: 
<Reliability>
"Reliability Indicator"
<PER>
Range: 
0 % to 100 %
Default unit: 
%
<CurrentNoPackets>
Number of MAC data packets that were sent since the start of the measurement.
Range: 0 to total number of packets (see 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
PER:
​
PACKets
)
<PacketsLost>
Number of packets lost (unacknowledged) since the start of the measurement. No retransmission.
<RXBurstPower>
Average received burst power of uplink ACK frames
Default unit: 
dBm
Example: 
See 
"Running a PER Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.30
V3.0.10 RX burst power parameter
Manual operation: 
See 
"Results"
Top