# CONFigureWCDMaSIGNiCELLHORDerSEND

Module: WCDMA Signaling
Source: d2737675ced6473f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HS-SCCH Order  Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HORDer:SEND
CONFigure:WCDMa:SIGN<i>:CELL:HORDer:SEND
Triggers the HS-SCCH order type 1, according to the preconfiguration of UL/DL and queries the frame number, subframe number and acknowledgment related to the HS-SCCH order execution.
For preconfiguration, refer to 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
CARRier<c>:
​
HORDer:
​
DL
 etc.
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
"Setting Up a Dual Carrier HSPA Connection (Signaling)"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"HS-SCCH Order"
Top