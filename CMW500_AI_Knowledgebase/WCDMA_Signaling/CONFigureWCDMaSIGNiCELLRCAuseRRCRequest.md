# CONFigureWCDMaSIGNiCELLRCAuseRRCRequest

Module: WCDMA Signaling
Source: d558a7a4d12948f7.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Reject Causes
 > 
CONFigure:WCDMa:SIGN<i>:CELL:RCAuse:RRCRequest
CONFigure:WCDMa:SIGN<i>:CELL:RCAuse:RRCRequest 
<RejectCause>
Enables or disables the rejection of RRC connection requests and selects the rejection cause to be transmitted.
Parameters:
<RejectCause>
CSCongestion |
 
 CSUNspecific |
 
 PSCongestion |
 
 PSUNspecific |
 
 ON |
 
 OFF
CS/PS congestion, CS/PS unspecific reason
*RST:
CSC
Additional parameters: OFF | ON (disables | enables the rejection of requests)
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V3.5.30
Options: 
R&S CMW-KS410
Manual operation: 
See 
"RRC Connection Request"
Top