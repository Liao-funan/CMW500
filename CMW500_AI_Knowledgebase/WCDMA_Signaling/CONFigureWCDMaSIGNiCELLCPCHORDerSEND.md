# CONFigureWCDMaSIGNiCELLCPCHORDerSEND

Module: WCDMA Signaling
Source: c4fa04dd3ae84965.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
HS-SCCH Less Operation  Configuration
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:HORDer:SEND
CONFigure:WCDMa:SIGN<i>:CELL:CPC:HORDer:SEND
Tells the UE to enable/disable discontinuous downlink reception and/or discontinuous uplink DPCCH transmission and queries the frame number, subframe number and acknowledgment related to the HS-SCCH order type 0 execution. See also 
"Continuous Packet Connectivity (CPC)"
.
Return values: 
<FrameNumber>
Information about frame from which the UE has applied the HS-SCCH order
<SFN>
Information about subframe from which the UE has applied the HS-SCCH order
<ACK>
ACK |
 
 NACK |
 
 DTX
ACK
: positive acknowledgment
NACK
: negative acknowledgment
DTX
: no acknowledgment
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
V3.2.60: added <ACK>
Options: 
R&S CMW-KS413
Manual operation: 
See 
"HS-SCCH Order"
Top