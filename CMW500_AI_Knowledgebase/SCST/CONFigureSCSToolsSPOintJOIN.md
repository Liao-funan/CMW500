# CONFigureSCSToolsSPOintJOIN

Module: SCST
Source: 84d1086cc4dd4be3.htm

## 原始指令文档说明
SCPI Concurrency Support Tools (SCST)
 > 
Synchronization Point
 > 
Command Reference
 > 
CONFigure:SCSTools:SPOint:JOIN?
CONFigure:SCSTools:SPOint:JOIN? 
<Name>
Joins a synchronization point.
The <Status> is returned immediately. Evaluate it and continue accordingly.
Query parameters: 
<Name>
String with the name of the synchronization point to be joined
Return values: 
<Count>
Number of processes that have joined the synchronization point, including this call of the command
-1 indicates that a synchronization point with the entered name does not exist.
<Status>
DST |
 
 RDY |
 
 NRDY |
 
 RSTM |
 
 TOUT |
 
 TSTM |
 
 NDEF
Status of the synchronization point
DST
Do single task
Continue your script with single task execution. The process is counted as "joined" after it has reported the single task completion via the command 
CONFigure:
​
SCSTools:
​
SPOint:
​
STDone?
.
RDY
Ready. The required number of processes has joined and single task execution is complete (if necessary).
Synchronization is complete. Continue your script.
NRDY
Not ready. More processes are expected to join.
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