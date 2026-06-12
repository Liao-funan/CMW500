# CONFigureLTESIGNiCELLRCAuseATTach

Module: LTE Signaling
Source: 7c334b05aef444e2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Network Settings
 > 
NAS Signaling Settings
 > 
CONFigure:LTE:SIGN<i>:CELL:RCAuse:ATTach
CONFigure:LTE:SIGN<i>:CELL:RCAuse:ATTach 
<Cause>
CONFigure:LTE:SIGN<i>:CELL:RCAuse:TAU 
<Cause>
Enables or disables the rejection of attach requests and tracking area update requests and selects the rejection cause to be transmitted.
Parameters:
<Cause>
IUE3 |
 
 EPS7 |
 
 PLMN11 |
 
 TANA12 |
 
 C13 |
 
 C17 |
 
 CONG22 |
 
 C2 |
 
 C5 |
 
 C6 |
 
 C8 |
 
 C9 |
 
 C10 |
 
 C14 |
 
 C15 |
 
 C16 |
 
 C18 |
 
 C19 |
 
 C20 |
 
 C21 |
 
 C23 |
 
 C24 |
 
 C25 |
 
 C26 |
 
 C35 |
 
 C39 |
 
 C40 |
 
 C42 |
 
 C95 |
 
 C96 |
 
 C97 |
 
 C98 |
 
 C99 |
 
 C100 |
 
 C101 |
 
 C111 |
 
 ON |
 
 OFF
See table for explanation of values
*RST:
OFF
Example: 
See 
"Configuring Other Network Settings"
Firmware/Software: 
V3.0.20
V3.2.70: added C13, V3.5.40: added C17
V3.5.50: added C2, C5, C6, C8 to C10, C14 to C16, C18 to C21, C23 to C26, C35, C39, C40, C42, C95 to C101, C111
Options: 
R&S CMW-KS510
Manual operation: 
See 
"TAU Reject Cause"
<Cause>
Number
Meaning
C2
2
IMSI unknown in HSS
IUE3
3
Illegal UE
C5
5
IMEI not accepted
C6
6
Illegal mobile equipment
EPS7
7
EPS services not allowed
C8
8
EPS and non-EPS services not allowed
C9
9
UE identity cannot be derived by the network
C10
10
Implicitly detached
PLMN11
11
PLMN not allowed
TANA12
12
Tracking area not allowed
C13
13
Roaming not allowed in this tracking area
C14
14
EPS services not allowed in this PLMN
C15
15
No suitable cells in tracking area
C16
16
MSC temporarily not reachable
C17
17
Network failure
C18
18
CS domain not available
C19
19
ESM failure
C20
20
MAC failure
C21
21
Synch failure
CONG22
22
Congestion
C23
23
UE security capabilities mismatch
C24
24
Security mode rejected, unspecified
C25
25
Not authorized for this CSG
C26
26
Non-EPS authentication unacceptable
C35
35
Requested service option not authorized in this PLMN
C39
39
CS service temporarily not available
C40
40
No EPS bearer context activated
C42
42
Severe network failure
C95
95
Semantically incorrect message
C96
96
Invalid mandatory information
C97
97
Message type non-existent or not implemented
C98
98
Message type not compatible with protocol state
C99
99
Information element non-existent or not implemented
C100
100
Conditional information element error
C101
101
Message not compatible with protocol state
C111
111
Protocol error, unspecified
ON
-
Enables the rejection with previously selected cause
OFF
-
Disables the rejection
Top