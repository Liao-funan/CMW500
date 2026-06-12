# FETChNIOTSIGNiBLERABSolute

Module: NBIoT Signaling
Source: f77698dfbc1c430f.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Results
 > 
FETCh:NIOT:SIGN<i>:BLER:ABSolute?
FETCh:NIOT:SIGN<i>:BLER:ABSolute? 
Returns the absolute results of the BLER measurement.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ACK>
Number of received acknowledgments
<NACK>
Number of received negative acknowledgments
<Samples>
Number of already processed DL transmissions
<Throughput>
Two comma-separated values: average throughput and maximum reachable throughput
Default unit: 
bit/s
<DTX>
Number of sent scheduled subframes for which no ACK and no NACK has been received
Example: 
See 
"Configuring a BLER Measurement"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Top