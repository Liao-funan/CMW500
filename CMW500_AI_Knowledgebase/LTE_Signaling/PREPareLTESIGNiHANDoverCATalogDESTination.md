# PREPareLTESIGNiHANDoverCATalogDESTination

Module: LTE Signaling
Source: 08f6fc933ffd4238.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Handover Preparation
 > 
PREPare:LTE:SIGN<i>:HANDover:CATalog:DESTination?
PREPare:LTE:SIGN<i>:HANDover:CATalog:DESTination? 
Lists all handover destinations that can be selected using 
PREPare:
​
LTE:
​
SIGN<i>:
​
HANDover:
​
DESTination
.
Return values: 
<Destination>
Comma-separated list of all supported destinations. Each destination is represented as a string.
"No Connection" means handover to another instrument.
The "...Sig..." strings refer to signaling applications at the same instrument.
Example: 
See 
"Performing an Inter-RAT Handover"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Target"
Top