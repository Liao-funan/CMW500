# CONFigureGSMSIGNiCELLRCAuseATTach

Module: GSM Signaling
Source: 0c62e22c3df34cec.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Reject Causes
 > 
CONFigure:GSM:SIGN<i>:CELL:RCAuse:ATTach
CONFigure:GSM:SIGN<i>:CELL:RCAuse:ATTach 
<CauseNumber>
Enables or disables the rejection of attach requests and selects the rejection cause to be transmitted.
Parameters:
<CauseNumber>
C2 |
 
 C3 |
 
 C4 |
 
 C5 |
 
 C6 |
 
 C11 |
 
 C12 |
 
 C13 |
 
 C15 |
 
 C17 |
 
 C20 |
 
 C21 |
 
 C22 |
 
 C23 |
 
 C32 |
 
 C33 |
 
 C34 |
 
 C38 |
 
 C95 |
 
 C96 |
 
 C97 |
 
 C98 |
 
 C99 |
 
 C100 |
 
 C101 |
 
 C111 |
 
 C7 |
 
 C8 |
 
 C9 |
 
 C14 |
 
 C16 |
 
 C10 |
 
 C25 |
 
 C28 |
 
 C40 |
 
 C48 |
 
 ON |
 
 OFF
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
C7
: GPRS services not allowed
C8
: GPRS services and non-GPRS services not allowed
C9
: MS identity cannot be derived by the network
C10
: Implicitly detached
C11
: PLMN not allowed
C12
: Location area not allowed
C13
: Roaming not allowed in location area
C14
: GPRS services not allowed in this PLMN
C15
: No suitable cells in location area
C16
: MSC temporarily not reachable
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
C28
: SMS provided via GPRS in this routing area
C32
: Service option unsupported
C33
: Service option not subscribed
C34
: Service option temporarily out of order
C38
: Call not identified
C40
: No PDP context activated
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
Additional parameters OFF (ON) disables (enables) the rejection of requests.
Example: 
See 
"Configuring Reject Causes"
Firmware/Software: 
V3.2.70
Options: 
R&S CMW-KS210
Manual operation: 
See 
"Gmm Attach Reject Cause"
Top