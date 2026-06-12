# CONFigureGSMSIGNiCELLRCAuseCSRequest

Module: GSM Signaling
Source: d8c4f580183348e7.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Reject Causes
 > 
CONFigure:GSM:SIGN<i>:CELL:RCAuse:CSRequest
CONFigure:GSM:SIGN<i>:CELL:RCAuse:CSRequest 
<CauseNumber>
Enables or disables the rejection of CM service requests and selects the rejection cause to be transmitted. The setting is relevant only for the specified service types, see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CELL:
​
RCAuse:
​
CSTYpe
Parameters:
<CauseNumber>
C2 |
 
 C3 |
 
 C6 |
 
 C11 |
 
 C12 |
 
 C13 |
 
 C15 |
 
 C96 |
 
 C99 |
 
 C100 |
 
 C111 |
 
 C4 |
 
 C5 |
 
 C17 |
 
 C20 |
 
 C21 |
 
 C22 |
 
 C23 |
 
 C25 |
 
 C32 |
 
 C33 |
 
 C34 |
 
 C38 |
 
 C48 |
 
 C95 |
 
 C97 |
 
 C98 |
 
 C101
C2
: IMSI unknown in HLR
C3
: Illegal mobile subscriber
C4
: IMSI unknown in VLR
C5
: IMEI not accepted
C6
: Illegal mobile equipment
C11
: PLMN not allowed
C12
: Location area not allowed
C13
: Roaming not allowed in location area
C15
: No suitable cells in location area
C17
: Network failure
C20
: MAC failure
C21
: Synch failure
C22
: Congestion
C23
: GSM authentication unacceptable
C25
: Not authorized for this CSG
C32
: Service option not supported
C33
: Requested service option not subscribed
C34
: Service option temporarily out of order
C38
: Call cannot be identified
C48
: Retry upon entry into a new cell
C95
: Semantically incorrect message
C96
: Invalid mandatory information
C97
: Message type non-existent or not implemented
C98
: Message type not compatible with protocol state
C99
: Information element non-existent or not implemented
C100
: Conditional information element error
C101
: Message not compatible with protocol state
C111
: Protocol error, unspecified
*RST:
C11, OFF
Additional parameters: OFF | ON (disables | enables the rejection of requests)
Example: 
See 
"Configuring Reject Causes"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS210
Manual operation: 
See 
"CM Service Request Reject Cause"
Top