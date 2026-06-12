# CONFigureSCSToolsSPOintWAIT

Module: SCST
Source: 1dfe06a6ec2542dd.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Synchronization Point
 > 
Command Reference
 > 
CONFigure:SCSTools:SPOint:WAIT?
CONFigure:SCSTools:SPOint:WAIT? 
<Name>
Waits for the synchronization to complete.
The maximum waiting time is defined as polling interval via the command 
CONFigure:
​
SCSTools:
​
SPOint:
​
DEFine
.
The <Status> is returned when the synchronization is complete (RDY) or if a polling timeout occurs (PTO) or if an error occurs (other states). Evaluate it and continue accordingly.
Query parameters: 
<Name>
String with the name of the synchronization point to be waited for
Return values: 
<Count>
Number of processes that have joined the synchronization point
-1 indicates that a synchronization point with the entered name does not exist.
<Status>
RDY |
 
 PTO |
 
 RSTM |
 
 TOUT |
 
 TSTM |
 
 NDEF
Status of the synchronization point
RDY
Ready. The required number of processes has joined and single task execution is complete (if necessary).
Synchronization is complete. Continue your script.
PTO
Polling timeout. The waiting time is over and synchronization is not yet complete.
Continue with a wait command.
RSTM
The required number of processes has joined but single task execution is pending.
Indicates an error. There are more processes than expected.
TOUT
Timeout. The expected number of processes has not joined in time. No single task execution has been ordered.
TSTM
Timeout. An ordered single task execution has not completed in time.
NDEF
There is no synchronization point with the entered <Name>.
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top